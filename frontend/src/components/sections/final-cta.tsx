import { ButtonLink } from "@/components/ui/button-link";
import { FinalCtaVisual } from "@/components/ui/final-cta-visual";
import { Container } from "@/components/layout/container";

export function FinalCta() {
  return (
    <section
      className="border-b border-border/50 py-12 sm:py-14"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[#24315F] bg-[linear-gradient(135deg,#0B122B_0%,#050816_48%,#0A1030_100%)] px-6 py-9 sm:px-9 sm:py-11 lg:px-10 lg:py-12">
          {/* Atmosphere — single piece, not separate cards */}
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
          <div
            className="pointer-events-none absolute inset-y-8 right-[42%] hidden w-px bg-gradient-to-b from-transparent via-[#24315F]/70 to-transparent lg:block"
            aria-hidden
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div className="max-w-xl">
              <h2
                id="final-cta-heading"
                className="text-2xl font-semibold tracking-tight text-[#F5F7FF] sm:text-3xl"
              >
                Pronto para transformar seu negócio com tecnologia?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#A8B3D1]">
                Fale com um especialista e descubra como podemos gerar
                resultados reais para sua empresa.
              </p>
              <div className="mt-6 sm:mt-7">
                <ButtonLink href="/#contato" variant="primary" className="shrink-0">
                  Fale com um especialista
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
