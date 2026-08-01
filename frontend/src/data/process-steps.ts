import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico",
    description: "Entendemos seu negócio, desafios e oportunidades.",
    accent: "blue",
    icon: "diagnosis",
  },
  {
    id: "arquitetura",
    title: "Arquitetura",
    description: "Desenhamos a solução ideal com tecnologia adequada.",
    accent: "cyan",
    icon: "architecture",
  },
  {
    id: "desenvolvimento",
    title: "Desenvolvimento",
    description: "Construímos com qualidade, segurança e boas práticas.",
    accent: "violet",
    icon: "development",
  },
  {
    id: "automacao",
    title: "Automação",
    description: "Implementamos integrações e fluxos inteligentes.",
    accent: "orange",
    icon: "automation",
  },
  {
    id: "evolucao",
    title: "Evolução contínua",
    description: "Acompanhamos, medimos e evoluímos sempre.",
    accent: "green",
    icon: "evolution",
  },
];
