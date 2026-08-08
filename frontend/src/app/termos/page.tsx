import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsOfUse } from "@/data/legal";

export const metadata: Metadata = {
  title: "Termos de Uso | DSTUDIUM",
  description:
    "Consulte as condições de acesso e utilização do site institucional da DSTUDIUM.",
  alternates: {
    canonical: "https://dstudium.com/termos",
  },
  openGraph: {
    title: "Termos de Uso | DSTUDIUM",
    description:
      "Consulte as condições de acesso e utilização do site institucional da DSTUDIUM.",
    url: "https://dstudium.com/termos",
    siteName: "DSTUDIUM",
    locale: "pt_BR",
    type: "website",
  },
};

export default function TermosRoute() {
  return <LegalPage document={termsOfUse} />;
}
