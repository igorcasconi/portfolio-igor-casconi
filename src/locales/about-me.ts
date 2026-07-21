import type { Language } from "@/contexts/language-context";

export interface AboutMeDictionary {
  title: string;
  nameLabel: string;
  name: string;
  ageLabel: string;
  cityLabel: string;
  city: string;
  nationalityLabel: string;
  nationality: string;
  emailLabel: string;
  email: string;
  workModeLabel: string;
  workMode: string;
  freelanceLabel: string;
  freelanceStatus: string;
  experienceYearsText: string;
  developmentYearsText: string;
  professionalProjectsText: string;
  personalProjectsText: string;
}

export const aboutMe: Record<Language, AboutMeDictionary> = {
  pt: {
    title: "SOBRE MIM",
    nameLabel: "Nome",
    name: "Igor Casconi de Oliveira",
    ageLabel: "Idade",
    cityLabel: "Cidade/Estado",
    city: "Marília/SP",
    nationalityLabel: "Nacionalidade",
    nationality: "Brasileiro",
    emailLabel: "E-mail",
    email: "igor492@gmail.com",
    workModeLabel: "Modo de trabalho atual",
    workMode: "Remoto",
    freelanceLabel: "Freelance",
    freelanceStatus: "Disponível",
    experienceYearsText: "Anos de experiência na área",
    developmentYearsText: "Anos trabalhando como desenvolvedor",
    professionalProjectsText: "Projetos profissionais participados",
    personalProjectsText: "Projetos pessoais",
  },
  en: {
    title: "ABOUT ME",
    nameLabel: "Name",
    name: "Igor Casconi de Oliveira",
    ageLabel: "Age",
    cityLabel: "City/State",
    city: "Marília/SP",
    nationalityLabel: "Nationality",
    nationality: "Brazilian",
    emailLabel: "E-mail",
    email: "igor492@gmail.com",
    workModeLabel: "Current work mode",
    workMode: "Remote",
    freelanceLabel: "Freelance",
    freelanceStatus: "Available",
    experienceYearsText: "Years of experience in the field",
    developmentYearsText: "Years working as a developer",
    professionalProjectsText: "Professional projects contributed to",
    personalProjectsText: "Personal projects",
  },
};
