import type { FeaturedProject } from "@/types";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "maz",
    name: "MAZ",
    subtitle: "Minha Agenda Zap",
    description:
      "Plataforma de agendamento integrada com WhatsApp, Google Agenda e gestão de clientes.",
    tag: "SaaS",
    status: "Ativo",
    accent: "purple",
    icon: "calendar",
    preview: "agenda",
  },
  {
    id: "clicanosite",
    name: "ClicaNo.Site",
    subtitle: "Encurtador de links",
    description:
      "Encurtamento, personalização, métricas e expiração automática.",
    tag: "SaaS",
    status: "Ativo",
    accent: "blue",
    icon: "link",
    preview: "links",
  },
  {
    id: "map",
    name: "MAP",
    subtitle: "Mídia Auto Pilot",
    description:
      "Automação para criação, publicação e análise de conteúdo em redes sociais.",
    tag: "SaaS",
    status: "Ativo",
    accent: "orange",
    icon: "chart",
    preview: "metrics",
  },
];
