import { AboutPage } from "@/components/sections/about-page";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Sobre a DSTUDIUM | Tecnologia, Automação e IA",
  description:
    "Conheça a DSTUDIUM, empresa de tecnologia que desenvolve produtos digitais, automações, integrações, inteligência artificial e arquitetura de sistemas.",
  path: "/sobre",
});

export default function SobreRoute() {
  return (
    <main className="flex-1">
      <AboutPage />
    </main>
  );
}
