import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, HeartHandshake } from "lucide-react";

import heroImage from "@/assets/gallery-2.jpg";
import { navigationItems, type NavigationItem } from "@/data/navigation";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

interface ContentPageProps {
  page: NavigationItem & { section: string };
}

const sectionCopy: Record<string, { intro: string; points: Array<{ title: string; text: string }> }> = {
  Courses: {
    intro: "Every lesson is shaped around the learner's current level, goals, and pace. Our teachers combine clear instruction with patient, consistent guidance.",
    points: [
      { title: "Personal Learning", text: "One-to-one attention and a learning plan suited to your level." },
      { title: "Flexible Timings", text: "Choose class times that work comfortably with your routine." },
      { title: "Qualified Teachers", text: "Learn with caring tutors experienced in online Quran education." },
    ],
  },
  "Fee & Schedule": {
    intro: "We make online Quran learning easy to plan with flexible schedules, clear options, and support before your first lesson.",
    points: [
      { title: "Clear Options", text: "Simple information designed to help families choose confidently." },
      { title: "Flexible Planning", text: "Class timings can be arranged around school, work, and family life." },
      { title: "Personal Support", text: "Our team can help you select the most suitable starting point." },
    ],
  },
  Resources: {
    intro: "Use our carefully selected learning materials to support Quran study, Islamic knowledge, and practice between live lessons.",
    points: [
      { title: "Easy to Follow", text: "Clear resources suitable for students and families." },
      { title: "Learning Support", text: "Materials selected to complement structured lessons." },
      { title: "Study Anywhere", text: "Keep useful Islamic learning guidance close at hand." },
    ],
  },
  About: {
    intro: "Haramain Quran Institute is built around meaningful learning, respectful teaching, and a sincere commitment to every student's progress.",
    points: [
      { title: "Student Focused", text: "Every learner is treated with patience, care, and encouragement." },
      { title: "Trusted Guidance", text: "Our approach combines Islamic values with clear online teaching." },
      { title: "Global Community", text: "We welcome students and families from around the world." },
    ],
  },
  "Contact Us": {
    intro: "Our support team is ready to answer your questions, help you choose a course, and arrange a complimentary trial class.",
    points: [
      { title: "Friendly Support", text: "Speak with someone who understands your learning needs." },
      { title: "Quick Guidance", text: "Get help with courses, timings, fees, and enrolment." },
      { title: "Free Trial", text: "Meet a teacher and experience a lesson before you decide." },
    ],
  },
};

export function ContentPage({ page }: ContentPageProps) {
  const content = sectionCopy[page.section] ?? sectionCopy.About;
  const related = navigationItems.find((section) => section.title === page.section)?.subItems ?? [];

  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />

      <section className="relative flex min-h-[560px] items-end overflow-hidden pb-20 pt-40 text-white md:min-h-[620px] md:pb-24">
        <Image src={heroImage} alt="Haramain Quran Institute learning" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021C18]/95 via-[#062E28]/80 to-[#0D463E]/35" />
        <div className="container relative z-10">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#D0A86C]">{page.section}</p>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{page.description}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid items-start gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-[#B08242]">Haramain Quran Institute</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium leading-tight text-[#0D463E] sm:text-5xl">
              Learn with clarity, care, and consistency.
            </h2>
            <p className="mt-6 max-w-3xl font-body text-lg leading-8 text-[#0D463E]/75">{content.intro}</p>
            <Link href="/book-free-trial" className="mt-9 inline-flex items-center gap-3 rounded-[4px] bg-[#0D463E] px-7 py-4 font-body text-sm font-semibold text-white transition-colors hover:bg-[#146154]">
              Book a Free Trial <ArrowRight className="size-4" />
            </Link>
          </div>

          <aside className="rounded-[6px] border border-[#0D463E]/10 bg-white p-7 shadow-[0_16px_50px_rgba(13,70,62,0.08)] sm:p-9">
            <h2 className="font-heading text-2xl font-semibold text-[#0D463E]">Explore {page.section}</h2>
            <nav className="mt-5 grid gap-1" aria-label={`More ${page.section} pages`}>
              {related.map((item) => (
                <Link key={item.url} href={item.url} className={`flex items-center justify-between rounded-[4px] px-4 py-3 font-body text-sm transition-colors ${item.url === page.url ? "bg-[#0D463E] text-white" : "text-[#0D463E] hover:bg-[#0D463E]/5"}`}>
                  {item.title}<ArrowRight className="size-4" />
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container grid gap-6 md:grid-cols-3">
          {content.points.map((point, index) => {
            const Icon = [BookOpen, CalendarDays, HeartHandshake][index];
            return (
              <article key={point.title} className="rounded-[6px] border border-[#0D463E]/10 p-7 md:p-9">
                <Icon className="size-8 text-[#0D706D]" />
                <h3 className="mt-7 font-heading text-2xl font-semibold text-[#0D463E]">{point.title}</h3>
                <p className="mt-3 font-body leading-7 text-[#0D463E]/65">{point.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0D463E] py-20 text-center text-white md:py-24">
        <div className="container flex flex-col items-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#D0A86C]">Take the first step</p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium leading-tight sm:text-5xl">Begin your Quran learning journey today.</h2>
          <p className="mt-5 max-w-2xl font-body leading-7 text-white/70">Meet a qualified teacher, discuss your goals, and experience a complimentary online lesson.</p>
          <Link href="/book-free-trial" className="mt-8 inline-flex items-center gap-3 rounded-[4px] bg-[#FBF6EF] px-7 py-4 font-body text-sm font-semibold text-[#0D463E] hover:bg-[#D0A86C] hover:text-white">
            Request Your Trial <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
