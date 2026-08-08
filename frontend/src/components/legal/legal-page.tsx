import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { LegalDocument } from "@/data/legal";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="flex-1">
      <section
        className="relative border-b border-border/50 bg-bg-primary py-12 sm:py-14 lg:py-16"
        aria-labelledby={`${document.slug}-heading`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.1)_0%,_transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-blue-accent uppercase">
              {document.eyebrow}
            </p>
            <h1
              id={`${document.slug}-heading`}
              className="mt-3 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl"
            >
              {document.title}
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary sm:text-base">
              {document.intro}
            </p>
            <p className="mt-4 text-[13px] text-text-secondary/90">
              Última atualização: {document.updatedAt}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/50 bg-bg-secondary/15 py-10 sm:py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Sumário" className="mb-8 sm:mb-10">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-text-secondary uppercase">
                Nesta página
              </p>
              <ol className="mt-3 flex flex-col gap-1.5">
                {document.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-blue-accent transition-colors hover:text-text-primary focus-visible:outline-offset-2"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-8 sm:space-y-10">
              {document.sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 rounded-xl border border-[#24315F]/80 bg-[#0B1024]/50 px-5 py-5 sm:px-6 sm:py-6"
                >
                  <h2 className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[14px] leading-relaxed text-text-secondary sm:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-3 space-y-2">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-[14px] leading-relaxed text-text-secondary sm:text-[15px]"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-accent"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-[#24315F]/80 pt-6">
              <p className="text-[13px] text-text-secondary">
                Veja também:{" "}
                <Link
                  href={document.relatedHref}
                  className="text-blue-accent transition-colors hover:text-text-primary focus-visible:outline-offset-2"
                >
                  {document.relatedLabel}
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
