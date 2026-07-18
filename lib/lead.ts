export interface LeadInput {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  locale?: string;
}

export interface CleanLead {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  locale: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export function validateLead(body: LeadInput): CleanLead | null {
  const name = str(body.name, 120);
  const email = str(body.email, 200);
  if (!name || !EMAIL_RE.test(email)) return null;
  return {
    name,
    email,
    phone: str(body.phone, 60),
    service: str(body.service, 60),
    message: str(body.message, 2000),
    locale: body.locale === "en" ? "en" : "de",
  };
}

function esc(s: string): string {
  return s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] || c));
}

export function leadEmailHtml(lead: CleanLead): string {
  const rows = [
    ["Name", lead.name],
    ["E-Mail", lead.email],
    ["Telefon", lead.phone || "—"],
    ["Leistung", lead.service || "—"],
    ["Sprache", lead.locale.toUpperCase()],
    ["Nachricht", lead.message || "—"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#1E6B47">${k}</td><td style="padding:6px 12px">${esc(v)}</td></tr>`
    )
    .join("");
  return `<div style="font-family:Arial,sans-serif;color:#1A2420"><h2 style="color:#1E6B47">Neue Anfrage über clearfix</h2><table style="border-collapse:collapse">${rows}</table></div>`;
}
