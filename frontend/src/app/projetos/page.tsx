import { ProjectsPortfolio } from "@/components/sections/projects-portfolio";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Projetos de Tecnologia, SaaS, Automação e IA | DSTUDIUM",
  description:
    "Conheça os projetos desenvolvidos pela DSTUDIUM em SaaS, aplicações web, automação de processos, integrações e inteligência artificial aplicada a negócios.",
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <main className="flex-1">
      <ProjectsPortfolio />
    </main>
  );
}
