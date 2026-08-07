import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { IconArrowRight } from "@/components/ui/icons";
import { ProjectPreviewVisual } from "@/components/ui/project-previews";
import {
  getProjectCategoryLabel,
  getProjectStatusLabel,
} from "@/data/projects";
import type { Project, ProjectAiUsage } from "@/types";

function ChipList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-[0.14em] text-blue-accent uppercase">
        {label}
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <span className="inline-flex rounded-md border border-[#24315F] bg-surface/40 px-2.5 py-1 text-[12px] text-text-secondary">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-border/40 py-8 last:border-b-0 sm:py-10">
      <h2 className="text-xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      <div className="mt-3 text-[15px] leading-relaxed text-text-secondary">
        {children}
      </div>
    </section>
  );
}

function AiAxis({
  title,
  usage,
}: {
  title: string;
  usage: ProjectAiUsage;
}) {
  if (!usage.used && !usage.summary && !usage.applications?.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-[#24315F] bg-[#0B1024] p-5">
      <h3 className="text-base font-semibold text-text-primary">{title}</h3>
      {usage.summary ? (
        <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
          {usage.summary}
        </p>
      ) : null}
      {usage.applications && usage.applications.length > 0 ? (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[14px] text-text-secondary">
          {usage.applications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const categoryLabel = getProjectCategoryLabel(project.category);
  const statusLabel = getProjectStatusLabel(project.status);
  const technologies = project.technologies ?? [];
  const integrations = project.integrations ?? [];
  const caseStudy = project.caseStudy;
  const hasCaseStudy = Boolean(
    caseStudy?.problem ||
      caseStudy?.solution ||
      caseStudy?.architecture ||
      (caseStudy?.highlights && caseStudy.highlights.length > 0) ||
      (caseStudy?.results && caseStudy.results.length > 0),
  );
  const hasAi =
    Boolean(project.ai?.product?.used || project.ai?.product?.summary) ||
    Boolean(project.ai?.product?.applications?.length) ||
    Boolean(project.ai?.development?.used || project.ai?.development?.summary) ||
    Boolean(project.ai?.development?.applications?.length);
  const cover = project.media?.cover;
  const screenshots = project.media?.screenshots ?? [];
  const website = project.links?.website;
  const github = project.links?.github;

  return (
    <>
      <section className="relative border-b border-border/50 bg-bg-primary py-10 sm:py-12 lg:py-14">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.1)_0%,_transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-text-secondary">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-text-primary focus-visible:outline-offset-2"
                >
                  Início
                </Link>
              </li>
              <li aria-hidden className="text-text-secondary/50">
                /
              </li>
              <li>
                <Link
                  href="/projetos"
                  className="transition-colors hover:text-text-primary focus-visible:outline-offset-2"
                >
                  Projetos
                </Link>
              </li>
              <li aria-hidden className="text-text-secondary/50">
                /
              </li>
              <li className="text-text-primary" aria-current="page">
                {project.name}
              </li>
            </ol>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-[#24315F] px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-text-secondary uppercase">
                  {categoryLabel}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-accent-green"
                  aria-label={`Status: ${statusLabel}`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent-green"
                    aria-hidden
                  />
                  {statusLabel}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold tracking-wide text-text-secondary">
                {project.name}
              </p>
              <h1 className="mt-1 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.4rem] lg:leading-[1.15]">
                {project.subtitle}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary sm:text-base">
                {project.shortDescription}
              </p>

              {(website || github) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {website ? (
                    <ButtonLink
                      href={website}
                      variant="primary"
                      {...(isExternalHref(website)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      Acessar projeto
                    </ButtonLink>
                  ) : null}
                  {github ? (
                    <ButtonLink
                      href={github}
                      variant="secondary"
                      {...(isExternalHref(github)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      Ver repositório
                    </ButtonLink>
                  ) : null}
                </div>
              )}
            </div>

            <div className="min-h-[12rem] lg:min-h-[14rem]">
              {cover ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#24315F] bg-[#0B1024]">
                  <Image
                    src={cover}
                    alt={`Capa do projeto ${project.name} — ${project.subtitle}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              ) : (
                <div className="h-full min-h-[12rem] rounded-xl border border-[#24315F] bg-[#0B1024] p-3 sm:p-4 lg:min-h-[14rem]">
                  <ProjectPreviewVisual type={project.preview} />
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {(technologies.length > 0 || integrations.length > 0) && (
        <section className="border-b border-border/50 bg-bg-secondary/40 py-10 sm:py-12">
          <Container className="space-y-8">
            {technologies.length > 0 ? (
              <ChipList label="Tecnologias" items={technologies} />
            ) : null}
            {integrations.length > 0 ? (
              <ChipList label="Integrações" items={integrations} />
            ) : null}
          </Container>
        </section>
      )}

      {hasCaseStudy && caseStudy ? (
        <section className="border-b border-border/50 bg-bg-primary py-4 sm:py-6">
          <Container className="max-w-3xl">
            {caseStudy.problem ? (
              <CaseBlock title="O problema">
                <p>{caseStudy.problem}</p>
              </CaseBlock>
            ) : null}
            {caseStudy.solution ? (
              <CaseBlock title="A solução">
                <p>{caseStudy.solution}</p>
              </CaseBlock>
            ) : null}
            {caseStudy.architecture ? (
              <CaseBlock title="Arquitetura">
                <p>{caseStudy.architecture}</p>
              </CaseBlock>
            ) : null}
            {caseStudy.highlights && caseStudy.highlights.length > 0 ? (
              <CaseBlock title="Destaques">
                <ul className="list-disc space-y-1.5 pl-5">
                  {caseStudy.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CaseBlock>
            ) : null}
            {caseStudy.results && caseStudy.results.length > 0 ? (
              <CaseBlock title="Resultados">
                <ul className="list-disc space-y-1.5 pl-5">
                  {caseStudy.results.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CaseBlock>
            ) : null}
          </Container>
        </section>
      ) : null}

      {hasAi && project.ai ? (
        <section
          className="border-b border-border/50 bg-bg-secondary/40 py-10 sm:py-12"
          aria-labelledby="project-ai-heading"
        >
          <Container className="max-w-3xl">
            <h2
              id="project-ai-heading"
              className="text-xl font-semibold tracking-tight text-text-primary"
            >
              Inteligência Artificial
            </h2>
            <div className="mt-5 grid gap-4">
              {project.ai.product ? (
                <AiAxis
                  title="IA aplicada ao produto"
                  usage={project.ai.product}
                />
              ) : null}
              {project.ai.development ? (
                <AiAxis
                  title="IA no processo de desenvolvimento"
                  usage={project.ai.development}
                />
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {screenshots.length > 0 ? (
        <section
          className="border-b border-border/50 bg-bg-primary py-10 sm:py-12"
          aria-labelledby="project-screenshots-heading"
        >
          <Container>
            <h2
              id="project-screenshots-heading"
              className="text-xl font-semibold tracking-tight text-text-primary"
            >
              Screenshots
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {screenshots.map((src, index) => (
                <li
                  key={src}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#24315F] bg-[#0B1024]"
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${index + 1} do projeto ${project.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section
        className="border-b border-border/50 bg-bg-secondary/40 py-12 sm:py-14"
        aria-labelledby="project-cta-heading"
      >
        <Container className="max-w-2xl text-center">
          <h2
            id="project-cta-heading"
            className="text-2xl font-semibold tracking-tight text-text-primary"
          >
            Precisa construir algo parecido?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            A DSTUDIUM desenvolve produtos digitais, automações, integrações e
            soluções com inteligência artificial aplicadas a problemas reais de
            negócio.
          </p>
          <div className="mt-6">
            <ButtonLink href="/#contato" variant="primary">
              Fale com a DSTUDIUM
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-bg-primary py-8 sm:py-10">
        <Container>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-offset-2"
          >
            Ver todos os projetos
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
