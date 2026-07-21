import type { Language } from "@/contexts/language-context";

interface PortfolioDictionary {
  sectionTitle: string;
  workDoneLabel: string;
  visitSiteLabel: string;
  moreProjectsCta: string;
}

export const portfolioDictionary: Record<Language, PortfolioDictionary> = {
  pt: {
    sectionTitle: "PORTFÓLIO",
    workDoneLabel: "Trabalho desenvolvido",
    visitSiteLabel: "Acesse aqui o site",
    moreProjectsCta:
      "Para ver mais projetos, clique aqui para acessar meu GitHub",
  },
  en: {
    sectionTitle: "PORTFOLIO",
    workDoneLabel: "Work performed",
    visitSiteLabel: "Visit the site here",
    moreProjectsCta: "To see more projects, click here to access my GitHub",
  },
};
