"use client";

import { useState } from "react";
import { Clock3, FileEdit, Gamepad2 } from "lucide-react";
import SimulatorModal from "./SimulatorModal";

// TODO: Reemplazar por la URL real de "insertar" del Google Forms de autoevaluación.
const GOOGLE_FORM_EMBED_URL = "";

export default function EvaluationSection() {
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  return (
    <section
      id="evaluacion"
      aria-labelledby="evaluacion-titulo"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-cyan-200 bg-gradient-to-b from-cyan-50 to-white shadow-sm">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">

            {/* ── Columna Izquierda: Simulador ── */}
            <div className="flex flex-col justify-between gap-8 border-b border-cyan-100 p-8 lg:border-b-0 lg:border-r">
              <div>
                <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
                  Simulador interactivo
                </span>
                <h2
                  id="evaluacion-titulo"
                  className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl"
                >
                  Misión Práctica: Estacioná tu auto
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Poné a prueba lo que aprendiste en un simulador seguro e
                  interactivo. Tu objetivo es registrar un auto, cargar saldo e
                  iniciar el estacionamiento.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSimulatorOpen(true)}
                className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-cyan-800 text-lg font-extrabold text-white shadow-md transition hover:bg-cyan-900"
              >
                <Gamepad2 className="h-6 w-6" aria-hidden="true" />
                Iniciar Simulador
              </button>
            </div>

            {/* ── Columna Derecha: Formulario ── */}
            <div className="flex flex-col gap-6 p-8">
              <div>
                <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
                  Evaluación y medición de impacto
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Encuesta de Impacto
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Ayudanos a mejorar esta plataforma respondiendo este breve
                  formulario de 2 minutos.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start rounded-xl bg-cyan-800 px-5 py-3 text-white">
                <Clock3 className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="text-sm font-bold">Solo toma 2 minutos</span>
              </div>

              {GOOGLE_FORM_EMBED_URL ? (
                <div className="min-h-[400px] overflow-hidden rounded-xl border border-slate-200 shadow-inner">
                  <iframe
                    src={GOOGLE_FORM_EMBED_URL}
                    title="Formulario de autoevaluación SEMM"
                    className="h-full min-h-[400px] w-full"
                    loading="lazy"
                  >
                    Cargando formulario…
                  </iframe>
                </div>
              ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-cyan-300 bg-cyan-50/60 p-8 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-cyan-800 shadow-sm">
                    <FileEdit className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <p className="max-w-xs text-base font-medium leading-relaxed text-cyan-900">
                    Aquí se incrustará el formulario de Google Forms mediante
                    un iframe responsive.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <SimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />
    </section>
  );
}
