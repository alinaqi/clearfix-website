"use client";

import { useLanguage } from "./LanguageProvider";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how" className="bg-brand-soft/50 py-20">
      <div className="container-x">
        <p className="kicker">{t.how.kicker}</p>
        <h2 className="section-title">{t.how.title}</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-darker">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
