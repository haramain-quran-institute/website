export default function SuggestedPrompt({ children, onClick }: { children: string; onClick: () => void }) {
  return <button type="button" onClick={onClick} className="rounded-full border border-[#0D463E]/12 bg-white px-4 py-2.5 text-left text-xs font-semibold text-[#0D463E] transition hover:border-[#D0A86C] hover:bg-[#FFFDFC]">{children}</button>;
}
