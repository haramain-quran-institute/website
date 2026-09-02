import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQSection from "@/components/sections/FAQSection";
import type { FAQ } from "@/components/sections/FAQSection/types";
import ResourceHero from "./ResourceHero";
import ResourcesLibrary from "./ResourcesLibrary";
import WatchSessionsCTA from "./WatchSessionsCTA";
import type { ResourcePageConfig } from "./resource-data";

export default function ResourcePage({ page }: { page: ResourcePageConfig }) {
  const faqs: FAQ[] = [
    { question: `What resources are available on the ${page.title} page?`, answer: `This page currently includes four carefully prepared PDF resources related to ${page.title}. Use the All, Free, and Paid filters to explore them.` },
    { question: "How do I download a free PDF?", answer: "Choose a free resource, enter your email address and country, then select Download. The PDF will begin downloading after the form is completed." },
    { question: "How can I purchase a paid resource?", answer: "Paid resources offer Credit or Debit Card, PayPal, and Apple Pay options. Live payments require the institute's secure merchant provider to be connected before launch." },
    { question: "Do PayPal and Apple Pay require card details here?", answer: "No. Those choices use their own secure payment flows. Card fields are displayed only when Credit or Debit Card is selected." },
    { question: "Can I read the PDF on a phone or tablet?", answer: "Yes. Every resource is supplied as a standard PDF that can be opened on most phones, tablets, laptops, and desktop computers." },
    { question: "Can these PDFs replace a qualified teacher?", answer: "The resources support study and revision, but personal instruction remains important for recitation correction, detailed questions, and structured progress." },
  ];
  return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><ResourceHero page={page} /><ResourcesLibrary page={page} /><WatchSessionsCTA /><FAQSection id="resource-faqs" title={`${page.title} FAQs`} faqs={faqs} /><SiteFooter /></main>;
}
