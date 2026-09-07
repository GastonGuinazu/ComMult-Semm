"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { ModuleData } from "./types";
import TutorialCarousel from "./TutorialCarousel";
import ModuleFourFaq from "./ModuleFourFaq";

interface ModuleModalProps {
  module: ModuleData | null;
  onClose: () => void;
}

export default function ModuleModal({ module, onClose }: ModuleModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!module) return;

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
      <div className="flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex shrink-0 items-center gap-4 border-b border-slate-100 px-6 py-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wide text-cyan-800">
              Módulo {module.number}
            </p>
            <h2
              id="modal-titulo"
              className="text-xl font-extrabold text-slate-900 sm:text-2xl"
            >
              {module.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar módulo"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-4 sm:px-8">
          <div className="flex h-full min-h-0 flex-1 flex-col">
            <ModalContent module={module} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalContent({ module }: { module: ModuleData }) {
  let content = null;

  switch (module.resourceType) {
    case "tutorial":
      content = (
        <TutorialCarousel
          slides={module.slides ?? []}
          ariaLabel={module.title}
        />
      );
      break;
    case "faq":
      content = <ModuleFourFaq />;
      break;
  }

  return <div className="h-full min-h-0">{content}</div>;
}
