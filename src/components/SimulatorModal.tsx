"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import InteractiveSimulator from "./InteractiveSimulator";
import { useLanguage } from "@/context/LanguageContext";

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SimulatorModal({ isOpen, onClose }: SimulatorModalProps) {
  const { language } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const t = {
    eyebrow: language === "es" ? "Simulador interactivo" : "Interactive simulator",
    title:
      language === "es"
        ? "Misión Práctica: Estacioná tu auto"
        : "Practice Mission: Park your car",
    close: language === "es" ? "Cerrar simulador" : "Close simulator",
  };

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="simulator-titulo"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex shrink-0 items-center gap-4 border-b border-slate-100 px-6 py-5">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wide text-cyan-800">
              {t.eyebrow}
            </p>
            <h2
              id="simulator-titulo"
              className="text-xl font-extrabold text-slate-900 sm:text-2xl"
            >
              {t.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <InteractiveSimulator onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
