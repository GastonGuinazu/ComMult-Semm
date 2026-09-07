"use client";

import { useEffect, useState } from "react";
import { LifeBuoy, Minus, Plus, ShieldCheck } from "lucide-react";

const FONT_SCALE_STEPS = ["100%", "112.5%", "125%", "137.5%"] as const;

export default function Navbar() {
  const [scaleIndex, setScaleIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SCALE_STEPS[scaleIndex];
  }, [scaleIndex]);

  const canDecrease = scaleIndex > 0;
  const canIncrease = scaleIndex < FONT_SCALE_STEPS.length - 1;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <a
        href="#contenido-principal"
        className="sr-only-focusable fixed left-2 top-2 z-[60] rounded-lg bg-cyan-800 px-4 py-2 font-semibold text-white"
      >
        Saltar al contenido principal
      </a>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-800 text-white shadow-sm">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="text-base font-bold text-slate-900 sm:text-lg">
              Portal de Ayuda y Capacitación SEMM
            </p>
            <p className="text-sm font-medium text-cyan-800">
              Municipalidad de Córdoba
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div
            role="group"
            aria-label="Ajustar tamaño de texto"
            className="flex items-center gap-1 rounded-full border-2 border-slate-200 bg-slate-50 p-1"
          >
            <button
              type="button"
              onClick={() => setScaleIndex((i) => Math.max(0, i - 1))}
              disabled={!canDecrease}
              aria-label="Disminuir tamaño de texto"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-white hover:text-cyan-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">A</span>
            </button>
            <span
              className="px-1 text-sm font-bold text-slate-500"
              aria-hidden="true"
            >
              A
            </span>
            <button
              type="button"
              onClick={() =>
                setScaleIndex((i) => Math.min(FONT_SCALE_STEPS.length - 1, i + 1))
              }
              disabled={!canIncrease}
              aria-label="Aumentar tamaño de texto"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-white hover:text-cyan-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">A</span>
            </button>
          </div>

          <a
            href="#contacto"
            className="flex h-11 items-center gap-2 rounded-full bg-cyan-800 px-5 font-semibold text-white shadow-sm transition hover:bg-cyan-900"
          >
            <LifeBuoy className="h-5 w-5" aria-hidden="true" />
            Soporte
          </a>
        </div>
      </div>
    </header>
  );
}
