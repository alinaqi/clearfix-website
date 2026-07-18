"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import type { BeforeAfterItem } from "@/lib/types";

function Frame({ src, label, badge }: { src: string; label: string; badge?: boolean }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-line bg-white">
      <Image src={src} alt={label} width={1600} height={1200} className="aspect-[4/3] w-full object-cover" />
      <figcaption
        className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
          badge ? "bg-brand text-white" : "bg-white/90 text-brand-darker"
        }`}
      >
        {label}
      </figcaption>
    </figure>
  );
}

function Pair({ item }: { item: BeforeAfterItem }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Frame src={item.imgBefore} label={item.labelBefore} />
      <Frame src={item.imgAfter} label={item.labelAfter} badge />
    </div>
  );
}

export function BeforeAfter() {
  const { t } = useLanguage();
  return (
    <section id="results" className="container-x py-20">
      <p className="kicker">{t.results.kicker}</p>
      <h2 className="section-title">{t.results.title}</h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {t.results.items.map((item) => (
          <Pair key={item.before} item={item} />
        ))}
      </div>
    </section>
  );
}
