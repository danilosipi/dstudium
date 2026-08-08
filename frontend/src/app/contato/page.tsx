import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/contact-page";

export const metadata: Metadata = {
  title: "Contato | Fale com a DSTUDIUM",
  description:
    "Entre em contato com a DSTUDIUM para conversar sobre desenvolvimento de software, SaaS, automação, integrações, inteligência artificial e arquitetura.",
  alternates: {
    canonical: "https://dstudium.com/contato",
  },
  openGraph: {
    title: "Contato | Fale com a DSTUDIUM",
    description:
      "Entre em contato com a DSTUDIUM para conversar sobre desenvolvimento de software, SaaS, automação, integrações, inteligência artificial e arquitetura.",
    url: "https://dstudium.com/contato",
    siteName: "DSTUDIUM",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ContatoRoute() {
  return (
    <main className="flex-1">
      <ContactPage />
    </main>
  );
}
