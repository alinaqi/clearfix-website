export type Locale = "de" | "en";

export interface Service {
  value: string;
  title: string;
  desc: string;
}

export interface Review {
  name: string;
  text: string;
}

export interface BeforeAfterItem {
  before: string;
  after: string;
  labelBefore: string;
  labelAfter: string;
  imgBefore: string;
  imgAfter: string;
}

export interface Content {
  nav: { services: string; how: string; results: string; contact: string; quote: string };
  phone: string;
  phoneLabel: string;
  badge: string;
  hero: {
    title: string;
    lead: string;
    callCta: string;
    whatsappCta: string;
    quoteCta: string;
    stats: { value: string; label: string }[];
    imgAlt: string;
  };
  services: { kicker: string; title: string; items: Service[]; cta: string };
  how: { kicker: string; title: string; steps: { title: string; desc: string }[] };
  results: { kicker: string; title: string; items: BeforeAfterItem[] };
  reviews: { kicker: string; title: string; items: Review[] };
  form: {
    kicker: string;
    title: string;
    sub: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    consent: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    serviceOptions: { value: string; label: string }[];
  };
  contact: {
    kicker: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappCta: string;
    emailLabel: string;
    email: string;
    areaLabel: string;
    area: string;
  };
  footer: { rights: string; imprint: string; privacy: string };
}
