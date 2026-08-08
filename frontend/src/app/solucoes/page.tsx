import type { Metadata } from "next";
import { SolutionsPage } from "@/components/sections/solutions-page";

export const metadata: Metadata = {
  title: "Soluções em Tecnologia, Automação e IA | DSTUDIUM",
  description:
    "Soluções em SaaS, aplicações web, automação, integrações, inteligência artificial e arquitetura de sistemas para empresas e produtos digitais.",
  alternates: {
    canonical: "https://dstudium.com/solucoes",
  },
  openGraph: {
    title: "Soluções em Tecnologia, Automação e IA | DSTUDIUM",
    description:
      "Soluções em SaaS, aplicações web, automação, integrações, inteligência artificial e arquitetura de sistemas para empresas e produtos digitais.",
    url: "https://dstudium.com/solucoes",
    siteName: "DSTUDIUM",
    locale: "pt_BR",
    type: "website",
  },
};

export default function SolucoesRoute() {
  return (
    <main className="flex-1">
      <SolutionsPage />
    </main>
  );
}
