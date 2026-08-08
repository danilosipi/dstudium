"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/brand/brand";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { mainNav } from "@/data/navigation";

function hrefForSectionId(id: string): string {
  return id === "inicio" ? "/" : `/#${id}`;
}

function activeHrefForPathname(pathname: string): string | null {
  if (pathname === "/sobre" || pathname.startsWith("/sobre/")) {
    return "/sobre";
  }
  if (pathname === "/solucoes" || pathname.startsWith("/solucoes/")) {
    return "/solucoes";
  }
  if (pathname === "/projetos" || pathname.startsWith("/projetos/")) {
    return "/projetos";
  }
  if (pathname === "/") {
    return null;
  }
  return null;
}

const sectionIds = mainNav.flatMap((item) => {
  const hashIndex = item.href.indexOf("#");
  if (hashIndex >= 0) {
    return [item.href.slice(hashIndex + 1)];
  }
  if (item.href === "/") {
    return ["inicio"];
  }
  return [];
});

export function Header() {
  const pathname = usePathname();
  const routeActive = activeHrefForPathname(pathname);
  const [open, setOpen] = useState(false);
  const [sectionActive, setSectionActive] = useState("/");
  const menuId = useId();
  const active = routeActive ?? sectionActive;

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setSectionActive(hrefForSectionId(visible[0].target.id));
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    elements.forEach((element) => observer.observe(element));

    const syncHash = () => {
      if (window.location.hash) {
        setSectionActive(hrefForSectionId(window.location.hash.slice(1)));
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncHash);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-bg-primary/90 backdrop-blur-md">
      <Container className="grid h-[68px] grid-cols-[1fr_auto] items-center gap-3 sm:h-[76px] lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
        <Link
          href="/"
          className="justify-self-start rounded-md"
          onClick={() => {
            setSectionActive("/");
            closeMenu();
          }}
        >
          <Brand size="header" priority />
        </Link>

        <nav
          className="hidden items-center justify-center gap-0.5 lg:flex"
          aria-label="Principal"
        >
          {mainNav.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setSectionActive(item.href)}
                className={`relative px-2.5 py-2 text-sm transition-colors ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-2.5 -bottom-0.5 h-px rounded-full bg-blue-primary transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <ButtonLink
            href="/#contato"
            variant="primary"
            className="px-4 py-2.5 text-[10px] tracking-[0.1em]"
            onClick={closeMenu}
          >
            Fale com a DSTUDIUM
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-md border border-border text-text-primary transition-colors hover:border-blue-accent lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-4" aria-hidden>
            <span
              className={`absolute left-0 top-0 block h-0.5 w-full bg-current transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-0.5 w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] block h-0.5 w-full bg-current transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className={`border-t border-border/70 bg-bg-secondary/95 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4" as="nav" aria-label="Menu">
          {mainNav.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                onClick={() => {
                  setSectionActive(item.href);
                  closeMenu();
                }}
                className={`rounded-md px-3 py-3 text-base transition-colors hover:bg-surface ${
                  isActive ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <ButtonLink
              href="/#contato"
              variant="primary"
              className="w-full"
              onClick={closeMenu}
            >
              Fale com a DSTUDIUM
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
