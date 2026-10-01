"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { QuizQuestion } from "./types";
import { pick, useLanguage } from "@/context/LanguageContext";

interface ModuleQuizProps {
  questions: QuizQuestion[];
  onResult: (passed: boolean) => void;
}

export default function ModuleQuiz({ questions, onResult }: ModuleQuizProps) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  if (questions.length === 0) return null;

  const t = {
    eyebrow: language === "es" ? "Evaluación" : "Evaluation",
    questionCount: (n: number) =>
      language === "es"
        ? `Pregunta ${n} de ${questions.length}`
        : `Question ${n} of ${questions.length}`,
    next: language === "es" ? "Siguiente" : "Next",
    check: language === "es" ? "Corregir evaluación" : "Check evaluation",
  };

  const currentQuestion = questions[currentIndex];
  const selectedOption = answers[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (optionIndex: number) => {
    setAnswers((current) => {
      const next = [...current];
      next[currentIndex] = optionIndex;
      return next;
    });
  };

  const handleAdvance = () => {
    if (isLastQuestion) {
      const passed = questions.every(
        (question, index) => answers[index] === question.correctIndex,
      );
      onResult(passed);
      return;
    }
    setCurrentIndex((index) => index + 1);
  };

  return (
    <div className="flex h-full min-h-0 flex-col items-center justify-center py-4">
      <div className="w-full max-w-xl">
        <p className="text-sm font-bold uppercase tracking-wide text-cyan-800">
          {t.eyebrow} · {t.questionCount(currentIndex + 1)}
        </p>
        <h3 className="mb-6 mt-2 text-2xl font-bold text-slate-800">
          {pick(currentQuestion.question, language)}
        </h3>

        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option, optionIndex) => {
            const isSelected = selectedOption === optionIndex;
            return (
              <button
                key={optionIndex}
                type="button"
                onClick={() => handleSelect(optionIndex)}
                aria-pressed={isSelected}
                className={`flex items-center justify-between gap-3 rounded-xl border-2 px-4 py-3 text-left text-base font-semibold transition ${
                  isSelected
                    ? "border-cyan-800 bg-cyan-50 text-cyan-900"
                    : "border-slate-200 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50/50"
                }`}
              >
                {pick(option, language)}
                {isSelected && (
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-cyan-800"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleAdvance}
          disabled={selectedOption === undefined}
          className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-cyan-800 text-base font-bold text-white transition hover:bg-cyan-900 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {isLastQuestion ? t.check : t.next}
        </button>
      </div>
    </div>
  );
}
