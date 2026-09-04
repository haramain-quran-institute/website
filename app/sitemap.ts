import type { MetadataRoute } from "next";

import { navigationPages } from "@/data/navigation";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://haramainquraninstitute.com"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...navigationPages.map((page) => page.url)];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-09-04"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/courses/") ? 0.8 : 0.6,
  }));
}
