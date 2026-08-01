import { Container } from "@/components/layout/container";
import {
  IconAi,
  IconAutomation,
  IconScale,
  IconTech,
} from "@/components/ui/icons";
import { pillars } from "@/data/pillars";
import type { Pillar } from "@/types";

const iconMap = {
  automation: IconAutomation,
  tech: IconTech,
  ai: IconAi,
  scale: IconScale,
} as const;

const accentClass: Record<Pillar["accent"], string> = {
  cyan: "text-glow",
  blue: "text-blue-accent",
  violet: "text-accent-violet",
  orange: "text-accent-orange",
};

export function Pillars() {
  return (
    <section
      className="border-b border-border/50 bg-bg-primary"
      aria-label="Pilares"
    >
      <Container className="grid divide-y divide-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {pillars.map((pillar) => {
          const Icon = iconMap[pillar.icon];
          return (
            <article key={pillar.id} className="px-5 py-8 sm:px-6">
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface ${accentClass[pillar.accent]}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-text-primary">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </article>
          );
        })}
      </Container>
    </section>
  );
}
