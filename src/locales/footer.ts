import type { Language } from "@/contexts/language-context";

interface FooterDictionary {
  developedBy: string;
  name: string;
  year: string;
}

export const footerDictionary: Record<Language, FooterDictionary> = {
  pt: {
    developedBy: "Site desenvolvido por:",
    name: "Igor Casconi",
    year: "2023",
  },
  en: {
    developedBy: "Site developed by:",
    name: "Igor Casconi",
    year: "2023",
  },
};
