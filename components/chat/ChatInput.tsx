import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  disabled: boolean;
  onSend: (message: string) => void;
}

export default function ChatInput({ disabled, onSend }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "40px";
    const nextHeight = Math.min(textarea.scrollHeight, 84);
    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY = textarea.scrollHeight > 84 ? "auto" : "hidden";
  }, [value]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const message = value.trim();
    if (!message || disabled) return;
    setValue("");
    onSend(message);
  };

  const keyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <form onSubmit={submit} className="assistant-composer rounded-[var(--radius-md)] border border-[#DFE5E2] bg-white p-1.5 shadow-[0_6px_20px_rgba(13,70,62,0.06)] focus-within:border-[#178C7B] focus-within:ring-2 focus-within:ring-[#178C7B]/10">
      <div className="flex min-h-[44px] items-end gap-1.5">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={keyDown}
          rows={1}
          maxLength={800}
          placeholder="Ask about courses, fee ..."
          className="min-h-10 max-h-[84px] flex-1 resize-none bg-transparent px-2.5 py-2 text-[13px] leading-5 text-[#0D463E] outline-none placeholder:text-[#0D463E]/40"
          aria-label="Message Haramain AI Assistant"
        />
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          className="grid size-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[#0D463E] text-white transition-colors duration-200 hover:bg-[#146154] disabled:cursor-not-allowed disabled:bg-[#B9C8C4]"
          aria-label="Send message"
        >
          <ArrowUp className="size-[18px]" />
        </button>
      </div>
    </form>
  );
}
