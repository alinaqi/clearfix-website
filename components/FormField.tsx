import { ReactNode } from "react";

const base =
  "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-brand-darker outline-none transition-colors focus:border-brand";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-brand-darker">{label}</span>
      {children}
    </label>
  );
}

export function inputClass() {
  return base;
}
