"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, RefreshCw } from "lucide-react";
import { pick, useLanguage, type Localized } from "@/context/LanguageContext";

type Step = 1 | 2 | 3 | 4 | 5;

interface StepConfig {
  badge: Localized;
  title: Localized;
  instruction: Localized;
}

const STEP_CONFIG: Record<string, StepConfig> = {
  "1": {
    badge: { es: "PASO 1 DE 5", en: "STEP 1 OF 5" },
    title: { es: "Agregá tu vehículo", en: "Add your vehicle" },
    instruction: {
      es: "Empezamos con saldo $0. Tocá el botón azul '+ VEHÍCULO' para agregar tu patente.",
      en: "We start with a $0 balance. Tap the blue '+ VEHÍCULO' button to add your license plate.",
    },
  },
  "2": {
    badge: { es: "PASO 2 DE 5", en: "STEP 2 OF 5" },
    title: { es: "Confirmá tu patente", en: "Confirm your license plate" },
    instruction: {
      es: "Tu patente ya aparece escrita. Tocá 'AGREGAR' para guardarla en tu cuenta.",
      en: "Your license plate is typed in. Tap 'AGREGAR' to save it to your account.",
    },
  },
  "3": {
    badge: { es: "PASO 3 DE 5", en: "STEP 3 OF 5" },
    title: { es: "Cargá saldo", en: "Add balance" },
    instruction: {
      es: "Tu auto está registrado. Tocá 'CARGAR SALDO' arriba a la derecha para agregar dinero.",
      en: "Your car is registered. Tap 'CARGAR SALDO' in the top right corner to add money.",
    },
  },
  "4": {
    badge: { es: "PASO 4 DE 5", en: "STEP 4 OF 5" },
    title: { es: "Pagá de forma segura", en: "Pay securely" },
    instruction: {
      es: "Estás en Mercado Pago, de forma segura. Tocá 'PAGAR' para acreditar el saldo en tu cuenta SEMM.",
      en: "You are safely in Mercado Pago. Tap 'PAGAR' to add funds to your SEMM account.",
    },
  },
  "5": {
    badge: { es: "PASO 5 DE 5", en: "STEP 5 OF 5" },
    title: { es: "Iniciá el estacionamiento", en: "Start parking" },
    instruction: {
      es: "Tu saldo ya está actualizado. Tocá el botón verde '► INICIAR' para comenzar a estacionar.",
      en: "Your balance is updated. Tap the green '► INICIAR' button to start parking.",
    },
  },
  success: {
    badge: { es: "¡MISIÓN CUMPLIDA!", en: "MISSION COMPLETE!" },
    title: { es: "Ya sabés usar la app", en: "You already know how to use the app" },
    instruction: {
      es: "Completaste los 5 pasos: registraste tu auto, cargaste saldo e iniciaste el estacionamiento. ¡Estás listo para usar SEMM en la calle sin multas!",
      en: "You completed the 5 steps: you registered your car, added balance, and started parking. You're ready to use SEMM on the street without fines!",
    },
  },
};

interface HotspotConfig {
  step: number;
  src: string;
  style: React.CSSProperties;
  delayMs?: number;
  hint: Localized;
}

const HOTSPOTS: HotspotConfig[] = [
  {
    step: 1,
    src: "/RecienInstalada.jfif",
    style: { top: "20%", left: "1%", width: "48%", height: "6%" },
    hint: {
      es: "Pista: Buscá el botón azul central que tiene el signo más (+).",
      en: "Hint: Look for the central blue button with the plus sign (+).",
    },
  },
  {
    step: 2,
    src: "/AlTocarAgregarVehiculo.jfif",
    style: { top: "59.5%", left: "57%", width: "23%", height: "5%" },
    delayMs: 500,
    hint: {
      es: "Pista: El botón para guardar está justo debajo de la patente.",
      en: "Hint: The save button is right below the license plate.",
    },
  },
  {
    step: 3,
    src: "/CargarSaldo.jfif",
    style: { top: "10.5%", left: "57%", width: "42%", height: "6%" },
    hint: {
      es: "Pista: Mirá en la esquina superior derecha.",
      en: "Hint: Look in the top-right corner.",
    },
  },
  {
    step: 4,
    src: "/CargarSaldoRedirigMP.jfif",
    style: { top: "86.5%", left: "5%", width: "90%", height: "8%" },
    delayMs: 500,
    hint: {
      es: "Pista: Buscá el botón azul grande en la parte inferior.",
      en: "Hint: Look for the big blue button at the bottom.",
    },
  },
  {
    step: 5,
    src: "/SaldoCargadoUbicadoDondeSeCobra.jfif",
    style: { top: "19.5%", left: "51%", width: "48%", height: "7%" },
    hint: {
      es: "Pista: El botón para iniciar es de color verde.",
      en: "Hint: The start button is green.",
    },
  },
];

interface InteractiveSimulatorProps {
  onComplete?: () => void;
  onClose?: () => void;
}

export default function InteractiveSimulator({
  onComplete,
  onClose,
}: InteractiveSimulatorProps) {
  const { language } = useLanguage();
  const [step, setStep] = useState<Step>(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isExamMode, setIsExamMode] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [revealHotspot, setRevealHotspot] = useState(false);
  const revealTimeoutRef = useRef<number | null>(null);

  const configKey = showSuccess ? "success" : String(step);
  const config = STEP_CONFIG[configKey];
  const hotspot = HOTSPOTS.find((h) => h.step === step)!;

  const t = {
    hint:
      language === "es"
        ? "Tocá el área resaltada en la pantalla del celular para avanzar."
        : "Tap the highlighted area on the phone screen to continue.",
    repeat: language === "es" ? "Repetir" : "Replay",
    repeatMission: language === "es" ? "Repetir misión" : "Replay mission",
    finishMission: language === "es" ? "Finalizar Misión" : "Finish Mission",
    screenAlt: language === "es" ? "Pantalla SEMM" : "SEMM screen",
    hotspotAria:
      language === "es" ? "Área interactiva" : "Interactive area",
    successTitle: language === "es" ? "¡Misión Cumplida!" : "Mission Complete!",
    successBody:
      language === "es"
        ? "Estacionamiento iniciado correctamente"
        : "Parking started successfully",
    practiceMode:
      language === "es" ? "Práctica con Ayuda" : "Guided Practice",
    examMode:
      language === "es" ? "Modo Examen (Sin Ayuda)" : "Exam Mode (No Hints)",
    examActive:
      language === "es" ? "🎯 Modo Examen Activo" : "🎯 Exam Mode Active",
    modeGroup:
      language === "es"
        ? "Elegí el modo del simulador"
        : "Choose the simulator mode",
    examError:
      language === "es"
        ? "¡Ese no es el botón! Intenta recordar dónde estaba."
        : "That's not the button! Try to remember where it was.",
    examReveal:
      language === "es"
        ? "Te mostramos dónde es para que avances"
        : "We'll show you where it is so you can move on",
    missClickAria:
      language === "es"
        ? "Área de la pantalla. En modo examen, un toque fuera del botón correcto marca error."
        : "Screen area. In exam mode, tapping outside the correct button marks an error.",
  };

  useEffect(() => {
    if (!showError) return;
    const timeoutId = window.setTimeout(() => setShowError(false), 4500);
    return () => window.clearTimeout(timeoutId);
  }, [showError, errorCount]);

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  const clearExamFeedback = () => {
    setErrorCount(0);
    setShowError(false);
    setRevealHotspot(false);
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
      revealTimeoutRef.current = null;
    }
  };

  const handleMissClick = () => {
    const nextCount = errorCount + 1;
    setErrorCount(nextCount);
    setShowError(true);

    if (nextCount >= 3) {
      setRevealHotspot(true);
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
      revealTimeoutRef.current = window.setTimeout(() => {
        setRevealHotspot(false);
        revealTimeoutRef.current = null;
      }, 3000);
    }
  };

  const handleAction = () => {
    if (loading) return;

    setShowError(false);
    setErrorCount(0);
    setRevealHotspot(false);
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
      revealTimeoutRef.current = null;
    }

    if (step === 5) {
      setShowSuccess(true);
      return;
    }

    const next = (step + 1) as Step;

    if (hotspot.delayMs) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(next);
      }, hotspot.delayMs);
    } else {
      setStep(next);
    }
  };

  const reset = () => {
    clearExamFeedback();
    setStep(1);
    setShowSuccess(false);
  };

  const finishMission = () => {
    onComplete?.();
    onClose?.();
  };

  const hideHotspot = isExamMode && !revealHotspot;
  const examToast =
    errorCount >= 3
      ? t.examReveal
      : errorCount === 2
        ? pick(hotspot.hint, language)
        : t.examError;

  const activeDot = showSuccess ? 5 : step;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">

      {/* ── Left: instructions ── */}
      <div className="flex flex-1 flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div
              role="radiogroup"
              aria-label={t.modeGroup}
              className={`flex items-center gap-2 rounded-xl border p-1.5 ${
                isExamMode
                  ? "border-indigo-300 bg-indigo-50"
                  : "border-slate-200 bg-slate-100"
              }`}
            >
              <button
                type="button"
                role="radio"
                aria-checked={!isExamMode}
                onClick={() => setIsExamMode(false)}
                className={`min-h-12 flex-1 rounded-lg px-3 py-1.5 text-sm transition-all ${
                  !isExamMode
                    ? "bg-white font-semibold text-slate-800 shadow-sm"
                    : "font-medium text-slate-500 hover:text-slate-700"
                }`}
              >
                {t.practiceMode}
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={isExamMode}
                onClick={() => setIsExamMode(true)}
                className={`min-h-12 flex-1 rounded-lg px-3 py-1.5 text-sm transition-all ${
                  isExamMode
                    ? "bg-white font-semibold text-slate-800 shadow-sm"
                    : "font-medium text-slate-500 hover:text-slate-700"
                }`}
              >
                {t.examMode}
              </button>
            </div>
            {isExamMode && (
              <p className="text-sm font-semibold text-indigo-700">
                {t.examActive}
              </p>
            )}
          </div>

          <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
            {pick(config.badge, language)}
          </span>
          <h3 className="text-3xl font-bold text-slate-800">
            {pick(config.title, language)}
          </h3>
          <p className="text-lg font-normal leading-relaxed text-slate-600">
            {pick(config.instruction, language)}
          </p>

          {!showSuccess && !isExamMode && (
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3">
              <span className="text-2xl" aria-hidden="true">👆</span>
              <p className="text-sm font-semibold leading-snug text-blue-800">
                {t.hint}
              </p>
            </div>
          )}
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-3">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`h-3 rounded-full transition-all duration-300 ${
                i + 1 <= activeDot ? "bg-cyan-800" : "bg-slate-200"
              } ${i + 1 === activeDot && !showSuccess ? "w-8" : "w-3"}`}
            />
          ))}

          {showSuccess && (
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={reset}
                className="flex items-center gap-2 rounded-xl border-2 border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              >
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                {t.repeat}
              </button>
              <button
                type="button"
                onClick={finishMission}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-700"
              >
                {t.finishMission}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Right: phone frame with image hotspots ── */}
      <div className="flex justify-center">
        <div className="relative mx-auto h-[600px] w-[280px] flex-shrink-0 overflow-hidden rounded-[2.5rem] border-[10px] border-slate-800 bg-black shadow-2xl">

          {/* Real screenshot as full background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={step}
            src={hotspot.src}
            alt={t.screenAlt}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          />

          {!showSuccess && isExamMode && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleMissClick();
              }}
              aria-label={t.missClickAria}
              className="absolute inset-0 z-10"
            />
          )}

          {showError && (
            <div
              role="alert"
              className="pointer-events-none absolute left-3 right-3 top-4 z-20 rounded-xl border border-red-200 bg-red-600 px-3 py-2.5 text-center text-xs font-bold leading-snug text-white shadow-lg"
            >
              {examToast}
            </div>
          )}

          {/* Interactive hotspot */}
          {!showSuccess && (
            <button
              type="button"
              style={hotspot.style}
              onClick={(event) => {
                event.stopPropagation();
                handleAction();
              }}
              disabled={loading}
              aria-label={t.hotspotAria}
              className={
                hideHotspot
                  ? "absolute z-50 cursor-pointer opacity-0"
                  : "absolute z-50 animate-pulse cursor-pointer rounded-xl border-4 border-dashed border-yellow-500 bg-yellow-400/40 shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-all duration-300 hover:bg-yellow-400/60 disabled:animate-none disabled:cursor-wait disabled:opacity-40"
              }
            />
          )}

          {/* Success overlay */}
          {showSuccess && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-emerald-700/90 p-6 text-center">
              <CheckCircle2 className="h-16 w-16 text-white" aria-hidden="true" />
              <p className="text-2xl font-extrabold text-white">{t.successTitle}</p>
              <p className="text-sm leading-relaxed text-emerald-100">
                {t.successBody}
              </p>
              <button
                type="button"
                onClick={finishMission}
                className="mt-2 flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"
              >
                {t.finishMission}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
