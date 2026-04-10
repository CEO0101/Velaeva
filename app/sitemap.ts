import { MetadataRoute } from "next";
import { getAllArticles } from "./blog/articles-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `https://www.velaeva.com/blog/${article.slug}`,
    lastModified: new Date(article.updatedDate ?? article.publishedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.velaeva.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.velaeva.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articleEntries,
  ];
}
