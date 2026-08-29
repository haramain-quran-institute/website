import CourseFeatures from "./CourseFeatures";
import CourseHero from "./CourseHero";
import CourseOverview from "./CourseOverview";
import CoursePricing from "./CoursePricing";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
import type { CoursePageData } from "@/data/course-pages";
import { startFeatures } from "@/data/start-features";

export default function CoursePage({ course }: { course: CoursePageData }) {
  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <CourseHero course={course} />
      <FeaturesGridSection
        id="how-to-start"
        title="How to Start"
        description="Begin your course with a simple, guided three-step journey."
        features={startFeatures}
      />
      <CourseOverview course={course} />
      <CourseFeatures course={course} />
      <CoursePricing course={course} />
      <FAQSection id="course-faqs" title={`${course.title} FAQs`} faqs={course.faqs} />
      <SiteFooter />
    </main>
  );
}
