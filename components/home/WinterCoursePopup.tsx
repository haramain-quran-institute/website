"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle2, Mail, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import styles from "./WinterCoursePopup.module.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WinterCoursePopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const popupTimer = window.setTimeout(() => setOpen(true), 2800);

    return () => window.clearTimeout(popupTimer);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const normalizedEmail = email.trim().toLowerCase();

    if (!emailPattern.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setPending(true);

    try {
      const response = await fetch("/api/winter-course-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        setError(
          result.error ??
            "We could not process your request right now. Please try again shortly.",
        );
        return;
      }

      setEmail(normalizedEmail);
      setSubmitted(true);
    } catch {
      setError(
        "We could not process your request right now. Please try again shortly.",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`${styles.overlay} fixed inset-0 z-[110] bg-[#021C18]/78 backdrop-blur-[3px]`}
        />
        <Dialog.Content
          className={`${styles.positioner} pointer-events-none fixed inset-0 z-[120] grid place-items-center p-3 outline-none sm:p-6`}
          aria-describedby="winter-course-description"
        >
          <div className={`${styles.panel} pointer-events-auto relative max-h-[calc(100dvh-24px)] w-full max-w-[560px] overflow-y-auto rounded-[var(--radius-lg)] border border-[#D0A86C]/35 bg-[#FBF6EF] p-6 text-[#161513] shadow-[0_32px_90px_rgba(2,28,24,0.28)] sm:max-h-[calc(100dvh-48px)] sm:p-9 min-[768px]:p-10`}>
          <Dialog.Close
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-[#0D463E]/10 bg-white text-[#0D463E] transition-colors hover:border-[#D0A86C] hover:bg-[#D0A86C]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D463E]"
            aria-label="Close Winter Short Course notification"
          >
            <X className="size-5" />
          </Dialog.Close>

          <div className="pr-12">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#0D706D]">
              Winter Short Course
            </p>
            <Dialog.Title className="mt-3 font-heading text-4xl font-medium leading-tight text-[#0D463E] sm:text-5xl">
              Coming <span className="font-accent font-normal italic text-[#D0A86C]">Soon</span>
            </Dialog.Title>
          </div>

          <Dialog.Description
            id="winter-course-description"
            className="mt-5 max-w-lg font-body text-[15px] leading-7 text-[#0D463E]/68 sm:text-base"
          >
            Registrations are opening soon. Enter your email and we&apos;ll notify you as soon as enrollment starts.
          </Dialog.Description>

          {submitted ? (
            <div
              className="mt-7 rounded-[var(--radius-md)] border border-[#0D463E]/12 bg-white p-5"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 className="size-7 text-[#0D706D]" />
              <p className="mt-3 font-heading text-xl font-medium text-[#0D463E]">
                Thank you for your interest.
              </p>
              <p className="mt-2 font-body text-sm leading-6 text-[#0D463E]/65">
                We&apos;ll notify you when Winter Short Course registration opens.
              </p>
            </div>
          ) : (
            <form className="mt-7" onSubmit={submit} noValidate>
              <label htmlFor="winter-course-email" className="font-body text-sm font-semibold text-[#0D463E]">
                Email address
              </label>
              <div className="mt-2 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#0D463E]/45"
                    aria-hidden="true"
                  />
                  <input
                    id="winter-course-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    disabled={pending}
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError("");
                    }}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "winter-course-email-error" : undefined}
                    placeholder="you@example.com"
                    className="h-[52px] w-full rounded-[var(--radius-sm)] border border-[#0D463E]/15 bg-white pl-12 pr-4 font-body text-base text-[#0D463E] outline-none transition-colors placeholder:text-[#0D463E]/35 focus:border-[#0D706D] focus:ring-2 focus:ring-[#0D706D]/10"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primaryReverse"
                  disabled={pending}
                  className="h-[52px] px-7 disabled:cursor-not-allowed disabled:opacity-65"
                >
                  {pending ? "Sending..." : "Notify Me"}
                </Button>
              </div>
              {error && (
                <p
                  id="winter-course-email-error"
                  className="mt-2 font-body text-sm text-red-700"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </form>
          )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
