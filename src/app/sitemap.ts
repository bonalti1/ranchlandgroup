import type { MetadataRoute } from "next";
import { listings } from "@/data/listings";
import { counties } from "@/data/counties";

const BASE = "https://ranchlandgroup.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/listings`, priority: 0.9 },
    { url: `${BASE}/about`, priority: 0.6 },
    { url: `${BASE}/shop`, priority: 0.5 },
    { url: `${BASE}/contact`, priority: 0.6 },
  ];
  const listingPages: MetadataRoute.Sitemap = listings.map((l) => ({
    url: `${BASE}/listings/${l.slug}`,
    priority: 0.8,
  }));
  const countyPages: MetadataRoute.Sitemap = counties.map((c) => ({
    url: `${BASE}/ranches-for-sale/${c.slug}`,
    priority: 0.8,
  }));
  return [...pages, ...listingPages, ...countyPages];
}
