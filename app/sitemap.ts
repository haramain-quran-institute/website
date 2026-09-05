import type { MetadataRoute } from "next";

import { navigationPages } from "@/data/navigation";
import { siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...navigationPages.map((page) => page.url)];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-09-05"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/courses/") ? 0.8 : 0.6,
  }));
}
