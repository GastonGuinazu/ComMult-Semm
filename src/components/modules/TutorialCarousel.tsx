"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import type { TutorialSlide } from "./types";

interface TutorialCarouselProps {
  slides: TutorialSlide[];
  ariaLabel?: string;
}

export default function TutorialCarousel({
  slides,
  ariaLabel = "Tutorial paso a paso",
}: TutorialCarouselProps) {
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

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div
        className="min-h-0 flex-1 overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-roledescription="carrusel"
        aria-label={ariaLabel}
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={`${slide.title}-${index}`}
              className="min-h-0 min-w-0 flex-[0_0_100%]"
              aria-hidden={index !== selectedIndex}
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="flex h-full flex-col justify-between py-4 pr-0 md:pr-8">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-cyan-800">
                      {slide.subtitle}
                    </p>
                    <h3 className="mb-4 mt-2 text-3xl font-bold text-slate-800">
                      {slide.title}
                    </h3>
                    <p className="text-lg font-normal leading-relaxed text-slate-600">
                      {slide.description}
                    </p>
                  </div>

                  <div className="mt-6 shrink-0">
                    <div className="mb-4 flex items-center gap-2">
                      {slides.map((dotSlide, dotIndex) => (
                        <button
                          key={`${dotSlide.title}-${dotIndex}`}
                          type="button"
                          onClick={() => scrollTo(dotIndex)}
                          aria-label={`Ir al paso ${dotIndex + 1} de ${slides.length}`}
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
                        aria-label="Ir al paso anterior"
                        className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-cyan-800 text-base font-bold text-cyan-800 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400 disabled:hover:bg-transparent"
                      >
                        <ChevronLeft className="h-5 w-5 shrink-0" aria-hidden="true" />
                        Anterior
                      </button>
                      <button
                        type="button"
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        aria-label="Ir al paso siguiente"
                        className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-800 text-base font-bold text-white transition hover:bg-cyan-900 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                      >
                        Siguiente
                        <ChevronRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex h-full min-h-0 items-center justify-center py-4">
                  {slide.image ? (
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="h-full w-auto max-h-[60vh] rounded-2xl object-contain shadow-md"
                    />
                  ) : (
                    <div className="flex aspect-[9/16] w-full max-w-sm flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                      <Smartphone
                        className="h-10 w-10 text-slate-400"
                        aria-hidden="true"
                      />
                      <p className="text-sm font-medium leading-relaxed text-slate-500">
                        {slide.imageAlt}
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
        {currentSlide?.subtitle}: {currentSlide?.title}. {currentSlide?.description}
      </p>
    </div>
  );
}
