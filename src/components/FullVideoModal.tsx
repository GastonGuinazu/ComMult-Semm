"use client";

import { useEffect, useRef, useState } from "react";
import { Video, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FullVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FULL_VIDEO_SRC = "/videos/Podcast_SEMM_final.mp4";

export default function FullVideoModal({ isOpen, onClose }: FullVideoModalProps) {
  const { language } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const t = {
    eyebrow: language === "es" ? "Explicación en video" : "Video explanation",
    title:
      language === "es"
        ? "Guía completa paso a paso"
        : "Full step-by-step guide",
    close: language === "es" ? "Cerrar video" : "Close video",
    comingSoon:
      language === "es"
        ? "El video no está disponible en este momento."
        : "The video is not available right now.",
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
      aria-labelledby="full-video-titulo"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-center gap-4 border-b border-slate-100 px-6 py-5">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wide text-cyan-800">
              {t.eyebrow}
            </p>
            <h2
              id="full-video-titulo"
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

        <div className="flex min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {videoFailed ? (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <Video className="h-10 w-10 text-slate-400" aria-hidden="true" />
              <p className="text-sm font-medium leading-relaxed text-slate-500">
                {t.comingSoon}
              </p>
            </div>
          ) : (
            <video
              controls
              autoPlay
              src={FULL_VIDEO_SRC}
              onError={() => setVideoFailed(true)}
              className="aspect-video w-full rounded-2xl bg-slate-900 shadow-md"
            />
          )}
        </div>
      </div>
    </div>
  );
}
