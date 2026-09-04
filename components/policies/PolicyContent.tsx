import { CalendarDays, FileText } from "lucide-react";

import type { PolicyPageData } from "@/data/policies";

export default function PolicyContent({ policy }: { policy: PolicyPageData }) {
  return (
    <section className="bg-[#FBF6EF] py-16 sm:py-20 min-[1024px]:py-24">
      <div className="container">
        <div className="rounded-[14px] border border-[#0D463E]/10 bg-white p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#0D463E] text-[#D0A86C]">
                <FileText className="size-5" />
              </span>
              <div>
                <p className="font-heading text-xl font-semibold text-[#0D463E]">
                  {policy.title}
                </p>
                <p className="mt-1 max-w-3xl font-body text-sm leading-6 text-[#161513]/60">
                  Please read this page together with any course, enrollment, or invoice details provided directly by Haramain Quran Institute.
                </p>
              </div>
            </div>
            <p className="inline-flex shrink-0 items-center gap-2 font-body text-sm font-medium text-[#0D463E]/65">
              <CalendarDays className="size-4 text-[#0D706D]" /> Last updated {policy.updated}
            </p>
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 min-[1024px]:grid-cols-[280px_minmax(0,1fr)] min-[1200px]:gap-12">
          <aside className="rounded-[14px] border border-[#0D463E]/10 bg-white p-6 min-[1024px]:sticky min-[1024px]:top-28">
            <h2 className="font-heading text-xl font-semibold text-[#0D463E]">
              On this page
            </h2>
            <nav
              aria-label={`${policy.title} contents`}
              className="mt-5 max-h-[390px] overflow-y-auto pr-2 min-[1024px]:max-h-[calc(100vh-13rem)]"
            >
              <ol className="space-y-3">
                {policy.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-3 font-body text-sm leading-5 text-[#161513]/62 transition-colors hover:text-[#0D463E]"
                    >
                      <span className="w-5 shrink-0 text-right font-semibold text-[#D0A86C]">
                        {index + 1}.
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 overflow-hidden rounded-[14px] border border-[#0D463E]/10 bg-white px-5 py-2 sm:px-8 min-[1200px]:px-12">
            {policy.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-[#0D463E]/10 py-9 last:border-b-0 sm:py-10"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-[#EAF2EF] font-body text-xs font-bold text-[#0D706D]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-heading text-2xl font-semibold leading-tight text-[#0D463E] sm:text-[28px]">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="font-body text-[15px] leading-7 text-[#161513]/70 sm:text-base sm:leading-8"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 font-body text-[15px] leading-7 text-[#161513]/70 sm:text-base"
                          >
                            <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-[#D0A86C]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
