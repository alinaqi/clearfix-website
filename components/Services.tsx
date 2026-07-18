"use client";

import { useLanguage } from "./LanguageProvider";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="container-x py-20">
      <p className="kicker">{t.services.kicker}</p>
      <h2 className="section-title">{t.services.title}</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((s) => (
          <div
            key={s.value}
            className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-bold text-brand-darker">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
            <a
              href="#quote"
              className="mt-4 text-sm font-semibold text-brand transition-transform group-hover:translate-x-0.5"
            >
              {t.services.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
