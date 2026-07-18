import { PHONE_LABEL, ADDRESS } from "./site";
import type { LegalDoc } from "./legal";

const EMAIL = "info@clearfix.de";
const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.city}`;

export const datenschutz: LegalDoc = {
  title: "Datenschutzerklärung",
  updated: "Stand: Juli 2026",
  intro:
    "Der Schutz deiner persönlichen Daten ist uns wichtig. Nachfolgend informieren wir dich über die Verarbeitung personenbezogener Daten bei der Nutzung dieser Website gemäß der Datenschutz-Grundverordnung (DSGVO).",
  sections: [
    {
      heading: "1. Verantwortlicher",
      body: [
        "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
        `Clear Fix — Inhaber: Laky`,
        FULL_ADDRESS,
        `Telefon: ${PHONE_LABEL}`,
        `E-Mail: ${EMAIL}`,
      ],
    },
    {
      heading: "2. Verarbeitung über das Kontaktformular",
      body: [
        "Wenn du uns über das Anfrageformular kontaktierst, verarbeiten wir die von dir angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, gewünschte Leistung sowie deine Nachricht), um deine Anfrage zu bearbeiten und dir ein Angebot zu erstellen.",
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der Beantwortung deiner Anfrage).",
        "Die Angabe von Name und E-Mail-Adresse ist erforderlich, um deine Anfrage zuordnen und beantworten zu können. Weitere Angaben sind freiwillig.",
      ],
    },
    {
      heading: "3. Kontakt per Telefon, WhatsApp oder E-Mail",
      body: [
        "Wenn du uns per Telefon, E-Mail oder WhatsApp kontaktierst, verarbeiten wir die dabei übermittelten Daten zur Bearbeitung deines Anliegens (Art. 6 Abs. 1 lit. b und lit. f DSGVO).",
        "Bitte beachte, dass WhatsApp ein Dienst der Meta Platforms Ireland Ltd. ist. Bei der Nutzung von WhatsApp werden Daten auch an Meta übertragen. Details findest du in der Datenschutzerklärung von WhatsApp. Nutze diesen Kanal nur, wenn du damit einverstanden bist.",
      ],
    },
    {
      heading: "4. Hosting (Vercel)",
      body: [
        "Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Beim Aufruf der Website werden technisch notwendige Server-Logdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp) verarbeitet.",
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website). Mit Vercel besteht ein Auftragsverarbeitungsvertrag; die Übermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln.",
      ],
    },
    {
      heading: "5. E-Mail-Versand (Resend)",
      body: [
        "Zur Zustellung der über das Kontaktformular eingehenden Anfragen als E-Mail an uns nutzen wir den Dienst Resend (Resend, Inc., USA). Dabei werden die von dir eingegebenen Formulardaten verarbeitet und per E-Mail an unser Postfach übermittelt.",
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO. Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag; die Datenübermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln.",
      ],
    },
    {
      heading: "6. Cookies und Analyse",
      body: [
        "Diese Website verwendet keine Tracking-Cookies und keine Analyse- oder Marketing-Dienste. Es werden nur technisch notwendige Verarbeitungen zum Betrieb der Website durchgeführt.",
      ],
    },
    {
      heading: "7. Speicherdauer",
      body: [
        "Wir speichern deine Daten nur so lange, wie es für die Bearbeitung deiner Anfrage bzw. die Anbahnung oder Durchführung eines Vertrags erforderlich ist, oder solange gesetzliche Aufbewahrungspflichten bestehen. Danach werden die Daten gelöscht.",
      ],
    },
    {
      heading: "8. Deine Rechte",
      body: [
        "Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21 DSGVO).",
        "Soweit die Verarbeitung auf einer Einwilligung beruht, kannst du diese jederzeit mit Wirkung für die Zukunft widerrufen. Wende dich hierzu an die oben genannten Kontaktdaten.",
      ],
    },
    {
      heading: "9. Beschwerderecht bei der Aufsichtsbehörde",
      body: [
        "Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist z. B.: Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59-61, 10555 Berlin.",
      ],
    },
    {
      heading: "10. SSL-/TLS-Verschlüsselung",
      body: [
        "Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du an „https://“ in der Adresszeile deines Browsers.",
      ],
    },
  ],
};
