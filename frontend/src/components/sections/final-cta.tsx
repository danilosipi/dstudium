import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

export function FinalCta() {
  return (
    <section
      className="border-b border-border/50 py-12 sm:py-14"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-blue-deep px-6 py-10 sm:px-10 sm:py-12">
          <div
            className="pointer-events-none absolute inset-0 tech-grid opacity-20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-primary/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-glow/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-10 top-4 h-px bg-gradient-to-r from-transparent via-blue-accent/50 to-transparent"
            aria-hidden
          />

          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2
                id="final-cta-heading"
                className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
              >
                Pronto para transformar seu negócio com tecnologia?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                Fale com um especialista e descubra como podemos gerar
                resultados reais para sua empresa.
              </p>
            </div>
            <ButtonLink href="#contato" variant="primary" className="shrink-0">
              Fale com um especialista
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
