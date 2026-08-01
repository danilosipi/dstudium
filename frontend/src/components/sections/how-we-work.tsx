import { Container } from "@/components/layout/container";
import {
  IconArchitecture,
  IconAutomation,
  IconDevelopment,
  IconDiagnosis,
  IconEvolution,
} from "@/components/ui/icons";
import { processSteps } from "@/data/process-steps";
import type { ProcessStep } from "@/types";

const iconMap = {
  diagnosis: IconDiagnosis,
  architecture: IconArchitecture,
  development: IconDevelopment,
  automation: IconAutomation,
  evolution: IconEvolution,
} as const;

const accentClass: Record<ProcessStep["accent"], string> = {
  blue: "border-blue-primary text-blue-accent shadow-[0_0_20px_rgba(59,91,255,0.25)]",
  cyan: "border-glow text-glow shadow-[0_0_20px_rgba(73,214,255,0.2)]",
  violet:
    "border-accent-violet text-accent-violet shadow-[0_0_20px_rgba(167,139,250,0.2)]",
  orange:
    "border-accent-orange text-accent-orange shadow-[0_0_20px_rgba(245,158,11,0.2)]",
  green:
    "border-accent-green text-accent-green shadow-[0_0_20px_rgba(52,211,153,0.2)]",
};

export function HowWeWork() {
  return (
    <section
      className="border-b border-border/50 bg-bg-secondary/25 py-14 sm:py-16"
      aria-labelledby="how-we-work-heading"
    >
      <Container>
        <h2
          id="how-we-work-heading"
          className="mb-10 text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase sm:text-sm sm:tracking-[0.16em]"
        >
          Como trabalhamos
        </h2>

        <ol className="grid gap-8 md:grid-cols-5 md:gap-3">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <li
                key={step.id}
                className="relative flex flex-col items-start md:items-center md:text-center"
              >
                {index < processSteps.length - 1 ? (
                  <span
                    className="pointer-events-none absolute left-12 top-5 hidden h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-border to-transparent md:block"
                    aria-hidden
                  />
                ) : null}

                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-bg-primary ${accentClass[step.accent]}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
