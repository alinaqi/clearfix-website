import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { datenschutz } from "@/lib/legal.datenschutz";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten bei Clear Fix, Berlin.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return <LegalPage doc={datenschutz} />;
}
