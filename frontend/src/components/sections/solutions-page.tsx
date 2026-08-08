import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { HowWeWork } from "@/components/sections/how-we-work";
import { ButtonLink } from "@/components/ui/button-link";
import { FinalCtaVisual } from "@/components/ui/final-cta-visual";
import {
  IconAi,
  IconArrowRight,
  IconAutomation,
  IconConsulting,
  IconIntegration,
  IconSaas,
  IconWeb,
} from "@/components/ui/icons";
import { ProjectCard } from "@/components/ui/project-card";
import { getProjectBySlug } from "@/data/projects";
import {
  engineeringAiSteps,
  getSolutionById,
  solutionDetails,
  solutionProofProjectSlugs,
  solutions,
} from "@/data/solutions";
import type { Project, SolutionAccent, SolutionIcon } from "@/types";

/** Prefer the public product name over a short category-like subtitle. */
function relatedProjectLabel(project: Project): string {
  const preferName = new Set([
    "clicano-site",
    "farmacinha-de-casa",
    "agent-orchestrator",
    "erp-cap",
    "free-road",
  ]);
  if (preferName.has(project.slug)) return project.name;
  return project.subtitle ?? project.name;
}

const accentStyles: Record<
  SolutionAccent,
  {
    glow: string;
    blob: string;
    iconWrap: string;
    iconColor: string;
    line: string;
  }
> = {
  blue: {
    glow: "shadow-[0_0_24px_rgba(59,91,255,0.16)]",
    blob: "bg-blue-primary/10",
    iconWrap: "bg-blue-primary/15 ring-blue-primary/35",
    iconColor: "text-blue-accent",
    line: "from-blue-primary/70 via-blue-accent/40 to-transparent",
  },
  cyan: {
    glow: "shadow-[0_0_24px_rgba(73,214,255,0.14)]",
    blob: "bg-glow/10",
    iconWrap: "bg-glow/12 ring-glow/30",
    iconColor: "text-glow",
    line: "from-glow/60 via-blue-accent/35 to-transparent",
  },
  purple: {
    glow: "shadow-[0_0_24px_rgba(139,92,246,0.16)]",
    blob: "bg-accent-purple/12",
    iconWrap: "bg-accent-purple/15 ring-accent-purple/35",
    iconColor: "text-accent-violet",
    line: "from-accent-purple/65 via-accent-violet/35 to-transparent",
  },
  deep: {
    glow: "shadow-[0_0_24px_rgba(94,162,255,0.14)]",
    blob: "bg-blue-accent/10",
    iconWrap: "bg-blue-accent/12 ring-blue-accent/30",
    iconColor: "text-blue-accent",
    line: "from-blue-accent/55 via-glow/30 to-transparent",
  },
  green: {
    glow: "shadow-[0_0_24px_rgba(52,211,153,0.14)]",
    blob: "bg-accent-green/10",
    iconWrap: "bg-accent-green/12 ring-accent-green/30",
    iconColor: "text-accent-green",
    line: "from-accent-green/55 via-glow/30 to-transparent",
  },
  orange: {
    glow: "shadow-[0_0_24px_rgba(245,158,11,0.14)]",
    blob: "bg-accent-orange/10",
    iconWrap: "bg-accent-orange/12 ring-accent-orange/30",
    iconColor: "text-accent-orange",
    line: "from-accent-orange/55 via-blue-primary/30 to-transparent",
  },
};

const iconMap: Record<
  SolutionIcon,
  (props: { className?: string }) => ReactNode
> = {
  saas: IconSaas,
  web: IconWeb,
  automation: IconAutomation,
  integration: IconIntegration,
  ai: IconAi,
  consulting: IconConsulting,
};

const problemPoints = [
  {
    title: "Operações fragmentadas",
    description:
      "Processos manuais, ferramentas desconectadas e falta de fluxo entre áreas.",
  },
  {
    title: "Produtos que precisam evoluir",
    description:
      "Sistemas e plataformas que pedem arquitetura, escala e integrações reais.",
  },
  {
    title: "Oportunidades com IA",
    description:
      "Automação assistida e inteligência aplicada onde há valor mensurável — com controle humano.",
  },
] as const;

function SolutionsHero() {
  return (
    <section
      className="relative border-b border-border/50 bg-bg-primary py-12 sm:py-14 lg:py-16"
      aria-labelledby="solucoes-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.12)_0%,_transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-blue-accent uppercase">
          Soluções
        </p>
        <h1
          id="solucoes-hero-heading"
          className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
        >
          Tecnologia para transformar operações, produtos e negócios
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-secondary sm:text-base">
          Desenvolvemos soluções digitais, automações, integrações e produtos
          com inteligência artificial, combinando engenharia, arquitetura e
          visão de negócio.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/contato" variant="primary">
            Fale com a DSTUDIUM
          </ButtonLink>
          <ButtonLink href="/projetos" variant="secondary">
            Conheça nossos projetos
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section
      className="border-b border-border/50 bg-bg-secondary/25 py-12 sm:py-14"
      aria-labelledby="solucoes-problemas-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          O que resolvemos
        </p>
        <h2
          id="solucoes-problemas-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          Problemas reais de operação, produto e crescimento
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          A DSTUDIUM atua onde tecnologia precisa sair do discurso e entrar na
          operação — com produtos, automações e arquitetura sob medida.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-3.5 md:grid-cols-3">
          {problemPoints.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-[#24315F] bg-[#0B1024]/80 px-4 py-4 sm:px-5 sm:py-5"
            >
              <h3 className="text-[15px] font-semibold tracking-tight text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary sm:text-sm">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function SolutionDetailBlock({ detailId }: { detailId: string }) {
  const solution = getSolutionById(detailId);
  const detail = solutionDetails.find((item) => item.id === detailId);

  if (!solution || !detail) return null;

  const styles = accentStyles[solution.accent];
  const Icon = iconMap[solution.icon];
  const relatedProjects = (detail.relatedProjectSlugs ?? [])
    .map((slug) => getProjectBySlug(slug))
    .filter((project) => Boolean(project));

  return (
    <article
      id={solution.id}
      className={`scroll-mt-24 relative overflow-hidden rounded-xl border border-[#24315F] bg-[#0B1024] p-5 sm:p-6 lg:p-7 ${styles.glow}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${styles.line}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full opacity-80 blur-2xl ${styles.blob}`}
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-start gap-3">
          <span
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ${styles.iconWrap} ${styles.iconColor}`}
            aria-hidden
          >
            <Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0 pt-0.5">
            <h3 className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
              {solution.title}
            </h3>
            <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-text-secondary sm:text-[15px]">
              {detail.lead}
            </p>
          </div>
        </div>

        {detail.applications && detail.applications.length > 0 ? (
          <div className="mt-5">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
              Possíveis aplicações
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {detail.applications.map((item) => (
                <li key={item}>
                  <span className="inline-flex rounded-md border border-[#24315F] bg-surface/30 px-2.5 py-1 text-[12px] text-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {detail.examples && detail.examples.length > 0 ? (
          <div className="mt-5">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
              Exemplos no portfólio
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {detail.examples.map((item) => (
                <li key={item}>
                  <span className="inline-flex rounded-md border border-[#24315F] bg-surface/30 px-2.5 py-1 text-[12px] text-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {detail.concepts && detail.concepts.length > 0 ? (
          <ul className="mt-5 space-y-2.5">
            {detail.concepts.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[13px] leading-relaxed text-text-secondary sm:text-sm"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-accent"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {relatedProjects.length > 0 ? (
          <div className="mt-5">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
              Projetos relacionados
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2">
              {relatedProjects.map((project) =>
                project ? (
                  <li key={project.id}>
                    <Link
                      href={`/projetos/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-blue-accent transition-colors hover:text-text-primary focus-visible:outline-offset-2"
                    >
                      {relatedProjectLabel(project)}
                      <IconArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function SolutionsCatalog() {
  return (
    <section
      className="border-b border-border/50 bg-bg-primary py-12 sm:py-14"
      aria-labelledby="solucoes-catalogo-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          Capabilidades
        </p>
        <h2
          id="solucoes-catalogo-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          Soluções que a DSTUDIUM oferece
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Seis frentes complementares — da construção de produtos à arquitetura,
          com IA quando ela agrega valor real.
        </p>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {solutions.map((solution) => (
            <SolutionDetailBlock key={solution.id} detailId={solution.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function EngineeringAiSection() {
  return (
    <section
      className="border-b border-border/50 bg-bg-secondary/25 py-12 sm:py-14"
      aria-labelledby="solucoes-ia-processo-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          Diferencial
        </p>
        <h2
          id="solucoes-ia-processo-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          IA como parte do processo, não como promessa
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Utilizamos IA no desenvolvimento e também em produtos quando ela
          agrega valor — mantendo decisões arquiteturais, validações e regras
          críticas sob controle da engenharia.
        </p>

        <ol className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
          {engineeringAiSteps.map((step, index) => (
            <li key={step} className="flex items-center gap-2 sm:gap-3">
              <span className="inline-flex rounded-md border border-[#24315F] bg-[#0B1024] px-3 py-2 text-sm font-medium text-text-primary">
                {step}
              </span>
              {index < engineeringAiSteps.length - 1 ? (
                <span
                  className="hidden text-blue-accent/70 sm:inline"
                  aria-hidden
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-text-secondary sm:text-sm">
          A IA pode apoiar essas etapas. A responsabilidade técnica e as
          decisões de negócio permanecem com a engenharia.
        </p>
      </Container>
    </section>
  );
}

function SolutionsProof() {
  const projects = solutionProofProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project) => Boolean(project));

  return (
    <section
      className="border-b border-border/50 bg-bg-primary py-12 sm:py-14"
      aria-labelledby="solucoes-prova-heading"
    >
      <Container>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
              Prova
            </p>
            <h2
              id="solucoes-prova-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
            >
              Soluções aplicadas em projetos reais
            </h2>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-text-secondary uppercase transition-colors hover:text-text-primary focus-visible:outline-offset-2"
          >
            Ver todos os projetos
            <IconArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-3.5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) =>
            project ? (
              <ProjectCard key={project.id} project={project} />
            ) : null,
          )}
        </div>
      </Container>
    </section>
  );
}

function SolutionsFinalCta() {
  return (
    <section
      className="border-b border-border/50 py-12 sm:py-14"
      aria-labelledby="solucoes-final-cta-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[#24315F] bg-[linear-gradient(135deg,#0B122B_0%,#050816_48%,#0A1030_100%)] px-6 py-9 sm:px-9 sm:py-11 lg:px-10 lg:py-12">
          <div
            className="pointer-events-none absolute inset-0 tech-grid opacity-[0.14]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 top-[-20%] h-56 w-56 rounded-full bg-blue-primary/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-12 bottom-[-25%] h-52 w-52 rounded-full bg-glow/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-accent/45 to-transparent"
            aria-hidden
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div className="max-w-xl">
              <h2
                id="solucoes-final-cta-heading"
                className="text-2xl font-semibold tracking-tight text-[#F5F7FF] sm:text-3xl"
              >
                Tem um desafio que precisa virar solução?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A8B3D1]">
                Converse com a DSTUDIUM sobre seu projeto, processo ou
                oportunidade de transformação digital.
              </p>
              <div className="mt-6 sm:mt-7">
                <ButtonLink href="/contato" variant="primary" className="shrink-0">
                  Fale com a DSTUDIUM
                </ButtonLink>
              </div>
            </div>

            <div className="pointer-events-none min-w-0" aria-hidden>
              <FinalCtaVisual />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <ProblemsSection />
      <SolutionsCatalog />
      <EngineeringAiSection />
      <HowWeWork />
      <SolutionsProof />
      <SolutionsFinalCta />
    </>
  );
}
