import { DNucleusHero } from "@/components/brand/d-nucleus-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border/50"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" aria-hidden />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-primary/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-glow/10 blur-3xl" />
      </div>

      <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="max-w-xl">
          <p className="inline-flex rounded-full border border-border bg-surface/70 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
            Tecnologia · Automação · IA · Escala
          </p>

          <h1
            id="hero-heading"
            className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            Tecnologia que{" "}
            <span className="text-blue-accent">conecta</span>, automatiza e{" "}
            <span className="text-blue-accent">escala</span> negócios
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
            Desenvolvemos sistemas, automatizamos processos e aplicamos
            inteligência artificial para impulsionar resultados reais e
            sustentáveis.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#solucoes" variant="primary">
              Conheça nossas soluções
            </ButtonLink>
            <ButtonLink href="#contato" variant="secondary">
              Fale com um especialista
            </ButtonLink>
          </div>
        </div>

        <DNucleusHero className="lg:justify-self-end" />
      </Container>
    </section>
  );
}
