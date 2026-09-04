import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";

import { navigationItems, utilityPages } from "@/data/navigation";

const legalLinks = utilityPages.filter((page) => page.section === "Policies");

export default function SitemapDirectory() {
  return (
    <section className="bg-[#FBF6EF] py-16 sm:py-20 min-[1024px]:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#0D706D]">
            Website Directory
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-[#0D463E] sm:text-5xl">
            Find Every Main Page
          </h2>
          <p className="mt-5 font-body text-base leading-7 text-[#161513]/65 sm:text-lg sm:leading-8">
            Browse courses, resources, institute information, support options,
            and policies from one clear directory.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 min-[1024px]:grid-cols-3">
          <section className="rounded-[14px] border border-[#0D463E]/10 bg-[#0D463E] p-6 text-white sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-heading text-2xl font-semibold">Home</h3>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#D0A86C]">
                <Home className="size-5" />
              </span>
            </div>
            <p className="mt-3 font-body text-sm leading-6 text-white/65">
              Begin your Haramain Quran Institute learning journey.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#D0A86C] transition-colors hover:text-white"
            >
              Visit Home <ArrowUpRight className="size-4" />
            </Link>
          </section>

          {navigationItems
            .filter((section) => section.subItems.length > 0)
            .map((section) => (
              <section
                key={section.title}
                className="rounded-[14px] border border-[#0D463E]/10 bg-white p-6 sm:p-7"
              >
                <div className="flex items-center justify-between gap-4 border-b border-[#0D463E]/10 pb-5">
                  <h3 className="font-heading text-2xl font-semibold text-[#0D463E]">
                    {section.title}
                  </h3>
                  <span className="font-body text-xs font-semibold text-[#0D706D]">
                    {section.subItems.length} pages
                  </span>
                </div>
                <ul className="mt-5 space-y-1">
                  {section.subItems.map((item) => (
                    <li key={item.url}>
                      <Link
                        href={item.url}
                        className="group flex items-center justify-between gap-4 rounded-[7px] px-3 py-2.5 font-body text-sm font-medium text-[#161513]/68 transition-colors hover:bg-[#EAF2EF] hover:text-[#0D463E]"
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight className="size-4 shrink-0 text-[#D0A86C] opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

          <section className="rounded-[14px] border border-[#0D463E]/10 bg-white p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-[#0D463E]/10 pb-5">
              <h3 className="font-heading text-2xl font-semibold text-[#0D463E]">
                Policies
              </h3>
              <span className="font-body text-xs font-semibold text-[#0D706D]">
                {legalLinks.length} pages
              </span>
            </div>
            <ul className="mt-5 space-y-1">
              {legalLinks.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="group flex items-center justify-between gap-4 rounded-[7px] px-3 py-2.5 font-body text-sm font-medium text-[#161513]/68 transition-colors hover:bg-[#EAF2EF] hover:text-[#0D463E]"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-[#D0A86C] opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
