"use client";

import { Target } from "lucide-react";
import type { Localized } from "@/context/LanguageContext";
import { pick, useLanguage } from "@/context/LanguageContext";

interface ModuleObjectivesProps {
  objectives: Localized[];
}

export default function ModuleObjectives({ objectives }: ModuleObjectivesProps) {
  const { language } = useLanguage();

  if (objectives.length === 0) return null;

  const label = language === "es" ? "Vas a poder:" : "You will be able to:";

  return (
    <div className="mb-3 flex shrink-0 flex-wrap items-center gap-2 border-b border-slate-100 pb-3 md:mb-2 md:pb-2">
      <span className="flex items-center gap-1.5 text-sm font-bold text-slate-600">
        <Target className="h-4 w-4 text-cyan-800" aria-hidden="true" />
        {label}
      </span>
      {objectives.map((objective, index) => (
        <span
          key={index}
          className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800"
        >
          {pick(objective, language)}
        </span>
      ))}
    </div>
  );
}
