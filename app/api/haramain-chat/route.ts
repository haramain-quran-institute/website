import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import type { AssistantResponse, ChatSessionContext, CourseRecommendation } from "@/components/chat/types";
import { buildCompactSessionSummary, courseRoutes, HARAMAIN_STATIC_INSTRUCTIONS, retrieveHaramainKnowledge } from "@/data/haramain-chat-knowledge";
import { logAIUsage, type HaramainAIModel, type OpenAIUsage } from "@/lib/ai-cost";
import { selectChatModel, maxOutputTokens } from "@/lib/chat-model-router";
import { checkChatRateLimit } from "@/lib/chat-rate-limit";
import { getLocalResponse, prepareSessionForAI } from "@/lib/haramain-local-responses";

interface IncomingMessage { role: "user" | "assistant"; content: string }
interface RequestBody { messages?: IncomingMessage[]; session?: ChatSessionContext; sessionId?: string; requestId?: string }
interface OpenAIResponse { output_text?: string; output?: Array<{ content?: Array<{ text?: string }> }>; usage?: OpenAIUsage }
const dedupeCache = new Map<string, { expiresAt: number; data: AssistantResponse }>();

function outputText(payload: OpenAIResponse) { return payload.output_text ?? payload.output?.flatMap((item) => item.content ?? []).map((item) => item.text ?? "").join("") ?? ""; }
function safeSession(value: ChatSessionContext | undefined): ChatSessionContext { return value && typeof value === "object" ? Object.fromEntries(Object.entries(value).filter(([, item]) => typeof item === "string").map(([key, item]) => [key, item.slice(0, 500)])) as ChatSessionContext : {}; }
function mergeCollected(session: ChatSessionContext, collected: Record<string, string>) { const allowed = new Set(["studentAge", "studentType", "quranLevel", "learningGoal", "teacherPreference", "country", "timezone", "preferredTiming", "recommendedCourse"]); return Object.fromEntries([...Object.entries(session), ...Object.entries(collected).filter(([key, value]) => allowed.has(key) && typeof value === "string").map(([key, value]) => [key, value.slice(0, 120)])]) as ChatSessionContext; }
function parse(text: string, session: ChatSessionContext): AssistantResponse {
  const parsed = JSON.parse(text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")) as Partial<AssistantResponse>;
  const recommendation = parsed.recommendation as CourseRecommendation | null | undefined;
  const collected = parsed.collected && typeof parsed.collected === "object" ? Object.fromEntries(Object.entries(parsed.collected).filter((entry): entry is [string, string] => typeof entry[1] === "string")) : {};
  const nextSession = mergeCollected(session, collected); if (recommendation?.title) nextSession.recommendedCourse = recommendation.title; nextSession.summary = buildCompactSessionSummary(nextSession);
  return { message: typeof parsed.message === "string" && parsed.message.trim() ? parsed.message.trim() : "I'd prefer to connect you with our team so you receive the correct information.", recommendation: recommendation && courseRoutes.has(recommendation.url) ? recommendation : null, handoff: Boolean(parsed.handoff), collected, session: nextSession, source: "ai" };
}
function identities(request: Request, sessionId: string) { const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local"; const hash = (value: string) => createHash("sha256").update(value).digest("hex").slice(0, 24); return { ipKey: hash(ip), sessionKey: hash(`${ip}:${sessionId.slice(0, 80)}`) }; }
function quotaError(status: number, code?: string) { if (status === 429 && ["insufficient_quota", "credit_balance_exhausted"].includes(code ?? "")) return "Error 90001 - Please talk to our team for now."; if (status === 401) return "The Haramain AI Assistant API key could not be verified. Please talk to our team for now."; return null; }

async function requestOpenAI(apiKey: string, model: HaramainAIModel, input: Array<{ role: string; content: string }>) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const response = await fetch("https://api.openai.com/v1/responses", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ model, instructions: HARAMAIN_STATIC_INSTRUCTIONS, input, max_output_tokens: maxOutputTokens(model), prompt_cache_key: `haramain-chat-${model}`, store: false }), signal: AbortSignal.timeout(18_000) });
    if (response.ok) return { response, error: null };
    const upstream = await response.json().catch(() => null) as { error?: { code?: string } } | null;
    const specificError = quotaError(response.status, upstream?.error?.code); if (specificError) return { response: null, error: specificError };
    if (attempt === 0 && [502, 503, 504].includes(response.status)) continue;
    return { response: null, error: "The assistant could not reply right now. Please talk to our team for now." };
  }
  return { response: null, error: "The assistant could not reply right now. Please talk to our team for now." };
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 25_000) return NextResponse.json({ error: "Please send a shorter message." }, { status: 413 });
  let body: RequestBody; try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const sessionId = typeof body.sessionId === "string" ? body.sessionId : "anonymous"; const requestId = typeof body.requestId === "string" ? body.requestId.slice(0, 100) : ""; const { ipKey, sessionKey } = identities(request, sessionId);
  const endpointLimit = checkChatRateLimit(`all-session:${sessionKey}`, 30, 5 * 60_000); const ipLimit = checkChatRateLimit(`all-ip:${ipKey}`, 60, 5 * 60_000); if (!endpointLimit.allowed || !ipLimit.allowed) { const retry = Math.max(endpointLimit.retryAfterSeconds, ipLimit.retryAfterSeconds); return NextResponse.json({ error: "You’re sending messages quickly. Please wait a moment and try again." }, { status: 429, headers: { "Retry-After": String(retry) } }); }
  const cached = requestId ? dedupeCache.get(`${sessionKey}:${requestId}`) : undefined; if (cached && cached.expiresAt > Date.now()) return NextResponse.json(cached.data);
  const messages = Array.isArray(body.messages) ? body.messages.filter((message) => (message.role === "user" || message.role === "assistant") && typeof message.content === "string" && message.content.trim()).slice(-8).map((message) => ({ role: message.role, content: message.content.trim().slice(0, 800) })) : [];
  const latest = [...messages].reverse().find((message) => message.role === "user")?.content ?? ""; if (!latest) return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  const initialSession = safeSession(body.session); const session = prepareSessionForAI(latest, initialSession); const local = getLocalResponse(latest, session);
  if (local) { if (requestId) dedupeCache.set(`${sessionKey}:${requestId}`, { expiresAt: Date.now() + 120_000, data: local }); return NextResponse.json(local); }
  const aiLimit = checkChatRateLimit(`ai-session:${sessionKey}`, 10, 5 * 60_000); const aiIpLimit = checkChatRateLimit(`ai-ip:${ipKey}`, 20, 5 * 60_000); if (!aiLimit.allowed || !aiIpLimit.allowed) { const retry = Math.max(aiLimit.retryAfterSeconds, aiIpLimit.retryAfterSeconds); return NextResponse.json({ error: "You’ve reached the short chat limit. Please wait a few minutes or talk to our team." }, { status: 429, headers: { "Retry-After": String(retry) } }); }
  const apiKey = process.env.OPENAI_API_KEY; if (!apiKey) return NextResponse.json({ error: "The Haramain AI Assistant is not configured yet. Please talk to our team for now." }, { status: 503 });
  const model = selectChatModel(latest, session); const dynamicContext = `SESSION: ${session.summary || buildCompactSessionSummary(session)}\nRELEVANT KNOWLEDGE:\n${retrieveHaramainKnowledge(latest, session)}`;
  const input = [{ role: "developer", content: dynamicContext }, ...messages];
  try {
    const result = await requestOpenAI(apiKey, model, input); if (!result.response) return NextResponse.json({ error: result.error }, { status: 503 });
    const payload = await result.response.json() as OpenAIResponse; logAIUsage(model, payload.usage); const data = parse(outputText(payload), session);
    if (requestId) dedupeCache.set(`${sessionKey}:${requestId}`, { expiresAt: Date.now() + 120_000, data });
    if (dedupeCache.size > 1000) for (const [cacheKey, value] of dedupeCache) if (value.expiresAt <= Date.now()) dedupeCache.delete(cacheKey);
    return NextResponse.json(data);
  } catch { return NextResponse.json({ error: "The assistant could not reply right now. Please talk to our team for now." }, { status: 502 }); }
}
