import { BrandMark } from "@/components/brand/brand-mark";

export function AboutVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl border border-border/80 bg-[#0B1024] p-5 sm:p-6 lg:max-w-none"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.22]" />
      <div className="pointer-events-none absolute -right-16 -top-10 h-44 w-44 rounded-full bg-blue-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 left-4 h-40 w-40 rounded-full bg-blue-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-16 h-24 w-24 rounded-full bg-glow/8 blur-2xl" />

      {/* Connection lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 480 360"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M90 70C140 70 160 120 210 120"
          stroke="rgba(94,162,255,0.28)"
          strokeWidth="1.2"
          strokeDasharray="4 5"
        />
        <path
          d="M390 80C340 90 320 150 270 160"
          stroke="rgba(59,91,255,0.22)"
          strokeWidth="1.2"
          strokeDasharray="4 5"
        />
        <path
          d="M120 280C180 250 240 250 300 220"
          stroke="rgba(73,214,255,0.16)"
          strokeWidth="1.2"
          strokeDasharray="3 6"
        />
        <circle cx="210" cy="120" r="2.5" fill="#5EA2FF" fillOpacity="0.7" />
        <circle cx="270" cy="160" r="2.5" fill="#3B5BFF" fillOpacity="0.65" />
        <circle cx="300" cy="220" r="2.5" fill="#49D6FF" fillOpacity="0.45" />
      </svg>

      <div className="relative grid gap-3.5">
        {/* Main panel — brand + ops status */}
        <div className="glass-panel relative overflow-hidden rounded-xl px-4 py-3.5">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-primary/15 to-transparent" />
          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-[#0B122B] shadow-[0_0_20px_rgba(59,91,255,0.2)]">
                <BrandMark size={26} />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.14em] text-text-primary">
                  DSTUDIUM
                </p>
                <p className="mt-0.5 text-[11px] text-text-secondary">
                  Plataforma de execução digital
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-accent-green/30 bg-accent-green/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent-green uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Online
              </span>
              <span className="text-[10px] text-text-secondary/80">v2.4 · ops</span>
            </div>
          </div>
        </div>

        {/* Mid row — dashboards */}
        <div className="grid grid-cols-5 gap-3.5">
          {/* Architecture / flow panel */}
          <div className="glass-panel col-span-3 rounded-xl p-3.5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
                Arquitetura
              </p>
              <span className="text-[10px] text-blue-accent">modular</span>
            </div>

            <div className="relative h-[7.25rem]">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 260 116"
                fill="none"
              >
                <rect
                  x="8"
                  y="38"
                  width="52"
                  height="40"
                  rx="6"
                  fill="rgba(59,91,255,0.18)"
                  stroke="rgba(94,162,255,0.45)"
                />
                <rect
                  x="104"
                  y="18"
                  width="52"
                  height="40"
                  rx="6"
                  fill="rgba(16,25,56,0.9)"
                  stroke="rgba(36,49,95,0.95)"
                />
                <rect
                  x="104"
                  y="68"
                  width="52"
                  height="36"
                  rx="6"
                  fill="rgba(16,25,56,0.9)"
                  stroke="rgba(36,49,95,0.95)"
                />
                <rect
                  x="200"
                  y="38"
                  width="52"
                  height="40"
                  rx="6"
                  fill="rgba(73,214,255,0.1)"
                  stroke="rgba(73,214,255,0.35)"
                />
                <path
                  d="M60 58h44M156 38h44M156 86h20c12 0 24-12 24-28"
                  stroke="rgba(94,162,255,0.4)"
                  strokeWidth="1.4"
                />
                <circle cx="34" cy="58" r="3" fill="#5EA2FF" />
                <circle cx="130" cy="38" r="3" fill="#3B5BFF" />
                <circle cx="130" cy="86" r="3" fill="#A8B3D1" />
                <circle cx="226" cy="58" r="3" fill="#49D6FF" fillOpacity="0.8" />
              </svg>
              <div className="absolute left-[18px] top-[52px] text-[8px] font-medium tracking-wide text-blue-accent uppercase">
                Core
              </div>
              <div className="absolute left-[118px] top-[28px] text-[8px] text-text-secondary">
                APIs
              </div>
              <div className="absolute left-[112px] top-[78px] text-[8px] text-text-secondary">
                Automação
              </div>
              <div className="absolute right-[22px] top-[52px] text-[8px] font-medium tracking-wide text-glow/90 uppercase">
                IA
              </div>
            </div>
          </div>

          {/* Metrics mini dashboard */}
          <div className="glass-panel col-span-2 flex flex-col rounded-xl p-3.5">
            <p className="text-[10px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
              Entregas
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-text-primary">
              98<span className="text-sm text-blue-accent">%</span>
            </p>
            <p className="text-[10px] text-text-secondary">SLA no prazo</p>

            <div className="mt-auto flex items-end gap-1 pt-3">
              {[40, 58, 48, 72, 64, 86, 78].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-blue-primary/30 to-blue-accent/70"
                  style={{ height: `${h * 0.32}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row — team + product stack */}
        <div className="grid grid-cols-2 gap-3.5">
          <div className="glass-panel rounded-xl p-3.5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
                Equipe
              </p>
              <span className="text-[10px] text-text-secondary">+ produto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#0B1024] bg-blue-primary/50 text-[9px] font-semibold text-text-primary">
                  DS
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#0B1024] bg-blue-accent/45 text-[9px] font-semibold text-text-primary">
                  AR
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#0B1024] bg-surface text-[9px] font-semibold text-text-secondary">
                  +4
                </span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-text-primary">
                  Squad ativa
                </p>
                <p className="truncate text-[10px] text-text-secondary">
                  Arquitetura · Dev · IA
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-3.5">
            <p className="mb-3 text-[10px] font-semibold tracking-[0.14em] text-text-secondary uppercase">
              Camadas
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full w-[88%] rounded-full bg-blue-accent/70" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-primary" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full w-[72%] rounded-full bg-blue-primary/70" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-glow/80" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full w-[61%] rounded-full bg-glow/50" />
                </div>
              </div>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <span className="rounded border border-border/80 px-1.5 py-0.5 text-[9px] text-text-secondary">
                Sistemas
              </span>
              <span className="rounded border border-border/80 px-1.5 py-0.5 text-[9px] text-text-secondary">
                Automação
              </span>
              <span className="rounded border border-border/80 px-1.5 py-0.5 text-[9px] text-text-secondary">
                IA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
