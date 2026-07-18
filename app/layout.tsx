import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const TITLE = "Clear Fix — Entrümpeln · Umziehen · Entsorgen in Berlin";
const DESCRIPTION =
  "Entrümpelung, Umzugshilfe und Entsorgung aus einer Hand in Berlin. Schnell, sauber und zum Festpreis. Kostenloses Angebot innerhalb von 24 Stunden.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Clear Fix" },
  description: DESCRIPTION,
  applicationName: "Clear Fix",
  keywords: [
    "Entrümpelung Berlin",
    "Kellerentrümpelung",
    "Wohnungsauflösung",
    "Umzugshilfe Berlin",
    "Sperrmüll Entsorgung",
    "Haushaltsauflösung",
    "Entsorgung Berlin",
  ],
  authors: [{ name: "Clear Fix" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description:
      "Alles aus einer Hand — schnell, sauber und zum Festpreis. Wir kommen mit unserem Mercedes Transporter.",
    url: "/",
    siteName: "Clear Fix",
    locale: "de_DE",
    images: [{ url: "/images/transporter-hero.jpg", width: 1600, height: 1600, alt: "Mercedes Transporter von Clear Fix" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/transporter-hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
