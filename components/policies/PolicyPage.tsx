import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import type { PolicyPageData } from "@/data/policies";

import PolicyContent from "./PolicyContent";
import PolicyHero from "./PolicyHero";

export default function PolicyPage({ policy }: { policy: PolicyPageData }) {
  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <PolicyHero
        title={policy.title}
        eyebrow={policy.eyebrow}
        description={policy.description}
      />
      <PolicyContent policy={policy} />
      <SiteFooter />
    </main>
  );
}
