import Link from "next/link";
import { Brand } from "@/components/brand/brand";
import { Container } from "@/components/layout/container";
import {
  footerBrandText,
  footerContact,
  footerLinkGroups,
} from "@/data/footer";
import type { FooterLink, FooterLinkGroup } from "@/types";

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
      className="text-sm text-[#A8B3D1] transition-colors duration-200 hover:text-[#F5F7FF] focus-visible:outline-offset-2"
    >
      {link.label}
    </Link>
  );
}

function FooterGroup({ group }: { group: FooterLinkGroup }) {
  return (
    <div>
      <h2 className="text-[11px] font-semibold tracking-[0.16em] text-[#F5F7FF] uppercase">
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
  );
}

function FooterBrandDetail() {
  return (
    <div className="pointer-events-none mt-5 flex items-center gap-2" aria-hidden>
      <span className="h-1.5 w-1.5 rounded-full bg-blue-accent/70 shadow-[0_0_10px_rgba(94,162,255,0.45)]" />
      <span className="h-px w-10 bg-gradient-to-r from-blue-accent/50 to-transparent" />
      <span className="h-1 w-1 rounded-full bg-glow/50" />
      <span className="h-px w-6 bg-gradient-to-r from-[#24315F] to-transparent" />
    </div>
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
      className="relative scroll-mt-24 overflow-hidden border-t border-[#24315F]/80 bg-[#050816]"
    >
      {/* Soft transition from CTA */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-accent/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-40 w-40 rounded-full bg-blue-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-10 right-0 hidden h-48 w-48 opacity-[0.07] sm:block"
        aria-hidden
      >
        <svg viewBox="0 0 160 160" fill="none" className="h-full w-full">
          <circle cx="80" cy="80" r="48" stroke="#5EA2FF" strokeWidth="1" />
          <circle cx="80" cy="80" r="28" stroke="#3B5BFF" strokeWidth="1" />
          <circle cx="80" cy="80" r="6" fill="#49D6FF" fillOpacity="0.7" />
          <path
            d="M40 80h20M100 80h20M80 40v20M80 100v20"
            stroke="#5EA2FF"
            strokeOpacity="0.5"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        </svg>
      </div>

      <Container className="relative py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.85fr)] lg:gap-14 xl:gap-16">
          {/* Brand column — stronger hierarchy */}
          <div className="max-w-sm">
            <Brand
              size="footer"
              className="!h-11 !w-[188px] sm:!h-12 sm:!w-[204px]"
            />
            <p className="mt-5 text-sm leading-relaxed text-[#A8B3D1]">
              {footerBrandText}
            </p>
            <FooterBrandDetail />
          </div>

          {/* Navigation groups: Links · Soluções · Contato · Informações */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 lg:gap-6 xl:gap-8">
            {linksGroup ? <FooterGroup group={linksGroup} /> : null}
            {solutionsGroup ? <FooterGroup group={solutionsGroup} /> : null}

            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.16em] text-[#F5F7FF] uppercase">
                Contato
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-[#A8B3D1]">
                <li>
                  <a
                    href={`mailto:${footerContact.email}`}
                    className="transition-colors duration-200 hover:text-[#F5F7FF] focus-visible:outline-offset-2"
                  >
                    {footerContact.email}
                  </a>
                </li>
                <li>{footerContact.location}</li>
              </ul>
            </div>

            {infoGroup ? <FooterGroup group={infoGroup} /> : null}
          </div>
        </div>
      </Container>

      <div className="relative border-t border-[#24315F]/70">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5EA2FF]/20 to-transparent"
          aria-hidden
        />
        <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#A8B3D1]/85">
            © 2026 DSTUDIUM. Todos os direitos reservados.
          </p>
          <div
            className="pointer-events-none hidden items-center gap-1.5 sm:flex"
            aria-hidden
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#24315F]" />
            <span className="h-1 w-1 rounded-full bg-blue-accent/40" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#24315F]" />
          </div>
        </Container>
      </div>
    </footer>
  );
}
