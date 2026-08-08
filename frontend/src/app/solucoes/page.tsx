import { SolutionsPage } from "@/components/sections/solutions-page";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Soluções em Tecnologia, Automação e IA | DSTUDIUM",
  description:
    "Soluções em SaaS, aplicações web, automação, integrações, inteligência artificial e arquitetura de sistemas para empresas e produtos digitais.",
  path: "/solucoes",
});

export default function SolucoesRoute() {
  return (
    <main className="flex-1">
      <SolutionsPage />
    </main>
  );
}
