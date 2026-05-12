import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://colorcraft.vercel.app";

  const routes = [
    "",
    "/palette-generator",
    "/gradient-generator",
    "/contrast-checker",
    "/color-picker",
    "/color-code-converter",
    "/color-shades-generator",
    "/tint-and-tone-generator",
    "/random-color-palette",
    "/image-to-palette-extractor",
    "/complementary-color-finder",
    "/color-harmony-generator",
    "/color-wheel",
    "/color-mixer",
    "/pastel-color-generator",
    "/neon-color-generator",
    "/tailwind-css-color-generator",
    "/color-name-finder",
    "/color-blindness-simulator",
    "/color-gradient-animator",
    "/multi-color-gradient-generator",
    "/glassmorphism-color-generator",
    "/blog",
    "/blog/best-color-combinations-for-websites-2026",
    "/blog/what-is-color-theory",
    "/blog/how-to-use-contrast-checker",
    "/blog/css-gradient-guide",
    "/blog/how-to-choose-colors-like-a-pro",
    "/blog/understanding-color-accessibility",
    "/blog/gradient-trends-2026",
    "/blog/building-brand-color-palette",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms-conditions",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
