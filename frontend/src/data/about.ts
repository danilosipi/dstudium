import type { AboutDifferential } from "@/types";

export const aboutContent = {
  eyebrow: "Sobre a DSTUDIUM",
  title: "Transformamos ideias em soluções digitais reais",
  text: "Somos uma empresa de tecnologia especializada no desenvolvimento de sistemas, automação de processos e soluções com inteligência artificial. Nosso foco é gerar valor para empresas por meio de tecnologia simples, eficiente e escalável.",
  ctaLabel: "Conheça mais sobre nós",
  ctaHref: "/sobre",
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

export const aboutPageHero = {
  eyebrow: "Sobre a DSTUDIUM",
  title: "Tecnologia construída para resolver problemas reais",
  description:
    "A DSTUDIUM desenvolve produtos digitais, sistemas, automações e soluções tecnológicas para transformar ideias, processos e necessidades de negócio em operações digitais estruturadas.",
  complement:
    "Nossa atuação combina engenharia de software, inteligência artificial, integrações, infraestrutura e experiência digital.",
} as const;

export const aboutIdentity = {
  eyebrow: "O que é a DSTUDIUM",
  title: "Uma estrutura de tecnologia da concepção à operação",
  lead: "A DSTUDIUM não se limita a entregar software sob demanda. Atuamos como estrutura de tecnologia capaz de entender o problema, desenhar a solução e acompanhar a evolução do produto ou da operação.",
  message:
    "Entender o problema e aplicar a combinação adequada de tecnologia, engenharia e operação.",
  areas: [
    "Produtos SaaS",
    "Aplicações web",
    "Automação de processos",
    "Integrações",
    "Inteligência artificial",
    "Arquitetura de sistemas",
    "Infraestrutura tecnológica",
    "Presença digital",
    "Branding e comunicação quando aplicável",
  ],
} as const;

export const aboutEvolutionStages = [
  {
    id: "presenca",
    number: "01",
    title: "Presença digital e comunicação",
    description:
      "Primeiros trabalhos com identidade visual, sites, cartões digitais, cardápios digitais, redes sociais e comunicação visual — base para entender negócios reais e necessidades de marca.",
  },
  {
    id: "infra",
    number: "02",
    title: "Infraestrutura e operação",
    description:
      "Evolução para sustentação tecnológica: hospedagem, e-mail, redes, computadores e apoio contínuo à operação das empresas.",
  },
  {
    id: "produtos",
    number: "03",
    title: "Produtos e software",
    description:
      "Construção de aplicações web, plataformas SaaS, sistemas multiusuário, automações e integrações entre canais e serviços.",
  },
  {
    id: "ia",
    number: "04",
    title: "Inteligência artificial e arquitetura",
    description:
      "Estado atual com IA integrada a produtos, agentes especializados, automação inteligente, arquitetura de sistemas e discovery de plataformas empresariais.",
  },
] as const;

export const aboutCapabilities = [
  {
    id: "saas",
    title: "Produtos e SaaS",
    description:
      "Produtos digitais escaláveis, com gestão de usuários, dados e evolução contínua.",
    href: "/solucoes#saas",
    icon: "saas" as const,
  },
  {
    id: "web",
    title: "Aplicações Web",
    description:
      "Portais, dashboards e aplicações orientadas à operação real do negócio.",
    href: "/solucoes#aplicacoes-web",
    icon: "web" as const,
  },
  {
    id: "automacao",
    title: "Automação",
    description:
      "Fluxos, eventos e processamento assíncrono para reduzir trabalho manual.",
    href: "/solucoes#automacao",
    icon: "automation" as const,
  },
  {
    id: "integracoes",
    title: "Integrações",
    description:
      "Conexão entre sistemas, APIs e plataformas para eliminar ilhas de informação.",
    href: "/solucoes#integracoes",
    icon: "integration" as const,
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    description:
      "IA aplicada a produtos e ao processo de engenharia, com validação humana.",
    href: "/solucoes#ia",
    icon: "ai" as const,
  },
  {
    id: "arquitetura",
    title: "Arquitetura e Infraestrutura",
    description:
      "Discovery, desenho de plataforma, modernização e sustentação tecnológica.",
    href: "/solucoes#consultoria",
    icon: "consulting" as const,
  },
] as const;

export const aboutAiContent = {
  eyebrow: "Inteligência artificial",
  title: "Inteligência artificial integrada à engenharia",
  lead: "Desenvolvimento acelerado por inteligência artificial, com arquitetura, engenharia e validação humana.",
  process:
    "IA integrada ao processo de engenharia para construir, testar, automatizar e evoluir produtos com mais velocidade.",
  productTitle: "IA nos produtos",
  productText:
    "Quando agrega valor, a IA entra no produto — interpretação conversacional, enriquecimento de conteúdo, agentes especializados e automação assistida — sem substituir regras críticas de negócio.",
  productProjectSlugs: [
    "minha-agenda-zap",
    "midia-auto-pilot",
    "farmacinha-de-casa",
    "agent-orchestrator",
  ] as const,
  engineeringTitle: "IA no processo de engenharia",
  engineeringItems: [
    "Análise e exploração de soluções",
    "Apoio ao desenvolvimento",
    "Automação de tarefas repetitivas",
    "Testes e documentação",
    "Evolução contínua do produto",
  ] as const,
  note: "Decisões arquiteturais, validações e regras críticas permanecem sob controle da engenharia.",
} as const;

export const aboutProofProjects = [
  {
    slug: "minha-agenda-zap",
    label: "Minha Agenda Zap",
    summary: "SaaS + WhatsApp + automação + IA",
  },
  {
    slug: "agent-orchestrator",
    label: "Agent Orchestrator",
    summary: "Orquestração de agentes de IA",
  },
  {
    slug: "free-road",
    label: "Free Road",
    summary: "Produto digital / plataforma institucional",
  },
  {
    slug: "erp-cap",
    label: "ERP-CAP",
    summary: "Discovery e arquitetura de plataforma enterprise",
  },
] as const;

export const aboutClientsContent = {
  eyebrow: "Clientes",
  title: "Empresas reais, necessidades reais",
  text: "Além dos produtos próprios, a DSTUDIUM atende empresas em diferentes necessidades de tecnologia, infraestrutura, presença digital, marketing e comunicação.",
  ctaLabel: "Ver clientes e trabalhos realizados",
  ctaHref: "/projetos",
} as const;

export const aboutPrinciples = [
  {
    id: "problema",
    title: "Problema antes da tecnologia",
    description:
      "Entender a necessidade antes de escolher ferramenta ou arquitetura.",
  },
  {
    id: "simplicidade",
    title: "Simplicidade antes da complexidade",
    description:
      "Evitar arquitetura excessiva quando uma solução mais simples atende melhor.",
  },
  {
    id: "automacao",
    title: "Automação onde gera valor",
    description:
      "Automatizar atividades repetitivas e integrações sem remover controles necessários.",
  },
  {
    id: "ia",
    title: "IA com validação",
    description:
      "Usar IA para acelerar e ampliar capacidade mantendo supervisão de engenharia.",
  },
  {
    id: "evolucao",
    title: "Evolução contínua",
    description:
      "Projetar soluções capazes de crescer e ser melhoradas ao longo do tempo.",
  },
] as const;

/**
 * Fonte: Notion oficial DSTUDIUM — currículo digital em danilo.dstudium.com
 * destaca a atuação de Danilo nos projetos (papel, decisões técnicas, arquitetura).
 * Sem datas, cargos anteriores ou métricas não confirmadas.
 */
export const aboutLeadership = {
  eyebrow: "Quem está por trás",
  title: "Liderança técnica e visão de produto",
  text: "A DSTUDIUM é conduzida por Danilo, com direção técnica e de produto voltada à construção de soluções digitais, automações, integrações e arquitetura de sistemas.",
  note: "A trajetória detalhada e os cases sob a ótica pessoal serão publicados em danilo.dstudium.com.",
} as const;

export const aboutFinalCta = {
  title: "Vamos transformar uma necessidade em solução?",
  description:
    "Converse com a DSTUDIUM sobre seu projeto, processo ou desafio tecnológico.",
} as const;
