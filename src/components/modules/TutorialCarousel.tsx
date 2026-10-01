"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import type { TutorialSlide } from "./types";
import { pick, useLanguage } from "@/context/LanguageContext";

interface TutorialCarouselProps {
  slides: TutorialSlide[];
  ariaLabel?: string;
  onComplete: () => void;
}

export default function TutorialCarousel({
  slides,
  ariaLabel,
  onComplete,
}: TutorialCarouselProps) {
  const { language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const currentSlide = slides[selectedIndex];

  if (slides.length === 0) return null;

  const t = {
    defaultLabel:
      language === "es" ? "Tutorial paso a paso" : "Step-by-step tutorial",
    carousel: language === "es" ? "carrusel" : "carousel",
    goToStep: (n: number) =>
      language === "es"
        ? `Ir al paso ${n} de ${slides.length}`
        : `Go to step ${n} of ${slides.length}`,
    previous: language === "es" ? "Anterior" : "Previous",
    previousAria:
      language === "es" ? "Ir al paso anterior" : "Go to the previous step",
    next: language === "es" ? "Siguiente" : "Next",
    nextAria: language === "es" ? "Ir al paso siguiente" : "Go to the next step",
    finish: language === "es" ? "Finalizar" : "Finish",
    finishAria:
      language === "es"
        ? "Finalizar el tutorial y pasar a la evaluación"
        : "Finish the tutorial and go to the evaluation",
  };

  const regionLabel = ariaLabel ?? t.defaultLabel;
  const isLastSlide = selectedIndex === slides.length - 1;

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div
        className="min-h-0 flex-1 overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-roledescription={t.carousel}
        aria-label={regionLabel}
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-h-0 min-w-0 flex-[0_0_100%]"
              aria-hidden={index !== selectedIndex}
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="flex h-full flex-col justify-between py-4 pr-0 md:pr-8">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-cyan-800">
                      {pick(slide.subtitle, language)}
                    </p>
                    <h3 className="mb-4 mt-2 text-3xl font-bold text-slate-800">
                      {pick(slide.title, language)}
                    </h3>
                    <p className="text-lg font-normal leading-relaxed text-slate-600">
                      {pick(slide.description, language)}
                    </p>
                  </div>

                  <div className="mt-6 shrink-0">
                    <div className="mb-4 flex items-center gap-2">
                      {slides.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          type="button"
                          onClick={() => scrollTo(dotIndex)}
                          aria-label={t.goToStep(dotIndex + 1)}
                          aria-current={dotIndex === selectedIndex}
                          className={`h-3 rounded-full transition-all ${
                            dotIndex === selectedIndex
                              ? "w-8 bg-cyan-800"
                              : "w-3 bg-slate-300 hover:bg-slate-400"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        aria-label={t.previousAria}
                        className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-cyan-800 text-base font-bold text-cyan-800 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400 disabled:hover:bg-transparent"
                      >
                        <ChevronLeft className="h-5 w-5 shrink-0" aria-hidden="true" />
                        {t.previous}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (isLastSlide) {
                            onComplete();
                            return;
                          }
                          scrollNext();
                        }}
                        disabled={!isLastSlide && !canScrollNext}
                        aria-label={isLastSlide ? t.finishAria : t.nextAria}
                        className={`flex h-14 flex-1 items-center justify-center gap-2 rounded-xl text-base font-bold text-white transition disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 ${
                          isLastSlide
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-cyan-800 hover:bg-cyan-900"
                        }`}
                      >
                        {isLastSlide ? t.finish : t.next}
                        {!isLastSlide && (
                          <ChevronRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex h-full min-h-0 items-center justify-center py-4 md:py-2">
                  {slide.image ? (
                    <img
                      src={slide.image}
                      alt={pick(slide.imageAlt, language)}
                      className="h-full w-auto max-h-[60vh] rounded-2xl object-contain shadow-md md:max-h-[51vh]"
                    />
                  ) : (
                    <div className="flex aspect-[9/16] w-full max-w-sm flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                      <Smartphone
                        className="h-10 w-10 text-slate-400"
                        aria-hidden="true"
                      />
                      <p className="text-sm font-medium leading-relaxed text-slate-500">
                        {pick(slide.imageAlt, language)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {currentSlide
          ? `${pick(currentSlide.subtitle, language)}: ${pick(
              currentSlide.title,
              language,
            )}. ${pick(currentSlide.description, language)}`
          : ""}
      </p>
    </div>
  );
}
