import { ArrowUpRight, BookHeart, BookOpenCheck, CircleUserRound, GraduationCap, HeartHandshake, Lightbulb, ListChecks, UsersRound } from "lucide-react";

import { OverviewComposition, type OverviewCounter } from "@/components/course/CourseOverview";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import TeacherExpertiseSection, { type TeacherExpertiseFeature } from "@/components/schedule/TeacherExpertiseSection";
import FAQSection from "@/components/sections/FAQSection";
import GallerySection from "@/components/sections/GallerySection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import type { FAQ } from "@/components/sections/FAQSection/types";
import type { ServiceItem } from "@/components/sections/ServicesSection/types";
import galleryData from "@/data/Home/gallerySectionData";
import testimonialsData from "@/data/Home/testimonialsSectionData";

import FreeCoursesHero from "./FreeCoursesHero";

const freeCourses: ServiceItem[] = [
  {
    number: "01",
    title: "Summer Free Course",
    description: "A welcoming seasonal program that helps children and families use the summer break to learn Quran, duas, Islamic manners, and everyday faith through engaging guided lessons.",
    href: "/book-free-trial",
  },
  {
    number: "02",
    title: "Basic Islamic Rules for the Best Islamic Life",
    description: "Learn the essential beliefs, worship, manners, duas, and daily practices that help Muslims live with confidence, purpose, kindness, and a stronger connection to Allah.",
    href: "/book-free-trial",
  },
];

const freeCourseFeatures: TeacherExpertiseFeature[] = [
  { title: "Essential Knowledge", description: "Each course focuses on practical Islamic knowledge that learners can understand, remember, and use in daily life.", icon: BookOpenCheck },
  { title: "Open to Everyone", description: "The programs welcome children, young learners, families, beginners, and anyone seeking a helpful introduction to Islamic learning.", icon: UsersRound },
  { title: "Qualified Guidance", description: "Lessons and materials are shaped with care so learners receive clear, respectful, and reliable guidance.", icon: HeartHandshake },
  { title: "Simple & Engaging", description: "Friendly explanations, meaningful examples, and manageable topics make important lessons easier to follow.", icon: Lightbulb },
  { title: "Faith for Everyday Life", description: "Learning connects belief with worship, character, family life, personal choices, and a lasting love for Islam.", icon: BookHeart },
];

const learningPath: OverviewCounter[] = [
  {
    value: "01",
    label: "Who Are These Courses For?",
    description: "Designed for children, families, beginners, and anyone seeking an accessible foundation in Islamic learning.",
    icon: CircleUserRound,
  },
  {
    value: "02",
    label: "What You’ll Learn",
    description: "Explore essential beliefs, worship, duas, Islamic manners, and practical guidance for everyday Muslim life.",
    icon: ListChecks,
  },
  {
    value: "03",
    label: "How to Join",
    description: "Register your interest through our contact form, and our team will share the next intake and class details.",
    icon: ArrowUpRight,
  },
  {
    value: "04",
    label: "Continue Your Learning Journey",
    description: "Build on your free course with structured Quran, Tajweed, Arabic, memorization, or Islamic Studies lessons.",
    icon: GraduationCap,
  },
];

const freeCoursesFaqs: FAQ[] = [
  { question: "Are these courses completely free?", answer: "Yes. These selected programs are offered without a course fee so more students and families can access essential Islamic learning." },
  { question: "Who can join the free courses?", answer: "Children, teenagers, adults, families, and complete beginners can join. Any age guidance or course-specific requirements will be shared during registration." },
  { question: "What will students learn in the Summer Free Course?", answer: "The summer program introduces Quran learning, selected duas, Islamic manners, worship, and practical faith-based habits through accessible guided lessons." },
  { question: "What does the Basic Islamic Rules course cover?", answer: "It covers essential beliefs, cleanliness, Salah, daily duas, halal and haram awareness, Islamic manners, family responsibilities, and guidance for everyday Muslim life." },
  { question: "Are the free courses taught online?", answer: "Yes. Learning is delivered online, allowing students to join from home. Session details and joining instructions are provided after registration." },
  { question: "Do I need previous Islamic knowledge?", answer: "No. Both courses are designed to be approachable for beginners, while still offering useful reminders and practical guidance for continuing learners." },
  { question: "How can I register?", answer: "Use the Book Free Trial or contact option on this page and tell our team which free course you want to join. We will share the next available intake and schedule." },
];

export default function FreeCoursesPage() {
  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <FreeCoursesHero />
      <IntroSection
        id="why-free-courses"
        title="A Message for Every Learner"
        description="We believe essential Islamic knowledge should be within everyone's reach. These free courses are our way of helping children, families, and new learners build strong foundations, practice faith with confidence, and bring Islamic values into everyday life."
      />
      <ServicesSection
        id="free-course-programs"
        title="Our Free Courses"
        description="Choose a welcoming learning path and begin building practical Islamic knowledge with clear, supportive guidance."
        services={freeCourses}
      />
      <OverviewComposition
        id="free-course-learning-path"
        title="A Simple Path into Islamic Learning"
        description="These free courses are created for children, families, beginners, and anyone who wants to strengthen essential Islamic knowledge. You will learn practical beliefs, worship, manners, duas, and daily guidance; joining begins with a simple registration, and every lesson can become the first step toward a deeper, structured learning journey with Haramain Quran Institute."
        imageAlt="A welcoming path through free Islamic learning"
        counters={learningPath}
      />
      <TeacherExpertiseSection
        id="free-course-benefits"
        title="Why Choose Our Free Courses?"
        description="These programs are carefully focused on the knowledge, habits, and values that create a confident foundation for Islamic life."
        features={freeCourseFeatures}
      />
      <GallerySection id="free-courses-gallery" {...galleryData} />
      <TestimonialsSection id="free-courses-testimonials" data={testimonialsData} />
      <FAQSection id="free-courses-faqs" title="Free Courses FAQs" faqs={freeCoursesFaqs} />
      <SiteFooter />
    </main>
  );
}
