import { institutionalContact } from "@/data/contact";
import { absoluteUrl, siteConfig } from "@/data/seo";
import type { Project } from "@/types";

export const organizationId = `${siteConfig.siteUrl}/#organization`;
export const websiteId = `${siteConfig.siteUrl}/#website`;

/**
 * Projetos com SoftwareApplication explícito.
 * Não inferir pela categoria — apenas SaaS/apps reais e públicos o suficiente.
 *
 * Incluídos: MAZ, ClicaNo.Site, Mídia Auto Pilot.
 * Excluídos deliberadamente:
 * - farmacinha-de-casa (contexto saúde → conservador)
 * - free-road (institucional / moto grupo)
 * - agent-orchestrator (plataforma interna em desenvolvimento)
 * - erp-cap (discovery / não implementado)
 */
const SOFTWARE_APPLICATION_BY_SLUG: Record<
  string,
  {
    name: string;
    applicationCategory: string;
  }
> = {
  "minha-agenda-zap": {
    name: "Minha Agenda Zap",
    applicationCategory: "BusinessApplication",
  },
  "clicano-site": {
    name: "ClicaNo.Site",
    applicationCategory: "BusinessApplication",
  },
  "midia-auto-pilot": {
    name: "Mídia Auto Pilot",
    applicationCategory: "BusinessApplication",
  },
};

type JsonObject = Record<string, unknown>;

function omitEmpty<T extends JsonObject>(value: T): T {
  const entries = Object.entries(value).filter(([, v]) => {
    if (v === undefined || v === null || v === "") return false;
    if (Array.isArray(v) && v.length === 0) return false;
    return true;
  });
  return Object.fromEntries(entries) as T;
}

export function createOrganizationSchema(): JsonObject {
  return omitEmpty({
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/brand/dstudium-logo.png"),
    email: institutionalContact.email,
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
  });
}

export function createWebSiteSchema(): JsonObject {
  return omitEmpty({
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    inLanguage: "pt-BR",
    publisher: {
      "@id": organizationId,
    },
  });
}

/** Organization + WebSite em um único @graph (layout global). */
export function createGlobalStructuredData(): JsonObject {
  return {
    "@context": "https://schema.org",
    "@graph": [createOrganizationSchema(), createWebSiteSchema()],
  };
}

export function createProjectBreadcrumbList(project: Project): JsonObject {
  const projectUrl = absoluteUrl(`/projetos/${project.slug}`);

  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projetos",
        item: absoluteUrl("/projetos"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: projectUrl,
      },
    ],
  };
}

export function createProjectSoftwareApplication(
  project: Project,
): JsonObject | null {
  const config = SOFTWARE_APPLICATION_BY_SLUG[project.slug];
  if (!config) return null;

  const caseUrl = absoluteUrl(`/projetos/${project.slug}`);
  const productUrl = project.links?.website;
  const organizationRef = { "@id": organizationId };

  return omitEmpty({
    "@type": "SoftwareApplication",
    "@id": `${caseUrl}#software`,
    name: config.name,
    description: project.seo?.description ?? project.shortDescription,
    // URL do produto quando confirmada; case institucional em mainEntityOfPage.
    url: productUrl ?? caseUrl,
    mainEntityOfPage: caseUrl,
    applicationCategory: config.applicationCategory,
    inLanguage: "pt-BR",
    publisher: organizationRef,
    creator: organizationRef,
  });
}

/** BreadcrumbList (+ SoftwareApplication quando elegível). */
export function createProjectStructuredData(project: Project): JsonObject {
  const graph: JsonObject[] = [createProjectBreadcrumbList(project)];
  const software = createProjectSoftwareApplication(project);
  if (software) {
    graph.push(software);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function projectHasSoftwareApplicationSchema(slug: string): boolean {
  return slug in SOFTWARE_APPLICATION_BY_SLUG;
}
