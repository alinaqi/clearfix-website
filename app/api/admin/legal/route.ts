import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { getLegalDoc, saveLegalDoc, type LegalSlug } from "@/lib/legal-store";
import { validateLegalDoc } from "@/lib/legal-validate";

export const runtime = "nodejs";

const SLUGS: LegalSlug[] = ["impressum", "datenschutz"];

function parseSlug(url: string): LegalSlug | null {
  const slug = new URL(url).searchParams.get("slug");
  return SLUGS.includes(slug as LegalSlug) ? (slug as LegalSlug) : null;
}

export async function GET(req: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const slug = parseSlug(req.url);
  if (!slug) return NextResponse.json({ error: "bad_slug" }, { status: 400 });
  return NextResponse.json({ doc: await getLegalDoc(slug) });
}

export async function POST(req: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const slug = parseSlug(req.url);
  if (!slug) return NextResponse.json({ error: "bad_slug" }, { status: 400 });

  const body = await req.json().catch(() => null);
  const doc = validateLegalDoc(body?.doc);
  if (!doc) return NextResponse.json({ error: "invalid_doc" }, { status: 400 });

  try {
    await saveLegalDoc(slug, doc);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("saveLegalDoc failed:", e);
    return NextResponse.json({ error: "save_failed" }, { status: 502 });
  }
}
