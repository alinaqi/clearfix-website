import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { impressum } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Clear Fix, Berlin.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return <LegalPage doc={impressum} />;
}
