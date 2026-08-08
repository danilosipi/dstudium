import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { IconArrowRight } from "@/components/ui/icons";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      id="projetos"
      className="relative border-b border-border/50 bg-bg-secondary/40 py-10 sm:py-12"
      aria-labelledby="featured-projects-heading"
    >
      <Container>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3 sm:mb-6">
          <h2
            id="featured-projects-heading"
            className="text-sm font-semibold tracking-[0.18em] text-blue-accent uppercase"
          >
            Projetos em destaque
          </h2>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Ver todos os projetos
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-3.5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
