import { FormEvent, KeyboardEvent, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ChatInput({ disabled, onSend }: { disabled: boolean; onSend: (message: string) => void }) {
  const [value, setValue] = useState("");
  const submit = (event: FormEvent) => { event.preventDefault(); const message = value.trim(); if (!message || disabled) return; setValue(""); onSend(message); };
  const keyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } };
  return <form onSubmit={submit} className="rounded-[18px] border border-[#0D463E]/12 bg-white p-2 shadow-[0_12px_36px_rgba(2,28,24,.08)]"><div className="flex items-end gap-2"><textarea value={value} onChange={(event) => setValue(event.target.value)} onKeyDown={keyDown} rows={1} maxLength={800} placeholder="Ask about courses, teachers, fees, or schedules…" className="max-h-32 min-h-12 flex-1 resize-none bg-transparent px-3 py-3 text-sm leading-6 text-[#0D463E] outline-none placeholder:text-[#0D463E]/35" aria-label="Message Haramain AI Assistant" /><button type="submit" disabled={!value.trim() || disabled} className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-[#0D463E] text-white transition hover:bg-[#0D706D] disabled:cursor-not-allowed disabled:opacity-35" aria-label="Send message"><ArrowUp className="size-5" /></button></div></form>;
}
