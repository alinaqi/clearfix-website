"use client";

import type { LegalSection } from "@/lib/legal";

interface Props {
  section: LegalSection;
  index: number;
  onChange: (index: number, section: LegalSection) => void;
  onRemove: (index: number) => void;
}

const inputCls = "w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-brand";

export function SectionEditor({ section, index, onChange, onRemove }: Props) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <div className="flex items-center gap-2">
        <input
          value={section.heading}
          onChange={(e) => onChange(index, { ...section, heading: e.target.value })}
          placeholder="Überschrift"
          className={`${inputCls} font-semibold`}
        />
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="shrink-0 rounded-lg border border-line px-3 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          Entfernen
        </button>
      </div>
      <textarea
        value={section.body.join("\n")}
        onChange={(e) => onChange(index, { ...section, body: e.target.value.split("\n") })}
        rows={Math.max(3, section.body.length + 1)}
        placeholder="Ein Absatz pro Zeile"
        className={`${inputCls} mt-2`}
      />
      <p className="mt-1 text-xs text-muted">Ein Absatz pro Zeile.</p>
    </div>
  );
}
