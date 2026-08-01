import Link from "next/link";
import { Brand } from "@/components/brand/brand";
import { Container } from "@/components/layout/container";
import {
  footerBrandText,
  footerContact,
  footerLinkGroups,
} from "@/data/footer";
import type { FooterLink } from "@/types";

function FooterNavLink({ link }: { link: FooterLink }) {
  if (link.disabled || !link.href) {
    return (
      <span
        className="cursor-default text-sm text-text-secondary/55"
        aria-disabled="true"
      >
        {link.label}
      </span>
    );
  }

  return (
    <Link
      href={link.href}
      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
    >
      {link.label}
    </Link>
  );
}

export function Footer() {
  const linksGroup = footerLinkGroups.find((group) => group.title === "Links");
  const solutionsGroup = footerLinkGroups.find(
    (group) => group.title === "Soluções",
  );
  const infoGroup = footerLinkGroups.find(
    (group) => group.title === "Informações",
  );

  return (
    <footer
      id="contato"
      className="scroll-mt-24 border-t border-border/70 bg-bg-primary"
    >
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Brand showTagline />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            {footerBrandText}
          </p>
        </div>

        {[linksGroup, solutionsGroup].map((group) =>
          group ? (
            <div key={group.title}>
              <h2 className="text-sm font-semibold tracking-wide text-text-primary">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <FooterNavLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null,
        )}

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-text-primary">
            Contato
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-text-secondary">
            <li>
              <a
                href={`mailto:${footerContact.email}`}
                className="transition-colors hover:text-text-primary"
              >
                {footerContact.email}
              </a>
            </li>
            <li>{footerContact.location}</li>
          </ul>
        </div>

        {infoGroup ? (
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-text-primary">
              {infoGroup.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {infoGroup.links.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>

      <div className="border-t border-border/60">
        <Container className="py-5 text-xs text-text-secondary">
          <p>© 2026 DSTUDIUM. Todos os direitos reservados.</p>
        </Container>
      </div>
    </footer>
  );
}
