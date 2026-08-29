"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useContext } from "react";
import { X } from "lucide-react";
import { FormPopupContext } from "@/context/FormPopupContext";

export function ContextTrialPopup() {
  const { isFormPopupOpen, closeFormPopup } = useContext(FormPopupContext);

  return <Dialog.Root open={isFormPopupOpen} onOpenChange={(open) => !open && closeFormPopup()}>
    <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-[60] bg-[#021c18]/75 backdrop-blur-sm" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 bg-[#fbf6ef] p-8 text-[#0d463e] shadow-2xl sm:p-10">
        <Dialog.Close className="absolute right-5 top-5" aria-label="Close free-trial form"><X className="size-5" /></Dialog.Close>
        <Dialog.Title className="font-heading text-4xl leading-none">Book your <span className="font-accent italic">Free Trial</span></Dialog.Title>
        <Dialog.Description className="mt-5 max-w-lg font-body leading-7 text-[#0d463e]/75">Meet a qualified Quran teacher, discuss your learning goals, and discover the right course for you or your child.</Dialog.Description>
        <a className="mt-8 inline-flex bg-[#0d463e] px-7 py-4 font-body text-sm font-semibold text-[#fbf6ef] hover:bg-[#d0a86c]" href="mailto:info@haramainquraninstitute.com?subject=Free%20Trial%20Class">Request by email</a>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
