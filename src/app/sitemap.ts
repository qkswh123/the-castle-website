import type { MetadataRoute } from "next";
import { navItems } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thecastle-chuncheon.example.com";
  return navItems.map((item) => ({
    url: `${base}${item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
