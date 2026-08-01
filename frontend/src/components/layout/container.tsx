import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  children,
  className = "",
  as,
  ...props
}: ContainerProps<T>) {
  const Tag = as ?? "div";

  return (
    <Tag
      className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
