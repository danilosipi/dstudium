/** Contato institucional — fonte única para Footer e /contato. */
export const institutionalContact = {
  email: "contato@dstudium.com",
  location: "São Paulo - SP, Brasil",
} as const;

export const contactDemandTypes = [
  { id: "saas", label: "Produto / SaaS" },
  { id: "web", label: "Aplicação Web" },
  { id: "automacao", label: "Automação" },
  { id: "integracao", label: "Integração" },
  { id: "ia", label: "Inteligência Artificial" },
  { id: "arquitetura", label: "Arquitetura / Discovery" },
  { id: "infraestrutura", label: "Infraestrutura" },
  { id: "presenca", label: "Presença Digital / Marketing" },
  { id: "outro", label: "Outro" },
] as const;

export type ContactDemandTypeId = (typeof contactDemandTypes)[number]["id"];

export const contactDemandExamples = [
  "Desenvolvimento de SaaS e produtos digitais",
  "Aplicações web",
  "Automação de processos",
  "Integrações e APIs",
  "Inteligência artificial aplicada",
  "Arquitetura e discovery",
  "Infraestrutura tecnológica quando aplicável",
  "Presença digital, branding e marketing quando fizer sentido",
] as const;

export const contactPageContent = {
  eyebrow: "Contato",
  title: "Vamos conversar sobre seu próximo projeto",
  description:
    "Conte o que você precisa construir, automatizar, integrar ou evoluir. A DSTUDIUM avalia o cenário e ajuda a definir o caminho técnico mais adequado.",
  demandsTitle: "Que tipo de demanda atendemos",
  demandsCtaLabel: "Conheça nossas soluções",
  demandsCtaHref: "/solucoes",
  supportTitle: "Não sabe exatamente qual solução precisa?",
  supportText:
    "Não é necessário chegar com a arquitetura ou tecnologia definida. Podemos começar pelo problema, entender o contexto e estruturar os próximos passos.",
  privacyNoteBeforeLink:
    "Ao enviar sua mensagem, você concorda com o tratamento das informações fornecidas para atendimento do contato, conforme nossa",
  privacyNoteLinkLabel: "Política de Privacidade",
  privacyNoteHref: "/privacidade",
  formTitle: "Envie uma mensagem",
  formHint:
    "Ao enviar, seu cliente de e-mail abrirá com a mensagem preenchida para contato@dstudium.com.",
} as const;

export function getContactDemandLabel(id: string): string | undefined {
  return contactDemandTypes.find((item) => item.id === id)?.label;
}

export function buildContactMailto(input: {
  name: string;
  email: string;
  company?: string;
  demandId: string;
  message: string;
}): string {
  const demandLabel = getContactDemandLabel(input.demandId) ?? input.demandId;
  const subject = `Contato pelo site DSTUDIUM - ${demandLabel}`;
  const body = [
    `Nome: ${input.name}`,
    `E-mail: ${input.email}`,
    `Empresa: ${input.company?.trim() ? input.company.trim() : "—"}`,
    `Tipo: ${demandLabel}`,
    "",
    "Mensagem:",
    input.message,
  ].join("\n");

  return `mailto:${institutionalContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
