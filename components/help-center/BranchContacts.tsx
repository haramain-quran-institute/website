import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { helpCenterBranches } from "@/data/help-center";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export default function BranchContacts() {
  return (
    <section id="branches" className="bg-white py-24 sm:py-28 min-[1024px]:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#0D706D]">
            Regional Support
          </p>
          <h2 className="mt-4 font-heading text-4xl font-medium text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">
            Our Three <span className="font-accent font-normal italic">Branches</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-7 text-[#0D463E]/62">
            Choose the branch closest to you, or send one support request and
            we&apos;ll direct it to the right regional team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 min-[850px]:grid-cols-3">
          {helpCenterBranches.map((branch) => (
            <article
              key={branch.code}
              className="group overflow-hidden rounded-[16px] border border-[#0D463E]/10 bg-[#FBF6EF] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-[#0D463E] p-7 text-white">
                <span className="inline-flex rounded-full border border-white/20 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-[#D0A86C]">
                  {branch.code}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-medium leading-tight">
                  {branch.name}
                </h3>
                <p className="mt-3 inline-flex items-center gap-2 font-body text-xs text-white/60">
                  <Clock3 className="size-3.5 text-[#D0A86C]" /> {branch.timezone}
                </p>
              </div>

              <div className="space-y-5 p-7">
                <ContactRow icon={Mail} label="Email">
                  <Link className="break-all hover:text-[#0D706D]" href={`mailto:${branch.email}`}>
                    {branch.email}
                  </Link>
                </ContactRow>
                <ContactRow icon={Phone} label="Phone">
                  {branch.phone ? (
                    <Link className="hover:text-[#0D706D]" href={phoneHref(branch.phone)}>{branch.phone}</Link>
                  ) : (
                    <Link className="hover:text-[#0D706D]" href="#support-form">Request a call</Link>
                  )}
                </ContactRow>
                <ContactRow icon={MessageCircle} label="WhatsApp">
                  {branch.whatsapp ? (
                    <Link className="hover:text-[#0D706D]" href={whatsappHref(branch.whatsapp)} target="_blank" rel="noopener noreferrer">{branch.whatsapp}</Link>
                  ) : (
                    <Link className="hover:text-[#0D706D]" href="#support-form">Request a WhatsApp reply</Link>
                  )}
                </ContactRow>
                <ContactRow icon={MapPin} label="Location">
                  <span>{branch.location}</span>
                </ContactRow>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#0D706D]">
        <Icon className="size-4.5" />
      </span>
      <div className="min-w-0">
        <p className="font-body text-[10px] font-bold uppercase tracking-[0.13em] text-[#0D463E]/42">{label}</p>
        <div className="mt-1 font-body text-sm font-semibold leading-5 text-[#0D463E]">{children}</div>
      </div>
    </div>
  );
}
