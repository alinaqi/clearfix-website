"use client";

import type { LegalDoc, LegalSection } from "@/lib/legal";
import { SectionEditor } from "./SectionEditor";
import { useLegalDoc } from "./useLegalDoc";

const inputCls = "w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-brand";
const SAVE_LABEL = { idle: "Speichern", saving: "Speichert …", saved: "✓ Gespeichert", error: "Fehler — erneut" };

export function LegalEditor({ slug }: { slug: "impressum" | "datenschutz" }) {
  const { doc, setDoc, save, persist } = useLegalDoc(slug);
  if (!doc) return <p className="mt-8 text-sm text-muted">Lädt …</p>;

  const patch = (p: Partial<LegalDoc>) => setDoc({ ...doc, ...p });
  const setSection = (i: number, s: LegalSection) =>
    patch({ sections: doc.sections.map((x, j) => (j === i ? s : x)) });
  const removeSection = (i: number) => patch({ sections: doc.sections.filter((_, j) => j !== i) });
  const addSection = () => patch({ sections: [...doc.sections, { heading: "Neuer Abschnitt", body: [""] }] });

  return (
    <div className="mt-6 space-y-4">
      <input value={doc.title} onChange={(e) => patch({ title: e.target.value })} className={`${inputCls} text-lg font-bold`} placeholder="Titel" />
      <input value={doc.updated} onChange={(e) => patch({ updated: e.target.value })} className={inputCls} placeholder="Stand" />
      <textarea value={doc.intro ?? ""} onChange={(e) => patch({ intro: e.target.value })} rows={3} className={inputCls} placeholder="Einleitung (optional)" />

      {doc.sections.map((s, i) => (
        <SectionEditor key={i} section={s} index={i} onChange={setSection} onRemove={removeSection} />
      ))}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button type="button" onClick={addSection} className="btn-outline">+ Abschnitt</button>
        <button type="button" onClick={persist} disabled={save === "saving"} className="btn-primary disabled:opacity-60">
          {SAVE_LABEL[save]}
        </button>
        <a href={`/${slug}`} target="_blank" rel="noopener" className="text-sm font-semibold text-brand hover:underline">
          Vorschau ↗
        </a>
      </div>
    </div>
  );
}
