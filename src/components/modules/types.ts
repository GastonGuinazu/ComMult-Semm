import type { LucideIcon } from "lucide-react";

export type ResourceType = "tutorial" | "faq";

export interface TutorialSlide {
  subtitle: string;
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
}

export interface ModuleData {
  id: string;
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  resourceType: ResourceType;
  resourceLabel: string;
  placeholderText: string;
  buttonText?: string;
  slides?: TutorialSlide[];
}
