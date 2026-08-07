import Image from "next/image";

const LOGO_SRC = "/brand/dstudium-logo.png";
const LOGO_ALT = "DSTUDIUM — Tecnologia que transforma";

/**
 * PNG 1536×1024 com padding preto generoso (~25% laterais, ~40% verticais).
 * Escala amplia o conteúdo útil; overflow do container recorta o vazio.
 * object-contain (nunca object-cover) para não cortar símbolo/tagline.
 */
const LOGO_SCALE = {
  header: 2.05,
  footer: 1.9,
} as const;

const sizeStyles = {
  header: {
    className:
      "h-[48px] w-[200px] sm:h-[52px] sm:w-[224px] lg:h-[56px] lg:w-[236px]",
  },
  footer: {
    className: "h-10 w-[168px] sm:h-11 sm:w-[184px]",
  },
} as const;

type BrandProps = {
  className?: string;
  size?: keyof typeof sizeStyles;
  priority?: boolean;
};

export function Brand({
  className = "",
  size = "header",
  priority = false,
}: BrandProps) {
  const { className: sizeClassName } = sizeStyles[size];

  return (
    <span
      className={`relative inline-block overflow-hidden ${sizeClassName} ${className}`}
    >
      <Image
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width={1536}
        height={1024}
        priority={priority}
        className={`pointer-events-none absolute left-1/2 top-1/2 h-auto w-full max-w-none object-contain ${
          size === "header"
            ? "brightness-[1.55] contrast-[1.22] saturate-[1.05] drop-shadow-[0_0_1px_rgba(180,200,255,0.55)]"
            : "opacity-90"
        }`}
        style={{
          transform: `translate(-50%, -50%) scale(${LOGO_SCALE[size]})`,
        }}
        sizes={
          size === "header"
            ? "(max-width: 640px) 400px, 480px"
            : "(max-width: 640px) 280px, 320px"
        }
      />
    </span>
  );
}
