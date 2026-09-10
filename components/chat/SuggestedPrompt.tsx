interface SuggestedPromptProps {
  children: string;
  compact?: boolean;
  onClick: () => void;
}

export default function SuggestedPrompt({ children, compact = false, onClick }: SuggestedPromptProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border border-[#0D463E]/12 bg-white font-semibold text-[#0D463E] transition-colors duration-200 hover:border-[#D0A86C] hover:bg-[#FFFDFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D463E] ${
        compact
          ? "h-9 whitespace-nowrap px-3 text-center text-xs"
          : "px-4 py-2.5 text-left text-xs"
      }`}
    >
      {children}
    </button>
  );
}
