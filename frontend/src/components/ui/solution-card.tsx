import type { ReactNode } from "react";
import {
  IconAi,
  IconAutomation,
  IconConsulting,
  IconIntegration,
  IconSaas,
  IconWeb,
} from "@/components/ui/icons";
import { SolutionVisualPreview } from "@/components/ui/solution-visuals";
import type { Solution, SolutionAccent, SolutionIcon } from "@/types";

const accentStyles: Record<
  SolutionAccent,
  {
    glow: string;
    blob: string;
    iconWrap: string;
    iconColor: string;
    line: string;
  }
> = {
  blue: {
    glow: "shadow-[0_0_24px_rgba(59,91,255,0.16)]",
    blob: "bg-blue-primary/10",
    iconWrap: "bg-blue-primary/15 ring-blue-primary/35",
    iconColor: "text-blue-accent",
    line: "from-blue-primary/70 via-blue-accent/40 to-transparent",
  },
  cyan: {
    glow: "shadow-[0_0_24px_rgba(73,214,255,0.14)]",
    blob: "bg-glow/10",
    iconWrap: "bg-glow/12 ring-glow/30",
    iconColor: "text-glow",
    line: "from-glow/60 via-blue-accent/35 to-transparent",
  },
  purple: {
    glow: "shadow-[0_0_24px_rgba(139,92,246,0.16)]",
    blob: "bg-accent-purple/12",
    iconWrap: "bg-accent-purple/15 ring-accent-purple/35",
    iconColor: "text-accent-violet",
    line: "from-accent-purple/65 via-accent-violet/35 to-transparent",
  },
  deep: {
    glow: "shadow-[0_0_24px_rgba(94,162,255,0.14)]",
    blob: "bg-blue-accent/10",
    iconWrap: "bg-blue-accent/12 ring-blue-accent/30",
    iconColor: "text-blue-accent",
    line: "from-blue-accent/55 via-glow/30 to-transparent",
  },
  green: {
    glow: "shadow-[0_0_24px_rgba(52,211,153,0.14)]",
    blob: "bg-accent-green/10",
    iconWrap: "bg-accent-green/12 ring-accent-green/30",
    iconColor: "text-accent-green",
    line: "from-accent-green/55 via-glow/30 to-transparent",
  },
  orange: {
    glow: "shadow-[0_0_24px_rgba(245,158,11,0.14)]",
    blob: "bg-accent-orange/10",
    iconWrap: "bg-accent-orange/12 ring-accent-orange/30",
    iconColor: "text-accent-orange",
    line: "from-accent-orange/55 via-blue-primary/30 to-transparent",
  },
};

const iconMap: Record<
  SolutionIcon,
  (props: { className?: string }) => ReactNode
> = {
  saas: IconSaas,
  web: IconWeb,
  automation: IconAutomation,
  integration: IconIntegration,
  ai: IconAi,
  consulting: IconConsulting,
};

export function SolutionCard({ solution }: { solution: Solution }) {
  const styles = accentStyles[solution.accent];
  const Icon = iconMap[solution.icon];

  return (
    <article
      className={`group relative flex h-full overflow-hidden rounded-xl border border-[#24315F] bg-[#0B1024] p-4 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#3a4d8a] sm:p-[18px] ${styles.glow}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${styles.line}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full opacity-80 blur-2xl ${styles.blob}`}
        aria-hidden
      />

      <div className="relative flex h-full min-w-0 flex-1 gap-3 sm:gap-3.5">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-start gap-2.5">
            <span
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ${styles.iconWrap} ${styles.iconColor}`}
              aria-hidden
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 pt-0.5">
              <h3 className="text-[15px] leading-snug font-semibold tracking-tight text-[#F5F7FF] sm:text-base">
                {solution.title}
              </h3>
            </div>
          </div>

          <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-[#A8B3D1] sm:text-sm">
            {solution.description}
          </p>

          <div className="mt-3.5" aria-hidden>
            <div className={`h-px w-10 bg-gradient-to-r ${styles.line}`} />
          </div>
        </div>

        <div className="flex shrink-0 items-end self-stretch pb-0.5">
          <SolutionVisualPreview type={solution.visual} />
        </div>
      </div>
    </article>
  );
}
