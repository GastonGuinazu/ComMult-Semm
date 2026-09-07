import type { ModuleData } from "./types";
import { PlayCircle } from "lucide-react";

interface ModuleCardProps {
  module: ModuleData;
  onOpen: () => void;
}

export default function ModuleCard({ module, onOpen }: ModuleCardProps) {
  const Icon = module.icon;
  const buttonLabel = module.buttonText ?? "Ver Módulo";

  return (
    <article className="flex h-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-sm font-bold uppercase tracking-wide text-cyan-800">
          Módulo {module.number}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold leading-snug text-slate-900">
          {module.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-slate-600">
          {module.description}
        </p>
      </div>

      <span className="inline-flex w-fit items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800">
        {module.resourceLabel}
      </span>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`${buttonLabel}: ${module.title}`}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-cyan-800 text-base font-bold text-white transition hover:bg-cyan-900"
      >
        <PlayCircle className="h-5 w-5" aria-hidden="true" />
        {buttonLabel}
      </button>
    </article>
  );
}
