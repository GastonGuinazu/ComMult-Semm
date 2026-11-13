"use client";

import { FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRAINING_PLAN_PDF_SRC } from "@/lib/pdfGuide";

/** Navbar button that opens the "Plan Integral de Capacitación" PDF in a new tab. */
export default function TrainingPlanLink() {
  const { language } = useLanguage();

  const t = {
    label: language === "es" ? "Plan de capacitación" : "Training plan",
    aria:
      language === "es"
        ? "Abrir el Plan Integral de Capacitación (PDF, se abre en una pestaña nueva)"
        : "Open the full Training Plan (PDF in Spanish, opens in a new tab)",
  };

  return (
    <a
      href={TRAINING_PLAN_PDF_SRC}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.aria}
      title={t.label}
      className="flex h-11 shrink-0 items-center gap-2 rounded-full border-2 border-slate-200 bg-slate-50 px-4 font-bold text-slate-700 transition hover:border-cyan-200 hover:bg-white hover:text-cyan-800"
    >
      <FileText className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden text-sm sm:inline">{t.label}</span>
    </a>
  );
}
