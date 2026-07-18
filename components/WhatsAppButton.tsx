"use client";

import { useLanguage } from "./LanguageProvider";
import { whatsappLink } from "@/lib/site";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.01 3.08 4.88 4.32.68.29 1.21.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <a
      href={whatsappLink(t.whatsapp.message)}
      target="_blank"
      rel="noopener"
      aria-label={t.whatsapp.fab}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon />
      <span className="hidden sm:inline">{t.whatsapp.fab}</span>
    </a>
  );
}
