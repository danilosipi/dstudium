import { IconConsulting } from "@/components/ui/icons";
import { getClientRelationshipLabel } from "@/data/client-cases";
import type { ClientCase } from "@/types";

type ClientCaseCardProps = {
  clientCase: ClientCase;
  variant?: "active" | "compact";
};

export function ClientCaseCard({
  clientCase,
  variant = "compact",
}: ClientCaseCardProps) {
  const relationshipLabel = getClientRelationshipLabel(clientCase.relationship);
  const isActive = variant === "active";

  if (isActive) {
    return (
      <article className="flex h-full flex-col rounded-xl border border-[#24315F] bg-[#0B1024] p-[18px] shadow-[0_0_28px_rgba(94,162,255,0.12)] transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#3a4d8a] sm:p-5">
        <div className="flex items-start gap-2.5">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-accent/15 text-blue-accent ring-1 ring-blue-accent/35">
            <IconConsulting className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <h3 className="text-base leading-tight font-semibold tracking-tight text-text-primary sm:text-[1.05rem]">
              {clientCase.name}
            </h3>
            <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium text-accent-green">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green" aria-hidden />
              {relationshipLabel}
            </p>
          </div>
        </div>

        <p className="mt-3 text-[13px] leading-relaxed text-text-secondary">
          {clientCase.description}
        </p>

        {clientCase.services.length > 0 ? (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-4" aria-label="Serviços">
            {clientCase.services.map((service) => (
              <li key={service}>
                <span className="inline-flex rounded-md border border-[#24315F] px-2 py-0.5 text-[10px] font-medium tracking-wide text-text-secondary">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    );
  }

  return (
    <article className="rounded-lg border border-[#24315F]/80 bg-[#0B1024]/70 px-3.5 py-3 transition-colors hover:border-[#3a4d8a]">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold tracking-tight text-text-primary">
          {clientCase.name}
        </h3>
        <span className="shrink-0 text-[10px] font-medium tracking-wide text-text-secondary/80 uppercase">
          Histórico
        </span>
      </div>
      <p className="mt-1.5 text-[12px] leading-relaxed text-text-secondary">
        {clientCase.description}
      </p>
    </article>
  );
}
