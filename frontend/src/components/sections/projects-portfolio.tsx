"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { ClientCaseCard } from "@/components/ui/client-case-card";
import { ProjectCard } from "@/components/ui/project-card";
import {
  getActiveClientCases,
  getCompletedClientCases,
} from "@/data/client-cases";
import {
  getPortfolioSections,
  PORTFOLIO_FILTERS,
  type PortfolioFilterId,
} from "@/data/projects";

const CAPABILITIES = [
  "SaaS",
  "Aplicações Web",
  "Automação",
  "Integrações",
  "Inteligência Artificial",
  "Arquitetura",
] as const;

function ClientsFullView() {
  const activeClients = getActiveClientCases();
  const completedClients = getCompletedClientCases();

  return (
    <div className="space-y-10 sm:space-y-12">
      <div>
        <h3 className="mb-2 text-xs font-semibold tracking-[0.16em] text-text-secondary uppercase">
          Clientes ativos
        </h3>
        <p className="mb-4 max-w-2xl text-[13px] leading-relaxed text-text-secondary sm:mb-5">
          Relacionamentos em andamento com atuação contínua da DSTUDIUM.
        </p>
        <div className="grid grid-cols-1 items-stretch gap-3.5 md:grid-cols-2">
          {activeClients.map((clientCase) => (
            <ClientCaseCard
              key={clientCase.id}
              clientCase={clientCase}
              variant="active"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold tracking-[0.16em] text-text-secondary uppercase">
          Trabalhos realizados
        </h3>
        <p className="mb-4 max-w-2xl text-[13px] leading-relaxed text-text-secondary sm:mb-5">
          Histórico de entregas e trabalhos concluídos — sem contrato ativo.
        </p>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {completedClients.map((clientCase) => (
            <ClientCaseCard
              key={clientCase.id}
              clientCase={clientCase}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientsSummaryView({
  onViewAll,
}: {
  onViewAll: () => void;
}) {
  const activeClients = getActiveClientCases();
  const completedCount = getCompletedClientCases().length;

  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold tracking-[0.16em] text-text-secondary uppercase">
        Clientes e trabalhos realizados
      </h3>
      <p className="mb-4 max-w-2xl text-[13px] leading-relaxed text-text-secondary sm:mb-5">
        Clientes ativos em destaque. O histórico completo de trabalhos
        realizados está disponível no filtro Clientes.
      </p>

      <div className="grid grid-cols-1 items-stretch gap-3.5 md:grid-cols-2">
        {activeClients.map((clientCase) => (
          <ClientCaseCard
            key={clientCase.id}
            clientCase={clientCase}
            variant="active"
          />
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 rounded-lg border border-[#24315F]/80 bg-surface/20 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-text-secondary">
          + {completedCount} trabalhos realizados no histórico da DSTUDIUM.
        </p>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex shrink-0 items-center justify-center rounded-md border border-blue-accent/50 bg-blue-accent/10 px-3 py-2 text-[11px] font-semibold tracking-wide text-text-primary transition-colors hover:border-blue-accent hover:bg-blue-accent/20 focus-visible:outline-offset-2"
        >
          Ver clientes e histórico
        </button>
      </div>
    </div>
  );
}

export function ProjectsPortfolio() {
  const [filter, setFilter] = useState<PortfolioFilterId>("all");
  const sections = getPortfolioSections(filter);
  const visibleSections = sections.filter(
    (section) => section.projects.length > 0,
  );
  const showClientsSummary = filter === "all";
  const showClientsFull = filter === "clients";

  return (
    <>
      <section
        className="relative border-b border-border/50 bg-bg-primary py-12 sm:py-14 lg:py-16"
        aria-labelledby="projetos-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.12)_0%,_transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-blue-accent uppercase">
            Portfólio
          </p>
          <h1
            id="projetos-hero-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            Projetos que transformam ideias em produtos digitais.
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-secondary sm:text-base">
            Produtos próprios, plataformas SaaS, automações e aplicações
            desenvolvidas para resolver problemas reais com tecnologia,
            arquitetura e inteligência aplicada.
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Capacidades técnicas"
          >
            {CAPABILITIES.map((label) => (
              <li key={label}>
                <span className="inline-flex rounded-md border border-[#24315F] bg-surface/40 px-2.5 py-1 text-[11px] font-medium tracking-wide text-text-secondary">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        className="relative border-b border-border/50 bg-bg-secondary/40 py-10 sm:py-12"
        aria-labelledby="projetos-grid-heading"
      >
        <Container>
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="projetos-grid-heading"
              className="text-sm font-semibold tracking-[0.18em] text-blue-accent uppercase"
            >
              Projetos
            </h2>

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filtrar projetos por categoria"
            >
              {PORTFOLIO_FILTERS.map((item) => {
                const selected = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFilter(item.id)}
                    aria-pressed={selected}
                    className={`rounded-md border px-2.5 py-1.5 text-[11px] font-medium tracking-wide transition-colors focus-visible:outline-offset-2 ${
                      selected
                        ? "border-blue-accent/60 bg-blue-accent/15 text-text-primary"
                        : "border-[#24315F] bg-surface/30 text-text-secondary hover:border-[#3a4d8a] hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {showClientsFull ? (
            <ClientsFullView />
          ) : (
            <div className="space-y-10 sm:space-y-12">
              {visibleSections.map((section) => (
                <div key={section.id}>
                  {filter === "all" || visibleSections.length > 1 ? (
                    <h3 className="mb-4 text-xs font-semibold tracking-[0.16em] text-text-secondary uppercase sm:mb-5">
                      {section.label}
                    </h3>
                  ) : null}

                  <div className="grid grid-cols-1 items-stretch gap-3.5 md:grid-cols-2 lg:grid-cols-3">
                    {section.projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              ))}

              {showClientsSummary ? (
                <ClientsSummaryView onViewAll={() => setFilter("clients")} />
              ) : null}
            </div>
          )}
        </Container>
      </section>

      <section
        className="relative bg-bg-primary py-12 sm:py-14"
        aria-labelledby="projetos-about-heading"
      >
        <Container className="max-w-3xl">
          <h2
            id="projetos-about-heading"
            className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl"
          >
            Tecnologia aplicada a problemas reais
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>
              A DSTUDIUM desenvolve soluções digitais que conectam sistemas,
              automatizam processos e escalam negócios. O portfólio reúne
              produtos próprios e entregas em SaaS, aplicações web, automação,
              integrações e inteligência artificial aplicada a contextos
              comerciais concretos.
            </p>
            <p>
              Cada projeto parte de um problema real e evolui com arquitetura
              clara, foco em experiência e capacidade de crescer com o negócio.
              Esta página consolida o que a DSTUDIUM constrói — e cada case
              detalha o contexto, a solução e as decisões técnicas relevantes.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
