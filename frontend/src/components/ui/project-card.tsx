import type { ReactNode } from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconCalendar,
  IconChart,
  IconLink,
} from "@/components/ui/icons";
import { ProjectPreviewVisual } from "@/components/ui/project-previews";
import {
  getProjectCategoryLabel,
  getProjectStatusLabel,
} from "@/data/projects";
import type { Project, ProjectAccent, ProjectIcon } from "@/types";

const accentStyles: Record<
  ProjectAccent,
  {
    glow: string;
    iconWrap: string;
    iconColor: string;
  }
> = {
  purple: {
    glow: "shadow-[0_0_28px_rgba(139,92,246,0.22)]",
    iconWrap: "bg-accent-purple/15 ring-accent-purple/35",
    iconColor: "text-accent-violet",
  },
  blue: {
    glow: "shadow-[0_0_28px_rgba(94,162,255,0.22)]",
    iconWrap: "bg-blue-accent/15 ring-blue-accent/35",
    iconColor: "text-blue-accent",
  },
  orange: {
    glow: "shadow-[0_0_28px_rgba(245,158,11,0.2)]",
    iconWrap: "bg-accent-orange/15 ring-accent-orange/35",
    iconColor: "text-accent-orange",
  },
};

const iconMap: Record<
  ProjectIcon,
  (props: { className?: string }) => ReactNode
> = {
  calendar: IconCalendar,
  link: IconLink,
  chart: IconChart,
};

export function ProjectCard({ project }: { project: Project }) {
  const styles = accentStyles[project.accent];
  const Icon = iconMap[project.icon];
  const categoryLabel = getProjectCategoryLabel(project.category);
  const statusLabel = getProjectStatusLabel(project.status);

  return (
    <article
      className={`group flex h-full flex-col rounded-xl border border-[#24315F] bg-[#0B1024] p-[18px] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#3a4d8a] sm:p-5 ${styles.glow}`}
    >
      <div className="project-card-content flex h-full min-h-0 flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3.5">
        <div className="project-card-info order-2 flex min-w-0 flex-1 flex-col sm:order-1">
          <div className="flex items-start gap-2.5">
            <span
              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ${styles.iconWrap} ${styles.iconColor}`}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <h3 className="text-base leading-tight font-semibold tracking-tight text-text-primary sm:text-[1.05rem]">
                {project.name}
              </h3>
              <p className="mt-0.5 text-[13px] leading-snug text-text-secondary">
                {project.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-2.5 max-w-[17rem] text-[13px] leading-relaxed text-text-secondary sm:mt-3">
            {project.shortDescription}
          </p>

          <div className="mt-auto flex items-center justify-between gap-2 pt-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-[#24315F] px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-text-secondary uppercase">
                {categoryLabel}
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-accent-green"
                aria-label={`Status: ${statusLabel}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green" aria-hidden />
                {statusLabel}
              </span>
            </div>
            <Link
              href="#projetos"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#24315F] text-text-secondary transition-colors group-hover:border-blue-accent group-hover:text-blue-accent focus-visible:outline-offset-2"
              aria-label={`Ver projeto ${project.name}`}
            >
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="project-card-preview order-1 w-full shrink-0 sm:order-2 sm:w-[42%] sm:min-w-[8.5rem] sm:self-stretch">
          <ProjectPreviewVisual type={project.preview} />
        </div>
      </div>
    </article>
  );
}
