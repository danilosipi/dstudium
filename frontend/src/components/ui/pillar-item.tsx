import type { ReactNode } from "react";
import {
  IconGear,
  IconNeural,
  IconScale,
  IconTech,
} from "@/components/ui/icons";
import type { Pillar, PillarAccent, PillarIcon } from "@/types";

const accentStyles: Record<
  PillarAccent,
  { icon: string; glow: string }
> = {
  purple: {
    icon: "text-accent-violet",
    glow: "shadow-[0_0_24px_rgba(139,92,246,0.18)]",
  },
  blue: {
    icon: "text-blue-accent",
    glow: "shadow-[0_0_24px_rgba(94,162,255,0.18)]",
  },
  green: {
    icon: "text-accent-green",
    glow: "shadow-[0_0_24px_rgba(52,211,153,0.16)]",
  },
  orange: {
    icon: "text-accent-orange",
    glow: "shadow-[0_0_24px_rgba(245,158,11,0.16)]",
  },
};

const iconMap: Record<
  PillarIcon,
  (props: { className?: string }) => ReactNode
> = {
  automation: IconGear,
  tech: IconTech,
  ai: IconNeural,
  scale: IconScale,
};

type PillarItemProps = {
  pillar: Pillar;
};

export function PillarItem({ pillar }: PillarItemProps) {
  const styles = accentStyles[pillar.accent];
  const Icon = iconMap[pillar.icon];

  return (
    <article className="flex h-full flex-col items-center px-4 py-6 text-center sm:px-5 sm:py-7">
      <div
        className={`mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#24315F]/80 bg-[#0B1024] sm:h-11 sm:w-11 ${styles.icon} ${styles.glow}`}
      >
        <Icon className="h-[22px] w-[22px]" />
      </div>
      <h3 className="text-[15px] leading-tight font-semibold tracking-tight text-[#F5F7FF] sm:text-base">
        {pillar.title}
      </h3>
      <p className="mt-2 max-w-[15.5rem] text-[13px] leading-relaxed text-[#A8B3D1] sm:text-sm">
        {pillar.description}
      </p>
    </article>
  );
}
