import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/data/legal";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Política de Privacidade | DSTUDIUM",
  description:
    "Saiba como a DSTUDIUM trata informações fornecidas por visitantes no site institucional e conheça seus direitos relacionados à privacidade.",
  path: "/privacidade",
});

export default function PrivacidadeRoute() {
  return <LegalPage document={privacyPolicy} />;
}
