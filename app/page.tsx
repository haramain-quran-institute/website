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

export default function Home() {
  return <main id="top" className="w-full"><SiteHeader />
    <HeroSection title={<>Learn the Quran and <span className="font-accent font-normal italic text-[#d0a86c]">Build</span> a Lasting Connection</>} description="Learn Quran reading, Tajweed, memorization, and more with qualified teachers through flexible online classes." btnPrimaryText="Free Trial Class" btnSecondaryText="Explore Courses" btnSecondaryLink="#courses" stats={[{ value: "1:1", label: "Personal Classes" }, { value: "10+", label: "Quran Programs" }, { value: "Global", label: "Flexible Timings" }]} backgroundImg={heroImage} backgroundImgAlt="Haramain Quran Institute online learning" />
    <IntroSection description="At Haramain Quran Institute, we believe every student deserves clear, personal, and meaningful Quran learning." />
    <FeaturesGridSection id="how-to-start" title="How to Start" description="Start learning Quran with a simple, guided three-step journey." features={[{ icon: "bookOpen", title: "Choose Your Course", description: "Explore our courses and choose the learning path that best suits your goals." }, { icon: "calendarCheck", title: "Book Your Free Trial", description: "Experience a free trial class and meet your qualified Quran teacher." }, { icon: "graduationCap", title: "Start Learning", description: "Choose your schedule and begin your Quran learning journey from home." }]} />
    <ServicesSection />
    <GallerySection id="gallery" {...galleryData} />
    <TestimonialsSection id="testimonials" data={testimonialsData} />
    <FAQSection {...faqSectionData} />
    <SiteFooter />
  </main>;
}
