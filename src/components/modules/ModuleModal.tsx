"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { ModuleData } from "./types";
import TutorialCarousel from "./TutorialCarousel";
import ModuleFourFaq from "./ModuleFourFaq";
import ModuleQuiz from "./ModuleQuiz";
import AlternativeVideo from "./AlternativeVideo";
import ModuleObjectives from "./ModuleObjectives";
import { pick, useLanguage } from "@/context/LanguageContext";

type ModuleStage = "content" | "quiz" | "alternative";

interface ModuleModalProps {
  module: ModuleData | null;
  onClose: () => void;
  onComplete: () => void;
}

export default function ModuleModal({
  module,
  onClose,
  onComplete,
}: ModuleModalProps) {
  const { language } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [stage, setStage] = useState<ModuleStage>("content");

  useEffect(() => {
    if (!module) return;

    setStage("content");
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
  }, [module, onClose]);

  if (!module) return null;

  const Icon = module.icon;
  const moduleLabel = language === "es" ? "Módulo" : "Module";
  const closeLabel = language === "es" ? "Cerrar módulo" : "Close module";
  const title = pick(module.title, language);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:max-h-[90vh]">
        <div className="flex shrink-0 items-center gap-4 border-b border-slate-100 px-6 py-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wide text-cyan-800">
              {moduleLabel} {module.number}
            </p>
            <h2
              id="modal-titulo"
              className="text-xl font-extrabold text-slate-900 sm:text-2xl"
            >
              {title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-4 sm:px-8">
          {stage === "content" && module.objectives && module.objectives.length > 0 && (
            <ModuleObjectives objectives={module.objectives} />
          )}
          <div className="flex h-full min-h-0 flex-1 flex-col">
            <ModalContent
              module={module}
              title={title}
              stage={stage}
              setStage={setStage}
              onComplete={onComplete}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalContent({
  module,
  title,
  stage,
  setStage,
  onComplete,
  onClose,
}: {
  module: ModuleData;
  title: string;
  stage: ModuleStage;
  setStage: (stage: ModuleStage) => void;
  onComplete: () => void;
  onClose: () => void;
}) {
  let content = null;

  switch (module.resourceType) {
    case "tutorial": {
      const hasQuiz = (module.quiz?.length ?? 0) > 0;

      if (stage === "content" || !hasQuiz) {
        content = (
          <TutorialCarousel
            slides={module.slides ?? []}
            ariaLabel={title}
            onComplete={() => {
              if (hasQuiz) {
                setStage("quiz");
              } else {
                onComplete();
                onClose();
              }
            }}
          />
        );
      } else if (stage === "quiz") {
        content = (
          <ModuleQuiz
            key={module.id}
            questions={module.quiz ?? []}
            onResult={(passed) => {
              if (passed) {
                onComplete();
                onClose();
              } else if (module.alternativeResource) {
                setStage("alternative");
              }
            }}
          />
        );
      } else if (stage === "alternative" && module.alternativeResource) {
        content = (
          <AlternativeVideo
            resource={module.alternativeResource}
            onRetry={() => setStage("quiz")}
          />
        );
      }
      break;
    }
    case "faq":
      content = <ModuleFourFaq items={module.faqItems ?? []} />;
      break;
  }

  return <div className="h-full min-h-0">{content}</div>;
}
