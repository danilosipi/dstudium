import { institutionalContact } from "@/data/contact";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  slug: "privacidade" | "termos";
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
  relatedLabel: string;
  relatedHref: string;
};

export const privacyPolicy: LegalDocument = {
  slug: "privacidade",
  eyebrow: "Privacidade",
  title: "Política de Privacidade",
  intro:
    "A DSTUDIUM respeita a privacidade dos visitantes do seu site e busca tratar informações pessoais de forma transparente e compatível com a finalidade para a qual foram fornecidas.",
  updatedAt: "agosto de 2026",
  relatedLabel: "Termos de Uso",
  relatedHref: "/termos",
  sections: [
    {
      id: "informacoes",
      title: "1. Informações que podem ser fornecidas",
      paragraphs: [
        "No estado atual do site institucional, o visitante pode, de forma voluntária, informar dados ao entrar em contato por meio do formulário disponível em /contato.",
        "Os campos previstos no formulário são: nome, e-mail, empresa (opcional), tipo de demanda e mensagem.",
        "O formulário de contato prepara uma mensagem para ser enviada pelo aplicativo de e-mail do visitante, por meio de um link mailto. No estado atual, o formulário não envia esses dados para um backend da DSTUDIUM e não grava essas informações diretamente em um banco de dados próprio do site.",
        "Depois que o visitante conclui o envio no próprio cliente de e-mail, a mensagem poderá existir nos sistemas de e-mail envolvidos na comunicação — incluindo o destinatário contato@dstudium.com.",
      ],
    },
    {
      id: "finalidades",
      title: "2. Finalidades do tratamento",
      paragraphs: [
        "As informações enviadas voluntariamente podem ser utilizadas para:",
      ],
      bullets: [
        "responder ao contato;",
        "entender a necessidade apresentada;",
        "avaliar projetos ou oportunidades;",
        "manter comunicação relacionada à solicitação;",
        "prestar informações solicitadas pelo próprio visitante.",
      ],
    },
    {
      id: "mailing",
      title: "3. Cadastros e comunicações",
      paragraphs: [
        "No estado atual, o formulário de contato do site não realiza cadastro automático em listas de mailing, newsletter ou ferramentas de remarketing.",
        "A DSTUDIUM também não utiliza o formulário institucional para venda de dados pessoais ou criação automática de perfis comportamentais.",
      ],
    },
    {
      id: "lgpd",
      title: "4. LGPD e bases legais",
      paragraphs: [
        "Esta Política considera a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).",
        "O tratamento de informações pessoais ocorrerá conforme as bases legais aplicáveis a cada situação, especialmente quando necessário para atender solicitação do titular, conduzir procedimentos preliminares relacionados a eventual contratação, cumprir obrigações legais ou atender legítimos interesses, observados os direitos do titular.",
        "A base legal específica pode variar conforme o contexto do contato e da relação estabelecida.",
      ],
    },
    {
      id: "compartilhamento",
      title: "5. Compartilhamento",
      paragraphs: [
        "A DSTUDIUM não comercializa informações pessoais fornecidas por visitantes do site como produto.",
        "Informações poderão ser tratadas por prestadores técnicos necessários ao funcionamento da comunicação e da infraestrutura, sempre de acordo com a finalidade aplicável — por exemplo, serviços de e-mail ou hospedagem envolvidos na operação do site e do atendimento do contato.",
      ],
    },
    {
      id: "cookies",
      title: "6. Cookies e tecnologias de rastreamento",
      paragraphs: [
        "No momento, o site institucional da DSTUDIUM não utiliza cookies de publicidade, pixels de redes sociais nem ferramentas próprias de rastreamento comportamental, como Google Analytics, Meta Pixel ou equivalentes.",
        "O site também não possui, nesta versão, banner de consentimento de cookies nem gerenciador de consentimento, porque não há implementação ativa de tracking publicitário ou analítico próprio.",
        "Eventuais cookies ou registros técnicos poderão ser utilizados por infraestrutura, hospedagem ou pelo próprio navegador para o funcionamento básico da navegação. Se isso mudar no futuro, esta Política será atualizada.",
      ],
    },
    {
      id: "links",
      title: "7. Links externos",
      paragraphs: [
        "O site pode conter links para produtos, projetos, clientes ou plataformas externas. Esses ambientes possuem práticas próprias de privacidade e a DSTUDIUM não controla integralmente o tratamento de dados realizado fora do site institucional.",
      ],
    },
    {
      id: "seguranca",
      title: "8. Segurança",
      paragraphs: [
        "A DSTUDIUM adota medidas técnicas e organizacionais compatíveis com suas operações para reduzir riscos de acesso, alteração, divulgação ou uso indevido de informações.",
        "Nenhuma medida elimina riscos por completo. Em caso de incidente relevante, a DSTUDIUM avaliará as ações cabíveis conforme o contexto e a legislação aplicável.",
      ],
    },
    {
      id: "retencao",
      title: "9. Retenção",
      paragraphs: [
        "As informações eventualmente recebidas por e-mail poderão ser mantidas pelo período necessário para tratar a solicitação, manter o relacionamento decorrente do contato e cumprir obrigações aplicáveis.",
      ],
    },
    {
      id: "direitos",
      title: "10. Direitos do titular",
      paragraphs: [
        "Nos termos da LGPD e conforme aplicável, o titular poderá solicitar, entre outros:",
      ],
      bullets: [
        "confirmação da existência de tratamento;",
        "acesso aos dados;",
        "correção de dados incompletos, inexatos ou desatualizados;",
        "eliminação ou anonimização quando cabível;",
        "informação sobre compartilhamento;",
        "revogação de consentimento, quando essa for a base aplicável;",
        "demais direitos previstos em lei.",
      ],
    },
    {
      id: "contato-privacidade",
      title: "11. Contato sobre privacidade",
      paragraphs: [
        `Para dúvidas ou solicitações relacionadas a esta Política ou ao tratamento de dados pessoais no contexto do site institucional, utilize o e-mail ${institutionalContact.email}.`,
      ],
    },
    {
      id: "alteracoes",
      title: "12. Alterações",
      paragraphs: [
        "Esta Política pode ser atualizada conforme a evolução do site, a inclusão de novas ferramentas ou canais, mudanças operacionais ou alterações regulatórias.",
        "A versão vigente será a publicada nesta página, com indicação da última atualização.",
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  slug: "termos",
  eyebrow: "Termos",
  title: "Termos de Uso",
  intro:
    "Estes Termos de Uso estabelecem as condições para acesso e utilização do site institucional da DSTUDIUM.",
  updatedAt: "agosto de 2026",
  relatedLabel: "Política de Privacidade",
  relatedHref: "/privacidade",
  sections: [
    {
      id: "escopo",
      title: "1. Escopo",
      paragraphs: [
        "Estes Termos regem o uso do site institucional da DSTUDIUM, disponível em dstudium.com e páginas correlatas do mesmo site.",
        "Eles não substituem termos, políticas ou condições específicas de produtos, plataformas SaaS ou aplicações da DSTUDIUM, que poderão ter documentos próprios.",
      ],
    },
    {
      id: "finalidade",
      title: "2. Finalidade do site",
      paragraphs: [
        "O site apresenta a DSTUDIUM, suas soluções, produtos, projetos, cases, clientes e trabalhos realizados, bem como formas de contato.",
        "O conteúdo tem caráter institucional, informativo e comercial.",
      ],
    },
    {
      id: "uso",
      title: "3. Uso do site",
      paragraphs: [
        "O visitante deve utilizar o site de forma legítima e compatível com a finalidade institucional da página.",
        "É vedado, de forma objetiva:",
      ],
      bullets: [
        "tentar invasão ou acesso não autorizado a sistemas e ambientes;",
        "explorar deliberadamente vulnerabilidades;",
        "interferir no funcionamento normal do site;",
        "utilizar automação abusiva que prejudique a disponibilidade ou a segurança;",
        "reproduzir indevidamente conteúdos protegidos por direitos aplicáveis, sem autorização quando necessária.",
      ],
    },
    {
      id: "conteudo",
      title: "4. Conteúdo e projetos",
      paragraphs: [
        "Alguns projetos apresentados no site pertencem à própria DSTUDIUM; outros refletem trabalhos realizados para clientes.",
        "Marcas, nomes comerciais e identidades de terceiros pertencem aos respectivos titulares.",
        "A apresentação de um trabalho no portfólio não transfere à DSTUDIUM a propriedade da marca ou dos ativos do cliente.",
      ],
    },
    {
      id: "propriedade",
      title: "5. Propriedade intelectual",
      paragraphs: [
        "Nos limites da legislação aplicável, a DSTUDIUM preserva direitos sobre sua identidade, logotipo, conceito visual D Núcleo, design próprio, textos e materiais institucionais desenvolvidos para o site.",
        "Isso não implica reivindicação de propriedade sobre frameworks, bibliotecas de código aberto, marcas de clientes ou tecnologias de terceiros eventualmente mencionadas.",
      ],
    },
    {
      id: "informacoes",
      title: "6. Informações do site",
      paragraphs: [
        "A DSTUDIUM procura manter o conteúdo atualizado. Ainda assim, produtos evoluem, projetos podem mudar de status e integrações ou funcionalidades podem sofrer alterações ao longo do tempo.",
        "Informações institucionais não devem ser interpretadas como especificação contratual definitiva de um produto ou serviço sem formalização específica.",
      ],
    },
    {
      id: "disponibilidade",
      title: "7. Disponibilidade",
      paragraphs: [
        "O site poderá ficar temporariamente indisponível por manutenção, atualização, infraestrutura ou eventos técnicos.",
        "O site institucional não possui SLA público de disponibilidade.",
      ],
    },
    {
      id: "terceiros",
      title: "8. Links e serviços de terceiros",
      paragraphs: [
        "O site pode direcionar para produtos, clientes, fornecedores ou plataformas externas. Nesses ambientes, condições e políticas dos respectivos terceiros podem ser aplicáveis.",
      ],
    },
    {
      id: "contato-propostas",
      title: "9. Contato e propostas",
      paragraphs: [
        "Uma mensagem enviada pelo formulário de contato ou por e-mail não cria automaticamente contrato, não representa aceite de proposta, não garante disponibilidade e não estabelece obrigação de execução.",
        "Eventuais serviços devem ser formalizados separadamente, por meio de proposta, contrato ou outro instrumento adequado.",
      ],
    },
    {
      id: "produtos",
      title: "10. Produtos e plataformas",
      paragraphs: [
        "Produtos, plataformas SaaS e aplicações apresentados neste site podem possuir termos de uso, políticas de privacidade, condições comerciais e regras próprias.",
        "Esses documentos específicos prevalecem para a utilização do produto correspondente.",
      ],
    },
    {
      id: "responsabilidade",
      title: "11. Responsabilidade",
      paragraphs: [
        "Nos limites permitidos pela legislação aplicável, a DSTUDIUM não se responsabiliza por danos decorrentes de uso inadequado do site, indisponibilidades fora de controle razoável, conteúdo de terceiros acessado por links externos ou decisões tomadas exclusivamente com base em conteúdo institucional genérico.",
        "Nada nestes Termos pretende excluir responsabilidades que a lei não permita excluir.",
      ],
    },
    {
      id: "legislacao",
      title: "12. Legislação",
      paragraphs: [
        "Estes Termos são interpretados conforme a legislação brasileira.",
      ],
    },
    {
      id: "alteracoes",
      title: "13. Alterações e contato",
      paragraphs: [
        "Estes Termos podem ser atualizados conforme a evolução do site, das operações ou da regulamentação aplicável. A versão vigente será a publicada nesta página.",
        `Dúvidas sobre estes Termos podem ser enviadas para ${institutionalContact.email}.`,
      ],
    },
  ],
};
