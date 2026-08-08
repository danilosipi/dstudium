import type { ClientCase, ClientRelationship } from "@/types";

/**
 * Clientes ativos e trabalhos realizados da DSTUDIUM.
 * Fonte: confirmação direta do responsável. Não inventar serviços ou métricas.
 */

export const CLIENT_RELATIONSHIP_LABELS: Record<ClientRelationship, string> = {
  active: "Cliente ativo",
  completed: "Trabalho realizado",
};

export function getClientRelationshipLabel(
  relationship: ClientRelationship,
): string {
  return CLIENT_RELATIONSHIP_LABELS[relationship];
}

export const clientCases: ClientCase[] = [
  {
    id: "contvit",
    name: "Contvit",
    description:
      "Desenvolvimento e manutenção da presença web, além de suporte à infraestrutura de rede e computadores da empresa.",
    relationship: "active",
    order: 1,
    services: [
      "Desenvolvimento e manutenção do site",
      "Infraestrutura de rede",
      "Suporte de computadores",
    ],
  },
  {
    id: "box3-motos",
    name: "Box3 Motos",
    description:
      "Branding, identidade visual e atuação contínua em marketing para a Box3 Motos, do logotipo ao padrão visual da oficina.",
    relationship: "active",
    order: 2,
    services: [
      "Marketing",
      "Criação de logotipo",
      "Padrão visual da oficina",
      "Identidade visual",
    ],
  },
  {
    id: "condominio-passos-do-parque",
    name: "Condomínio Passos do Parque",
    description:
      "Desenvolvimento de comunicação visual aplicada aos elevadores do Condomínio Passos do Parque.",
    relationship: "active",
    order: 3,
    services: ["Comunicação visual para elevadores"],
  },
  {
    id: "actualreforma",
    name: "ActualReforma",
    description: "Operação de hospedagem de e-mail para a ActualReforma.",
    relationship: "active",
    order: 4,
    services: ["Hospedagem de e-mail"],
  },
  {
    id: "13ree-otica",
    name: "13Ree Ótica",
    description:
      "Comunicação visual, presença digital e administração de redes sociais.",
    relationship: "completed",
    order: 10,
    services: [
      "Comunicação visual",
      "Presença digital",
      "Administração de redes sociais",
    ],
  },
  {
    id: "goairtech",
    name: "GoAirTech",
    description:
      "Discovery e prototipação de produto digital, com concepção de experiência e ecossistema digital. O projeto foi encerrado ainda na fase de protótipo.",
    relationship: "completed",
    order: 11,
    futureDetail: true,
    services: [
      "Discovery",
      "Prototipação de produto digital",
      "Planejamento de presença digital",
      "Planejamento de aplicativo",
    ],
  },
  {
    id: "thais-marques-estetica",
    name: "Thais Marques Estética",
    description:
      "Marketing digital, definição de padrão visual e administração de redes sociais.",
    relationship: "completed",
    order: 12,
    services: [
      "Marketing digital",
      "Padrão visual",
      "Administração de redes sociais",
    ],
  },
  {
    id: "ki-delicia-bolos-artesanais",
    name: "Ki Delícia Bolos Artesanais",
    description: "Criação de identidade visual com desenvolvimento de logotipo.",
    relationship: "completed",
    order: 13,
    services: ["Criação de logotipo"],
  },
  {
    id: "projetano-eventos",
    name: "Projetano Eventos",
    description:
      "Desenvolvimento de cartão de visita digital interativo durante o período da pandemia.",
    relationship: "completed",
    order: 14,
    services: ["Cartão de visita interativo"],
  },
  {
    id: "larikas-burger",
    name: "Larikas Burger",
    description: "Desenvolvimento de cardápio digital interativo.",
    relationship: "completed",
    order: 15,
    services: ["Cardápio digital interativo"],
  },
  {
    id: "fama-gardem",
    name: "Fama Gardem",
    description:
      "Gerenciamento de presença digital, incluindo site e redes sociais.",
    relationship: "completed",
    order: 16,
    services: ["Gerenciamento de site", "Gerenciamento de redes sociais"],
  },
  {
    id: "homeburgers",
    name: "HomeBurgers",
    description: "Desenvolvimento de cardápio digital interativo.",
    relationship: "completed",
    order: 17,
    services: ["Cardápio digital interativo"],
  },
  {
    id: "iloveburger",
    name: "ILoveBurger",
    description: "Hospedagem e gerenciamento de site e serviços de e-mail.",
    relationship: "completed",
    order: 18,
    services: [
      "Hospedagem",
      "Gerenciamento de site",
      "Gerenciamento de e-mail",
    ],
  },
  {
    id: "giro-pecas",
    name: "Giro Peças",
    description: "Desenvolvimento de cartão de visita.",
    relationship: "completed",
    order: 19,
    services: ["Cartão de visita"],
  },
  {
    id: "vg-uniformes",
    name: "VG Uniformes",
    description: "Desenvolvimento de cartão de visita.",
    relationship: "completed",
    order: 20,
    services: ["Cartão de visita"],
  },
  {
    id: "anne-louise",
    name: "Anne Louise",
    description: "Criação de logotipo e cartão de visita.",
    relationship: "completed",
    order: 21,
    services: ["Logotipo", "Cartão de visita"],
  },
];

function sortClientCases(items: ClientCase[]): ClientCase[] {
  return [...items].sort(
    (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER),
  );
}

export function getAllClientCases(): ClientCase[] {
  return sortClientCases(clientCases);
}

export function getActiveClientCases(): ClientCase[] {
  return sortClientCases(
    clientCases.filter((item) => item.relationship === "active"),
  );
}

export function getCompletedClientCases(): ClientCase[] {
  return sortClientCases(
    clientCases.filter((item) => item.relationship === "completed"),
  );
}
