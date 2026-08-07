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

export type Pillar = {
  id: string;
  title: string;
  description: string;
  accent: "cyan" | "blue" | "violet" | "orange";
  icon: "automation" | "tech" | "ai" | "scale";
};

export type Solution = {
  id: string;
  title: string;
  description: string;
  icon: "saas" | "web" | "automation" | "integration" | "ai" | "consulting";
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  accent: "blue" | "cyan" | "violet" | "orange" | "green";
  icon: "diagnosis" | "architecture" | "development" | "automation" | "evolution";
};

export type AboutDifferential = {
  id: string;
  title: string;
  description: string;
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
