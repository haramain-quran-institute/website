import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import type { PolicyPageData } from "@/data/policies";
import privacyPolicyHero from "@/assets/PrivacyPolicy-Images/hero.webp";
import termsAndConditionsHero from "@/assets/TermsAndConditions-Images/hero.webp";
import paymentPolicyHero from "@/assets/PaymentPolicy-Images/hero.webp";

import PolicyContent from "./PolicyContent";
import PolicyHero from "./PolicyHero";

export default function PolicyPage({ policy }: { policy: PolicyPageData }) {
  const heroImage =
    policy.url === "/terms-and-conditions"
      ? termsAndConditionsHero
      : policy.url === "/payment-policy"
        ? paymentPolicyHero
        : privacyPolicyHero;

  return (
    <main className="min-h-screen bg-[#FBF6EF]">
      <SiteHeader />
      <PolicyHero
        title={policy.title}
        eyebrow={policy.eyebrow}
        description={policy.description}
        heroImage={heroImage}
      />
      <PolicyContent policy={policy} />
      <SiteFooter />
    </main>
  );
}
