import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";
import { absoluteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const institutional: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), priority: 1, changeFrequency: "weekly" },
    { url: absoluteUrl("/solucoes"), priority: 0.9, changeFrequency: "monthly" },
    { url: absoluteUrl("/sobre"), priority: 0.8, changeFrequency: "monthly" },
    { url: absoluteUrl("/contato"), priority: 0.7, changeFrequency: "monthly" },
    { url: absoluteUrl("/projetos"), priority: 0.9, changeFrequency: "weekly" },
    {
      url: absoluteUrl("/privacidade"),
      priority: 0.3,
      changeFrequency: "yearly",
    },
    { url: absoluteUrl("/termos"), priority: 0.3, changeFrequency: "yearly" },
  ];

  const projects: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: absoluteUrl(`/projetos/${project.slug}`),
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...institutional, ...projects];
}
