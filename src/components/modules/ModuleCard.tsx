"use client";

import type { ModuleData } from "./types";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { pick, useLanguage } from "@/context/LanguageContext";

interface ModuleCardProps {
  module: ModuleData;
  isCompleted?: boolean;
  onOpen: () => void;
}

export default function ModuleCard({
  module,
  isCompleted = false,
  onOpen,
}: ModuleCardProps) {
  const { language } = useLanguage();
  const Icon = module.icon;

  const moduleLabel = language === "es" ? "Módulo" : "Module";
  const defaultButton = language === "es" ? "Ver Módulo" : "View Module";
  const completedLabel = language === "es" ? "Completado" : "Completed";
  const buttonLabel = module.buttonText
    ? pick(module.buttonText, language)
    : defaultButton;
  const title = pick(module.title, language);

  return (
    <article
      className={`flex h-full flex-col gap-5 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
        isCompleted
          ? "border-green-400 ring-1 ring-green-500"
          : "border-slate-200"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
          {moduleLabel} {module.number}
        </span>
        {isCompleted && (
          <CheckCircle2
            className="ml-auto h-6 w-6 shrink-0 text-green-600"
            aria-label={completedLabel}
          />
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold leading-snug text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-slate-600">
          {pick(module.description, language)}
        </p>
      </div>

      <span className="inline-flex w-fit items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800">
        {pick(module.resourceLabel, language)}
      </span>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`${buttonLabel}: ${title}`}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-cyan-800 text-base font-bold text-white transition hover:bg-cyan-900"
      >
        <PlayCircle className="h-5 w-5" aria-hidden="true" />
        {buttonLabel}
      </button>
    </article>
  );
}
