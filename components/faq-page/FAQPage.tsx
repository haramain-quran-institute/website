import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import FAQHero from "./FAQHero";
import FAQHub from "./FAQHub";

export default function FAQPage() { return <main className="min-h-screen bg-[#FBF6EF]"><SiteHeader /><FAQHero /><FAQHub /><SiteFooter /></main>; }
