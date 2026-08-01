import Link from "next/link";
import { Container } from "@/components/layout/container";
import {
  IconAi,
  IconArrowRight,
  IconAutomation,
  IconConsulting,
  IconIntegration,
  IconSaas,
  IconWeb,
} from "@/components/ui/icons";
import { solutions } from "@/data/solutions";
import type { Solution } from "@/types";

const iconMap = {
  saas: IconSaas,
  web: IconWeb,
  automation: IconAutomation,
  integration: IconIntegration,
  ai: IconAi,
  consulting: IconConsulting,
} as const;

function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = iconMap[solution.icon];

  return (
    <article className="glass-panel flex h-full flex-col rounded-xl p-5 transition-colors duration-200 hover:border-blue-accent/50">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-bg-primary text-blue-accent shadow-[0_0_24px_rgba(59,91,255,0.2)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{solution.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {solution.description}
      </p>
    </article>
  );
}

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-24 border-b border-border/50 bg-bg-primary py-14 sm:py-16"
      aria-labelledby="solutions-heading"
    >
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
              Nossas soluções
            </p>
            <h2
              id="solutions-heading"
              className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
            >
              Soluções completas para impulsionar seu negócio
            </h2>
          </div>
          <Link
            href="#solucoes"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-text-secondary uppercase transition-colors hover:text-text-primary"
          >
            Ver todas as soluções
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}
