"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import HaramainAIIcon from "./HaramainAIIcon";
import StartChatAssistant from "./StartChatAssistant";

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const launcherRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const changeOpen = (nextOpen: boolean) => {
    if (nextOpen) setHasOpened(true);
    setOpen(nextOpen);
  };

  useEffect(() => {
    if (!open) return;

    const closeOnOutsidePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (contentRef.current?.contains(target) || launcherRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePointerDown, true);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointerDown, true);
  }, [open]);

  return (
    <Dialog.Root modal={false} open={open} onOpenChange={changeOpen}>
      <div ref={launcherRef} className={`group fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-[9992] min-[641px]:bottom-5 min-[641px]:right-5 min-[1024px]:bottom-6 min-[1024px]:right-6 ${open ? "max-[640px]:hidden" : ""}`}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            aria-label="Open the Haramain AI Assistant"
            className="assistant-launcher relative grid size-14 place-items-center rounded-full bg-[#0D463E] text-white shadow-[0_10px_28px_rgba(13,70,62,0.24)] transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#10564C] hover:shadow-[0_14px_34px_rgba(13,70,62,0.3)] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D0A86C] min-[641px]:size-[60px]"
          >
            <HaramainAIIcon className="relative z-10 size-7 min-[641px]:size-[30px]" />
          </button>
        </Dialog.Trigger>
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-1/2 right-[calc(100%+10px)] hidden translate-y-1/2 whitespace-nowrap rounded-[var(--radius-md)] bg-[#071F1B] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-md transition-all duration-200 group-hover:-translate-x-0.5 group-hover:opacity-100 group-focus-within:-translate-x-0.5 group-focus-within:opacity-100 min-[641px]:block"
        >
          Ask Haramain AI
        </span>
      </div>

      <Dialog.Portal forceMount>
        <Dialog.Overlay
          forceMount
          className={`fixed inset-0 z-[9990] bg-[#021C18]/10 min-[641px]:pointer-events-none min-[641px]:bg-transparent ${
            open
              ? "animate-[assistant-overlay-in_240ms_ease-out_forwards]"
              : hasOpened
                ? "pointer-events-none animate-[assistant-overlay-out_220ms_ease-in_forwards]"
                : "invisible pointer-events-none opacity-0"
          }`}
        />
        <Dialog.Content
          ref={contentRef}
          forceMount
          aria-describedby="haramain-assistant-description"
          className={`fixed bottom-2 left-2 right-2 z-[9991] h-[min(76dvh,620px)] max-h-[calc(100dvh-16px)] overflow-hidden rounded-[var(--radius-lg)] border border-[#0D463E]/10 bg-[#FBF6EF] shadow-[0_18px_50px_rgba(0,0,0,0.16)] outline-none min-[391px]:bottom-3 min-[391px]:left-3 min-[391px]:right-3 min-[391px]:max-h-[calc(100dvh-24px)] min-[641px]:bottom-[88px] min-[641px]:left-auto min-[641px]:right-5 min-[641px]:h-[min(560px,calc(100dvh-110px))] min-[641px]:max-h-none min-[641px]:w-[370px] min-[641px]:rounded-[var(--radius-lg)] min-[1024px]:bottom-24 min-[1024px]:right-6 min-[1024px]:h-[min(570px,calc(100vh-125px))] min-[1024px]:w-[390px] min-[1441px]:h-[min(590px,calc(100vh-125px))] min-[1441px]:w-[400px] ${
            open
              ? "animate-[assistant-widget-in_250ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
              : hasOpened
                ? "pointer-events-none animate-[assistant-widget-out_220ms_cubic-bezier(0.4,0,1,1)_forwards]"
                : "invisible pointer-events-none opacity-0"
          }`}
        >
          <Dialog.Title className="sr-only">Haramain AI Assistant</Dialog.Title>
          <Dialog.Description id="haramain-assistant-description" className="sr-only">
            Ask about Quran courses, teachers, fees, schedules, and free trial classes.
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close Haramain AI Assistant"
              className="absolute right-4 top-[18px] z-30 grid size-9 place-items-center rounded-[var(--radius-md)] bg-[#D0A86C] text-[#0D463E] transition-colors duration-200 hover:bg-[#DAB77F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="size-[18px]" strokeWidth={2.2} />
            </button>
          </Dialog.Close>
          <StartChatAssistant compact />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
