import type { Language } from "@/contexts/language-context";

interface SkillsDictionary {
  sectionTitle: string;
  description: string;
}

type SkillsLocale = Record<Language, SkillsDictionary>;

export const skillsLocale: SkillsLocale = {
  pt: {
    sectionTitle: "MINHAS SKILLS",
    description:
      "Tenho sólida experiência com React Native para Android e iOS, " +
      "incluindo arquiteturas white-label (multi flavor/schemes), " +
      "organização de builds em larga escala e automação de CI/CD com " +
      "Fastlane e Bitrise. No front-end, trabalho com React, Next.js, " +
      "TypeScript, Redux e GraphQL, desenvolvendo arquiteturas escaláveis, " +
      "componentização e soluções alinhadas às boas práticas de engenharia. " +
      "Também possuo experiência com Firebase, Amazon SNS, Amazon Pinpoint " +
      "e conhecimentos em desenvolvimento Android nativo, ampliando minha " +
      "visão sobre arquitetura mobile e decisões técnicas. Sou Especialista " +
      "em Flutter pela DIO, fortalecendo minha experiência em " +
      "desenvolvimento multiplataforma, arquitetura e gerenciamento de " +
      "estado.",
  },
  en: {
    sectionTitle: "MY SKILLS",
    description:
      "I have solid experience with React Native for Android and iOS, " +
      "including white-label architectures (multi flavor/schemes), " +
      "large-scale build organization, and CI/CD automation with " +
      "Fastlane and Bitrise. On the front-end, I work with React, Next.js, " +
      "TypeScript, Redux, and GraphQL, developing scalable architectures, " +
      "componentization, and solutions aligned with software engineering " +
      "best practices. I also have experience with Firebase, Amazon SNS, " +
      "Amazon Pinpoint, and knowledge of native Android development, " +
      "broadening my view of mobile architecture and technical decisions. " +
      "I am a Flutter Specialist certified by DIO, strengthening my " +
      "experience in cross-platform development, architecture, and state " +
      "management.",
  },
};
