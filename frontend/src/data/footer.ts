import type { FooterLinkGroup } from "@/types";
import { mainNav } from "@/data/navigation";

export const footerBrandText =
  "Construímos soluções digitais que conectam, automatizam e escalam negócios para o futuro.";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Links",
    links: mainNav,
  },
  {
    title: "Soluções",
    links: [
      { label: "Sistemas SaaS", href: "/#solucoes" },
      { label: "Aplicações Web", href: "/#solucoes" },
      { label: "Automação de Processos", href: "/#solucoes" },
      { label: "Integrações", href: "/#solucoes" },
      { label: "IA aplicada a negócios", href: "/#solucoes" },
      { label: "Consultoria e Arquitetura", href: "/#solucoes" },
    ],
  },
  {
    title: "Informações",
    links: [
      { label: "Política de Privacidade", disabled: true },
      { label: "Termos de Uso", disabled: true },
      { label: "Cookies", disabled: true },
    ],
  },
];

export const footerContact = {
  email: "contato@dstudium.com",
  location: "São Paulo - SP, Brasil",
} as const;
