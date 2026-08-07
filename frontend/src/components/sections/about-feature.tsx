import type { ReactNode } from "react";
import {
  IconChart,
  IconConsulting,
  IconGear,
} from "@/components/ui/icons";
import type { AboutDifferential, AboutIcon } from "@/types";

const iconMap: Record<
  AboutIcon,
  (props: { className?: string }) => ReactNode
> = {
  chart: IconChart,
  consulting: IconConsulting,
  gear: IconGear,
};

type AboutFeatureProps = {
  item: AboutDifferential;
};

export function AboutFeature({ item }: AboutFeatureProps) {
  const Icon = iconMap[item.icon];

  return (
    <li className="flex gap-3">
      <span
        className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-surface text-blue-accent shadow-[0_0_16px_rgba(59,91,255,0.12)]"
        aria-hidden
      >
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div>
        <p className="text-[15px] font-semibold tracking-tight text-text-primary">
          {item.title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
          {item.description}
        </p>
      </div>
    </li>
  );
}
