import { BadgeCheck, BookOpenCheck, ClipboardCheck, Presentation, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import TeacherExpertiseSection, { type TeacherExpertiseFeature } from "@/components/schedule/TeacherExpertiseSection";
import FAQSection from "@/components/sections/FAQSection";
import IntroSection from "@/components/sections/IntroSection";
import type { FAQ } from "@/components/sections/FAQSection/types";
import TeachersGrid from "./TeachersGrid";
import TeachersHero from "./TeachersHero";

const selectionFeatures: TeacherExpertiseFeature[] = [
  { title: "Qualification Review", description: "We review Quranic education, Tajweed knowledge, Ijazah where applicable, Islamic studies background, and relevant teaching credentials.", icon: BadgeCheck },
  { title: "Interview & Quran Assessment", description: "Candidates complete a structured interview and live assessment of recitation, pronunciation, Tajweed, knowledge, and communication.", icon: BookOpenCheck },
  { title: "Teaching Demonstration", description: "Every shortlisted teacher delivers a sample lesson so we can evaluate clarity, patience, correction, pacing, and student engagement.", icon: Presentation },
  { title: "Background & Experience Review", description: "We examine previous roles, learner age groups, online teaching experience, references, reliability, and professional conduct.", icon: ShieldCheck },
  { title: "Ongoing Quality Review", description: "Teacher performance, student experience, punctuality, lesson quality, and development needs continue to be monitored after selection.", icon: ClipboardCheck },
];
const teacherFaqs: FAQ[] = [
  { question: "How do you select Quran teachers?", answer: "Candidates complete qualification screening, an interview, Quran and Tajweed assessment, teaching demonstration, and experience or background review before selection." },
  { question: "Are your teachers qualified in Tajweed?", answer: "Teachers assigned to Tajweed and recitation courses are assessed for correct pronunciation, articulation, applied rules, listening accuracy, and their ability to explain corrections clearly." },
  { question: "Do you have Ijazah-certified teachers?", answer: "Ijazah-certified teachers may be available for suitable programs. Share this preference during enrollment so the team can confirm the right match." },
  { question: "Can I choose a male or female teacher?", answer: "Yes. Male and female teachers are available, and we make every effort to match the learner's stated preference with a suitable schedule." },
  { question: "Can teachers work with complete beginners and children?", answer: "Yes. Selected teachers have experience adapting lesson length, language, explanation, practice, and encouragement for different ages and starting levels." },
  { question: "Can I change teachers if the match is not suitable?", answer: "Yes. Contact student support to discuss the concern. The team will review the situation and help arrange an appropriate solution where possible." },
];

export default function TeachersPage() { return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><TeachersHero /><IntroSection id="teacher-message" title="A Message for Every Student" description="The right teacher can transform a lesson into a relationship with knowledge. We select educators who combine sound Quranic learning with patience, respect, careful correction, and sincere attention to every student's progress." /><TeachersGrid /><TeacherExpertiseSection id="teacher-selection" title="How We Select Our Teachers" description="Every educator moves through a careful process designed to protect teaching quality, student comfort, and reliable Quran learning." features={selectionFeatures} /><FAQSection id="teachers-faqs" title="Our Teachers FAQs" faqs={teacherFaqs} /><SiteFooter /></main>; }
