import type { Content, Locale } from "./types";
import { de } from "./content.de";
import { en } from "./content.en";

export const dictionaries: Record<Locale, Content> = { de, en };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}
