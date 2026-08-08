import type { AboutDifferential } from "@/types";

export const aboutContent = {
  eyebrow: "Sobre a DSTUDIUM",
  title: "Transformamos ideias em soluções digitais reais",
  text: "Somos uma empresa de tecnologia especializada no desenvolvimento de sistemas, automação de processos e soluções com inteligência artificial. Nosso foco é gerar valor para empresas por meio de tecnologia simples, eficiente e escalável.",
  ctaLabel: "Conheça mais sobre nós",
  ctaHref: "/#sobre",
} as const;

export const aboutDifferentials: AboutDifferential[] = [
  {
    id: "resultados",
    title: "Foco em resultados",
    description: "Entregamos soluções que geram impacto real.",
    icon: "chart",
  },
  {
    id: "parceria",
    title: "Parceria verdadeira",
    description: "Trabalhamos lado a lado com nossos clientes.",
    icon: "consulting",
  },
  {
    id: "qualidade",
    title: "Agilidade e qualidade",
    description: "Métodos modernos e código de alta qualidade.",
    icon: "gear",
  },
];
