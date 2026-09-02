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
  { icon: "bookOpen" as const, title: "Submit Your Details", description: "Choose a suitable role and share your contact details, experience, qualifications, and CV with our recruitment team." },
  { icon: "calendarCheck" as const, title: "Meet Us for an Interview", description: "Shortlisted candidates join an interview and, where relevant, a teaching demonstration or practical skills assessment." },
  { icon: "graduationCap" as const, title: "Get Hired & Begin", description: "Successful candidates receive an offer, complete onboarding, and begin making a meaningful contribution to our learners." },
];
const benefits: TeacherExpertiseFeature[] = [
  { title: "Purpose-Led Work", description: "Use your skills to help learners build knowledge, confidence, character, and a lasting relationship with the Quran.", icon: HeartHandshake },
  { title: "Global Community", description: "Work with students, families, teachers, and colleagues connected across countries and time zones.", icon: Globe2 },
  { title: "Professional Growth", description: "Strengthen your teaching, communication, leadership, and digital education skills through meaningful experience.", icon: TrendingUp },
  { title: "Flexible Opportunities", description: "Explore remote, onsite, hybrid, full-time, part-time, and contract roles according to the position.", icon: CalendarClock },
  { title: "Supportive Standards", description: "Join a team that values reliable knowledge, respectful communication, student care, and consistent quality.", icon: BookOpenCheck },
];
const careerFaqs: FAQ[] = [
  { question: "How can I apply for a position?", answer: "Choose an open role, select Apply Now, and submit your contact information, relevant experience, qualifications, and CV through the application form." },
  { question: "Can I apply for remote teaching work?", answer: "Yes. Use the Remote filter to see opportunities that can be performed online. Location and availability requirements are shown on each vacancy." },
  { question: "What qualifications do Quran teachers need?", answer: "Teaching roles generally require strong Quran recitation and Tajweed, reliable Islamic knowledge, patient communication, and confidence teaching online. Ijazah or formal qualifications are valuable where specified." },
  { question: "What happens after I submit my application?", answer: "The recruitment team reviews each submission. Shortlisted applicants are contacted for an interview and may be asked to complete a teaching demonstration or role-specific assessment." },
  { question: "Can I apply for more than one role?", answer: "Yes. Submit a separate application for each suitable position so your experience can be assessed against the correct requirements." },
  { question: "Will every applicant receive an interview?", answer: "Interviews are arranged for shortlisted candidates whose qualifications, experience, and availability most closely match the role." },
];

export default function CareerPage() { return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><CareerHero /><FeaturesGridSection id="how-to-apply" title="How to Apply" description="A simple three-step path from your application to joining the Haramain team." features={applySteps} /><JobsBoard /><TeacherExpertiseSection id="why-work-with-us" title="Why Work with Haramain?" description="Join a growing learning community where professional care and meaningful service come together." features={benefits} /><FAQSection id="career-faqs" title="Career FAQs" faqs={careerFaqs} /><SiteFooter /></main>; }
