import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import type { FAQ } from "@/components/sections/FAQSection/types";

import BlogsHero from "./BlogsHero";
import BlogsLibrary from "./BlogsLibrary";
import NewsletterCTA from "./NewsletterCTA";

const blogFaqs: FAQ[] = [
  { question: "What topics are covered in the Haramain blog?", answer: "Our articles cover Quran learning, Tajweed, Hifz and memorization, Islamic Studies, children and parenting, duas, guidance, and practical Muslim lifestyle topics." },
  { question: "Who writes the blog articles?", answer: "Articles are prepared by teachers, scholars, and education contributors connected with Haramain Quran Institute. You can filter the library by author." },
  { question: "How do I read a complete article?", answer: "Select any blog card or its read option. The complete article opens in a focused popup with its image, author, reading time, structured sections, and key takeaway." },
  { question: "Can I browse blogs by subject?", answer: "Yes. Use the category switcher to focus on a specific topic, then combine it with Latest, Popular, Featured, or author filters." },
  { question: "How often are new blogs published?", answer: "New articles are added regularly around student questions, seasonal learning needs, Quran study, family guidance, and practical Islamic living." },
  { question: "How can I receive new articles?", answer: "Enter your email in the Stay Connected section to join the newsletter and receive new learning resources and institute updates." },
];

export default function BlogsPage() { return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><BlogsHero /><BlogsLibrary /><NewsletterCTA /><FAQSection id="blogs-faqs" title="Blog FAQs" faqs={blogFaqs} /><SiteFooter /></main>; }
