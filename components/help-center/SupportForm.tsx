"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Headphones, LoaderCircle, Mail, MessageCircle } from "lucide-react";

import { sendSupportRequest } from "./actions/sendSupportRequest";

type ReplyMethod = "Email" | "Phone" | "WhatsApp";

const inputClass =
  "mt-2 h-12 w-full rounded-[6px] border border-[#0D463E]/15 bg-white px-4 font-body font-normal text-[#0D463E] outline-none transition-colors placeholder:text-[#0D463E]/35 focus:border-[#0D706D]";

export default function SupportForm() {
  const [preferredReply, setPreferredReply] = useState<ReplyMethod>("Email");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setError("");

    const form = new FormData(event.currentTarget);
    const result = await sendSupportRequest({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      branch: String(form.get("branch") || "General support"),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
      preferredReply,
    });

    setPending(false);
    if (result.success) setSuccess(true);
    else setError(result.error || "Something went wrong. Please try again.");
  }

  return (
    <section id="support-form" className="bg-[#0D463E] py-24 text-white sm:py-28 min-[1024px]:py-32">
      <div className="container grid gap-12 min-[960px]:grid-cols-[0.82fr_1.18fr] min-[960px]:items-center min-[1100px]:gap-20">
        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#D0A86C]">Contact Support</p>
          <h2 className="mt-4 max-w-xl font-heading text-4xl font-medium leading-[1.05] sm:text-5xl min-[1024px]:text-[58px]">
            How Can We <span className="font-accent font-normal italic">Help?</span>
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-7 text-white/68">
            Tell us what you need and choose how you would like us to reply. Your request will be sent to the most suitable Haramain team.
          </p>
          <div className="mt-9 space-y-5 font-body text-sm text-white/75">
            <p className="flex items-center gap-3"><Headphones className="size-5 text-[#D0A86C]" /> Support for learners and parents</p>
            <p className="flex items-center gap-3"><MessageCircle className="size-5 text-[#D0A86C]" /> Email, phone, or WhatsApp reply</p>
            <p className="flex items-center gap-3"><Mail className="size-5 text-[#D0A86C]" /> A confirmation is sent to your email</p>
          </div>
        </div>

        <div className="rounded-[16px] bg-[#FBF6EF] p-6 text-[#0D463E] shadow-2xl sm:p-9">
          {success ? (
            <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
              <span className="grid size-16 place-items-center rounded-full bg-[#0D463E] text-[#D0A86C]"><CheckCircle2 className="size-8" /></span>
              <h3 className="mt-6 font-heading text-3xl font-medium">Your message is with us</h3>
              <p className="mt-3 max-w-md font-body text-sm leading-6 text-[#0D463E]/62">Thank you. The Haramain team has received your request and will reply using your preferred contact method.</p>
              <button type="button" onClick={() => setSuccess(false)} className="mt-7 rounded-[6px] border border-[#0D463E]/20 px-5 py-3 font-body text-sm font-bold hover:bg-white">Send another message</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name"><input name="name" required maxLength={100} autoComplete="name" className={inputClass} placeholder="Your name" /></Field>
                <Field label="Email address"><input name="email" required maxLength={160} type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" /></Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone / WhatsApp"><input name="phone" required={preferredReply !== "Email"} maxLength={40} autoComplete="tel" className={inputClass} placeholder="Include country code" /></Field>
                <Field label="Preferred branch">
                  <select name="branch" className={inputClass} defaultValue="General support">
                    <option>General support</option><option>KSA</option><option>UAE</option><option>Pakistan</option>
                  </select>
                </Field>
              </div>
              <fieldset>
                <legend className="font-body text-sm font-semibold">How should we reply?</legend>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {(["Email", "Phone", "WhatsApp"] as const).map((method) => (
                    <button key={method} type="button" onClick={() => setPreferredReply(method)} aria-pressed={preferredReply === method} className={`h-11 rounded-[6px] border px-2 font-body text-xs font-bold transition-colors sm:text-sm ${preferredReply === method ? "border-[#0D463E] bg-[#0D463E] text-white" : "border-[#0D463E]/15 bg-white text-[#0D463E] hover:border-[#0D463E]/35"}`}>{method}</button>
                  ))}
                </div>
              </fieldset>
              <Field label="Subject"><input name="subject" required maxLength={160} className={inputClass} placeholder="How can we help?" /></Field>
              <Field label="Message"><textarea name="message" required maxLength={3000} rows={5} className={`${inputClass} h-auto resize-y py-3 leading-6`} placeholder="Share the details of your question or request..." /></Field>
              {error && <p role="alert" className="rounded-[6px] bg-red-50 px-4 py-3 font-body text-sm leading-5 text-red-700">{error}</p>}
              <button disabled={pending} type="submit" className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-[6px] bg-[#0D463E] px-6 font-body text-sm font-bold text-white transition-colors hover:bg-[#146154] disabled:cursor-not-allowed disabled:opacity-65">
                {pending && <LoaderCircle className="size-4 animate-spin" />}{pending ? "Sending Request..." : "Submit Support Request"}
              </button>
              <p className="text-center font-body text-xs leading-5 text-[#0D463E]/45">We only use your details to respond to this request.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block font-body text-sm font-semibold text-[#0D463E]">{label}{children}</label>;
}
