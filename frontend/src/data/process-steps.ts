import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "diagnostico",
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos seu negócio, desafios e oportunidades.",
    accent: "blue",
    icon: "diagnosis",
  },
  {
    id: "arquitetura",
    number: "02",
    title: "Arquitetura",
    description: "Desenhamos a solução ideal com tecnologia adequada.",
    accent: "cyan",
    icon: "architecture",
  },
  {
    id: "desenvolvimento",
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos com qualidade, segurança e boas práticas.",
    accent: "violet",
    icon: "development",
  },
  {
    id: "automacao",
    number: "04",
    title: "Automação",
    description: "Implementamos integrações e fluxos inteligentes.",
    accent: "orange",
    icon: "automation",
  },
  {
    id: "evolucao",
    number: "05",
    title: "Evolução contínua",
    description: "Acompanhamos, medimos e evoluímos sempre.",
    accent: "green",
    icon: "evolution",
  },
];
