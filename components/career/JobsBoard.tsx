"use client";

import { BriefcaseBusiness } from "lucide-react";
import { useState } from "react";

type WorkMode = "Remote" | "Onsite" | "Hybrid";

export default function JobsBoard() {
  const [filter, setFilter] = useState<"All" | WorkMode>("All");
  return <section id="open-positions" className="w-full bg-white py-24 sm:py-28 min-[1024px]:py-32"><div className="container"><div className="mx-auto max-w-4xl text-center"><p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#0D706D]">Open Positions</p><h2 className="mt-4 font-heading text-4xl font-medium text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">Find Your Place at <span className="font-accent font-normal italic">Haramain</span></h2><p className="mx-auto mt-5 max-w-3xl font-body text-base leading-7 text-[#0D463E]/62">We are not hiring for active roles right now, but future opportunities will be shared here when available.</p><div className="mt-8 inline-flex flex-wrap justify-center rounded-full bg-[#FBF6EF] p-1.5">{(["All", "Remote", "Onsite", "Hybrid"] as const).map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full px-5 py-2.5 font-body text-sm font-bold transition-colors ${filter === item ? "bg-[#0D463E] text-white" : "text-[#0D463E] hover:bg-white"}`}>{item}</button>)}</div></div><div className="mx-auto mt-14 max-w-3xl rounded-[var(--radius-lg)] border border-[#0D463E]/10 bg-[#FBF6EF] p-8 text-center shadow-[0_10px_32px_rgba(13,70,62,0.06)] sm:p-10"><div className="mx-auto grid size-14 place-items-center rounded-full bg-[#0D463E]/8 text-[#0D463E]"><BriefcaseBusiness className="size-7" /></div><h3 className="mt-5 font-heading text-3xl font-medium text-[#0D463E]">No Positions Available Right Now!</h3><p className="mx-auto mt-3 max-w-xl font-body text-sm leading-6 text-[#0D463E]/62">Please check this page again later for future teaching, academic, support, and operations opportunities with Haramain Quran Institute.</p></div></div></section>;
}
