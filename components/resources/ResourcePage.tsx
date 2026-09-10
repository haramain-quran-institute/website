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
    { question: `What resources are available on the ${page.title} page?`, answer: `This page currently lists four free learning resources related to ${page.title}. They are being prepared and will be available soon.` },
    { question: "Can I download the resources right now?", answer: "Not yet. Select Download to see the coming soon notice. The files will be added when they are ready for students." },
    { question: "Are these resources paid?", answer: "No. The listed resources are marked as free while the downloads are being prepared." },
    { question: "Will these resources work on phones and tablets?", answer: "Yes. Once published, the learning resources will be prepared for convenient study on common devices." },
    { question: "Can these resources replace a qualified teacher?", answer: "The resources support study and revision, but personal instruction remains important for recitation correction, detailed questions, and structured progress." },
  ];
  return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><ResourceHero page={page} /><ResourcesLibrary page={page} /><WatchSessionsCTA /><FAQSection id="resource-faqs" title={`${page.title} FAQs`} faqs={faqs} /><SiteFooter /></main>;
}
