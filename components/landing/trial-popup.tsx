"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrialPopup({ triggerLabel = "Book a free trial" }: { triggerLabel?: string }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild><Button>{triggerLabel}</Button></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#071f1b]/75 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-[#fbf6ef] p-7 text-[#161513] shadow-2xl sm:p-10">
          <Dialog.Close className="absolute right-4 top-4 rounded p-1 text-[#0d463e] hover:bg-[#0d463e]/10" aria-label="Close"><X className="size-5" /></Dialog.Close>
          <Dialog.Title className="font-serif text-3xl text-[#0d463e]">Begin your Quran journey</Dialog.Title>
          <Dialog.Description className="mt-3 leading-7 text-[#5e5a54]">Book a complimentary trial class and meet a qualified Quran teacher.</Dialog.Description>
          <ul className="my-7 space-y-3 text-sm text-[#38342f]">
            {['One-to-one online learning', 'Flexible timings for your family', 'A teacher matched to your level'].map((item) => <li className="flex gap-3" key={item}><Check className="mt-0.5 size-4 text-[#b08242]" />{item}</li>)}
          </ul>
          <a className="block w-full bg-[#0d463e] px-6 py-3 text-center text-sm font-semibold text-[#f8f2e8] hover:bg-[#146154]" href="mailto:info@haramainquraninstitute.com?subject=Free%20trial%20class">Request your trial by email</a>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
