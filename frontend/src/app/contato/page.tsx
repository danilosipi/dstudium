import { ContactPage } from "@/components/sections/contact-page";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Contato | Fale com a DSTUDIUM",
  description:
    "Entre em contato com a DSTUDIUM para conversar sobre desenvolvimento de software, SaaS, automação, integrações, inteligência artificial e arquitetura.",
  path: "/contato",
});

export default function ContatoRoute() {
  return (
    <main className="flex-1">
      <ContactPage />
    </main>
  );
}
