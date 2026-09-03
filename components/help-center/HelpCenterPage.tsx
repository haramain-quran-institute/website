import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import type { FAQ } from "@/components/sections/FAQSection/types";

import BranchContacts from "./BranchContacts";
import HelpCenterHero from "./HelpCenterHero";
import SupportForm from "./SupportForm";

const helpCenterFaqs: FAQ[] = [
  { question: "Which Haramain branch should I contact?", answer: "Choose the KSA, UAE, or Pakistan branch closest to your location. If you are unsure, select General support in the form and our team will route your request correctly." },
  { question: "Can I choose how the team replies to me?", answer: "Yes. In the support form you can choose email, phone, or WhatsApp as your preferred reply method." },
  { question: "What can the Help Center assist me with?", answer: "We can help with course selection, free trial classes, class schedules, fee questions, teachers, enrollment, existing student support, and general institute enquiries." },
  { question: "Can I ask about fees or a custom schedule?", answer: "Yes. Share your country, course of interest, student age, and preferred timings so the team can provide accurate current information without guessing." },
  { question: "How do I book a free trial class?", answer: "Use the Book Free Trial button in the website header or footer and select a suitable date and time. You can also ask the Help Center team for assistance." },
  { question: "Is WhatsApp support available?", answer: "You may choose WhatsApp as your preferred reply method and provide a number with its country code. Verified direct branch numbers will appear on this page when configured." },
  { question: "What information should I include in my request?", answer: "Please describe the question clearly and include the relevant course, student age, country or time zone, and any important scheduling details." },
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <HelpCenterHero />
      <BranchContacts />
      <SupportForm />
      <FAQSection id="help-center-faqs" title="Help Center FAQs" faqs={helpCenterFaqs} />
      <SiteFooter />
    </main>
  );
}
