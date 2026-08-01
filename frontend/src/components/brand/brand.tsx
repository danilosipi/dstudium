import { BrandMark } from "@/components/brand/brand-mark";

type BrandProps = {
  className?: string;
  showTagline?: boolean;
  markSize?: number;
};

export function Brand({
  className = "",
  showTagline = false,
  markSize = 34,
}: BrandProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BrandMark size={markSize} />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.14em] text-text-primary">
          DSTUDIUM
        </span>
        {showTagline ? (
          <span className="mt-1.5 text-[10px] font-medium tracking-[0.16em] text-text-secondary uppercase">
            Tecnologia · Automação · IA
          </span>
        ) : null}
      </span>
    </span>
  );
}
