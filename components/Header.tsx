"use client";

import { useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";

export function Header() {
  const { t, locale, toggle } = useLanguage();
  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#how", label: t.nav.how },
    { href: "#results", label: t.nav.results },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between text-brand-darker">
        <a href="#top" aria-label="Clear Fix">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-brand"
            aria-label="Sprache wechseln / switch language"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>
          <a href={`tel:${t.phone}`} className="btn-primary hidden sm:inline-flex">
            ☎ {t.phoneLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
