"use client";

import { useEffect, useState } from "react";
import { MODULES } from "./data";
import type { ModuleData } from "./types";
import ModuleCard from "./ModuleCard";
import ModuleModal from "./ModuleModal";
import { useLanguage } from "@/context/LanguageContext";

const PROGRESS_STORAGE_KEY = "semm_progress";
const TOTAL_MODULES = 3;
const TRACKED_MODULE_NUMBERS = [1, 2, 3];

function readStoredProgress(): number[] {
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (value): value is number =>
        typeof value === "number" && TRACKED_MODULE_NUMBERS.includes(value),
    );
  } catch {
    return [];
  }
}

export default function ModulesGrid() {
  const { language } = useLanguage();
  const [activeModule, setActiveModule] = useState<ModuleData | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCompletedModules(readStoredProgress());
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    window.localStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify(completedModules),
    );
  }, [completedModules, isMounted]);

  const handleModuleComplete = (moduleId: number) => {
    if (!TRACKED_MODULE_NUMBERS.includes(moduleId)) return;
    setCompletedModules((current) =>
      current.includes(moduleId) ? current : [...current, moduleId],
    );
  };

  const t = {
    eyebrow: language === "es" ? "Núcleos de aprendizaje" : "Learning units",
    title:
      language === "es"
        ? "Todo lo que necesitás saber sobre SEMM"
        : "Everything you need to know about SEMM",
    intro:
      language === "es"
        ? "Tocá el botón del módulo que te interese. Cada uno abre una guía visual paso a paso diseñada para ser clara y fácil de seguir."
        : "Tap the button of the module you want. Each one opens a step-by-step visual guide designed to be clear and easy to follow.",
    progress: language === "es" ? "Tu progreso" : "Your progress",
    progressCount:
      language === "es"
        ? `${completedModules.length} de ${TOTAL_MODULES} módulos completados`
        : `${completedModules.length} of ${TOTAL_MODULES} modules completed`,
  };

  return (
    <section
      id="modulos"
      aria-labelledby="modulos-titulo"
      className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pb-8 sm:pt-12 lg:px-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
          {t.eyebrow}
        </span>
        <h2
          id="modulos-titulo"
          className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl"
        >
          {t.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          {t.intro}
        </p>
      </div>

      {isMounted && (
        <div className="mx-auto mb-8 mt-10 w-full max-w-4xl">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-600">
              {t.progress}
            </span>
            <span className="text-sm font-bold text-slate-800">
              {t.progressCount}
            </span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-700 ease-out"
              style={{
                width: `${(completedModules.length / TOTAL_MODULES) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      <div
        className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ${
          isMounted ? "" : "mt-10"
        }`}
      >
        {MODULES.map((module) => {
          const isLocked =
            module.number > 1 && !completedModules.includes(module.number - 1);

          return (
            <ModuleCard
              key={module.id}
              module={module}
              {...(module.number !== 4
                ? { isCompleted: completedModules.includes(module.number) }
                : {})}
              isLocked={isLocked}
              onOpen={() => {
                if (isLocked) return;
                setActiveModule(module);
              }}
            />
          );
        })}
      </div>

      <ModuleModal
        module={activeModule}
        onClose={() => setActiveModule(null)}
        onComplete={() => {
          if (activeModule) handleModuleComplete(activeModule.number);
        }}
      />
    </section>
  );
}
