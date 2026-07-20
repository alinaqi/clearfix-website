import type { LegalDoc, LegalSection } from "./legal";

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.slice(0, max) : "";
}

function section(v: unknown): LegalSection | null {
  if (typeof v !== "object" || v === null) return null;
  const s = v as Record<string, unknown>;
  const heading = str(s.heading, 200).trim();
  if (!heading) return null;
  const body = Array.isArray(s.body)
    ? s.body.map((l) => str(l, 4000)).filter((l) => l.trim().length > 0)
    : [];
  return { heading, body };
}

export function validateLegalDoc(v: unknown): LegalDoc | null {
  if (typeof v !== "object" || v === null) return null;
  const d = v as Record<string, unknown>;
  const title = str(d.title, 200).trim();
  if (!title) return null;
  const sections = Array.isArray(d.sections)
    ? d.sections.map(section).filter((s): s is LegalSection => s !== null)
    : [];
  if (!sections.length) return null;
  return {
    title,
    updated: str(d.updated, 120).trim(),
    intro: str(d.intro, 4000).trim() || undefined,
    sections,
  };
}
