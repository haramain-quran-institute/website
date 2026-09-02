import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import type { FAQ } from "@/components/sections/FAQSection/types";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
import BookTrialHero from "./BookTrialHero";
import TrialBookingEmbed from "./TrialBookingEmbed";

const steps = [
  { title: "Choose Your Date", description: "Select an available day and choose your city or time zone so every appointment is shown in your correct local time.", icon: "calendarCheck" as const },
  { title: "Select a Time", description: "Pick a convenient 30-minute slot. We automatically convert it to Pakistan time for our teaching team.", icon: "bookOpen" as const },
  { title: "Confirm Your Details", description: "Tell us about the learner, course interest, and preferred contact method, then receive your booking confirmation by email.", icon: "graduationCap" as const },
];
const faqs: FAQ[] = [
  { question: "Is the trial class completely free?", answer: "Yes. The 30-minute trial class is free and there is no obligation to enroll afterward." },
  { question: "How do I book a free trial class?", answer: "Choose a date, select an available time in your local time zone, enter the learner's details, and confirm the booking." },
  { question: "Will the displayed time match my country?", answer: "Yes. The scheduler detects your time zone and lets you change it. You see your local time while our team receives the corresponding Pakistan time." },
  { question: "Which platform is used for the trial?", answer: "Trial classes are normally held online through Google Meet. Connection details are included with the booking confirmation." },
  { question: "Can I request a male or female teacher?", answer: "Yes. Add your preference in the notes and we will make every effort to arrange a suitable teacher." },
  { question: "Can I choose a course for the trial?", answer: "Yes. Select your preferred course in the form so the teacher can prepare an appropriate introductory lesson." },
  { question: "What happens after I confirm the booking?", answer: "You and our team receive the appointment information by email. After confirmation, the page briefly thanks you and takes you to Our Sessions." },
];

export default function BookTrialPage() {
  return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><BookTrialHero /><FeaturesGridSection id="how-to-book" title="How to Book" description="Reserve your free online Quran trial in three simple steps." features={steps} /><TrialBookingEmbed /><FAQSection id="book-trial-faqs" title="Book Free Trial FAQs" faqs={faqs} /><SiteFooter /></main>;
}
