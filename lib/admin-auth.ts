import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "cf_admin";

function adminPassword(): string | null {
  return process.env.ADMIN_PASSWORD || null;
}

export function sessionToken(): string | null {
  const pw = adminPassword();
  if (!pw) return null;
  return createHmac("sha256", pw).update("cf-admin-session-v1").digest("hex");
}

export function checkPassword(input: string): boolean {
  const pw = adminPassword();
  if (!pw || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(pw);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function isAuthenticated(): Promise<boolean> {
  const expected = sessionToken();
  if (!expected) return false;
  const jar = await cookies();
  const got = jar.get(SESSION_COOKIE)?.value;
  if (!got) return false;
  const a = Buffer.from(got);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
