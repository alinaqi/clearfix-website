import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateLead, leadEmailHtml, type LeadInput } from "@/lib/lead";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as LeadInput;
  const lead = validateLead(body);
  if (!lead) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "Clear Fix <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or LEAD_TO_EMAIL");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject: `Neue Anfrage: ${lead.service || "Allgemein"} — ${lead.name}`,
      html: leadEmailHtml(lead),
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Lead email failed:", e);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
