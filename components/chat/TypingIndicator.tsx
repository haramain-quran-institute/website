export default function TypingIndicator() {
  return <div className="flex items-center gap-1.5 py-1" role="status" aria-label="Assistant is thinking"><span className="size-2 animate-bounce rounded-full bg-[#0D706D] [animation-delay:-.2s]" /><span className="size-2 animate-bounce rounded-full bg-[#0D706D] [animation-delay:-.1s]" /><span className="size-2 animate-bounce rounded-full bg-[#0D706D]" /></div>;
}
