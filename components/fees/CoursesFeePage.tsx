import { OverviewComposition } from "@/components/course/CourseOverview";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
import type { FAQ } from "@/components/sections/FAQSection/types";
import { startFeatures } from "@/data/start-features";

import CoursesFeeHero from "./CoursesFeeHero";
import CoursesFeePricing from "./CoursesFeePricing";

const coursesFeeFaqs: FAQ[] = [
  {
    question: "Which courses use the basic fee plans?",
    answer:
      "The basic fee plans apply to Noorani Qaida, Quran Reading, Nasheed Reciting, and Women Guidance.",
  },
  {
    question: "Which courses use the other course fee plans?",
    answer:
      "The other course fees apply to Quran Memorization, Quran Translation, Qirat & Tajweed, Tafsir, Arabic Language, and Islamic Studies.",
  },
  {
    question: "How does the yearly discount work?",
    answer:
      "Select yearly billing and every displayed monthly price is automatically reduced by 20%. The enrollment team will confirm the yearly payment schedule before you begin.",
  },
  {
    question: "Can I view the fees in my local currency?",
    answer:
      "Yes. Use the currency selector to view estimated fees in USD, AUD, PKR, or CAD. Your final confirmation will include the exact payable amount.",
  },
  {
    question: "Can I choose a weekend-only plan?",
    answer:
      "Yes. Both fee groups include a two-day weekend plan for families and learners who prefer Saturday and Sunday classes.",
  },
];

export default function CoursesFeePage() {
  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <CoursesFeeHero />
      <FeaturesGridSection
        id="how-to-start"
        title="How to Start"
        description="Begin your Quran learning journey in three clear and supportive steps."
        features={startFeatures}
      />
      <CoursesFeePricing />
      <OverviewComposition
        id="why-choose-haramain"
        title="Why Choose Haramain Quran Institute?"
        description="Our qualified teachers combine one-to-one attention, flexible scheduling, clear fee plans, and consistent progress guidance. Every learner receives a structured experience shaped around their level, goals, and routine."
        imageAlt="Why families choose Haramain Quran Institute"
      />
      <FAQSection id="courses-fee-faqs" title="Courses Fee FAQs" faqs={coursesFeeFaqs} />
      <SiteFooter />
    </main>
  );
}
