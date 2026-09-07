"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "tolerancia",
    question: "¿Tengo tiempo de tolerancia sin pagar?",
    answer:
      "Sí. En la mayoría de las zonas, los primeros 30 minutos son sin cargo. Ojo: igual tenés que tocar \"Iniciar\" en la app apenas te bajás del auto; el sistema calculará la media hora gratis automáticamente.",
  },
  {
    id: "olvidar-finalizar",
    question: "¿Qué pasa si me olvido de frenar el estacionamiento?",
    answer:
      "El sistema va a seguir consumiendo tu saldo hasta que te quedes en $0 o hasta que termine el horario de cobro de esa zona. ¡Acordate de tocar FINALIZAR antes de irte!",
  },
  {
    id: "infracciones",
    question: "¿Cómo sé si un inspector me hizo una multa?",
    answer:
      "Si tocás las tres rayitas arriba a la izquierda en la app (el Menú), vas a ver una sección llamada \"Mis Infracciones\". Ahí aparece al instante si tenés alguna multa.",
  },
  {
    id: "vencimiento-saldo",
    question: "¿El saldo de la app vence?",
    answer:
      "No, el saldo que cargás a través de Mercado Pago no tiene fecha de vencimiento. Queda guardado en tu cuenta vinculado a tu número de teléfono.",
  },
];

export default function ModuleFourFaq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto py-2">
      <p className="text-lg leading-relaxed text-slate-600">
        Tocá una pregunta para ver la respuesta. Elegimos las dudas más
        frecuentes para que no te lleves una multa por un olvido.
      </p>

      <ul className="flex flex-col gap-3">
        {FAQ_ITEMS.map((item) => {
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
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-xl font-bold leading-snug text-slate-900">
                      {item.question}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-cyan-800 shadow-sm">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-lg font-normal leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
