import type { ReactNode } from "react";
import type { ProjectPreview } from "@/types";

function PreviewShell({
  accentClass,
  children,
}: {
  accentClass: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative h-full min-h-[6.5rem] w-full overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br p-2.5 shadow-inner sm:min-h-[7.5rem] ${accentClass}`}
      aria-hidden
    >
      {children}
    </div>
  );
}

function AgendaPreview() {
  return (
    <PreviewShell accentClass="from-[#2a1a4a] via-[#1a1235] to-[#0d0a1c]">
      <div className="mb-2 flex items-center justify-between">
        <div className="h-1.5 w-10 rounded-full bg-accent-violet/70" />
        <div className="h-4 w-4 rounded-md bg-accent-purple/40 ring-1 ring-accent-violet/40" />
      </div>
      <div className="space-y-1.5">
        {[
          { w: "w-full", label: "bg-accent-purple/35" },
          { w: "w-[88%]", label: "bg-accent-violet/25" },
          { w: "w-[72%]", label: "bg-white/10" },
        ].map((row) => (
          <div
            key={row.w}
            className="flex items-center gap-1.5 rounded-md bg-black/25 px-1.5 py-1 ring-1 ring-white/5"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent-green/80" />
            <span className={`h-1.5 ${row.w} rounded-full ${row.label}`} />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1">
        {["h-5", "h-7", "h-4", "h-6"].map((h, i) => (
          <div
            key={h}
            className={`${h} rounded-sm ${i === 1 ? "bg-accent-purple/50" : "bg-white/10"}`}
          />
        ))}
      </div>
      <svg className="pointer-events-none absolute -right-1 -bottom-1 h-10 w-16 opacity-40" viewBox="0 0 64 40" fill="none">
        <rect x="4" y="8" width="56" height="28" rx="4" stroke="#a78bfa" strokeWidth="1.2" />
        <path d="M4 16h56M18 8v8M46 8v8" stroke="#8b5cf6" strokeWidth="1.2" />
      </svg>
    </PreviewShell>
  );
}

function LinksPreview() {
  return (
    <PreviewShell accentClass="from-[#12253f] via-[#0e1a30] to-[#0a1220]">
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-1.5 flex-1 rounded-full bg-blue-accent/50" />
        <div className="h-4 w-4 rounded-full border border-blue-accent/50" />
      </div>
      <div className="mb-2 space-y-1">
        {["w-[90%]", "w-[75%]", "w-[82%]"].map((w, i) => (
          <div
            key={w}
            className="flex items-center gap-1.5 rounded-md bg-black/30 px-1.5 py-1 ring-1 ring-blue-accent/15"
          >
            <span className="h-2 w-2 shrink-0 rounded-sm bg-blue-primary/70" />
            <span className={`h-1.5 ${w} rounded-full bg-white/15`} />
            <span className="ml-auto h-1.5 w-4 rounded-full bg-blue-accent/40" />
            {i === 0 && (
              <svg className="h-3 w-3 text-blue-accent/70" viewBox="0 0 12 12" fill="none">
                <path d="M4 6h4M6.5 4.5 8 6l-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <svg className="h-8 w-full" viewBox="0 0 120 32" fill="none" aria-hidden>
        <path
          d="M2 26 C18 24 22 10 38 12 C54 14 58 22 74 18 C90 14 98 6 118 8"
          stroke="#5ea2ff"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M2 26 C18 24 22 10 38 12 C54 14 58 22 74 18 C90 14 98 6 118 8 V32 H2 Z"
          fill="url(#linksGrad)"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="linksGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5ea2ff" />
            <stop offset="100%" stopColor="#5ea2ff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </PreviewShell>
  );
}

function MetricsPreview() {
  return (
    <PreviewShell accentClass="from-[#3a2510] via-[#24180c] to-[#120e08]">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="h-1.5 w-12 rounded-full bg-accent-orange/60" />
        <div className="flex items-center gap-0.5 rounded-full bg-accent-orange/20 px-1.5 py-0.5 ring-1 ring-accent-orange/30">
          <svg className="h-2.5 w-2.5 text-accent-orange" viewBox="0 0 12 12" fill="none">
            <path d="M2 8l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="h-1 w-4 rounded-full bg-accent-orange/70" />
        </div>
      </div>
      <div className="flex h-[4.25rem] items-end gap-1.5 px-0.5">
        {[40, 58, 45, 78, 62, 88, 70].map((h, i) => (
          <div
            key={h}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background:
                i === 5
                  ? "linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%)"
                  : "linear-gradient(180deg, rgba(245,158,11,0.55) 0%, rgba(245,158,11,0.18) 100%)",
            }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex gap-1">
        <div className="h-1 flex-1 rounded-full bg-white/10" />
        <div className="h-1 w-1/3 rounded-full bg-accent-orange/40" />
      </div>
    </PreviewShell>
  );
}

const previewMap: Record<ProjectPreview, () => ReactNode> = {
  agenda: AgendaPreview,
  links: LinksPreview,
  metrics: MetricsPreview,
};

export function ProjectPreviewVisual({ type }: { type: ProjectPreview }) {
  const Preview = previewMap[type];
  return <Preview />;
}
