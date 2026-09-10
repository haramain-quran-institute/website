import { UserRound } from "lucide-react";

import HaramainAIIcon from "./HaramainAIIcon";
import CourseRecommendationCard from "./CourseRecommendationCard";
import HumanHandoffCard from "./HumanHandoffCard";
import type { AssistantMessage } from "./types";

interface ChatMessageProps {
  message: AssistantMessage;
  visitorContext: Record<string, string>;
  onBookTrial: () => void;
}

export default function ChatMessage({ message, visitorContext, onBookTrial }: ChatMessageProps) {
  const assistant = message.role === "assistant";

  return (
    <div className={`flex gap-2.5 ${assistant ? "justify-start" : "justify-end"}`}>
      {assistant && (
        <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#0D463E] text-white shadow-sm">
          <HaramainAIIcon className="size-5" />
        </div>
      )}
      <div className={`max-w-[82%] ${assistant ? "" : "flex flex-row-reverse gap-2.5"}`}>
        <div
          className={`rounded-[var(--radius-md)] px-3.5 py-2.5 text-[13px] leading-[1.55rem] ${
            assistant
              ? message.isError
                ? "border border-red-200 bg-red-50 text-red-800"
                : "border border-[#0D463E]/10 bg-white text-[#0D463E]"
              : "bg-[#0D463E] text-white"
          }`}
        >
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
        {message.recommendation && (
          <CourseRecommendationCard recommendation={message.recommendation} onBookTrial={onBookTrial} />
        )}
        {message.handoff && <HumanHandoffCard visitorContext={visitorContext} />}
      </div>
      {!assistant && (
        <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#D0A86C] text-[#0D463E]">
          <UserRound className="size-4" />
        </div>
      )}
    </div>
  );
}
