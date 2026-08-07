import { Container } from "@/components/layout/container";
import { ProcessStep } from "@/components/ui/process-step";
import { processSteps } from "@/data/process-steps";

export function HowWeWork() {
  return (
    <section
      className="border-b border-border/50 bg-bg-secondary/25 py-14 sm:py-16"
      aria-labelledby="how-we-work-heading"
    >
      <Container>
        <h2
          id="how-we-work-heading"
          className="mb-10 text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase sm:mb-12 sm:text-sm sm:tracking-[0.16em]"
        >
          Como trabalhamos
        </h2>

        <div className="relative">
          {/* Desktop continuous base line behind all nodes */}
          <div
            className="pointer-events-none absolute top-5 right-[10%] left-[10%] hidden h-px lg:block"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#5EA2FF]/35 to-transparent" />
            <div className="absolute inset-x-[8%] top-1/2 h-[3px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(73,214,255,0.18),transparent_70%)] blur-[2px]" />
          </div>

          <ol className="relative grid grid-cols-1 lg:grid-cols-5 lg:gap-3">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
