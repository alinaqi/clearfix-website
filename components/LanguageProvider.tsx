"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Content, Locale } from "@/lib/types";
import { dictionaries } from "@/lib/content";

interface LanguageContextValue {
  locale: Locale;
  t: Content;
  toggle: () => void;
  setLocale: (l: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");
  const toggle = useCallback(() => setLocale((l) => (l === "de" ? "en" : "de")), []);
  const value: LanguageContextValue = { locale, t: dictionaries[locale], toggle, setLocale };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
