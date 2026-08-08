import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/ui/contact-form";
import { IconArrowRight, IconConsulting } from "@/components/ui/icons";
import {
  contactDemandExamples,
  contactPageContent,
  institutionalContact,
} from "@/data/contact";

function ContactHero() {
  return (
    <section
      className="relative border-b border-border/50 bg-bg-primary py-12 sm:py-14 lg:py-16"
      aria-labelledby="contato-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.12)_0%,_transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-blue-accent uppercase">
          {contactPageContent.eyebrow}
        </p>
        <h1
          id="contato-hero-heading"
          className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
        >
          {contactPageContent.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-secondary sm:text-base">
          {contactPageContent.description}
        </p>
      </Container>
    </section>
  );
}

function ContactChannels() {
  return (
    <div className="rounded-xl border border-[#24315F] bg-[#0B1024]/80 p-5 sm:p-6">
      <h2 className="text-base font-semibold tracking-tight text-text-primary sm:text-lg">
        Canais de contato
      </h2>
      <ul className="mt-4 space-y-4">
        <li>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
            E-mail
          </p>
          <a
            href={`mailto:${institutionalContact.email}`}
            className="mt-1 inline-flex text-[15px] text-blue-accent transition-colors hover:text-text-primary focus-visible:outline-offset-2"
          >
            {institutionalContact.email}
          </a>
        </li>
        <li>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
            Localização
          </p>
          <p className="mt-1 text-[15px] text-text-primary">
            {institutionalContact.location}
          </p>
        </li>
      </ul>
    </div>
  );
}

function ContactDemands() {
  return (
    <div className="rounded-xl border border-[#24315F] bg-[#0B1024]/80 p-5 sm:p-6">
      <h2 className="text-base font-semibold tracking-tight text-text-primary sm:text-lg">
        {contactPageContent.demandsTitle}
      </h2>
      <ul className="mt-4 space-y-2">
        {contactDemandExamples.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-[13px] leading-relaxed text-text-secondary sm:text-sm"
          >
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-accent"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={contactPageContent.demandsCtaHref}
        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-blue-accent uppercase transition-colors hover:text-text-primary focus-visible:outline-offset-2"
      >
        {contactPageContent.demandsCtaLabel}
        <IconArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

function ContactSupport() {
  return (
    <div className="rounded-xl border border-[#24315F] bg-[#0B1024]/80 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-accent/12 text-blue-accent ring-1 ring-blue-accent/30">
          <IconConsulting className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <h2 className="text-base font-semibold tracking-tight text-text-primary sm:text-lg">
            {contactPageContent.supportTitle}
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-text-secondary sm:text-sm">
            {contactPageContent.supportText}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <section
        className="border-b border-border/50 bg-bg-secondary/20 py-12 sm:py-14"
        aria-labelledby="contato-form-heading"
      >
        <Container>
          <h2 id="contato-form-heading" className="sr-only">
            Formulário e canais de contato
          </h2>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-12">
            <div className="space-y-3.5 sm:space-y-4">
              <ContactChannels />
              <ContactDemands />
              <ContactSupport />
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
