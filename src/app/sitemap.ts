import type { MetadataRoute } from "next";

import { categoryList } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = [
    "",
    "/about",
    "/products",
    "/gallery",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...basePages.map((path) => ({
      url: `https://www.smgfashion.co.uk${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...categoryList.map((category) => ({
      url: `https://www.smgfashion.co.uk${category.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
