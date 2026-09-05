import { BookOpenCheck, Globe2, GraduationCap, UsersRound } from "lucide-react";

import { OverviewComposition, type OverviewCounter } from "@/components/course/CourseOverview";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import GallerySection from "@/components/sections/GallerySection";
import IntroSection from "@/components/sections/IntroSection";
import type { FAQ } from "@/components/sections/FAQSection/types";
import galleryData from "@/data/Home/gallerySectionData";

import AboutHero from "./AboutHero";
import AboutPillars from "./AboutPillars";

const achievementCounters: OverviewCounter[] = [
  { value: "400+", label: "Students Supported", icon: UsersRound },
  { value: "25+", label: "Qualified Teachers", icon: GraduationCap },
  { value: "20+", label: "Countries Reached", icon: Globe2 },
  { value: "10+", label: "Structured Programs", icon: BookOpenCheck },
];

const aboutFaqs: FAQ[] = [
  {
    question: "What is Haramain Quran Institute?",
    answer:
      "Haramain Quran Institute is an online Quran and Islamic education institute offering personal classes in Quran reading, Tajweed, memorization, translation, Tafsir, Arabic, and Islamic Studies.",
  },
  {
    question: "Do you teach international students?",
    answer:
      "Yes. Students can join online from the USA, UK, Canada, Australia, UAE, Europe, Gulf countries, and other regions. Suitable class times are confirmed according to the student's time zone and teacher availability.",
  },
  {
    question: "Are male and female teachers available?",
    answer:
      "Yes. Haramain offers male and female teacher options. Families can share their preference during the trial or enrollment process, subject to schedule availability.",
  },
  {
    question: "Who can study with the institute?",
    answer:
      "Children, teenagers, adults, complete beginners, and continuing learners can join. Each student begins from an appropriate level and follows a personal learning plan.",
  },
  {
    question: "How are your online classes taught?",
    answer:
      "Classes are taught live and one-to-one by qualified teachers. Lessons combine explanation, guided practice, correction, revision, and regular progress support.",
  },
  {
    question: "Can students choose their class timings?",
    answer:
      "Yes. Families can discuss suitable days and timings with the enrollment team, subject to teacher availability and the selected weekly plan.",
  },
  {
    question: "Can I meet a teacher before enrolling?",
    answer:
      "Yes. A free trial class allows you to meet a teacher, discuss your goals, assess the current learning level, and confirm the right course and schedule.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <AboutHero />
      <IntroSection
        id="our-message"
        title="Our Message to All"
        description="At Haramain Quran Institute, every student deserves clear, personal, and meaningful Quran learning."
      />
      <OverviewComposition
        id="who-we-are"
        title="Who We Are"
        description="Haramain Quran Institute is an online Quran school serving children and adults worldwide. We help students read, recite, memorize, translate, and understand the Quran while also offering Arabic and Islamic Studies through patient one-to-one guidance."
        imageAlt="The Haramain Quran Institute learning community"
        counters={achievementCounters}
      />
      <AboutPillars />
      <GallerySection id="about-gallery" {...galleryData} />
      <FAQSection id="about-faqs" title="About Haramain FAQs" faqs={aboutFaqs} />
      <SiteFooter />
    </main>
  );
}
