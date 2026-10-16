import type { Locale } from "@/context/LanguageContext";

/** Static quick-reference PDF guides, one per supported language. */
export const PDF_GUIDE_SRC: Record<Locale, string> = {
  es: "/guia-rapida-semm-es.pdf",
  en: "/guia-rapida-semm-en.pdf",
};

/** Page number of each module's section inside the PDF guide (same layout in both languages). */
export const PDF_GUIDE_MODULE_PAGE: Record<number, number> = {
  1: 3,
  2: 4,
  3: 5,
  4: 6,
};

/** Builds the href for a module's PDF section, jumping straight to its page. */
export function pdfGuideModuleHref(language: Locale, moduleNumber: number): string {
  const page = PDF_GUIDE_MODULE_PAGE[moduleNumber];
  const base = PDF_GUIDE_SRC[language];
  return page ? `${base}#page=${page}` : base;
}
