import type { FooterLinkGroup } from "@/types";
import { institutionalContact } from "@/data/contact";
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
      { label: "Sistemas SaaS", href: "/solucoes#saas" },
      { label: "Aplicações Web", href: "/solucoes#aplicacoes-web" },
      { label: "Automação de Processos", href: "/solucoes#automacao" },
      { label: "Integrações", href: "/solucoes#integracoes" },
      { label: "IA aplicada a negócios", href: "/solucoes#ia" },
      { label: "Consultoria e Arquitetura", href: "/solucoes#consultoria" },
    ],
  },
  {
    title: "Informações",
    links: [
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: "/termos" },
    ],
  },
];

export const footerContact = institutionalContact;
