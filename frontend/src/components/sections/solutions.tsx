import Link from "next/link";
import { Container } from "@/components/layout/container";
import { IconArrowRight } from "@/components/ui/icons";
import { SolutionCard } from "@/components/ui/solution-card";
import { solutions } from "@/data/solutions";

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
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-text-secondary uppercase transition-colors hover:text-text-primary focus-visible:outline-offset-2"
          >
            Ver todas as soluções
            <IconArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}
