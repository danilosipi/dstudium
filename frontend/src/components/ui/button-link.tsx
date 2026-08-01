import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonLinkVariant;
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "border border-blue-primary bg-blue-primary text-text-primary shadow-[0_0_24px_rgba(59,91,255,0.35)] hover:bg-blue-accent hover:border-blue-accent",
  secondary:
    "border border-border bg-transparent text-text-primary hover:border-blue-accent hover:bg-surface/70",
  ghost:
    "border border-transparent bg-transparent text-text-secondary hover:text-text-primary",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
