import type { Language } from "@/contexts/language-context";

export interface CareerEntry {
  company: string;
  role: string;
  period: string;
  description: string;
}

type CareerDictionary = Record<Language, CareerEntry[]>;

export const career: CareerDictionary = {
  pt: [
    {
      company: "Nav9.tech",
      role: "Desenvolvedor Mobile & Front-end C-Level",
      period: "setembro/2020 - até o momento",
      description:
        "Atuo como Desenvolvedor Mobile e Front-end, com experiência no desenvolvimento e manutenção de aplicações para Android, iOS, Web e Flutter Web. Na Nav9.tech, desenvolvo soluções utilizando React JS, React Native, Flutter e Next.js, com foco em aplicações escaláveis, performáticas e de alta qualidade. Tenho sólida experiência com TypeScript, Redux, GraphQL e integração com APIs, além de atuar no desenvolvimento de plataformas web e aplicativos móveis. Recentemente, participei do desenvolvimento de um projeto de e-commerce utilizando Flutter para Web e Mobile, contribuindo na implementação de funcionalidades, arquitetura da aplicação, integração de serviços e otimização da experiência do usuário em diferentes plataformas. Também possuo experiência com desenvolvimento nativo Android utilizando Java e Kotlin, além da integração de serviços como Firebase (Analytics, Crashlytics e Cloud Messaging), Amazon SNS e Amazon Pinpoint para monitoramento, notificações e análise de comportamento dos usuários. Tenho forte atuação na automação de processos de entrega contínua (CI/CD), configurando e mantendo pipelines no Bitrise, utilizando Fastlane para automação de builds, assinaturas e publicações de aplicativos nas lojas Google Play e Apple App Store. Além do desenvolvimento, colaboro ativamente com a equipe por meio de code reviews, pair programming, elaboração de documentação técnica, definição de boas práticas e compartilhamento de conhecimento, contribuindo para a evolução contínua dos projetos e do time.",
    },
    {
      company: "Webline Sistemas",
      role: "Analista de Banco de Dados",
      period: "setembro/2019 - agosto/2020",
      description:
        "Responsável pelos dados de novos clientes que a empresa Webline Sistema está recebendo. Esses dados são realizado o tratamento e transferidos para a estrutura do sistema que o cliente adquiriu.",
    },
    {
      company: "Webline Sistemas",
      role: "Analista de Suporte de TI",
      period: "dezembro/2016 - setembro/2019",
      description:
        "Responsável pelo atendimento ao cliente para manutenções/atualizações no sistema adquirido a partir de acesso remoto ou ligações. Iniciado pelo o estágio no final de 2016 e fui efetivado em 2018.",
    },
  ],
  en: [
    {
      company: "Nav9.tech",
      role: "C-Level Mobile & Front-end Developer",
      period: "September/2020 - present",
      description:
        "I work as a Mobile and Front-end Developer, with experience developing and maintaining applications for Android, iOS, Web and Flutter Web. At Nav9.tech, I build solutions using React JS, React Native, Flutter and Next.js, focused on scalable, performant, high-quality applications. I have solid experience with TypeScript, Redux, GraphQL and API integration, and I also work on web platforms and mobile apps. I recently took part in an e-commerce project using Flutter for Web and Mobile, contributing to feature implementation, application architecture, service integration and user experience optimization across different platforms. I also have experience with native Android development using Java and Kotlin, plus integration of services such as Firebase (Analytics, Crashlytics and Cloud Messaging), Amazon SNS and Amazon Pinpoint for monitoring, notifications and user behavior analysis. I play a strong role in continuous delivery automation (CI/CD), setting up and maintaining pipelines on Bitrise, using Fastlane to automate builds, signing and app releases on Google Play and the Apple App Store. Beyond development, I actively collaborate with the team through code reviews, pair programming, technical documentation, defining best practices and knowledge sharing, contributing to the continuous evolution of the projects and the team.",
    },
    {
      company: "Webline Sistemas",
      role: "Database Analyst",
      period: "September/2019 - August/2020",
      description:
        "Responsible for the data of new clients onboarded by Webline Sistemas. This data was processed and transferred into the structure of the system acquired by each client.",
    },
    {
      company: "Webline Sistemas",
      role: "IT Support Analyst",
      period: "December/2016 - September/2019",
      description:
        "Responsible for customer support on maintenance/updates of the acquired system via remote access or phone calls. Started as an intern in late 2016 and was hired as a full employee in 2018.",
    },
  ],
};
