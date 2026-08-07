import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[700px] overflow-hidden border-b border-border/50 md:h-[640px] lg:h-[660px]"
      aria-labelledby="hero-heading"
    >
      {/* Desktop: full-bleed | Mobile: arte menor, inferior direita */}
      <div
        className="pointer-events-none absolute inset-0 max-md:inset-auto max-md:right-0 max-md:bottom-0 max-md:h-[260px] max-md:w-[520px] max-md:opacity-55"
        aria-hidden
      >
        <Image
          src="/brand/dstudium-hero-wide.png"
          alt=""
          fill
          priority
          className="object-cover object-center max-md:object-contain max-md:object-bottom-right"
          sizes="(max-width: 767px) 520px, 100vw"
        />
      </div>

      {/* Overlay desktop — horizontal para leitura */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#050816_0%,rgba(5,8,22,0.98)_26%,rgba(5,8,22,0.78)_43%,rgba(5,8,22,0.28)_62%,rgba(5,8,22,0.06)_100%)] md:block"
        aria-hidden
      />

      {/* Overlay mobile — forte na área do texto */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#050816_0%,rgba(5,8,22,0.98)_44%,rgba(5,8,22,0.88)_56%,rgba(5,8,22,0.5)_70%,rgba(5,8,22,0.2)_82%,transparent_100%)] md:hidden"
        aria-hidden
      />

      {/* Fade leve na base */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050816]/60 to-transparent"
        aria-hidden
      />

      <Container className="relative z-10 flex h-full items-start pt-10 md:items-center md:pt-0">
        <div className="max-w-[540px] lg:max-w-[560px]">
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
      </Container>
    </section>
  );
}
