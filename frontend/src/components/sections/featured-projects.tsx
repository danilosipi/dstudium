import Link from "next/link";
import { Container } from "@/components/layout/container";
import { IconArrowRight } from "@/components/ui/icons";
import { featuredProjects } from "@/data/projects";
import type { FeaturedProject } from "@/types";

const accentStyles: Record<
  FeaturedProject["accent"],
  { glow: string; badge: string; bar: string; thumb: string }
> = {
  purple: {
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.18)]",
    badge: "bg-accent-purple/15 text-accent-purple",
    bar: "from-accent-purple/80 to-accent-violet/40",
    thumb: "from-accent-purple/40 via-surface to-bg-secondary",
  },
  blue: {
    glow: "shadow-[0_0_40px_rgba(94,162,255,0.18)]",
    badge: "bg-blue-accent/15 text-blue-accent",
    bar: "from-blue-accent/80 to-blue-primary/40",
    thumb: "from-blue-accent/35 via-surface to-bg-secondary",
  },
  orange: {
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.16)]",
    badge: "bg-accent-orange/15 text-accent-orange",
    bar: "from-accent-orange/80 to-accent-orange/30",
    thumb: "from-accent-orange/35 via-surface to-bg-secondary",
  },
};

function ProjectThumb({ accent }: { accent: FeaturedProject["accent"] }) {
  const styles = accentStyles[accent];
  return (
    <div
      className={`relative mb-4 h-28 overflow-hidden rounded-lg border border-border/70 bg-gradient-to-br ${styles.thumb}`}
      aria-hidden
    >
      <div className="absolute inset-x-4 top-4 h-2 rounded-full bg-white/10" />
      <div className="absolute inset-x-4 top-9 h-2 w-2/3 rounded-full bg-white/8" />
      <div className="absolute bottom-3 left-4 right-4 grid grid-cols-3 gap-2">
        <div className="h-10 rounded-md bg-white/8" />
        <div className="h-10 rounded-md bg-white/10" />
        <div className="h-10 rounded-md bg-white/6" />
      </div>
      <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${styles.bar}`} />
    </div>
  );
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  const styles = accentStyles[project.accent];

  return (
    <article
      className={`glass-panel group rounded-xl p-5 transition-transform duration-200 hover:-translate-y-0.5 ${styles.glow}`}
    >
      <ProjectThumb accent={project.accent} />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-text-primary">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-text-secondary">{project.subtitle}</p>
        </div>
        <span
          className={`inline-flex rounded-full border border-current/20 px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase ${styles.badge}`}
          aria-label={`Status: ${project.status}`}
        >
          {project.status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-md border border-border px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
          {project.tag}
        </span>
        <Link
          href="#projetos"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors group-hover:border-blue-accent group-hover:text-blue-accent"
          aria-label={`Ver projeto ${project.name}`}
        >
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <section
      id="projetos"
      className="relative border-b border-border/50 bg-bg-secondary/40 py-12 sm:py-14"
      aria-labelledby="featured-projects-heading"
    >
      <Container>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <h2
            id="featured-projects-heading"
            className="text-sm font-semibold tracking-[0.18em] text-blue-accent uppercase"
          >
            Projetos em destaque
          </h2>
          <Link
            href="#projetos"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Ver todos os projetos
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
