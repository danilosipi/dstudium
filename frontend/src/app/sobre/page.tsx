import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about-page";

export const metadata: Metadata = {
  title: "Sobre a DSTUDIUM | Tecnologia, Automação e IA",
  description:
    "Conheça a DSTUDIUM, empresa de tecnologia que desenvolve produtos digitais, automações, integrações, inteligência artificial e arquitetura de sistemas.",
  alternates: {
    canonical: "https://dstudium.com/sobre",
  },
  openGraph: {
    title: "Sobre a DSTUDIUM | Tecnologia, Automação e IA",
    description:
      "Conheça a DSTUDIUM, empresa de tecnologia que desenvolve produtos digitais, automações, integrações, inteligência artificial e arquitetura de sistemas.",
    url: "https://dstudium.com/sobre",
    siteName: "DSTUDIUM",
    locale: "pt_BR",
    type: "website",
  },
};

export default function SobreRoute() {
  return (
    <main className="flex-1">
      <AboutPage />
    </main>
  );
}
