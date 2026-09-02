import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
import type { FAQ } from "@/components/sections/FAQSection/types";

import OurSessionsHero from "./OurSessionsHero";
import SessionsGallery from "./SessionsGallery";
import SocialFollowCTA from "./SocialFollowCTA";

const viewerSteps = [
  { icon: "bookOpen" as const, title: "Learn Something Valuable", description: "Discover clear Quran, Tajweed, and Islamic guidance in short videos that fit naturally into your day." },
  { icon: "calendarCheck" as const, title: "Watch at Your Own Pace", description: "Filter by topic or teacher and choose the sessions most useful for your current learning journey." },
  { icon: "graduationCap" as const, title: "Grow with Every Reminder", description: "Turn small moments of beneficial knowledge into stronger practice, character, and connection with faith." },
];

const sessionsFaqs: FAQ[] = [
  { question: "What kind of videos can I watch here?", answer: "You can explore Quran recitations, Tajweed tips, Islamic guidance, short reminders, children’s learning videos, lectures, and motivational sessions." },
  { question: "Can I filter sessions by topic?", answer: "Yes. Use the category switcher to view all sessions or focus on Quran, Tajweed, Islamic Guidance, Short Reminders, Kids, Lectures, or Motivations." },
  { question: "Can I choose a specific scholar or teacher?", answer: "Yes. The teacher dropdown lets you view sessions from a selected scholar or teacher, while the default option displays everyone." },
  { question: "How are Latest, Popular, and Oldest determined?", answer: "Latest and Oldest arrange sessions by publication order, while Popular highlights the videos receiving the strongest viewer interest." },
  { question: "Where are the full videos hosted?", answer: "Our session library can feature social videos and YouTube Shorts. Selecting a card opens the video in a focused vertical player." },
  { question: "How can I receive new videos?", answer: "Follow Haramain Quran Institute through the social links on this page to receive new lessons, reminders, recitations, and institute updates." },
];

export default function OurSessionsPage() {
  return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><OurSessionsHero /><FeaturesGridSection id="why-watch" title="Why Watch Our Sessions?" description="Three simple reasons to make beneficial Islamic videos part of your learning routine." features={viewerSteps} /><SessionsGallery /><SocialFollowCTA /><FAQSection id="our-sessions-faqs" title="Our Sessions FAQs" faqs={sessionsFaqs} /><SiteFooter /></main>;
}
