export type NavItem = {
  label: string;
  href: string;
};

export type ProjectAccent = "purple" | "blue" | "orange";
export type ProjectIcon = "calendar" | "link" | "chart";
export type ProjectPreview = "agenda" | "links" | "metrics";

/** Valores técnicos de status — labels em PROJECT_STATUS_LABELS. */
export type ProjectStatus =
  | "active"
  | "development"
  | "completed"
  | "discontinued"
  | "private";

/** Valores técnicos de categoria — labels em PROJECT_CATEGORY_LABELS. */
export type ProjectCategory =
  | "saas"
  | "web-app"
  | "automation"
  | "ai"
  | "platform"
  | "institutional"
  | "own-project"
  | "case";

export type ProjectAiUsage = {
  used: boolean;
  summary?: string;
  applications?: string[];
};

export type Project = {
  id: string;
  slug: string;

  name: string;
  shortName?: string;
  subtitle: string;
  shortDescription: string;

  category: ProjectCategory;
  status: ProjectStatus;

  featured: boolean;
  order?: number;

  accent: ProjectAccent;
  icon: ProjectIcon;
  preview: ProjectPreview;

  technologies?: string[];
  integrations?: string[];

  ai?: {
    product?: ProjectAiUsage;
    development?: ProjectAiUsage;
  };

  links?: {
    website?: string;
    github?: string;
  };

  /** Assets futuros em `public/projects/<slug>/`. */
  media?: {
    cover?: string;
    screenshots?: string[];
  };

  caseStudy?: {
    problem?: string;
    solution?: string;
    architecture?: string;
    highlights?: string[];
    results?: string[];
  };

  seo?: {
    title?: string;
    description?: string;
  };
};

export type PillarAccent = "purple" | "blue" | "green" | "orange";
export type PillarIcon = "automation" | "tech" | "ai" | "scale";

export type Pillar = {
  id: string;
  title: string;
  description: string;
  accent: PillarAccent;
  icon: PillarIcon;
};

export type SolutionAccent =
  | "blue"
  | "cyan"
  | "purple"
  | "deep"
  | "green"
  | "orange";

export type SolutionVisual =
  | "saas"
  | "web"
  | "automation"
  | "integration"
  | "ai"
  | "consulting";

export type SolutionIcon =
  | "saas"
  | "web"
  | "automation"
  | "integration"
  | "ai"
  | "consulting";

export type Solution = {
  id: string;
  title: string;
  description: string;
  icon: SolutionIcon;
  accent: SolutionAccent;
  visual: SolutionVisual;
};

export type ProcessStepAccent = "blue" | "cyan" | "violet" | "orange" | "green";
export type ProcessStepIcon =
  | "diagnosis"
  | "architecture"
  | "development"
  | "automation"
  | "evolution";

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: ProcessStepAccent;
  icon: ProcessStepIcon;
};

export type AboutIcon = "chart" | "consulting" | "gear";

export type AboutDifferential = {
  id: string;
  title: string;
  description: string;
  icon: AboutIcon;
};

export type FooterLink = {
  label: string;
  href?: string;
  disabled?: boolean;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};
