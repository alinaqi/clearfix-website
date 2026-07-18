"use client";

import { useLanguage } from "./LanguageProvider";

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-darker py-20 text-white">
      <div className="container-x">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-mint">{t.reviews.kicker}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.reviews.title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.reviews.items.map((r) => (
            <figure key={r.name} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <div className="text-accent" aria-label="5 von 5 Sternen">
                ★★★★★
              </div>
              <blockquote className="mt-4 text-white/85">„{r.text}“</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brand-mint">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
