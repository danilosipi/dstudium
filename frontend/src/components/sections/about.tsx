import { BrandMark } from "@/components/brand/brand-mark";
import { ButtonLink } from "@/components/ui/button-link";
import { IconCheck } from "@/components/ui/icons";
import { Container } from "@/components/layout/container";
import { aboutContent, aboutDifferentials } from "@/data/about";

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 border-b border-border/50 bg-bg-secondary/30 py-14 sm:py-16"
      aria-labelledby="about-heading"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
            {aboutContent.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
          >
            {aboutContent.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            {aboutContent.text}
          </p>

          <ul className="mt-6 space-y-4">
            {aboutDifferentials.map((item) => (
              <li key={item.id} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-blue-accent">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonLink href={aboutContent.ctaHref} variant="secondary">
              {aboutContent.ctaLabel}
            </ButtonLink>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-border bg-bg-primary p-6 sm:p-8"
          aria-hidden
        >
          <div className="pointer-events-none absolute inset-0 tech-grid opacity-25" />
          <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-blue-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-glow/10 blur-3xl" />

          <div className="relative grid gap-4">
            <div className="glass-panel flex items-center justify-between rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <BrandMark size={28} />
                <div>
                  <p className="text-sm font-semibold tracking-[0.12em] text-text-primary">
                    DSTUDIUM
                  </p>
                  <p className="text-xs text-text-secondary">
                    Ambiente operacional
                  </p>
                </div>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-accent-green shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel h-36 rounded-xl p-4">
                <div className="mb-3 h-2 w-16 rounded-full bg-blue-accent/50" />
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-white/10" />
                  <div className="h-2 w-4/5 rounded-full bg-white/8" />
                  <div className="h-2 w-3/5 rounded-full bg-white/6" />
                </div>
                <div className="mt-6 h-12 rounded-lg bg-gradient-to-r from-blue-primary/40 to-glow/20" />
              </div>
              <div className="glass-panel h-36 rounded-xl p-4">
                <div className="mb-3 flex -space-x-2">
                  <span className="h-8 w-8 rounded-full border border-border bg-blue-primary/40" />
                  <span className="h-8 w-8 rounded-full border border-border bg-blue-accent/40" />
                  <span className="h-8 w-8 rounded-full border border-border bg-glow/30" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-white/10" />
                  <div className="h-2 w-2/3 rounded-full bg-white/8" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="h-8 rounded-md bg-white/8" />
                  <div className="h-8 rounded-md bg-white/10" />
                  <div className="h-8 rounded-md bg-white/6" />
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs tracking-[0.14em] text-text-secondary uppercase">
                  Integrações ativas
                </p>
                <p className="text-xs text-blue-accent">Arquitetura modular</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md border border-border px-2.5 py-1 text-[10px] text-text-secondary">
                  WhatsApp
                </span>
                <span className="rounded-md border border-border px-2.5 py-1 text-[10px] text-text-secondary">
                  Google
                </span>
                <span className="rounded-md border border-border px-2.5 py-1 text-[10px] text-text-secondary">
                  APIs
                </span>
                <span className="rounded-md border border-border px-2.5 py-1 text-[10px] text-text-secondary">
                  IA
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
