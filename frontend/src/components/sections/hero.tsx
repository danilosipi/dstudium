import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[820px] overflow-hidden border-b border-border/50 md:h-[640px] lg:h-[660px]"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/brand/dstudium-hero-wide.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] md:object-center"
        aria-hidden
      />

      {/* Overlay desktop — horizontal aprovado */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#050816_0%,rgba(5,8,22,0.98)_26%,rgba(5,8,22,0.78)_43%,rgba(5,8,22,0.28)_62%,rgba(5,8,22,0.06)_100%)] md:block"
        aria-hidden
      />

      {/* Fade leve na base (desktop) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-[#050816]/60 to-transparent md:block"
        aria-hidden
      />

      {/* Overlay mobile — horizontal */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.99)_0%,rgba(5,8,22,0.96)_56%,rgba(5,8,22,0.72)_78%,rgba(5,8,22,0.28)_100%)] md:hidden"
        aria-hidden
      />

      {/* Overlay mobile — vertical */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.18)_0%,rgba(5,8,22,0.12)_50%,rgba(5,8,22,0.72)_82%,#050816_100%)] md:hidden"
        aria-hidden
      />

      <Container className="relative z-10 flex h-full items-start pt-10 md:items-center md:pt-0">
        <div className="w-full max-w-[540px] lg:max-w-[560px]">
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
            <ButtonLink
              href="/solucoes"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Conheça nossas soluções
            </ButtonLink>
            <ButtonLink
              href="/#contato"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Fale com um especialista
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
