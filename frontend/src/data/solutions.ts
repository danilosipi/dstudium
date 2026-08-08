import type { Solution, SolutionDetail } from "@/types";

export const solutions: Solution[] = [
  {
    id: "saas",
    title: "Sistemas SaaS",
    description:
      "Desenvolvemos produtos escaláveis com foco em experiência e performance.",
    icon: "saas",
    accent: "blue",
    visual: "saas",
  },
  {
    id: "aplicacoes-web",
    title: "Aplicações Web",
    description:
      "Webapps modernos, responsivos e seguros para diferentes necessidades.",
    icon: "web",
    accent: "cyan",
    visual: "web",
  },
  {
    id: "automacao",
    title: "Automação de Processos",
    description:
      "Automatizamos rotinas e fluxos para reduzir custos e erros.",
    icon: "automation",
    accent: "purple",
    visual: "automation",
  },
  {
    id: "integracoes",
    title: "Integrações e APIs",
    description:
      "Conectamos sistemas, APIs e plataformas para um ecossistema eficiente.",
    icon: "integration",
    accent: "deep",
    visual: "integration",
  },
  {
    id: "ia",
    title: "IA aplicada a negócios",
    description: "Inteligência artificial para análise, previsão e automação.",
    icon: "ai",
    accent: "green",
    visual: "ai",
  },
  {
    id: "consultoria",
    title: "Consultoria e Arquitetura",
    description:
      "Estratégia, arquitetura e tecnologia para escalar com segurança.",
    icon: "consulting",
    accent: "orange",
    visual: "consulting",
  },
];

export const solutionDetails: SolutionDetail[] = [
  {
    id: "saas",
    lead: "Desenvolvimento de produtos digitais escaláveis, com arquitetura preparada para evolução, gestão de usuários, dados, integrações e automações.",
    applications: [
      "Plataformas por assinatura",
      "Produtos digitais B2B e B2C",
      "Sistemas multiusuário",
      "Dashboards e áreas autenticadas",
      "Billing e integrações quando aplicável",
    ],
    relatedProjectSlugs: [
      "minha-agenda-zap",
      "clicano-site",
      "midia-auto-pilot",
    ],
  },
  {
    id: "aplicacoes-web",
    lead: "Construção de aplicações web modernas, responsivas e orientadas à operação real do negócio — de portais e sistemas administrativos a experiências digitais com funcionalidades específicas.",
    applications: [
      "Portais e sistemas administrativos",
      "Dashboards operacionais",
      "Aplicações internas",
      "Experiências digitais",
      "Sites institucionais com funcionalidades específicas",
    ],
  },
  {
    id: "automacao",
    lead: "Mapeamento e automação de tarefas repetitivas e fluxos operacionais para integrar sistemas e reduzir trabalho manual.",
    applications: [
      "Workflows e eventos",
      "Filas e processamento assíncrono",
      "Orquestração com n8n quando aplicável",
      "Integrações entre sistemas e canais",
    ],
    relatedProjectSlugs: [
      "farmacinha-de-casa",
      "minha-agenda-zap",
      "midia-auto-pilot",
    ],
  },
  {
    id: "integracoes",
    lead: "Integração entre sistemas, serviços e plataformas para eliminar ilhas de informação e criar fluxos conectados.",
    examples: [
      "WhatsApp",
      "Google Calendar",
      "Google Meet",
      "Stripe",
      "Meta",
      "Webhooks",
      "GitHub",
    ],
  },
  {
    id: "ia",
    lead: "A DSTUDIUM usa IA como capacidade integrada ao produto e ao processo de engenharia, não como elemento decorativo. Desenvolvimento acelerado por inteligência artificial, com arquitetura, engenharia e validação humana.",
    concepts: [
      "IA integrada ao processo de engenharia para construir, testar, automatizar e evoluir produtos com mais velocidade",
      "Interpretação conversacional e automação assistida quando agrega valor",
      "Geração e enriquecimento de conteúdo",
      "Agentes especializados com controle humano nas decisões críticas",
    ],
    relatedProjectSlugs: [
      "minha-agenda-zap",
      "midia-auto-pilot",
      "farmacinha-de-casa",
      "agent-orchestrator",
    ],
  },
  {
    id: "consultoria",
    lead: "Apoio desde discovery e definição de produto até arquitetura técnica, estruturação de sistemas e evolução de soluções existentes.",
    applications: [
      "Discovery e definição funcional",
      "Arquitetura e desenho de plataforma",
      "Integrações e modernização",
      "Escalabilidade e avaliação técnica",
    ],
    relatedProjectSlugs: ["erp-cap"],
  },
];

export const solutionProofProjectSlugs = [
  "minha-agenda-zap",
  "agent-orchestrator",
  "clicano-site",
  "midia-auto-pilot",
] as const;

export const engineeringAiSteps = [
  "Planejar",
  "Construir",
  "Integrar",
  "Validar",
  "Evoluir",
] as const;

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find((solution) => solution.id === id);
}

export function getSolutionDetail(id: string): SolutionDetail | undefined {
  return solutionDetails.find((detail) => detail.id === id);
}
