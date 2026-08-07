import type { ReactNode } from "react";
import {
  IconArchitecture,
  IconAutomation,
  IconDevelopment,
  IconDiagnosis,
  IconEvolution,
} from "@/components/ui/icons";
import type {
  ProcessStep as ProcessStepData,
  ProcessStepAccent,
  ProcessStepIcon,
} from "@/types";

const accentStyles: Record<
  ProcessStepAccent,
  {
    icon: string;
    node: string;
    glow: string;
    number: string;
  }
> = {
  blue: {
    icon: "text-blue-accent",
    node: "border-blue-primary/70 bg-blue-primary/15",
    glow: "shadow-[0_0_18px_rgba(59,91,255,0.22)]",
    number: "text-blue-accent/80",
  },
  cyan: {
    icon: "text-glow",
    node: "border-glow/60 bg-glow/12",
    glow: "shadow-[0_0_18px_rgba(73,214,255,0.18)]",
    number: "text-glow/80",
  },
  violet: {
    icon: "text-accent-violet",
    node: "border-accent-violet/60 bg-accent-purple/15",
    glow: "shadow-[0_0_18px_rgba(167,139,250,0.18)]",
    number: "text-accent-violet/80",
  },
  orange: {
    icon: "text-accent-orange",
    node: "border-accent-orange/55 bg-accent-orange/12",
    glow: "shadow-[0_0_18px_rgba(245,158,11,0.16)]",
    number: "text-accent-orange/80",
  },
  green: {
    icon: "text-accent-green",
    node: "border-accent-green/55 bg-accent-green/12",
    glow: "shadow-[0_0_18px_rgba(52,211,153,0.16)]",
    number: "text-accent-green/80",
  },
};

const iconMap: Record<
  ProcessStepIcon,
  (props: { className?: string }) => ReactNode
> = {
  diagnosis: IconDiagnosis,
  architecture: IconArchitecture,
  development: IconDevelopment,
  automation: IconAutomation,
  evolution: IconEvolution,
};

type ProcessStepProps = {
  step: ProcessStepData;
  isLast: boolean;
};

export function ProcessStep({ step, isLast }: ProcessStepProps) {
  const styles = accentStyles[step.accent];
  const Icon = iconMap[step.icon];

  return (
    <li className="relative flex gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
      {/* Mobile / tablet vertical connector */}
      {!isLast ? (
        <span
          className="pointer-events-none absolute top-10 bottom-0 left-[1.1875rem] w-px bg-gradient-to-b from-[#5EA2FF]/55 via-[#49D6FF]/25 to-[#24315F]/40 lg:hidden"
          aria-hidden
        />
      ) : null}

      {/* Desktop horizontal connector from this node toward the next */}
      {!isLast ? (
        <span
          className="pointer-events-none absolute top-5 left-[calc(50%+1.35rem)] hidden h-px w-[calc(100%-2.7rem)] bg-gradient-to-r from-[#5EA2FF]/55 via-[#49D6FF]/30 to-[#3B5BFF]/35 lg:block"
          aria-hidden
        />
      ) : null}

      <div className="relative z-10 flex shrink-0 flex-col items-center lg:mb-4">
        <div
          className={`flex h-[2.375rem] w-[2.375rem] items-center justify-center rounded-full border bg-[#050816] ${styles.node} ${styles.glow} ${styles.icon}`}
        >
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="min-w-0 flex-1 pb-8 lg:pb-0 lg:pt-0">
        <p
          className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${styles.number}`}
          aria-hidden
        >
          {step.number}
        </p>
        <h3 className="mt-1 text-[15px] leading-snug font-semibold tracking-tight text-[#F5F7FF] sm:text-base">
          {step.title}
        </h3>
        <p className="mt-1.5 max-w-[16rem] text-[13px] leading-relaxed text-[#A8B3D1] lg:mx-auto lg:max-w-[12.5rem] sm:text-sm">
          {step.description}
        </p>
      </div>
    </li>
  );
}
