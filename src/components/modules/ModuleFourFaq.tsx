"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { FaqItem } from "./types";
import { pick, useLanguage } from "@/context/LanguageContext";

interface ModuleFourFaqProps {
  items: FaqItem[];
}

function FaqAccordionList({
  items,
  openId,
  onToggle,
}: {
  items: FaqItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  const { language } = useLanguage();

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        const Icon = isOpen ? ChevronUp : ChevronDown;

        return (
          <li key={item.id}>
            <article
              className={`rounded-2xl border bg-slate-50 transition ${
                isOpen
                  ? "border-cyan-200 shadow-sm"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <h4 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => onToggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-xl font-bold leading-snug text-slate-900">
                    {pick(item.question, language)}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-cyan-800 shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </button>
              </h4>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-lg font-normal leading-relaxed text-slate-600">
                    {pick(item.answer, language)}
                  </p>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

export default function ModuleFourFaq({ items }: ModuleFourFaqProps) {
  const { language } = useLanguage();
  const generalItems = items.filter(
    (item) => (item.category ?? "general") === "general",
  );
  const troubleshootingItems = items.filter(
    (item) => item.category === "troubleshooting",
  );
  const [openId, setOpenId] = useState<string | null>(
    generalItems[0]?.id ?? items[0]?.id ?? null,
  );

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const t = {
    intro:
      language === "es"
        ? "Tocá una pregunta para ver la respuesta. Elegimos las dudas más frecuentes para que no te lleves una multa por un olvido."
        : "Tap a question to see the answer. We picked the most common doubts so you don't get a fine over a simple slip.",
    general:
      language === "es"
        ? "💡 Uso General de la App"
        : "💡 General App Usage",
    troubleshooting:
      language === "es"
        ? "⚠️ Solución de Problemas"
        : "⚠️ Troubleshooting",
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto py-2">
      <p className="text-lg leading-relaxed text-slate-600">{t.intro}</p>

      <section aria-labelledby="faq-general-titulo">
        <h3
          id="faq-general-titulo"
          className="mb-3 text-lg font-extrabold text-slate-800"
        >
          {t.general}
        </h3>
        <FaqAccordionList
          items={generalItems}
          openId={openId}
          onToggle={toggle}
        />
      </section>

      {troubleshootingItems.length > 0 && (
        <>
          <hr className="my-6 border-slate-200" />
          <section aria-labelledby="faq-troubleshooting-titulo">
            <h3
              id="faq-troubleshooting-titulo"
              className="mb-3 text-lg font-extrabold text-slate-800"
            >
              {t.troubleshooting}
            </h3>
            <FaqAccordionList
              items={troubleshootingItems}
              openId={openId}
              onToggle={toggle}
            />
          </section>
        </>
      )}
    </div>
  );
}
