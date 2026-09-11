"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteInfo } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-sm" : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-castle flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-brand text-xl md:text-2xl tracking-wide text-ivory">
            {siteInfo.brandNameEn}
          </span>
          <span className="hidden sm:inline font-sans-kr text-xs text-gold-light tracking-widest">
            {siteInfo.brandNameKr}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans-kr text-[13px] tracking-wider transition-colors ${
                  active ? "text-gold-light" : "text-ivory/85 hover:text-gold-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex flex-col justify-center items-center gap-1.5 w-9 h-9 shrink-0"
        >
          <span
            className={`block h-px w-6 bg-ivory transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-navy border-t border-ivory/10">
          <ul className="container-castle py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 font-sans-kr text-sm tracking-wider ${
                      active ? "text-gold-light" : "text-ivory/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
