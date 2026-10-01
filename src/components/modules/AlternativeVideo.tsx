"use client";

import { useState } from "react";
import { Video } from "lucide-react";
import type { AlternativeResource } from "./types";
import { pick, useLanguage } from "@/context/LanguageContext";

interface AlternativeVideoProps {
  resource: AlternativeResource;
  onRetry: () => void;
}

export default function AlternativeVideo({
  resource,
  onRetry,
}: AlternativeVideoProps) {
  const { language } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);

  const t = {
    title:
      language === "es"
        ? "No pasa nada, probemos de otra forma"
        : "No worries, let's try a different way",
    intro:
      language === "es"
        ? "Mirá este video con el mismo contenido del módulo y después volvé a intentar la evaluación."
        : "Watch this video covering the same module content and then try the evaluation again.",
    comingSoon:
      language === "es"
        ? "Video próximamente. Mientras tanto, revisá de nuevo las imágenes del tutorial."
        : "Video coming soon. In the meantime, go back and review the tutorial images.",
    retry: language === "es" ? "Reintentar evaluación" : "Retry evaluation",
  };

  return (
    <div className="flex h-full min-h-0 flex-col items-center justify-center gap-4 py-4 text-center">
      <div className="w-full max-w-xl">
        <h3 className="text-2xl font-bold text-slate-800">{t.title}</h3>
        <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-slate-600">
          {t.intro}
        </p>

        <div className="mt-6">
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
              src={resource.videoSrc}
              onError={() => setVideoFailed(true)}
              className="aspect-video w-full rounded-2xl bg-slate-900 shadow-md"
            />
          )}
          {resource.caption && !videoFailed && (
            <p className="mt-3 text-sm text-slate-500">
              {pick(resource.caption, language)}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onRetry}
          className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-cyan-800 text-base font-bold text-white transition hover:bg-cyan-900"
        >
          {t.retry}
        </button>
      </div>
    </div>
  );
}
