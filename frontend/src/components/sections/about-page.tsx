import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { HowWeWork } from "@/components/sections/how-we-work";
import { ButtonLink } from "@/components/ui/button-link";
import { ClientCaseCard } from "@/components/ui/client-case-card";
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
import {
  aboutAiContent,
  aboutCapabilities,
  aboutClientsContent,
  aboutEvolutionStages,
  aboutFinalCta,
  aboutIdentity,
  aboutLeadership,
  aboutPageHero,
  aboutPrinciples,
  aboutProofProjects,
} from "@/data/about";
import { getActiveClientCases } from "@/data/client-cases";
import { getProjectBySlug } from "@/data/projects";
import type { Project, SolutionIcon } from "@/types";

const capabilityIconMap: Record<
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

function aiProductLabel(project: Project): string {
  if (project.slug === "minha-agenda-zap" || project.slug === "midia-auto-pilot") {
    return project.subtitle ?? project.name;
  }
  return project.name;
}

function AboutHero() {
  return (
    <section
      className="relative border-b border-border/50 bg-bg-primary py-12 sm:py-14 lg:py-16"
      aria-labelledby="sobre-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.12)_0%,_transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-blue-accent uppercase">
          {aboutPageHero.eyebrow}
        </p>
        <h1
          id="sobre-hero-heading"
          className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
        >
          {aboutPageHero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-secondary sm:text-base">
          {aboutPageHero.description}
        </p>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary sm:text-base">
          {aboutPageHero.complement}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/projetos" variant="primary">
            Conheça nossos projetos
          </ButtonLink>
          <ButtonLink href="/solucoes" variant="secondary">
            Veja nossas soluções
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function AboutIdentity() {
  return (
    <section
      className="border-b border-border/50 bg-bg-secondary/25 py-12 sm:py-14"
      aria-labelledby="sobre-identidade-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          {aboutIdentity.eyebrow}
        </p>
        <h2
          id="sobre-identidade-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          {aboutIdentity.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          {aboutIdentity.lead}
        </p>

        <blockquote className="mt-6 max-w-2xl border-l-2 border-blue-accent/50 pl-4 text-[15px] leading-relaxed text-text-primary sm:text-base">
          {aboutIdentity.message}
        </blockquote>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Áreas de atuação">
          {aboutIdentity.areas.map((area) => (
            <li key={area}>
              <span className="inline-flex rounded-md border border-[#24315F] bg-surface/30 px-2.5 py-1 text-[12px] text-text-secondary">
                {area}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function AboutEvolution() {
  return (
    <section
      className="border-b border-border/50 bg-bg-primary py-12 sm:py-14"
      aria-labelledby="sobre-evolucao-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          Evolução
        </p>
        <h2
          id="sobre-evolucao-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          Como a capacidade da DSTUDIUM evoluiu
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Uma trajetória conceitual sustentada pelos trabalhos e produtos já
          executados — da presença digital à arquitetura com inteligência
          artificial.
        </p>

        <ol className="mt-8 grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {aboutEvolutionStages.map((stage) => (
            <li
              key={stage.id}
              className="rounded-xl border border-[#24315F] bg-[#0B1024]/80 px-4 py-4 sm:px-5 sm:py-5"
            >
              <p className="text-[11px] font-semibold tracking-[0.16em] text-blue-accent">
                {stage.number}
              </p>
              <h3 className="mt-2 text-[15px] font-semibold tracking-tight text-text-primary sm:text-base">
                {stage.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary sm:text-sm">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function AboutCapabilities() {
  return (
    <section
      className="border-b border-border/50 bg-bg-secondary/25 py-12 sm:py-14"
      aria-labelledby="sobre-capacidades-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          Capacidades
        </p>
        <h2
          id="sobre-capacidades-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          Uma estrutura multidisciplinar de tecnologia
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Frentes alinhadas às soluções da DSTUDIUM — sem repetir o detalhamento
          comercial completo.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {aboutCapabilities.map((item) => {
            const Icon = capabilityIconMap[item.icon];
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-xl border border-[#24315F] bg-[#0B1024]/80 p-4 transition-colors hover:border-[#3a4d8a] focus-visible:outline-offset-2 sm:p-[18px]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-accent/12 text-blue-accent ring-1 ring-blue-accent/30">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] text-blue-accent uppercase transition-colors group-hover:text-text-primary">
                    Ver solução
                    <IconArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

function AboutAi() {
  const productProjects = aboutAiContent.productProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project) => Boolean(project));

  return (
    <section
      className="border-b border-border/50 bg-bg-primary py-12 sm:py-14"
      aria-labelledby="sobre-ia-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          {aboutAiContent.eyebrow}
        </p>
        <h2
          id="sobre-ia-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          {aboutAiContent.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          {aboutAiContent.lead}
        </p>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          {aboutAiContent.process}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          <div className="rounded-xl border border-[#24315F] bg-[#0B1024]/80 p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-text-primary">
              {aboutAiContent.productTitle}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-text-secondary sm:text-sm">
              {aboutAiContent.productText}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {productProjects.map((project) =>
                project ? (
                  <li key={project.id}>
                    <Link
                      href={`/projetos/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-blue-accent transition-colors hover:text-text-primary focus-visible:outline-offset-2"
                    >
                      {aiProductLabel(project)}
                      <IconArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>

          <div className="rounded-xl border border-[#24315F] bg-[#0B1024]/80 p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-text-primary">
              {aboutAiContent.engineeringTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              {aboutAiContent.engineeringItems.map((item) => (
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
            <p className="mt-4 text-[13px] leading-relaxed text-text-secondary sm:text-sm">
              {aboutAiContent.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AboutProof() {
  return (
    <section
      className="border-b border-border/50 bg-bg-secondary/25 py-12 sm:py-14"
      aria-labelledby="sobre-prova-heading"
    >
      <Container>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
              Prova
            </p>
            <h2
              id="sobre-prova-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
            >
              Da ideia à operação
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
              Projetos reais que mostram a diversidade de atuação da DSTUDIUM.
            </p>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-text-secondary uppercase transition-colors hover:text-text-primary focus-visible:outline-offset-2"
          >
            Conheça todos os projetos
            <IconArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {aboutProofProjects.map((item) => {
            const project = getProjectBySlug(item.slug);
            if (!project) return null;

            return (
              <li key={item.slug}>
                <Link
                  href={`/projetos/${project.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-[#24315F] bg-[#0B1024]/80 px-4 py-4 transition-colors hover:border-[#3a4d8a] focus-visible:outline-offset-2 sm:px-5 sm:py-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold tracking-tight text-text-primary sm:text-base">
                      {item.label}
                    </h3>
                    <IconArrowRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-accent transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-1.5 text-[12px] font-medium tracking-wide text-blue-accent/90">
                    {item.summary}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                    {project.shortDescription}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

function AboutClients() {
  const activeClients = getActiveClientCases();

  return (
    <section
      className="border-b border-border/50 bg-bg-primary py-12 sm:py-14"
      aria-labelledby="sobre-clientes-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          {aboutClientsContent.eyebrow}
        </p>
        <h2
          id="sobre-clientes-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          {aboutClientsContent.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          {aboutClientsContent.text}
        </p>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-3.5 md:grid-cols-2">
          {activeClients.map((clientCase) => (
            <ClientCaseCard
              key={clientCase.id}
              clientCase={clientCase}
              variant="active"
            />
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={aboutClientsContent.ctaHref}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-text-secondary uppercase transition-colors hover:text-text-primary focus-visible:outline-offset-2"
          >
            {aboutClientsContent.ctaLabel}
            <IconArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function AboutPrinciples() {
  return (
    <section
      className="border-b border-border/50 bg-bg-secondary/25 py-12 sm:py-14"
      aria-labelledby="sobre-principios-heading"
    >
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
          Como pensamos tecnologia
        </p>
        <h2
          id="sobre-principios-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
        >
          Princípios operacionais
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Diretrizes concretas que orientam decisões de produto, arquitetura e
          entrega — alinhadas à forma como trabalhamos.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPrinciples.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-[#24315F] bg-[#0B1024]/80 px-4 py-4 sm:px-5"
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

function AboutLeadership() {
  return (
    <section
      className="border-b border-border/50 bg-bg-primary py-12 sm:py-14"
      aria-labelledby="sobre-lideranca-heading"
    >
      <Container>
        <div className="max-w-2xl rounded-xl border border-[#24315F] bg-[#0B1024]/80 px-5 py-6 sm:px-7 sm:py-7">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
            {aboutLeadership.eyebrow}
          </p>
          <h2
            id="sobre-lideranca-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
          >
            {aboutLeadership.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            {aboutLeadership.text}
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-text-secondary/90">
            {aboutLeadership.note}
          </p>
        </div>
      </Container>
    </section>
  );
}

function AboutFinalCta() {
  return (
    <section
      className="border-b border-border/50 py-12 sm:py-14"
      aria-labelledby="sobre-final-cta-heading"
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
                id="sobre-final-cta-heading"
                className="text-2xl font-semibold tracking-tight text-[#F5F7FF] sm:text-3xl"
              >
                {aboutFinalCta.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A8B3D1]">
                {aboutFinalCta.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                <ButtonLink href="/#contato" variant="primary">
                  Fale com a DSTUDIUM
                </ButtonLink>
                <ButtonLink href="/solucoes" variant="secondary">
                  Conheça nossas soluções
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

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIdentity />
      <AboutEvolution />
      <AboutCapabilities />
      <AboutAi />
      <AboutProof />
      <AboutClients />
      <AboutPrinciples />
      <HowWeWork />
      <AboutLeadership />
      <AboutFinalCta />
    </>
  );
}
