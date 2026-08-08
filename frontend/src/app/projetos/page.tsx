import type { Metadata } from "next";
import { ProjectsPortfolio } from "@/components/sections/projects-portfolio";

export const metadata: Metadata = {
  title: "Projetos de Tecnologia, SaaS, Automação e IA | DSTUDIUM",
  description:
    "Conheça os projetos desenvolvidos pela DSTUDIUM em SaaS, aplicações web, automação de processos, integrações e inteligência artificial aplicada a negócios.",
  alternates: {
    canonical: "https://dstudium.com/projetos",
  },
  openGraph: {
    title: "Projetos de Tecnologia, SaaS, Automação e IA | DSTUDIUM",
    description:
      "Conheça os projetos desenvolvidos pela DSTUDIUM em SaaS, aplicações web, automação de processos, integrações e inteligência artificial aplicada a negócios.",
    url: "https://dstudium.com/projetos",
    siteName: "DSTUDIUM",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ProjetosPage() {
  return (
    <main className="flex-1">
      <ProjectsPortfolio />
    </main>
  );
}
