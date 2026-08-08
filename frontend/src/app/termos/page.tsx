import { LegalPage } from "@/components/legal/legal-page";
import { termsOfUse } from "@/data/legal";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Termos de Uso | DSTUDIUM",
  description:
    "Consulte as condições de acesso e utilização do site institucional da DSTUDIUM.",
  path: "/termos",
});

export default function TermosRoute() {
  return <LegalPage document={termsOfUse} />;
}
