import { PHONE_LABEL, ADDRESS } from "./site";

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
}

const EMAIL = "info@clearfix.de";
const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.city}`;

export const impressum: LegalDoc = {
  title: "Impressum",
  updated: "Stand: Juli 2026",
  sections: [
    {
      heading: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)",
      body: [
        "Clear Fix — Entrümpelung & Entsorgung",
        `Inhaber: Laky`,
        FULL_ADDRESS,
        "Deutschland",
      ],
    },
    {
      heading: "Kontakt",
      body: [`Telefon: ${PHONE_LABEL}`, `E-Mail: ${EMAIL}`, `WhatsApp: ${PHONE_LABEL}`],
    },
    {
      heading: "Umsatzsteuer",
      body: [
        "Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und daher nicht gesondert ausgewiesen.",
      ],
    },
    {
      heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      body: [`Laky, ${FULL_ADDRESS}`],
    },
    {
      heading: "Verbraucherstreitbeilegung / Universalschlichtungsstelle",
      body: [
        "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        "Plattform der EU-Kommission zur Online-Streitbeilegung (OS): https://ec.europa.eu/consumers/odr",
      ],
    },
    {
      heading: "Haftung für Inhalte",
      body: [
        "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
        "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.",
      ],
    },
    {
      heading: "Urheberrecht",
      body: [
        "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.",
      ],
    },
  ],
};
