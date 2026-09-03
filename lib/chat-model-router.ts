import type { ChatSessionContext } from "@/components/chat/types";
import type { HaramainAIModel } from "@/lib/ai-cost";

function configuredModel(name: "OPENAI_SIMPLE_MODEL" | "OPENAI_SMART_MODEL", fallback: HaramainAIModel): HaramainAIModel {
  const value = process.env[name];
  return value === "gpt-4.1-nano" || value === "gpt-4.1-mini" ? value : fallback;
}

export function selectChatModel(message: string, session: ChatSessionContext): HaramainAIModel {
  const nano = configuredModel("OPENAI_SIMPLE_MODEL", "gpt-4.1-nano");
  const mini = configuredModel("OPENAI_SMART_MODEL", "gpt-4.1-mini");
  if (session.assessmentStep === "ready") return mini;
  if (message.length > 180 || (message.match(/\?/g)?.length ?? 0) > 1) return mini;
  if (/recommend|which course|suitable|compare|difference|my (?:child|son|daughter|situation)|struggl|not sure|confus|custom|special/i.test(message)) return mini;
  if (/^(?:what|where|how|do|does|can|is|are)\b.{0,110}$/i.test(message.trim())) return nano;
  return mini;
}

export function maxOutputTokens(model: HaramainAIModel) { return model === "gpt-4.1-nano" ? 160 : 200; }
