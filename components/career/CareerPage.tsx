import { BookOpenCheck, CalendarClock, Globe2, HeartHandshake, TrendingUp } from "lucide-react";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import TeacherExpertiseSection, { type TeacherExpertiseFeature } from "@/components/schedule/TeacherExpertiseSection";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
import type { FAQ } from "@/components/sections/FAQSection/types";
import CareerHero from "./CareerHero";
import JobsBoard from "./JobsBoard";

const applySteps = [
  { icon: "bookOpen" as const, title: "Check Open Roles", description: "Visit this page to see whether Haramain Quran Institute is currently accepting applications for a suitable role." },
  { icon: "calendarCheck" as const, title: "Prepare Your Details", description: "Keep your contact details, experience, qualifications, and CV ready for future opportunities." },
  { icon: "graduationCap" as const, title: "Apply When Available", description: "When a position opens, submit your details and our team will review suitable applications." },
];
const benefits: TeacherExpertiseFeature[] = [
  { title: "Purpose-Led Work", description: "Use your skills to help learners build knowledge, confidence, character, and a lasting relationship with the Quran.", icon: HeartHandshake },
  { title: "Global Community", description: "Work with students, families, teachers, and colleagues connected across countries and time zones.", icon: Globe2 },
  { title: "Professional Growth", description: "Strengthen your teaching, communication, leadership, and digital education skills through meaningful experience.", icon: TrendingUp },
  { title: "Flexible Opportunities", description: "Explore remote, onsite, hybrid, full-time, part-time, and contract roles according to the position.", icon: CalendarClock },
  { title: "Supportive Standards", description: "Join a team that values reliable knowledge, respectful communication, student care, and consistent quality.", icon: BookOpenCheck },
];
const careerFaqs: FAQ[] = [
  { question: "Are there any open positions right now?", answer: "No. Haramain Quran Institute does not have open positions available right now. Future opportunities will be shared on this page." },
  { question: "How can I apply when positions open?", answer: "When a role becomes available, follow the application instructions on this page and submit the requested contact details, experience, qualifications, and CV." },
  { question: "Will remote teaching roles be listed here?", answer: "Yes. If remote opportunities become available, they will be listed on this page with the role details and requirements." },
  { question: "What qualifications do Quran teachers need?", answer: "Teaching roles generally require strong Quran recitation and Tajweed, reliable Islamic knowledge, patient communication, and confidence teaching online. Ijazah or formal qualifications are valuable where specified." },
  { question: "What happens after an application is submitted?", answer: "The recruitment team reviews applications for open roles. Shortlisted applicants may be contacted for an interview, teaching demo, or role-specific assessment." },
  { question: "Can I apply for more than one future role?", answer: "Yes. When positions are open, submit a separate application for each suitable role so your experience can be assessed correctly." },
];

export default function CareerPage() { return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><CareerHero /><FeaturesGridSection id="how-to-apply" title="How to Apply" description="A simple three-step path for future Haramain career opportunities." features={applySteps} /><JobsBoard /><TeacherExpertiseSection id="why-work-with-us" title="Why Work with Haramain?" description="Join a growing learning community where professional care and meaningful service come together." features={benefits} /><FAQSection id="career-faqs" title="Career FAQs" faqs={careerFaqs} /><SiteFooter /></main>; }
