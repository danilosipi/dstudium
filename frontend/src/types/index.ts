export type NavItem = {
  label: string;
  href: string;
};

export type ProjectAccent = "purple" | "blue" | "orange";
export type ProjectIcon = "calendar" | "link" | "chart";
export type ProjectPreview = "agenda" | "links" | "metrics";
export type ProjectStatus = "Ativo";
export type ProjectCategory = "SaaS";

export type FeaturedProject = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tag: ProjectCategory;
  status: ProjectStatus;
  accent: ProjectAccent;
  icon: ProjectIcon;
  preview: ProjectPreview;
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
