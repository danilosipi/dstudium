import type { Project, ProjectCategory, ProjectStatus } from "@/types";

/**
 * Fonte única do portfólio de projetos da DSTUDIUM.
 *
 * Convenção de assets futuros:
 *   public/projects/<slug>/
 *   ex.: public/projects/minha-agenda-zap/cover.webp
 *
 * Para adicionar um projeto: incluir um item em `projects`.
 * Para aparecer na home: `featured: true` (+ `order` opcional).
 */

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  saas: "SaaS",
  "web-app": "Aplicação Web",
  automation: "Automação",
  ai: "Inteligência Artificial",
  platform: "Plataforma",
  institutional: "Institucional",
  "own-project": "Projeto próprio",
  case: "Case",
};

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  active: "Ativo",
  development: "Em desenvolvimento",
  completed: "Concluído",
  discontinued: "Descontinuado",
  private: "Privado",
};

export function getProjectCategoryLabel(category: ProjectCategory): string {
  return PROJECT_CATEGORY_LABELS[category];
}

export function getProjectStatusLabel(status: ProjectStatus): string {
  return PROJECT_STATUS_LABELS[status];
}

export const projects: Project[] = [
  {
    id: "maz",
    slug: "minha-agenda-zap",
    name: "MAZ",
    subtitle: "Minha Agenda Zap",
    shortDescription:
      "Plataforma de agendamento integrada com WhatsApp, Google Agenda e gestão de clientes.",
    category: "saas",
    status: "active",
    featured: true,
    order: 1,
    accent: "purple",
    icon: "calendar",
    preview: "agenda",
    technologies: [
      "Next.js",
      "React",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Tailwind CSS",
    ],
    integrations: [
      "WhatsApp",
      "Google Calendar",
      "Google Meet",
      "Stripe",
      "Webhooks",
    ],
    ai: {
      product: {
        used: true,
        summary:
          "A inteligência artificial interpreta intenções e entidades das conversas, apoiando a condução do atendimento enquanto as regras críticas permanecem validadas pelo domínio da aplicação.",
        applications: [
          "Interpretação de intenção",
          "Extração de entidades",
          "Geração de respostas naturais quando permitido",
          "Apoio à condução do workflow conversacional",
          "Reconhecimento de contexto e follow-ups",
        ],
      },
    },
    links: {
      website: "https://minhaagendazap.com",
    },
    caseStudy: {
      problem:
        "Empresas e profissionais precisam lidar com conversas de clientes, disponibilidade, marcações, alterações, lembretes e organização operacional distribuídas entre diferentes ferramentas e atividades manuais.",
      solution:
        "O Minha Agenda Zap transforma conversas do WhatsApp em fluxos estruturados de atendimento e agenda. A plataforma cobre agendamento, consulta de disponibilidade, confirmação, cancelamento, reagendamento, recorrência, lembretes e follow-ups nos contextos BUSINESS e PERSONAL, com sincronização com Google Calendar e Google Meet condicional por serviço.",
      architecture:
        "Monólito modular orientado a eventos, com backend NestJS, isolamento multi-tenant por account_id, PostgreSQL/Prisma como fonte de verdade, Redis/BullMQ para processamento assíncrono e adapters desacoplados para WhatsApp, IA, Google e billing. A organização em domain, application e infrastructure, com EventBus e filas, preserva baixo acoplamento e concentra as regras críticas no domínio.",
      highlights: [
        "Atendimento e agendamento via WhatsApp",
        "Contextos BUSINESS e PERSONAL isolados",
        "Arquitetura multi-tenant",
        "Sincronização com Google Calendar",
        "Workflows conversacionais com processamento assíncrono",
        "IA desacoplada das regras críticas de negócio",
        "Billing integrado ao Stripe",
      ],
    },
    seo: {
      title: "Minha Agenda Zap | Agendamento e Automação via WhatsApp",
      description:
        "Plataforma de agendamento e automação via WhatsApp, com inteligência artificial e sincronização com Google Calendar para organizar atendimento e agenda.",
    },
  },
  {
    id: "clicanosite",
    slug: "clicano-site",
    name: "ClicaNo.Site",
    subtitle: "Encurtador de links",
    shortDescription:
      "Encurtamento, personalização, métricas e expiração automática.",
    category: "saas",
    status: "active",
    featured: true,
    order: 2,
    accent: "blue",
    icon: "link",
    preview: "links",
  },
  {
    id: "map",
    slug: "midia-auto-pilot",
    name: "MAP",
    subtitle: "Mídia Auto Pilot",
    shortDescription:
      "Automação para criação, publicação e análise de conteúdo em redes sociais.",
    category: "saas",
    status: "active",
    featured: true,
    order: 3,
    accent: "orange",
    icon: "chart",
    preview: "metrics",
  },
];

export function getAllProjects(): Project[] {
  return [...projects].sort(
    (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER),
  );
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
