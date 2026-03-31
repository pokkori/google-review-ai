import { MetadataRoute } from "next";

const BASE_URL = "https://google-review-ai.vercel.app";

const keywordSlugs = [
  "google-review-henshin-rei",
  "negative-review-taio-houhou",
  "google-map-review-kanri",
  "restaurant-review-henshin",
  "medical-review-taio",
  "beauty-salon-review-reply",
  "google-review-sakujo-houhou",
  "low-rating-recover-strategy",
  "review-management-best-practice",
  "google-business-hyoka-ageru",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tool`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/legal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const keywordPages: MetadataRoute.Sitemap = keywordSlugs.map((slug) => ({
    url: `${BASE_URL}/keywords/${slug}`,
    lastModified: new Date("2026-03-31"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...keywordPages];
}
