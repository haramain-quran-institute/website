"use client";

import { useContext, useState } from "react";
import { Copy, Mail, Phone, X } from "lucide-react";

import IconWhatsApp from "../../../../assets/src/Icons/whatsapp";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

import { FormPopupContext } from "@/context/FormPopupContext";
import GlobalForm from "./GlobalForm";

import { ConversionSource } from "../CookieConsent/config/conversionConfig";

type FormPopupProps = {
  source: ConversionSource;
};

/*
|--------------------------------------------------------------------------
| Haramain Contact Details
|--------------------------------------------------------------------------
| Replace these two numbers when you have the official numbers.
*/
const DIRECT_LINE = "+923000000000";
const WHATSAPP_NUMBER = "923000000000";

const EMAIL = "email.hqinstitute@gmail.com";

export default function FormPopup({
  source,
}: FormPopupProps) {
  const {
    isFormPopupOpen,
    closeFormPopup,
  } = useContext(FormPopupContext);

  const [copied, setCopied] = useState(false);

  if (!isFormPopupOpen) return null;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Failed to copy email:",
        error,
      );
    }
  };

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="flex h-[94vh] w-[96vw] max-w-[1400px] flex-col items-end gap-0 overflow-hidden rounded-2xl border border-[#0D463E]/10 bg-[#FBF6EF] p-0">
        <AlertDialogTitle className="sr-only">
          Book Your Free Trial Class
        </AlertDialogTitle>

        {/* =====================================================
            CLOSE
        ====================================================== */}
        <AlertDialogHeader className="flex w-full flex-grow-0 bg-[#FBF6EF] p-3">
          <AlertDialogCancel
            onClick={closeFormPopup}
            className="ml-auto border-0 bg-transparent font-bricolage text-[#161513] shadow-none hover:bg-transparent hover:text-[#0D463E]"
          >
            <div className="flex items-center gap-1">
              <span className="font-bricolage text-body_xs">
                Close
              </span>

              <X className="size-5" />
            </div>
          </AlertDialogCancel>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex h-0 w-full flex-grow">
          <div className="custom-scrollbar flex size-full flex-col overflow-hidden overflow-y-auto bg-[#FBF6EF]">

            {/* =====================================================
                TOP SECTION
            ====================================================== */}
            <div className="w-full bg-[#FBF6EF] px-6 pb-7 pt-2 sm:px-8">
              <div className="mx-auto w-full max-w-screen-md">

                {/* HEADING */}
                <h2 className="font-bricolage text-heading_sm font-medium leading-[1.05] tracking-tight text-[#161513] sm:text-heading_base md:text-heading_xl lmd:text-heading_2xl">
                  Book Your{" "}
                  <span className="font-libre-baskerville italic font-normal">
                    Free Trial
                  </span>{" "}
                  Class
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-2 max-w-2xl font-bricolage text-body_xxs leading-relaxed text-[#777571] sm:text-body_xs">
                  Not sure where to start? Experience a free Quran
                  session with us, meet your teacher, ask questions,
                  and discover how we teach — with no pressure.
                </p>

                {/* =================================================
                    CONTACT OPTIONS
                ================================================== */}
                <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">

                  {/* DIRECT LINE */}
                  <a
                    href={`tel:${DIRECT_LINE}`}
                    className="group flex items-center gap-3 transition-colors hover:text-[#0D463E]"
                  >
                    <Phone className="size-5 shrink-0 text-[#777571] transition-colors group-hover:text-[#0D463E]" />

                    <span className="font-bricolage text-body_xxs text-[#777571] transition-colors group-hover:text-[#0D463E]">
                      Direct Line
                    </span>
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 transition-colors hover:text-[#0D463E]"
                  >
                    <IconWhatsApp className="size-5 shrink-0 text-[#777571] transition-colors group-hover:text-[#0D463E]" />

                    <span className="font-bricolage text-body_xxs text-[#777571] transition-colors group-hover:text-[#0D463E]">
                      WhatsApp
                    </span>
                  </a>

                  {/* EMAIL + COPY */}
                  <div className="flex min-w-0 items-center gap-3">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="group flex min-w-0 items-center gap-3"
                    >
                      <Mail className="size-5 shrink-0 text-[#777571] transition-colors group-hover:text-[#0D463E]" />

                      <span className="truncate font-bricolage text-body_xxs text-[#777571] transition-colors group-hover:text-[#0D463E]">
                        {EMAIL}
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      title={
                        copied
                          ? "Email copied"
                          : "Copy email"
                      }
                      className="flex size-7 shrink-0 items-center justify-center rounded-md text-[#777571] transition-all hover:bg-[#0D463E]/10 hover:text-[#0D463E] active:scale-95"
                    >
                      <Copy className="size-3.5" />
                    </button>

                    {copied && (
                      <span className="whitespace-nowrap font-bricolage text-[10px] text-[#0D463E]">
                        Copied
                      </span>
                    )}
                  </div>

                </div>

                {/* =================================================
                    DIVIDER
                ================================================== */}
                <div className="relative mt-7 flex items-center">
                  <div className="h-px w-full bg-[#0D463E]/15" />

                  <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#FBF6EF] px-4 font-bricolage text-[9px] uppercase tracking-[0.16em] text-[#777571] sm:text-[10px]">
                    Begin Your Quran Journey
                  </span>
                </div>

              </div>
            </div>

            {/* =====================================================
                FORM
            ====================================================== */}
            <div className="flex size-full items-center justify-center bg-[#FBF6EF]">
              <div className="size-full max-w-screen-md px-5 py-6 sm:px-8">
                <GlobalForm source={source} />
              </div>
            </div>

          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}