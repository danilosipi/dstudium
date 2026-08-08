import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Página não encontrada | DSTUDIUM",
  description:
    "O endereço pode ter sido alterado, removido ou digitado incorretamente.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex-1">
      <section
        className="relative overflow-hidden border-b border-border/50 py-20 sm:py-28"
        aria-labelledby="not-found-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.12)_0%,_transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-blue-primary/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-glow/10 blur-3xl"
          aria-hidden
        />

        <Container className="relative max-w-2xl text-center">
          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border/80 bg-[#0B122B] shadow-[0_0_28px_rgba(59,91,255,0.22)]">
            <BrandMark size={32} />
          </div>

          <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
            Erro 404
          </p>
          <h1
            id="not-found-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl"
          >
            Esta página não foi encontrada
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
            O endereço pode ter sido alterado, removido ou digitado
            incorretamente.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/" variant="primary">
              Voltar para o início
            </ButtonLink>
            <ButtonLink href="/projetos" variant="secondary">
              Ver projetos
            </ButtonLink>
          </div>

          <p className="mt-8 text-sm text-text-secondary">
            Precisa de ajuda?{" "}
            <Link
              href="/contato"
              className="text-blue-accent transition-colors hover:text-text-primary focus-visible:outline-offset-2"
            >
              Falar com a DSTUDIUM
            </Link>
          </p>
        </Container>
      </section>
    </main>
  );
}
