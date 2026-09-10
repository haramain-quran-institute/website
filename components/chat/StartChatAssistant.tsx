"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { Headphones, LockKeyhole, RotateCcw, Sparkles } from "lucide-react";

import { FormPopupContext } from "@/context/FormPopupContext";
import { liveSupportProvider } from "@/lib/live-support";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import HaramainAIIcon from "./HaramainAIIcon";
import SuggestedPrompt from "./SuggestedPrompt";
import TypingIndicator from "./TypingIndicator";
import type { AssistantMessage, AssistantResponse, ChatSessionContext } from "./types";

const welcome: AssistantMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Assalamu alaikum! I’m the Haramain AI Assistant. How may I help with your Quran learning today?",
};

const prompts = [
  "Help me book a trial",
  "Which course suits me?",
];

interface StartChatAssistantProps {
  compact?: boolean;
}

export default function StartChatAssistant({ compact = false }: StartChatAssistantProps) {
  const { openFormPopup } = useContext(FormPopupContext);
  const [messages, setMessages] = useState<AssistantMessage[]>([welcome]);
  const [visitorContext, setVisitorContext] = useState<Record<string, string>>({});
  const [session, setSession] = useState<ChatSessionContext>({});
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef("");
  const inFlightRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);
  const generationRef = useRef(0);

  useEffect(() => {
    sessionIdRef.current = crypto.randomUUID();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading]);

  const handoff = () => {
    liveSupportProvider.prepareHandoff(visitorContext);
    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Sure — I’ll prepare a handoff so a member of the Haramain team can help you personally.",
        handoff: true,
      },
    ]);
  };

  const send = async (content: string) => {
    if (inFlightRef.current) return;

    inFlightRef.current = true;
    setLoading(true);
    const requestId = crypto.randomUUID();
    const generation = ++generationRef.current;
    const controller = new AbortController();
    abortRef.current = controller;
    const userMessage: AssistantMessage = { id: requestId, role: "user", content };
    const next = [...messages, userMessage];
    setMessages(next);

    try {
      const response = await fetch("/api/haramain-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: next
            .slice(-8)
            .map(({ role, content: text }) => ({ role, content: text })),
          session,
          sessionId:
            sessionIdRef.current || (sessionIdRef.current = crypto.randomUUID()),
          requestId,
        }),
      });
      const data = (await response.json()) as AssistantResponse & { error?: string };

      if (!response.ok) throw new Error(data.error || "The assistant is unavailable.");
      if (generation !== generationRef.current) return;

      setSession(data.session);
      setVisitorContext(
        Object.fromEntries(
          Object.entries(data.session).filter(
            ([key, value]) =>
              !["summary", "assessmentStep"].includes(key) && typeof value === "string",
          ),
        ),
      );
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message,
          recommendation: data.recommendation,
          handoff: data.handoff,
        },
      ]);
    } catch (error) {
      if (controller.signal.aborted || generation !== generationRef.current) return;
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "The assistant is unavailable. Please talk to our team for now.",
          isError: true,
        },
      ]);
    } finally {
      if (generation === generationRef.current) {
        inFlightRef.current = false;
        setLoading(false);
        abortRef.current = null;
      }
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    generationRef.current += 1;
    inFlightRef.current = false;
    setLoading(false);
    setMessages([welcome]);
    setVisitorContext({});
    setSession({});
    sessionIdRef.current = crypto.randomUUID();
  };

  const assistant = (
    <div
      className={`flex overflow-hidden border border-[#0D463E]/10 bg-[#FBF6EF] shadow-[0_32px_90px_rgba(2,28,24,.14)] ${
        compact ? "h-full flex-col border-0 shadow-none" : "rounded-[var(--radius-lg)]"
      }`}
    >
      <header
        className={`flex items-center justify-between gap-3 border-b border-white/10 bg-[#0D463E] px-5 py-4 text-white sm:px-7 ${
          compact ? "h-[72px] shrink-0 !px-4 py-0" : "flex-wrap gap-4"
        }`}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <div className={`relative grid shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-white ${compact ? "size-10" : "size-11"}`}>
            <HaramainAIIcon className={compact ? "size-6" : "size-7"} />
          </div>
          <div className="min-w-0">
            <h3 className={`truncate font-heading font-semibold ${compact ? "text-base" : "text-lg"}`}>Haramain AI Assistant</h3>
            <p className={`mt-0.5 flex items-center gap-1.5 truncate ${compact ? "text-xs text-white/65" : "text-[11px] text-white/45"}`}>
              {compact ? <><span className="size-1.5 rounded-full bg-emerald-400" /> Ready to help</> : <><Sparkles className="size-3 shrink-0 text-[#D0A86C]" /> AI guidance · grounded in Haramain content</>}
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-2 ${compact ? "mr-10" : ""}`}>
          <button
            type="button"
            onClick={reset}
            className="grid size-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors duration-200 hover:border-white/35 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Start a new conversation"
          >
            <RotateCcw className="size-4" />
          </button>
          {!compact && <button type="button" onClick={handoff} className="inline-flex h-9 items-center gap-2 rounded-[var(--radius-sm)] border border-[#D0A86C]/40 px-4 text-xs font-bold text-[#D0A86C] hover:bg-[#D0A86C]/10"><Headphones className="size-3.5" /> Talk to Our Team</button>}
        </div>
      </header>

      <div className={compact ? "grid min-h-0 flex-1" : "grid lg:grid-cols-[1fr_260px]"}>
        <div className={compact ? "flex min-h-0 flex-col" : "flex min-h-[650px] flex-col"}>
          <div
            className={
              compact
                ? "assistant-scrollbar min-h-0 flex-1 overflow-y-auto bg-[#FBF6EF] p-4"
                : "custom-scrollbar flex-1 space-y-5 overflow-y-auto p-5 sm:p-7 lg:h-[610px] lg:flex-none"
            }
          >
            <div className={`mx-auto max-w-3xl ${compact ? "space-y-3" : "space-y-5"}`}>
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  visitorContext={visitorContext}
                  onBookTrial={openFormPopup}
                />
              ))}
              {loading && (
                <div className="flex gap-2.5">
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-[#0D463E] text-white shadow-sm">
                    <HaramainAIIcon className="size-5" />
                  </div>
                  <div className="rounded-[var(--radius-md)] border border-[#0D463E]/10 bg-white px-3.5 py-2.5">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          </div>

          {compact ? (
            <div className="shrink-0 border-t border-[#0D463E]/8 bg-white">
              {messages.length === 1 && (
                <div className="grid grid-cols-2 gap-2 px-3.5 pt-3">
                  {prompts.map((prompt) => (
                    <SuggestedPrompt compact key={prompt} onClick={() => send(prompt)}>
                      {prompt}
                    </SuggestedPrompt>
                  ))}
                </div>
              )}
              <div className="p-3.5">
                <ChatInput disabled={loading} onSend={send} />
              </div>
              <div className="flex h-10 items-center justify-between border-t border-[#0D463E]/8 px-4 text-xs font-semibold">
                <button type="button" onClick={handoff} className="text-[#0D463E]/60 transition-colors hover:text-[#0D463E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D463E]">Talk to Our Team</button>
                <span className="size-1 rounded-full bg-[#D0A86C]" />
                <button type="button" onClick={openFormPopup} className="text-[#0D706D] transition-colors hover:text-[#0D463E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D463E]">Book Free Trial</button>
              </div>
            </div>
          ) : (
            <div className="shrink-0 border-t border-[#0D463E]/8 bg-white/70 p-4 sm:p-5">
              <div className="mx-auto max-w-3xl">
                {messages.length === 1 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {prompts.map((prompt) => (
                      <SuggestedPrompt key={prompt} onClick={() => send(prompt)}>
                        {prompt}
                      </SuggestedPrompt>
                    ))}
                  </div>
                )}
                <ChatInput disabled={loading} onSend={send} />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-[10px] text-[#0D463E]/40">
                  <span className="inline-flex items-center gap-1.5"><LockKeyhole className="size-3" /> AI can make mistakes. Confirm important details with our team.</span>
                  <button type="button" onClick={openFormPopup} className="font-bold text-[#0D706D] hover:underline">Book Free Trial</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {!compact && (
          <aside className="border-t border-[#0D463E]/8 bg-[#F7F0E7] p-6 lg:border-l lg:border-t-0">
            <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#9A6C2D]">I can help with</p>
            <ul className="mt-5 space-y-3 text-sm text-[#0D463E]/65">
              {["Find the right course", "Understand learning levels", "Explore teachers", "Check fee information", "Plan across time zones", "Book a free trial"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-[#D0A86C]" />{item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[var(--radius-md)] bg-[#0D463E] p-5 text-white">
              <Headphones className="size-5 text-[#D0A86C]" />
              <h4 className="mt-4 font-heading text-lg">Prefer a person?</h4>
              <p className="mt-2 text-xs leading-5 text-white/55">Prepare a handoff using the information already shared in this conversation.</p>
              <button type="button" onClick={handoff} className="mt-4 text-xs font-bold text-[#D0A86C] hover:underline">
                Talk to Our Team →
              </button>
            </div>
          </aside>
        )}
      </div>
    </div>
  );

  if (compact) {
    return <section id="assistant-widget" className="h-full bg-[#FBF6EF]">{assistant}</section>;
  }

  return <section id="assistant" className="bg-[#F2E9DD] py-20 sm:py-24 lg:py-28"><div className="container"><div className="mx-auto max-w-6xl">{assistant}</div></div></section>;
}
