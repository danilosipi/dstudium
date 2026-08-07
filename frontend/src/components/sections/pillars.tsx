import { Container } from "@/components/layout/container";
import { PillarItem } from "@/components/ui/pillar-item";
import { pillars } from "@/data/pillars";

export function Pillars() {
  return (
    <section
      className="border-b border-border/50 bg-bg-primary py-8 sm:py-10"
      aria-label="Pilares"
    >
      <Container>
        <div className="overflow-hidden rounded-xl border border-[#24315F] bg-[#0B1024]">
          <ul className="grid grid-cols-1 divide-y divide-[#24315F]/80 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {pillars.map((pillar) => (
              <li key={pillar.id} className="min-w-0">
                <PillarItem pillar={pillar} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
