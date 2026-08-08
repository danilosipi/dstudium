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
      "Encurtamento de URLs, expiração automática, gestão de links e registro básico de cliques.",
    category: "saas",
    status: "development",
    featured: true,
    order: 3,
    accent: "blue",
    icon: "link",
    preview: "links",
    technologies: [
      "Next.js",
      "React",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Docker",
      "Docker Compose",
    ],
    links: {
      website: "https://clicano.site",
    },
    caseStudy: {
      problem:
        "Links longos, difíceis de compartilhar e sem controle dificultam campanhas, comunicação digital e acompanhamento básico de acesso. Usuários também precisam de uma forma simples de criar, consultar e administrar links sem depender de processos técnicos.",
      solution:
        "O ClicaNo.Site transforma URLs em links curtos gerenciáveis, com expiração, redirecionamento seguro e registro de cliques. O produto combina uso imediato sem login com uma estrutura autenticada baseada em workspaces para evolução da gestão de links, incluindo histórico, contador de cliques e ativação/desativação.",
      architecture:
        "Arquitetura greenfield em monorepo, com API NestJS, painel autenticado e site institucional em Next.js, PostgreSQL/Prisma para persistência e isolamento por workspace. O backend segue monólito modular, evitando microserviços prematuros e preservando capacidade de evolução.",
      highlights: [
        "Criação de links sem login",
        "Expiração automática",
        "Redirecionamento seguro",
        "Registro de cliques",
        "Rate limiting",
        "Autenticação, workspaces e dashboard",
        "Arquitetura greenfield multi-tenant",
      ],
    },
    seo: {
      title: "ClicaNo.Site | Encurtador de Links e Gestão de URLs",
      description:
        "Encurtador de links com expiração automática, gestão simples de URLs e registro básico de cliques. Crie sem login ou administre com conta.",
    },
  },
  {
    id: "map",
    slug: "midia-auto-pilot",
    name: "MAP",
    subtitle: "Mídia Auto Pilot",
    shortDescription:
      "SaaS multi-tenant que automatiza ingestão, enriquecimento com IA, agendamento e publicação de conteúdo no Instagram e Facebook.",
    category: "saas",
    status: "development",
    featured: true,
    order: 4,
    accent: "orange",
    icon: "chart",
    preview: "metrics",
    technologies: [
      "FastAPI",
      "Python",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "RQ",
      "Docker Compose",
      "Tailwind CSS",
    ],
    integrations: ["Meta (Instagram e Facebook)", "Stripe"],
    ai: {
      product: {
        used: true,
        summary:
          "A inteligência artificial enriquece o conteúdo a partir da mídia, gerando metadados e legendas com fallback entre providers configurados, enquanto o pipeline de publicação permanece orquestrado pela plataforma.",
        applications: [
          "Geração de legendas e metadados",
          "Sugestão de hashtags",
          "Enriquecimento de conteúdo a partir da mídia",
          "Fallback entre providers de IA",
          "Apoio ao smart crop com visão computacional",
        ],
      },
    },
    links: {
      website: "https://midiaautopilot.com",
    },
    caseStudy: {
      problem:
        "Empresas e criadores precisam produzir, preparar, programar e publicar conteúdo em múltiplos canais, em geral com tarefas manuais, ferramentas separadas e acompanhamento operacional recorrente.",
      solution:
        "O MAP opera o ciclo de conteúdo: ingestão de mídia, enriquecimento com IA, preparação, agendamento, publicação automatizada e controle de status, logs e falhas, com isolamento por cliente.",
      architecture:
        "Frontend Next.js, API FastAPI, PostgreSQL, Redis/RQ, workers especializados de mídia, preparação e publicação, pipeline assíncrono e multi-tenancy por cliente.",
      highlights: [
        "Pipeline automatizado de conteúdo",
        "Processamento assíncrono com Redis/RQ",
        "Workers especializados",
        "IA para legendas e metadados",
        "Publicação automatizada no Instagram e Facebook",
        "Multi-tenancy por cliente",
        "Idempotência, retries e rastreio de status/falhas",
      ],
    },
    seo: {
      title: "Mídia Auto Pilot | Automação de Conteúdo com IA",
      description:
        "SaaS multi-tenant que automatiza ingestão, enriquecimento com IA, agendamento e publicação de conteúdo no Instagram e Facebook, com workers e filas.",
    },
  },
  {
    id: "farmacinha",
    slug: "farmacinha-de-casa",
    name: "Farmacinha de Casa",
    subtitle: "Inventário doméstico via WhatsApp",
    shortDescription:
      "Inventário doméstico de medicamentos com consulta conversacional via WhatsApp e painel web de gestão.",
    category: "automation",
    status: "development",
    featured: false,
    order: 5,
    accent: "blue",
    icon: "inventory",
    preview: "inventory",
    technologies: ["PHP", "MySQL", "Apache", "JavaScript", "Bootstrap", "n8n"],
    integrations: ["WhatsApp", "Evolution API", "Google Gemini"],
    ai: {
      product: {
        used: true,
        summary:
          "A IA interpreta a mensagem e apoia a consulta conversacional aos dados cadastrados no inventário. Ela não diagnostica, não prescreve e não toma decisão clínica.",
        applications: [
          "Interpretação da mensagem do usuário",
          "Apoio à consulta conversacional do inventário",
          "Formatação da resposta no fluxo automatizado",
        ],
      },
    },
    caseStudy: {
      problem:
        "Organizar medicamentos domésticos, acompanhar validade, disponibilidade e informações cadastradas fica difícil quando os dados estão dispersos ou dependem de consulta manual.",
      solution:
        "O Farmacinha de Casa conecta o WhatsApp a um inventário doméstico estruturado para consultar disponibilidade, validade e informações registradas, com painel web multi-usuário para gestão do inventário.",
      architecture:
        "Canal WhatsApp via Evolution API, orquestração em n8n com agente de IA, inventário em MySQL e aplicação web PHP/Apache multi-tenant com papéis de acesso e gancho de API para a automação.",
      highlights: [
        "Consulta de inventário via WhatsApp",
        "Controle de disponibilidade e validade",
        "Automação com n8n",
        "IA conversacional no fluxo documentado",
        "Painel web de gestão",
        "Separação por farmácia e papéis de acesso",
      ],
    },
    seo: {
      title: "Farmacinha de Casa | Gestão de Medicamentos pelo WhatsApp",
      description:
        "Organize o inventário doméstico de medicamentos com consulta via WhatsApp, controle de validade e disponibilidade, além de painel web de gestão.",
    },
  },
  {
    id: "freeroad",
    slug: "free-road",
    name: "Free Road",
    shortName: "Free Road",
    subtitle: "MotoGrupo Free Road",
    shortDescription:
      "Site institucional do MotoGrupo Free Road com agenda de rolês, painel administrativo e experiência Conquista Biker.",
    category: "institutional",
    status: "active",
    featured: false,
    order: 7,
    accent: "orange",
    icon: "bike",
    preview: "community",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
      "Docker",
    ],
    links: {
      website: "https://freeroadoficial.com",
    },
    caseStudy: {
      problem:
        "O moto grupo precisava centralizar presença digital, divulgação de rolês, administração de conteúdo e uma experiência para motociclistas acompanharem conquistas e rotas.",
      solution:
        "A plataforma digital do Free Road combina site institucional, agenda e divulgação de rolês, painel administrativo, área do motociclista, Conquista Biker, perfil público opcional e ranking opcional.",
      architecture:
        "Next.js full-stack com App Router, Prisma e SQLite no MVP, autenticações administrativa e de motociclista separadas com sessões opacas, Server Actions/Route Handlers e deploy Docker standalone.",
      highlights: [
        "Site institucional do moto grupo",
        "Administração de rolês",
        "Autenticação administrativa",
        "Cadastro e login de motociclista",
        "Conquista Biker com catálogo de rotas",
        "Perfil público opcional",
        "Ranking público opcional com autenticações isoladas",
      ],
    },
    seo: {
      title: "Free Road | Plataforma Digital para Moto Grupo",
      description:
        "Site institucional do MotoGrupo Free Road com agenda de rolês, painel administrativo e experiência digital Conquista Biker para motociclistas.",
    },
  },
  {
    id: "dao",
    slug: "agent-orchestrator",
    name: "Agent Orchestrator",
    shortName: "DAO",
    subtitle: "Dstudium Agent Orchestration",
    shortDescription:
      "Plataforma de orquestração de agentes de IA para coordenar projetos, squads, workflows, handoffs e execução auditável.",
    category: "ai",
    status: "development",
    featured: false,
    order: 2,
    accent: "purple",
    icon: "ai",
    preview: "agents",
    technologies: ["TypeScript", "Node.js", "SQLite", "Docker"],
    integrations: ["GitHub Issues e Projects", "OpenClaw Gateway"],
    ai: {
      product: {
        used: true,
        summary:
          "A orquestração de agentes de IA é a natureza do produto: o DAO coordena workers especializados, sessões de runtime, handoffs e recuperação sem concentrar regras de negócio dos projetos consumidores.",
        applications: [
          "Catálogo e resolução de agentes por projeto",
          "Execução de sessões reais de agentes",
          "Handoffs entre etapas do workflow",
          "Recovery, retry e bloqueio seguro",
          "Auditoria correlacionada da operação",
        ],
      },
    },
    caseStudy: {
      problem:
        "Coordenar times de agentes especializados e fluxos de trabalho entre projetos exige rastreabilidade, isolamento e recuperação confiável, sem regras fixas embutidas por produto.",
      solution:
        "O DAO — Dstudium Agent Orchestration — opera como núcleo para projetos, catálogo de agentes, squads, workflows, handoffs, execução, persistência e auditoria, com integração ao GitHub e write-back operacional.",
      architecture:
        "Runtime one-shot em Node.js/TypeScript com persistência SQLite, claims e leases para exclusividade, adapters para GitHub e OpenClaw Gateway, e isolamento por project_id entre consumidores como o MAZ.",
      highlights: [
        "Projetos e isolamento por project_id",
        "Catálogo de agentes e resolução por capability",
        "Squads independentes por projeto",
        "Workflows, execução e handoffs persistidos",
        "Integração com GitHub Issues e Projects",
        "Write-back operacional no GitHub",
        "Recovery, retry com limite e blocker automático",
        "Auditoria correlacionada das operações",
      ],
    },
    seo: {
      title: "Agent Orchestrator | Orquestração de Agentes de IA | DSTUDIUM",
      description:
        "Plataforma da DSTUDIUM para orquestrar agentes de IA, workflows, handoffs e execução auditável entre projetos.",
    },
  },
  {
    id: "erp-cap",
    slug: "erp-cap",
    name: "ERP-CAP",
    subtitle: "Capitalização",
    shortDescription:
      "ERP/SaaS modular em discovery para operação de títulos de capitalização, da estrutura regulatória ao fluxo operacional.",
    category: "platform",
    status: "development",
    featured: false,
    order: 6,
    accent: "blue",
    icon: "architecture",
    preview: "platform",
    caseStudy: {
      problem:
        "Operar títulos de capitalização exige domínio regulatório, comercial, operacional e financeiro em uma plataforma enterprise capaz de evoluir por modalidade e por cliente.",
      solution:
        "Em discovery e definição arquitetural, o CAP é desenhado como ERP/SaaS modular cobrindo Nota Técnica, Plano, Produto, Série, Título, promoções, números da sorte, sorteios, financeiro, relatórios e integrações — ainda como escopo de domínio, não como funcionalidades prontas.",
      architecture:
        "Arquitetura em definição: monorepo modular preparado para apps api/web/worker/scheduler, multi-cliente e separação entre estrutura regulatória, comercial, operacional, financeira e de conformidade, sem microserviços prematuros. Stack de referência ainda não implementada em repositório público.",
      highlights: [
        "Em discovery e definição arquitetural",
        "Domínio: Nota Técnica, Plano, Produto e Série",
        "Domínio: Título, números da sorte e sorteios",
        "Domínio: promoções, financeiro e relatórios",
        "Modalidades como pacotes de regra plugáveis",
        "Desenho multi-cliente e modular por domínio",
      ],
    },
    seo: {
      title: "ERP-CAP | Plataforma de Capitalização em Definição | DSTUDIUM",
      description:
        "ERP/SaaS modular da DSTUDIUM para títulos de capitalização — atualmente em discovery e definição arquitetural.",
    },
  },
];

export type PortfolioFilterId =
  | "all"
  | "products"
  | "ai-automation"
  | "own"
  | "clients";

export type PortfolioSectionId = "products" | "ai-automation" | "own";

export const PORTFOLIO_FILTERS: {
  id: PortfolioFilterId;
  label: string;
}[] = [
  { id: "all", label: "Todos" },
  { id: "products", label: "Produtos" },
  { id: "ai-automation", label: "IA & Automação" },
  { id: "own", label: "Projetos próprios" },
  { id: "clients", label: "Clientes" },
];

/** Seções de produtos/projetos. Clientes usam `client-cases.ts`. */
export const PORTFOLIO_SECTIONS: {
  id: PortfolioSectionId;
  label: string;
  filterId: Exclude<PortfolioFilterId, "all" | "clients">;
  categories: ProjectCategory[];
}[] = [
  {
    id: "products",
    label: "Produtos",
    filterId: "products",
    categories: ["saas", "platform"],
  },
  {
    id: "ai-automation",
    label: "IA & Automação",
    filterId: "ai-automation",
    categories: ["ai", "automation"],
  },
  {
    id: "own",
    label: "Projetos próprios",
    filterId: "own",
    categories: ["institutional", "own-project"],
  },
];

function matchesPortfolioFilter(
  project: Project,
  filterId: PortfolioFilterId,
): boolean {
  if (filterId === "all") return true;
  if (filterId === "clients") return false;
  const section = PORTFOLIO_SECTIONS.find((item) => item.filterId === filterId);
  return section ? section.categories.includes(project.category) : false;
}

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

export function getProjectsByFilter(filterId: PortfolioFilterId): Project[] {
  return getAllProjects().filter((project) =>
    matchesPortfolioFilter(project, filterId),
  );
}

export function getPortfolioSections(
  filterId: PortfolioFilterId = "all",
): {
  id: PortfolioSectionId;
  label: string;
  projects: Project[];
}[] {
  if (filterId === "clients") return [];

  const sections =
    filterId === "all"
      ? PORTFOLIO_SECTIONS
      : PORTFOLIO_SECTIONS.filter((section) => section.filterId === filterId);

  return sections.map((section) => ({
    id: section.id,
    label: section.label,
    projects: getAllProjects().filter((project) =>
      section.categories.includes(project.category),
    ),
  }));
}
