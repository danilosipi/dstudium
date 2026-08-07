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
