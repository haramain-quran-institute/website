import Link from "next/link";
import { MessageCircleMore, Sparkles } from "lucide-react";

export default function FloatingChatButton() {
  return (
    <Link
      href="/start-chat"
      aria-label="Start chat with the Haramain AI Assistant"
      className="group fixed bottom-5 right-5 z-[60] flex items-center rounded-full border border-[#D0A86C]/40 bg-[#071F1B] p-2.5 text-white shadow-[0_16px_45px_rgba(2,28,24,0.32)] transition duration-300 hover:-translate-y-1 hover:border-[#D0A86C] hover:bg-[#0D463E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D0A86C] sm:bottom-7 sm:right-7"
    >
      <span className="relative grid size-11 place-items-center rounded-full bg-[#D0A86C] text-[#071F1B]">
        <MessageCircleMore className="size-5" strokeWidth={2} />
        <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full border-2 border-[#071F1B] bg-white">
          <Sparkles className="size-2.5 text-[#0D706D]" strokeWidth={2.5} />
        </span>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-left opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-36 group-hover:pr-2.5 group-hover:opacity-100 group-focus-visible:ml-3 group-focus-visible:max-w-36 group-focus-visible:pr-2.5 group-focus-visible:opacity-100">
        <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#D0A86C]">Need guidance?</span>
        <span className="mt-0.5 block text-sm font-semibold text-white">Start Chat</span>
      </span>
    </Link>
  );
}
