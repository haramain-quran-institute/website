"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, CircleDollarSign } from "lucide-react";

type CurrencyCode = "USD" | "AUD" | "PKR" | "CAD";
type FeeGroup = "basic" | "other";

const currencies: Record<CurrencyCode, { symbol: string; rate: number }> = {
  USD: { symbol: "$", rate: 1 },
  AUD: { symbol: "A$", rate: 1.52 },
  PKR: { symbol: "Rs ", rate: 280 },
  CAD: { symbol: "C$", rate: 1.38 },
};

const feeGroups = [
  {
    id: "basic-course-fees",
    eyebrow: "Basic Courses",
    title: "Foundation course fee plans",
    description: "These lower-fee plans apply to Noorani Qaida, Quran Reading, Nasheed Reciting, and Women Guidance.",
    courses: ["Noorani Qaida", "Quran Reading", "Nasheed Reciting", "Women Guidance"],
    group: "basic" as const,
  },
  {
    id: "other-course-fees",
    eyebrow: "Other Courses",
    title: "Advanced course fee plans",
    description: "These plans apply to Quran Memorization, Quran Translation, Qirat & Tajweed, Tafsir, Arabic Language, and Islamic Studies.",
    courses: ["Quran Memorization", "Quran Translation", "Qirat & Tajweed", "Tafsir", "Arabic Language", "Islamic Studies"],
    group: "other" as const,
  },
];

const planBenefits = [
  "Live one-to-one classes",
  "Qualified dedicated teacher",
  "Flexible class scheduling",
  "Monthly progress guidance",
];

function getPlans(group: FeeGroup) {
  const basic = group === "basic";

  return [
    { title: "2 Days", subtitle: "per week", usd: basic ? 30 : 45 },
    { title: "3 Days", subtitle: "per week", usd: basic ? 35 : 50 },
    { title: "4 Days", subtitle: "per week", usd: basic ? 40 : 55 },
    { title: "5 Days", subtitle: "per week", usd: basic ? 45 : 60 },
    { title: "Weekend", subtitle: "2 days plan", usd: basic ? 35 : 50 },
  ];
}

function formatPrice(usd: number, currency: CurrencyCode, yearly: boolean) {
  const raw = usd * currencies[currency].rate * (yearly ? 0.8 : 1);
  const amount = currency === "PKR" ? Math.round(raw / 50) * 50 : Math.round(raw);
  return `${currencies[currency].symbol}${amount.toLocaleString("en-US")}`;
}

function PlanGrid({ group, currency, yearly }: { group: FeeGroup; currency: CurrencyCode; yearly: boolean }) {
  const plans = useMemo(() => getPlans(group), [group]);

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 min-[620px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-5">
      {plans.map((plan, index) => {
        const featured = index === 2;
        return (
          <article
            key={plan.title}
            className={`flex min-h-[500px] flex-col rounded-[18px] border p-3 shadow-[0_12px_40px_rgba(13,70,62,0.06)] ${
              featured ? "border-[#071F1B] bg-[#071F1B] text-white" : "border-[#0D463E]/8 bg-white text-[#0D463E]"
            }`}
          >
            <div className="flex flex-1 flex-col px-3 pb-5 pt-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-[22px] font-medium">{plan.title}</h3>
                  <p className={`mt-1 font-body text-sm ${featured ? "text-white/55" : "text-[#0D463E]/55"}`}>{plan.subtitle}</p>
                </div>
                {featured && <span className="rounded-full bg-[#D0A86C] px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-[#071F1B]">Popular</span>}
              </div>

              <div className="mt-8">
                {yearly && (
                  <p className={`font-body text-xs line-through ${featured ? "text-white/40" : "text-[#0D463E]/40"}`}>
                    {formatPrice(plan.usd, currency, false)}
                  </p>
                )}
                <div className="mt-1 flex items-end gap-1.5">
                  <span className={`font-heading text-[40px] font-semibold leading-none ${featured ? "text-[#D0A86C]" : "text-[#0D463E]"}`}>
                    {formatPrice(plan.usd, currency, yearly)}
                  </span>
                  <span className={`pb-1 font-body text-xs ${featured ? "text-white/55" : "text-[#0D463E]/55"}`}>/month</span>
                </div>
                <p className={`mt-2 min-h-5 font-body text-xs ${featured ? "text-white/45" : "text-[#0D463E]/45"}`}>
                  {yearly ? "Billed yearly · 20% saved" : "Billed monthly"}
                </p>
              </div>

              <Link
                href="/book-free-trial"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full border px-4 py-3 font-body text-sm font-semibold transition-colors ${
                  featured
                    ? "border-[#D0A86C] bg-[#D0A86C] text-[#071F1B] hover:bg-transparent hover:text-[#D0A86C]"
                    : "border-[#0D463E]/15 text-[#0D463E] hover:border-[#0D463E] hover:bg-[#0D463E] hover:text-white"
                }`}
              >
                Book a Free Trial Class
              </Link>
            </div>

            <div className={`rounded-[14px] p-4 ${featured ? "bg-white text-[#0D463E]" : "bg-[#F1F3F1]"}`}>
              <ul className="grid gap-3.5">
                {planBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 font-body text-[13px] leading-5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <Check className="size-3 text-[#0D463E]" strokeWidth={3} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function CoursesFeePricing() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [yearly, setYearly] = useState(false);

  return (
    <section id="courses-fee-plans" className="w-full bg-white py-20 sm:py-24 min-[1024px]:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#0D463E] text-[#FBF6EF]">
            <CircleDollarSign className="size-6" />
          </div>
          <p className="mt-6 font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#B08242]">Courses Fee</p>
          <h2 className="mt-5 font-heading text-4xl font-medium leading-[1.04] tracking-tight text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">
            Simple plans for every <span className="font-accent font-normal italic">learner.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-7 text-[#0D463E]/65">
            Use the controls once to compare both fee groups in your preferred currency and billing period.
          </p>
        </div>

        <div className="sticky top-24 z-20 mx-auto mt-10 flex w-fit max-w-full flex-col items-center justify-center gap-5 rounded-[18px] border border-[#0D463E]/10 bg-white/95 px-4 py-3 shadow-lg backdrop-blur min-[760px]:flex-row min-[760px]:gap-8 min-[760px]:px-6">
          <div className="inline-flex rounded-full border border-[#0D463E]/10 bg-white p-1" aria-label="Select currency">
            {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={currency === code}
                onClick={() => setCurrency(code)}
                className={`rounded-full px-3.5 py-2 font-body text-xs font-semibold transition-colors sm:px-5 ${
                  currency === code ? "bg-[#0D463E] text-white" : "text-[#0D463E]/60 hover:text-[#0D463E]"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3" aria-label="Billing period">
            <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)} className={`font-body text-sm font-semibold transition-colors ${!yearly ? "text-[#0D463E]" : "text-[#0D463E]/45 hover:text-[#0D463E]"}`}>Monthly</button>
            <button
              type="button"
              role="switch"
              aria-label="Use yearly billing"
              aria-checked={yearly}
              onClick={() => setYearly((value) => !value)}
              className={`relative h-8 w-16 shrink-0 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D0A86C] ${yearly ? "bg-[#0D463E]" : "bg-[#0D463E]/25"}`}
            >
              <span className={`absolute left-1 top-1 size-6 rounded-full bg-white shadow-sm transition-transform duration-200 ${yearly ? "translate-x-8" : "translate-x-0"}`} />
            </button>
            <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)} className={`font-body text-sm font-semibold transition-colors ${yearly ? "text-[#0D463E]" : "text-[#0D463E]/45 hover:text-[#0D463E]"}`}>Yearly</button>
            <span className="rounded-full bg-[#D0A86C] px-3 py-1 font-body text-[11px] font-bold text-[#0D463E]">Save 20%</span>
          </div>
        </div>

        <div className="mt-16 grid gap-24 min-[1024px]:mt-20 min-[1024px]:gap-28">
          {feeGroups.map((feeGroup) => (
            <div key={feeGroup.id} id={feeGroup.id}>
              <div className="max-w-4xl">
                <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#B08242]">{feeGroup.eyebrow}</p>
                <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-[#0D463E] sm:text-4xl min-[1024px]:text-[46px]">{feeGroup.title}</h2>
                <p className="mt-4 max-w-3xl font-body text-base leading-7 text-[#0D463E]/65">{feeGroup.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {feeGroup.courses.map((course) => (
                    <span key={course} className="rounded-full border border-[#0D463E]/12 bg-[#FBF6EF] px-3 py-1.5 font-body text-xs font-semibold text-[#0D463E]">{course}</span>
                  ))}
                </div>
              </div>
              <PlanGrid group={feeGroup.group} currency={currency} yearly={yearly} />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-body text-xs leading-6 text-[#0D463E]/50">
          Prices are shown per student, per month. Currency conversion is provided for convenient display; enrollment confirmation includes the final payable amount.
        </p>
      </div>
    </section>
  );
}
