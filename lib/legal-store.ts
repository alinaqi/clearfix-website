import { list, put } from "@vercel/blob";
import type { LegalDoc } from "./legal";
import { impressum } from "./legal";
import { datenschutz } from "./legal.datenschutz";

export type LegalSlug = "impressum" | "datenschutz";

const DEFAULTS: Record<LegalSlug, LegalDoc> = { impressum, datenschutz };

function pathFor(slug: LegalSlug): string {
  return `legal/${slug}.json`;
}

async function readBlob(slug: LegalSlug): Promise<LegalDoc | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  const { blobs } = await list({ prefix: pathFor(slug), limit: 1 });
  if (!blobs.length) return null;
  const res = await fetch(blobs[0].url, { cache: "no-store" });
  if (!res.ok) return null;
  return (await res.json()) as LegalDoc;
}

export async function getLegalDoc(slug: LegalSlug): Promise<LegalDoc> {
  try {
    const stored = await readBlob(slug);
    return stored ?? DEFAULTS[slug];
  } catch {
    return DEFAULTS[slug];
  }
}

export async function saveLegalDoc(slug: LegalSlug, doc: LegalDoc): Promise<void> {
  await put(pathFor(slug), JSON.stringify(doc, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export function defaultLegalDoc(slug: LegalSlug): LegalDoc {
  return DEFAULTS[slug];
}
