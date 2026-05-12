import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://colorcraft.vercel.app";

  const routes = [
    "",
    "/palette-generator",
    "/gradient-generator",
    "/contrast-checker",
    "/blog",
    "/blog/how-to-choose-colors-like-a-pro",
    "/blog/understanding-color-accessibility",
    "/blog/gradient-trends-2026",
    "/blog/building-brand-color-palette",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
