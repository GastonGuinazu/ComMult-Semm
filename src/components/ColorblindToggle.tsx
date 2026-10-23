"use client";

import { Glasses } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useColorblind } from "@/context/ColorblindContext";

interface ColorblindToggleProps {
  /** "full" muestra el texto junto al ícono (navbar); "icon" lo oculta (modales con poco espacio). */
  variant?: "full" | "icon";
  className?: string;
}

export default function ColorblindToggle({
  variant = "full",
  className = "",
}: ColorblindToggleProps) {
  const { language } = useLanguage();
  const { colorblindMode, toggleColorblindMode } = useColorblind();

  const t = {
    label: language === "es" ? "Modo daltónico" : "Colorblind mode",
    on: language === "es" ? "Desactivar modo daltónico" : "Turn off colorblind mode",
    off: language === "es" ? "Activar modo daltónico" : "Turn on colorblind mode",
  };

  const sizeClasses = variant === "icon" ? "h-11 w-11 justify-center px-0" : "h-11 px-4";

  return (
    <button
      type="button"
      onClick={toggleColorblindMode}
      aria-pressed={colorblindMode}
      aria-label={colorblindMode ? t.on : t.off}
      title={t.label}
      className={`flex shrink-0 items-center gap-2 rounded-full border-2 font-bold transition ${sizeClasses} ${
        colorblindMode
          ? "border-cyan-800 bg-cyan-800 text-white hover:bg-cyan-900"
          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-200 hover:bg-white hover:text-cyan-800"
      } ${className}`}
    >
      <Glasses className="h-5 w-5 shrink-0" aria-hidden="true" />
      {variant === "full" && <span className="hidden text-sm sm:inline">{t.label}</span>}
    </button>
  );
}
