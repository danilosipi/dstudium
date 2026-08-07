import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { getAllProjects } from "@/data/projects";

const CAPABILITIES = [
  "SaaS",
  "Aplicações Web",
  "Automação",
  "Integrações",
  "Inteligência Artificial",
  "Arquitetura",
] as const;

export function ProjectsPortfolio() {
  const projects = getAllProjects();

  return (
    <>
      <section
        className="relative border-b border-border/50 bg-bg-primary py-12 sm:py-14 lg:py-16"
        aria-labelledby="projetos-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.12)_0%,_transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-blue-accent uppercase">
            Portfólio
          </p>
          <h1
            id="projetos-hero-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            Projetos que transformam ideias em produtos digitais.
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-secondary sm:text-base">
            Produtos próprios, plataformas SaaS, automações e aplicações
            desenvolvidas para resolver problemas reais com tecnologia,
            arquitetura e inteligência aplicada.
          </p>

          <ul
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Capacidades técnicas"
          >
            {CAPABILITIES.map((label) => (
              <li key={label}>
                <span className="inline-flex rounded-md border border-[#24315F] bg-surface/40 px-2.5 py-1 text-[11px] font-medium tracking-wide text-text-secondary">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        className="relative border-b border-border/50 bg-bg-secondary/40 py-10 sm:py-12"
        aria-labelledby="projetos-grid-heading"
      >
        <Container>
          <h2
            id="projetos-grid-heading"
            className="mb-5 text-sm font-semibold tracking-[0.18em] text-blue-accent uppercase sm:mb-6"
          >
            Todos os projetos
          </h2>

          <div className="grid grid-cols-1 items-stretch gap-3.5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section
        className="relative bg-bg-primary py-12 sm:py-14"
        aria-labelledby="projetos-about-heading"
      >
        <Container className="max-w-3xl">
          <h2
            id="projetos-about-heading"
            className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl"
          >
            Tecnologia aplicada a problemas reais
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>
              A DSTUDIUM desenvolve soluções digitais que conectam sistemas,
              automatizam processos e escalam negócios. O portfólio reúne
              produtos próprios e entregas em SaaS, aplicações web, automação,
              integrações e inteligência artificial aplicada a contextos
              comerciais concretos.
            </p>
            <p>
              Cada projeto parte de um problema real e evolui com arquitetura
              clara, foco em experiência e capacidade de crescer com o negócio.
              Esta página consolida o que a DSTUDIUM constrói — e, em breve,
              cada case terá sua própria página com detalhes técnicos e
              resultados.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
