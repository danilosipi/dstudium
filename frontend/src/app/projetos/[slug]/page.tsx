import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/project-detail";
import { getAllProjects, getProjectBySlug } from "@/data/projects";

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
  const canonical = `https://dstudium.com/projetos/${project.slug}`;
  const cover = project.media?.cover;

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
      siteName: "DSTUDIUM",
      locale: "pt_BR",
      type: "website",
      ...(cover
        ? {
            images: [
              {
                url: cover,
                alt: `${project.name} — ${project.subtitle}`,
              },
            ],
          }
        : {}),
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
      <ProjectDetail project={project} />
    </main>
  );
}
