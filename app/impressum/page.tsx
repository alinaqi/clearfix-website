import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegalDoc } from "@/lib/legal-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Clear Fix, Berlin.",
  robots: { index: false, follow: true },
};

export default async function ImpressumPage() {
  const doc = await getLegalDoc("impressum");
  return <LegalPage doc={doc} />;
}
