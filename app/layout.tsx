import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clearfix.de"),
  title: "Clear Fix — Entrümpeln · Umziehen · Entsorgen in Berlin",
  description:
    "Entrümpelung, Umzugshilfe und Entsorgung aus einer Hand in Berlin. Schnell, sauber und zum Festpreis. Kostenloses Angebot innerhalb von 24 Stunden.",
  openGraph: {
    title: "Clear Fix — Entrümpeln · Umziehen · Entsorgen in Berlin",
    description:
      "Alles aus einer Hand — schnell, sauber und zum Festpreis. Wir kommen mit unserem Mercedes Transporter.",
    images: ["/images/transporter-hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
