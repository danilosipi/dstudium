import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Política de Privacidade | DSTUDIUM",
  description:
    "Saiba como a DSTUDIUM trata informações fornecidas por visitantes no site institucional e conheça seus direitos relacionados à privacidade.",
  alternates: {
    canonical: "https://dstudium.com/privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | DSTUDIUM",
    description:
      "Saiba como a DSTUDIUM trata informações fornecidas por visitantes no site institucional e conheça seus direitos relacionados à privacidade.",
    url: "https://dstudium.com/privacidade",
    siteName: "DSTUDIUM",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PrivacidadeRoute() {
  return <LegalPage document={privacyPolicy} />;
}
