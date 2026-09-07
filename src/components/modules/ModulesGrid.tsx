"use client";

import { useState } from "react";
import { MODULES } from "./data";
import type { ModuleData } from "./types";
import ModuleCard from "./ModuleCard";
import ModuleModal from "./ModuleModal";

export default function ModulesGrid() {
  const [activeModule, setActiveModule] = useState<ModuleData | null>(null);

  return (
    <section
      id="modulos"
      aria-labelledby="modulos-titulo"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="max-w-3xl">
        <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
          Núcleos de aprendizaje
        </span>
        <h2
          id="modulos-titulo"
          className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl"
        >
          Todo lo que necesitás saber sobre SEMM
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Tocá "Comenzar Módulo" en el que te interese. Cada uno abre una guía
          visual paso a paso diseñada para ser clara y fácil de seguir.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MODULES.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            onOpen={() => setActiveModule(module)}
          />
        ))}
      </div>

      <ModuleModal
        module={activeModule}
        onClose={() => setActiveModule(null)}
      />
    </section>
  );
}
