import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import PolicyHero from "@/components/policies/PolicyHero";

import SitemapDirectory from "./SitemapDirectory";

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <PolicyHero
        title="Sitemap"
        eyebrow="Explore Haramain"
        description="Find courses, learning resources, institute information, support, and important policies across the complete Haramain Quran Institute website."
      />
      <SitemapDirectory />
      <SiteFooter />
    </main>
  );
}
