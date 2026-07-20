"use client";

import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { LegalEditor } from "./LegalEditor";

type Slug = "impressum" | "datenschutz";
const TABS: { slug: Slug; label: string }[] = [
  { slug: "impressum", label: "Impressum" },
  { slug: "datenschutz", label: "Datenschutz" },
];

export function AdminApp() {
  const [authed, setAuthed] = useState(false);
  const [slug, setSlug] = useState<Slug>("impressum");

  if (!authed) return <LoginForm onSuccess={() => setAuthed(true)} />;

  return (
    <div className="container-x max-w-3xl py-12">
      <h1 className="text-2xl font-extrabold text-brand-darker">Rechtstexte bearbeiten</h1>
      <p className="mt-1 text-sm text-muted">Änderungen werden sofort auf der Website übernommen.</p>

      <div className="mt-6 flex gap-2">
        {TABS.map((t) => (
          <button
            key={t.slug}
            onClick={() => setSlug(t.slug)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              slug === t.slug ? "bg-brand text-white" : "border border-line text-muted hover:text-brand"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <LegalEditor key={slug} slug={slug} />
    </div>
  );
}
