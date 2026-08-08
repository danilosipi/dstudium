import type { Metadata } from "next";

export const siteConfig = {
  siteName: "DSTUDIUM",
  siteUrl: "https://dstudium.com",
  locale: "pt_BR",
  defaultTitle: "DSTUDIUM | Tecnologia, Automação e Inteligência Artificial",
  defaultDescription:
    "Produtos digitais, automação de processos, integrações e soluções com inteligência artificial para negócios.",
  defaultOgImage: "/brand/og-default.webp",
  defaultOgImageAlt:
    "DSTUDIUM — Tecnologia, Automação e Inteligência Artificial",
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

export function absoluteUrl(path: string = "/"): string {
  if (!path || path === "/") {
    return siteConfig.siteUrl;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}

export function defaultSocialImages(alt?: string) {
  return [
    {
      url: siteConfig.defaultOgImage,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
      alt: alt ?? siteConfig.defaultOgImageAlt,
    },
  ];
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  imageAlt,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const images = defaultSocialImages(imageAlt);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.defaultOgImage],
    },
  };
}
