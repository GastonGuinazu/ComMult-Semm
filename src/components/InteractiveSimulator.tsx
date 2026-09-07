"use client";

import { useState } from "react";
import { CheckCircle2, RefreshCw } from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

interface StepConfig {
  badge: string;
  title: string;
  instruction: string;
}

const STEP_CONFIG: Record<string, StepConfig> = {
  "1": {
    badge: "PASO 1 DE 5",
    title: "Agregá tu vehículo",
    instruction:
      "Tocá el área resaltada sobre el botón '+ VEHÍCULO' para registrar tu auto en la aplicación.",
  },
  "2": {
    badge: "PASO 2 DE 5",
    title: "Confirmá tu patente",
    instruction:
      "Tu patente ya aparece escrita. Tocá 'AGREGAR' para guardarla en tu cuenta.",
  },
  "3": {
    badge: "PASO 3 DE 5",
    title: "Cargá saldo",
    instruction:
      "Tu auto está registrado. Tocá el botón 'CARGAR SALDO' que aparece arriba a la derecha.",
  },
  "4": {
    badge: "PASO 4 DE 5",
    title: "Pagá de forma segura",
    instruction:
      "Estás en Mercado Pago. Tocá 'PAGAR' abajo para acreditar el saldo en tu cuenta SEMM.",
  },
  "5": {
    badge: "PASO 5 DE 5",
    title: "Iniciá el estacionamiento",
    instruction:
      "Tu saldo fue acreditado. Tocá el botón verde '► INICIAR' para comenzar a estacionar.",
  },
  success: {
    badge: "¡MISIÓN CUMPLIDA!",
    title: "Ya sabés usar la app",
    instruction:
      "Completaste los 5 pasos: registraste tu auto, cargaste saldo e iniciaste el estacionamiento. ¡Estás listo para usar SEMM en la calle sin multas!",
  },
};

interface HotspotConfig {
  step: number;
  src: string;
  style: React.CSSProperties;
  delayMs?: number;
}

const HOTSPOTS: HotspotConfig[] = [
  {
    step: 1,
    src: "/RecienInstalada.jfif",
    style: { top: "20%", left: "1%", width: "48%", height: "6%" },
  },
  {
    step: 2,
    src: "/AlTocarAgregarVehiculo.jfif",
    style: { top: "59.5%", left: "57%", width: "23%", height: "5%" },
    delayMs: 500,
  },
  {
    step: 3,
    src: "/CargarSaldo.jfif",
    style: { top: "10.5%", left: "57%", width: "42%", height: "6%" },
  },
  {
    step: 4,
    src: "/CargarSaldoRedirigMP.jfif",
    style: { top: "86.5%", left: "5%", width: "90%", height: "8%" },
    delayMs: 500,
  },
  {
    step: 5,
    src: "/SaldoCargadoUbicadoDondeSeCobra.jfif",
    style: { top: "19.5%", left: "51%", width: "48%", height: "7%" },
  },
];

export default function InteractiveSimulator() {
  const [step, setStep] = useState<Step>(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const configKey = showSuccess ? "success" : String(step);
  const config = STEP_CONFIG[configKey];
  const hotspot = HOTSPOTS.find((h) => h.step === step)!;

  const handleAction = () => {
    if (loading) return;

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
    setStep(1);
    setShowSuccess(false);
  };

  const activeDot = showSuccess ? 5 : step;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">

      {/* ── Left: instructions ── */}
      <div className="flex flex-1 flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
            {config.badge}
          </span>
          <h3 className="text-3xl font-bold text-slate-800">{config.title}</h3>
          <p className="text-lg font-normal leading-relaxed text-slate-600">
            {config.instruction}
          </p>

          {!showSuccess && (
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3">
              <span className="text-2xl" aria-hidden="true">👆</span>
              <p className="text-sm font-semibold leading-snug text-blue-800">
                Tocá el área resaltada en la pantalla del celular para avanzar.
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
            <button
              type="button"
              onClick={reset}
              className="ml-auto flex items-center gap-2 rounded-xl border-2 border-cyan-800 px-4 py-2 text-sm font-bold text-cyan-800 transition hover:bg-cyan-50"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Repetir
            </button>
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
            alt="Pantalla SEMM"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          />

          {/* Interactive hotspot */}
          {!showSuccess && (
            <button
              type="button"
              style={hotspot.style}
              onClick={handleAction}
              disabled={loading}
              aria-label="Área interactiva"
              className="absolute animate-pulse cursor-pointer rounded-xl border-4 border-dashed border-yellow-500 bg-yellow-400/40 shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-all duration-300 hover:bg-yellow-400/60 disabled:animate-none disabled:cursor-wait disabled:opacity-40"
            />
          )}

          {/* Success overlay */}
          {showSuccess && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-emerald-700/90 p-6 text-center">
              <CheckCircle2 className="h-16 w-16 text-white" aria-hidden="true" />
              <p className="text-2xl font-extrabold text-white">¡Misión Cumplida!</p>
              <p className="text-sm leading-relaxed text-emerald-100">
                Estacionamiento iniciado correctamente
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-2 flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/30"
              >
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                Repetir misión
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
