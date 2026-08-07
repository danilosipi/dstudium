import { AboutFeature } from "@/components/sections/about-feature";
import { AboutVisual } from "@/components/sections/about-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { aboutContent, aboutDifferentials } from "@/data/about";

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 border-b border-border/50 bg-bg-secondary/30 py-12 sm:py-14"
      aria-labelledby="about-heading"
    >
      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-accent uppercase">
            {aboutContent.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-text-primary sm:text-[1.75rem] sm:leading-snug"
          >
            {aboutContent.title}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary sm:text-base">
            {aboutContent.text}
          </p>

          <ul className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
            {aboutDifferentials.map((item) => (
              <AboutFeature key={item.id} item={item} />
            ))}
          </ul>

          <div className="mt-7 sm:mt-8">
            <ButtonLink
              href={aboutContent.ctaHref}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {aboutContent.ctaLabel}
            </ButtonLink>
          </div>
        </div>

        <AboutVisual />
      </Container>
    </section>
  );
}
