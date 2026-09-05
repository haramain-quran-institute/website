import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Libre_Baskerville } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { FormProvider } from "@/context/FormPopupContext";
import FloatingChatButton from "@/components/chat/FloatingChatButton";
import IntroLoader from "@/components/layout/IntroLoader";
import StructuredData from "@/components/seo/StructuredData";
import { instituteContact, instituteSocialLinks } from "@/data/site-contact";
import { routeSeo, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: routeSeo["/"].title,
    template: "%s",
  },
  description: routeSeo["/"].description,
  applicationName: "Haramain Quran Institute",
  openGraph: {
    type: "website",
    siteName: "Haramain Quran Institute",
    title: routeSeo["/"].title,
    description: routeSeo["/"].description,
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: routeSeo["/"].title,
    description: routeSeo["/"].description,
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Haramain Quran Institute",
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      description: routeSeo["/"].description,
      email: instituteContact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Makkah Al-Mukarramah",
        addressCountry: "SA",
      },
      areaServed: [
        "Worldwide",
        "Saudi Arabia",
        "United Arab Emirates",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Europe",
        "Gulf countries",
      ],
      sameAs: Object.values(instituteSocialLinks),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "student support",
        email: instituteContact.email,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Haramain Quran Institute",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-heading" });
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], display: "swap", variable: "--font-accent" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-body" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${libre.variable} ${inter.variable}`}
    >
      <body className={`${inter.className} haramain-loader-active`}>
        <StructuredData data={organizationData} />
        <IntroLoader />
        <FormProvider>
          {children}
          <FloatingChatButton />
        </FormProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
