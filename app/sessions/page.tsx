import type { Metadata } from "next";

import OurSessionsPage from "@/components/sessions/OurSessionsPage";
import { routeSeo, siteUrl } from "@/data/seo";

const sessionsSeo = routeSeo["/our-sessions"];

export const metadata: Metadata = {
  title: sessionsSeo.title,
  description: sessionsSeo.description,
  alternates: { canonical: "/our-sessions" },
  openGraph: {
    title: sessionsSeo.title,
    description: sessionsSeo.description,
    url: `${siteUrl}/our-sessions`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: sessionsSeo.title,
    description: sessionsSeo.description,
  },
};

export default OurSessionsPage;
