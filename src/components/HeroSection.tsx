"use client";

import { ClipboardCheck, ParkingCircle, PlayCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();

  const t = {
    badge:
      language === "es"
        ? "Sistema de Estacionamiento Medido Municipal"
        : "Municipal Metered Parking System",
    title:
      language === "es"
        ? "Aprendé a estacionar fácil y sin multas"
        : "Learn to park easily and avoid fines",
    description:
      language === "es"
        ? "Esta plataforma es una iniciativa institucional para ayudarte a usar la aplicación SEMM paso a paso: descargá la app, cargá saldo, iniciá tu estacionamiento y evitá multas innecesarias. Contenido pensado para todas las edades, con explicaciones simples y recursos audiovisuales."
        : "This platform is an institutional initiative to help you use the SEMM app step by step: download the app, add balance, start your parking session, and avoid unnecessary fines. Content designed for all ages, with simple explanations and audiovisual resources.",
    startGuide: language === "es" ? "Comenzar guía" : "Start Guide",
    evaluation: language === "es" ? "Evaluación" : "Evaluation",
  };

  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden bg-gradient-to-br from-cyan-800 via-cyan-700 to-blue-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-cyan-400/10"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/30">
            <ParkingCircle className="h-4 w-4" aria-hidden="true" />
            {t.badge}
          </span>

          <h1
            id="hero-titulo"
            className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t.title}
          </h1>

          <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-cyan-50 sm:text-lg">
            {t.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#modulos"
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-bold text-cyan-900 shadow-lg transition hover:bg-cyan-50 focus-visible:outline-white"
            >
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              {t.startGuide}
            </a>
            <a
              href="#simulador"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/80 bg-white/10 px-7 text-base font-bold text-white shadow-sm transition hover:bg-white/20"
            >
              <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
              {t.evaluation}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
