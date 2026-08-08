import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/project-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import {
  absoluteUrl,
  defaultSocialImages,
  siteConfig,
} from "@/data/seo";
import { createProjectStructuredData } from "@/data/structured-data";

export const dynamicParams = false;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | DSTUDIUM",
    };
  }

  const title =
    project.seo?.title ?? `${project.subtitle || project.name} | Projeto DSTUDIUM`;
  const description = project.seo?.description ?? project.shortDescription;
  const canonical = absoluteUrl(`/projetos/${project.slug}`);
  const cover = project.media?.cover;
  const images = cover
    ? [
        {
          url: cover,
          alt: `${project.name} — ${project.subtitle}`,
        },
      ]
    : defaultSocialImages(`${project.name} — ${project.subtitle}`);
  const twitterImage = cover ?? siteConfig.defaultOgImage;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1">
      <JsonLd data={createProjectStructuredData(project)} />
      <ProjectDetail project={project} />
    </main>
  );
}
