import type { LucideIcon } from "lucide-react";
import type { Localized } from "@/context/LanguageContext";

export type ResourceType = "tutorial" | "faq";

export interface TutorialSlide {
  subtitle: Localized;
  title: Localized;
  description: Localized;
  image?: string;
  imageAlt: Localized;
}

export type FaqCategory = "general" | "troubleshooting";

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
  category?: FaqCategory;
}

export interface ModuleData {
  id: string;
  number: number;
  icon: LucideIcon;
  title: Localized;
  description: Localized;
  resourceType: ResourceType;
  resourceLabel: Localized;
  placeholderText: Localized;
  buttonText?: Localized;
  slides?: TutorialSlide[];
  faqItems?: FaqItem[];
}
