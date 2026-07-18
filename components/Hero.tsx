"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const wa = "https://wa.me/491701234567";

  return (
    <section id="top" className="bg-brand text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-brand-mint">
            {t.badge}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/85">{t.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${t.phone}`} className="btn bg-white text-brand hover:bg-cream">
              ☎ {t.hero.callCta}
            </a>
            <a href={wa} className="btn-whatsapp" target="_blank" rel="noopener">
              {t.hero.whatsappCta}
            </a>
            <a href="#quote" className="btn border border-white/40 text-white hover:bg-white/10">
              {t.hero.quoteCta}
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-brand-mint">{s.value}</dt>
                <dd className="text-sm text-white/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
          <Image
            src="/images/transporter-hero.jpg"
            alt={t.hero.imgAlt}
            width={1600}
            height={1600}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
