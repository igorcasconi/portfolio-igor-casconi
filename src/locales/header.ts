import type { Language } from "@/contexts/language-context";

interface HeaderDictionary {
  name: string;
  role: string;
  bio: string;
  menu: {
    aboutMe: string;
    skills: string;
    career: string;
    portfolio: string;
    articles: string;
  };
}

export const header: Record<Language, HeaderDictionary> = {
  pt: {
    name: "Igor Casconi",
    role: "Desenvolvedor Mobile & Front-end",
    bio: "Sou desenvolvedor mobile e front-end com formação em Bacharelado em Ciência da Computação pela UNIVEM. Com experiência no desenvolvimento de soluções digitais para diversos segmentos de mercado, como educação, saúde, e-commerce e entretenimento.",
    menu: {
      aboutMe: "Sobre mim",
      skills: "Skills",
      career: "Carreira",
      portfolio: "Portfólio",
      articles: "Artigos",
    },
  },
  en: {
    name: "Igor Casconi",
    role: "Mobile & Front-end Developer",
    bio: "I'm a mobile and front-end developer with a Bachelor's degree in Computer Science from UNIVEM. Experienced in building digital solutions across multiple market segments, such as education, healthcare, e-commerce and entertainment.",
    menu: {
      aboutMe: "About me",
      skills: "Skills",
      career: "Career",
      portfolio: "Portfolio",
      articles: "Articles",
    },
  },
};
