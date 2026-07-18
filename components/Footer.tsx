"use client";

import { useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-cream">
      <div className="container-x flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <Logo size={32} />
        <p>{t.footer.rights}</p>
        <div className="flex gap-5">
          <a href="/impressum" className="hover:text-brand">
            {t.footer.imprint}
          </a>
          <a href="/datenschutz" className="hover:text-brand">
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
