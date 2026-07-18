// Central contact details — update here to change them site-wide.
export const PHONE_TEL = "+4917642433979";
export const PHONE_LABEL = "+49 176 42433979";
export const WHATSAPP_NUMBER = "4917642433979";

export const ADDRESS = {
  street: "Edisonstr. 42",
  city: "12459 Berlin",
};

const MAPS_QUERY = encodeURIComponent(`${ADDRESS.street}, ${ADDRESS.city}`);
export const MAPS_URL = `https://maps.google.com/?q=${MAPS_QUERY}`;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
