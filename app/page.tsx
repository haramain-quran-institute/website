import type { Metadata } from "next";
import HeroSection from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import faqSectionData from "@/data/Home/faqSectionData";
import galleryData from "@/data/Home/gallerySectionData";
import testimonialsData from "@/data/Home/testimonialsSectionData";
import heroImage from "@/assets/gallery-1.jpg";
import { routeSeo, siteUrl } from "@/data/seo";

const homeSeo = routeSeo["/"];

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: homeSeo.title,
    description: homeSeo.description,
  },
};

export default function Home() {
  return <main id="top" className="w-full"><SiteHeader />
    <HeroSection title={<>Learn Quran Online and <span className="font-accent font-normal italic text-[#d0a86c]">Build</span> a Lasting Connection</>} description="Join one-to-one online Quran classes for children and adults worldwide. Study Quran reading, Tajweed, Hifz, Arabic, and Islamic Studies with flexible schedules and male or female teachers." btnPrimaryText="Book a Free Trial Class" btnSecondaryText="Explore Quran Courses" btnSecondaryLink="#courses" stats={[{ value: "1:1", label: "Online Classes" }, { value: "10+", label: "Learning Programs" }, { value: "Global", label: "Flexible Timings" }]} backgroundImg={heroImage} backgroundImgAlt="Student learning Quran online with Haramain Quran Institute" />
    <IntroSection compactBottom description="Haramain Quran Institute is an online Quran and Islamic education institute serving children and adults worldwide. Students follow structured, personal learning paths with qualified teachers and flexible class times." />
    <FeaturesGridSection compactTop id="how-to-start" title="How to Start" description="Start learning Quran online through three clear steps." features={[{ icon: "bookOpen", title: "Choose Your Course", description: "Compare Quran and Islamic Studies courses for your age, current level, and learning goal." }, { icon: "calendarCheck", title: "Book Your Free Trial", description: "Meet a teacher, discuss your level and schedule, and experience a personal online lesson." }, { icon: "graduationCap", title: "Start Learning", description: "Confirm your teacher and class times, then begin regular one-to-one learning from home." }]} />
    <ServicesSection />
    <GallerySection id="gallery" {...galleryData} />
    <TestimonialsSection id="testimonials" data={testimonialsData} />
    <FAQSection {...faqSectionData} />
    <SiteFooter />
  </main>;
}
