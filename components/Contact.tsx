"use client";

import { useLanguage } from "./LanguageProvider";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const wa = "https://wa.me/491701234567";

  const items = [
    { label: c.phoneLabel, value: t.phoneLabel, href: `tel:${t.phone}` },
    { label: c.whatsappLabel, value: c.whatsappCta, href: wa },
    { label: c.emailLabel, value: c.email, href: `mailto:${c.email}` },
    { label: c.areaLabel, value: c.area, href: undefined },
  ];

  return (
    <section id="contact" className="container-x py-20">
      <p className="kicker">{c.kicker}</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="rounded-2xl border border-line bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">{it.label}</p>
            {it.href ? (
              <a href={it.href} className="mt-1 block text-lg font-bold text-brand hover:underline">
                {it.value}
              </a>
            ) : (
              <p className="mt-1 text-lg font-bold text-brand-darker">{it.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
