import type { ReactNode } from "react";
import type { SolutionVisual } from "@/types";

function VisualShell({
  accentClass,
  children,
}: {
  accentClass: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative h-[3.25rem] w-[4.75rem] shrink-0 overflow-hidden rounded-md border border-white/8 bg-gradient-to-br sm:h-[3.5rem] sm:w-[5.25rem] ${accentClass}`}
      aria-hidden
    >
      {children}
    </div>
  );
}

function SaasVisual() {
  return (
    <VisualShell accentClass="from-[#12203f] via-[#0e1830] to-[#0a1224]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 84 56" fill="none">
        <rect x="10" y="18" width="18" height="14" rx="3" fill="rgba(59,91,255,0.35)" stroke="rgba(94,162,255,0.55)" />
        <rect x="33" y="12" width="18" height="14" rx="3" fill="rgba(16,25,56,0.9)" stroke="rgba(94,162,255,0.4)" />
        <rect x="56" y="22" width="18" height="14" rx="3" fill="rgba(59,91,255,0.22)" stroke="rgba(73,214,255,0.35)" />
        <path d="M28 25h5M51 19h5" stroke="rgba(94,162,255,0.55)" strokeWidth="1.2" strokeDasharray="2 2" />
        <circle cx="30.5" cy="25" r="1.4" fill="#5EA2FF" />
        <circle cx="53.5" cy="19" r="1.4" fill="#49D6FF" fillOpacity="0.8" />
      </svg>
    </VisualShell>
  );
}

function WebVisual() {
  return (
    <VisualShell accentClass="from-[#0f2438] via-[#0c1c2e] to-[#091420]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 84 56" fill="none">
        <rect x="12" y="12" width="60" height="34" rx="4" fill="rgba(10,16,48,0.85)" stroke="rgba(73,214,255,0.4)" />
        <path d="M12 20h60" stroke="rgba(36,49,95,0.95)" strokeWidth="1.2" />
        <circle cx="18" cy="16" r="1.4" fill="#5EA2FF" fillOpacity="0.7" />
        <circle cx="23" cy="16" r="1.4" fill="#49D6FF" fillOpacity="0.45" />
        <circle cx="28" cy="16" r="1.4" fill="rgba(168,179,209,0.35)" />
        <rect x="18" y="26" width="28" height="3" rx="1.5" fill="rgba(94,162,255,0.45)" />
        <rect x="18" y="33" width="40" height="2.5" rx="1.25" fill="rgba(245,247,255,0.12)" />
        <rect x="18" y="39" width="22" height="2.5" rx="1.25" fill="rgba(245,247,255,0.08)" />
      </svg>
    </VisualShell>
  );
}

function AutomationVisual() {
  return (
    <VisualShell accentClass="from-[#1c1435] via-[#151028] to-[#0e0b1c]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 84 56" fill="none">
        <circle cx="18" cy="28" r="5" fill="rgba(139,92,246,0.25)" stroke="rgba(167,139,250,0.65)" />
        <circle cx="42" cy="16" r="5" fill="rgba(139,92,246,0.2)" stroke="rgba(167,139,250,0.5)" />
        <circle cx="42" cy="40" r="5" fill="rgba(16,25,56,0.9)" stroke="rgba(139,92,246,0.45)" />
        <circle cx="66" cy="28" r="5" fill="rgba(139,92,246,0.3)" stroke="rgba(167,139,250,0.7)" />
        <path
          d="M23 28h14M47 18.5 61 25.5M47 37.5 61 30.5M42 21v14"
          stroke="rgba(167,139,250,0.45)"
          strokeWidth="1.2"
          strokeDasharray="2.5 2.5"
        />
      </svg>
    </VisualShell>
  );
}

function IntegrationVisual() {
  return (
    <VisualShell accentClass="from-[#0e1c38] via-[#0c1730] to-[#091228]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 84 56" fill="none">
        <rect x="10" y="20" width="16" height="16" rx="3.5" fill="rgba(59,91,255,0.28)" stroke="rgba(94,162,255,0.5)" />
        <rect x="58" y="20" width="16" height="16" rx="3.5" fill="rgba(73,214,255,0.18)" stroke="rgba(73,214,255,0.45)" />
        <path d="M26 28h32" stroke="rgba(94,162,255,0.5)" strokeWidth="1.3" />
        <circle cx="34" cy="28" r="2.2" fill="#3B5BFF" fillOpacity="0.8" />
        <circle cx="42" cy="28" r="2.2" fill="#5EA2FF" fillOpacity="0.75" />
        <circle cx="50" cy="28" r="2.2" fill="#49D6FF" fillOpacity="0.7" />
        <path d="M18 24v-4M18 36v4M66 24v-4M66 36v4" stroke="rgba(94,162,255,0.35)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </VisualShell>
  );
}

function AiVisual() {
  return (
    <VisualShell accentClass="from-[#0e2a28] via-[#0c2220] to-[#0a1818]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 84 56" fill="none">
        <circle cx="42" cy="28" r="4" fill="rgba(52,211,153,0.35)" stroke="rgba(52,211,153,0.7)" />
        <circle cx="22" cy="16" r="3" fill="rgba(73,214,255,0.2)" stroke="rgba(73,214,255,0.5)" />
        <circle cx="62" cy="16" r="3" fill="rgba(94,162,255,0.2)" stroke="rgba(94,162,255,0.45)" />
        <circle cx="22" cy="40" r="3" fill="rgba(94,162,255,0.18)" stroke="rgba(94,162,255,0.4)" />
        <circle cx="62" cy="40" r="3" fill="rgba(52,211,153,0.2)" stroke="rgba(52,211,153,0.5)" />
        <path
          d="M25 18 39 26M59 18 45 26M25 38 39 30M59 38 45 30"
          stroke="rgba(73,214,255,0.35)"
          strokeWidth="1.15"
        />
        <circle cx="42" cy="12" r="1.5" fill="#49D6FF" fillOpacity="0.55" />
        <circle cx="42" cy="44" r="1.5" fill="#34D399" fillOpacity="0.55" />
      </svg>
    </VisualShell>
  );
}

function ConsultingVisual() {
  return (
    <VisualShell accentClass="from-[#2a1c12] via-[#1c140e] to-[#120e0a]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 84 56" fill="none">
        <rect x="12" y="14" width="20" height="10" rx="2.5" fill="rgba(245,158,11,0.22)" stroke="rgba(245,158,11,0.55)" />
        <rect x="32" y="28" width="20" height="10" rx="2.5" fill="rgba(59,91,255,0.22)" stroke="rgba(94,162,255,0.45)" />
        <rect x="52" y="20" width="20" height="10" rx="2.5" fill="rgba(16,25,56,0.9)" stroke="rgba(245,158,11,0.35)" />
        <path d="M22 24v4c0 2 2 4 10 4M52 25c-4 0-6 3-10 3" stroke="rgba(245,158,11,0.4)" strokeWidth="1.2" strokeDasharray="2 2" />
        <path d="M16 42h52" stroke="rgba(36,49,95,0.9)" strokeWidth="1.1" />
        <rect x="16" y="39" width="10" height="3" rx="1" fill="rgba(245,158,11,0.45)" />
        <rect x="30" y="39" width="16" height="3" rx="1" fill="rgba(94,162,255,0.35)" />
        <rect x="50" y="39" width="12" height="3" rx="1" fill="rgba(245,247,255,0.12)" />
      </svg>
    </VisualShell>
  );
}

const visualMap: Record<SolutionVisual, () => ReactNode> = {
  saas: SaasVisual,
  web: WebVisual,
  automation: AutomationVisual,
  integration: IntegrationVisual,
  ai: AiVisual,
  consulting: ConsultingVisual,
};

export function SolutionVisualPreview({ type }: { type: SolutionVisual }) {
  const Visual = visualMap[type];
  return <Visual />;
}
