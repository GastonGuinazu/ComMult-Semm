"use client";

import { useEffect, useRef, useState } from "react";
import { Gamepad2, X } from "lucide-react";
import SimulatorModal from "./SimulatorModal";
import { useLanguage } from "@/context/LanguageContext";

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScR4yMeLQyIjdimqWIz0ZHWxJQnrctiy6UrY34XVwFppHNjcA/viewform?embedded=true";

export default function EvaluationSection() {
  const { language } = useLanguage();
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formCloseRef = useRef<HTMLButtonElement>(null);

  const t = {
    simEyebrow: language === "es" ? "Simulador interactivo" : "Interactive simulator",
    simTitle:
      language === "es"
        ? "Misión Práctica: Estacioná tu auto"
        : "Practice Mission: Park your car",
    simBody:
      language === "es"
        ? "Poné a prueba lo que aprendiste en un simulador seguro e interactivo. Tu objetivo es registrar un auto, cargar saldo e iniciar el estacionamiento."
        : "Put what you learned to the test in a safe interactive simulator. Your goal is to register a car, add balance, and start parking.",
    simCta: language === "es" ? "Iniciar Simulador" : "Start Simulator",
    formTitle:
      language === "es"
        ? "Encuesta de Satisfacción y Experiencia"
        : "Satisfaction and Experience Survey",
    formBody:
      language === "es"
        ? "Tu opinión nos ayuda a mejorar. Contanos cómo fue tu experiencia usando esta guía respondiendo 4 breves preguntas."
        : "Your feedback helps us improve. Tell us about your experience using this guide by answering 4 short questions.",
    formCta: language === "es" ? "📝 Responder Encuesta" : "📝 Take Survey",
    formModalTitle:
      language === "es" ? "Encuesta de Satisfacción" : "Satisfaction Survey",
    formIframe:
      language === "es"
        ? "Formulario de evaluación SEMM"
        : "SEMM evaluation form",
    formLoading: language === "es" ? "Cargando…" : "Loading…",
    formClose: language === "es" ? "Cerrar encuesta" : "Close survey",
  };

  useEffect(() => {
    if (!isFormOpen) return;

    formCloseRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFormOpen(false);
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  return (
    <>
      <section
        id="simulador"
        aria-labelledby="simulador-titulo"
        className="bg-white pt-8 pb-12 sm:pt-8 sm:pb-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-cyan-200 bg-gradient-to-b from-cyan-50 to-white p-8 shadow-sm sm:p-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
                  {t.simEyebrow}
                </span>
                <h2
                  id="simulador-titulo"
                  className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl"
                >
                  {t.simTitle}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {t.simBody}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSimulatorOpen(true)}
                className="flex h-16 w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-cyan-800 text-lg font-extrabold text-white shadow-md transition hover:bg-cyan-900"
              >
                <Gamepad2 className="h-6 w-6" aria-hidden="true" />
                {t.simCta}
              </button>
            </div>
          </div>
        </div>

        <SimulatorModal
          isOpen={simulatorOpen}
          onClose={() => setSimulatorOpen(false)}
        />
      </section>

      <section
        id="evaluacion"
        aria-labelledby="evaluacion-titulo"
        className="flex w-full flex-col items-center justify-center border-t border-slate-200 bg-slate-50 px-4 py-16"
      >
        <div className="mb-8 text-center">
          <h2
            id="evaluacion-titulo"
            className="mb-4 text-3xl font-bold text-slate-800"
          >
            {t.formTitle}
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-slate-600">
            {t.formBody}
          </p>
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-800 px-8 py-3 font-semibold text-white shadow-md transition-colors hover:bg-cyan-900"
          >
            {t.formCta}
          </button>
        </div>
      </section>

      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="encuesta-titulo"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsFormOpen(false);
          }}
        >
          <div
            className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
            style={{ maxHeight: "90vh" }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 p-4">
              <h3
                id="encuesta-titulo"
                className="font-semibold text-slate-700"
              >
                {t.formModalTitle}
              </h3>
              <button
                ref={formCloseRef}
                type="button"
                onClick={() => setIsFormOpen(false)}
                aria-label={t.formClose}
                className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-200"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="h-[80vh] w-full flex-1 overflow-x-hidden overflow-y-auto bg-slate-50">
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                title={t.formIframe}
                width="100%"
                height="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                className="h-full min-h-[800px] w-full"
              >
                {t.formLoading}
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
