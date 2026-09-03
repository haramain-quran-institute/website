import { Bot, UserRound } from "lucide-react";
import type { AssistantMessage } from "./types";
import CourseRecommendationCard from "./CourseRecommendationCard";
import HumanHandoffCard from "./HumanHandoffCard";

export default function ChatMessage({ message, visitorContext, onBookTrial }: { message: AssistantMessage; visitorContext: Record<string, string>; onBookTrial: () => void }) {
  const assistant = message.role === "assistant";
  return <div className={`flex gap-3 ${assistant ? "justify-start" : "justify-end"}`}>{assistant && <div className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-[#0D463E] text-[#D0A86C]"><Bot className="size-4" /></div>}<div className={`max-w-[86%] ${assistant ? "" : "flex flex-row-reverse gap-3"}`}><div className={`rounded-[16px] px-4 py-3 text-sm leading-6 ${assistant ? message.isError ? "border border-red-200 bg-red-50 text-red-800" : "border border-[#0D463E]/8 bg-white text-[#0D463E]" : "bg-[#0D463E] text-white"}`}><p className="whitespace-pre-wrap">{message.content}</p></div>{message.recommendation && <CourseRecommendationCard recommendation={message.recommendation} onBookTrial={onBookTrial} />}{message.handoff && <HumanHandoffCard visitorContext={visitorContext} />}</div>{!assistant && <div className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-[#D0A86C] text-[#0D463E]"><UserRound className="size-4" /></div>}</div>;
}
