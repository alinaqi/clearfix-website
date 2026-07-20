import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getLegalDoc } from "@/lib/legal-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten bei Clear Fix, Berlin.",
  robots: { index: false, follow: true },
};

export default async function DatenschutzPage() {
  const doc = await getLegalDoc("datenschutz");
  return <LegalPage doc={doc} />;
}
