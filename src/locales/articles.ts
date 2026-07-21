import type { Language } from "@/contexts/language-context";

interface ArticlesDictionary {
  sectionTitle: string;
  pushArticleImageAlt: string;
  pushArticleTitle: string;
  publishedOnLabel: string;
  publishedOnDate: string;
  publishedOnSource: string;
}

export const articles: Record<Language, ArticlesDictionary> = {
  pt: {
    sectionTitle: "ARTIGOS",
    pushArticleImageAlt: "Artigo Implementando Push Notification",
    pushArticleTitle:
      "Implementando Push Notification (android/iOS) no React Native com Amazon SNS",
    publishedOnLabel: "Publicado em:",
    publishedOnDate: "19 de Julho de 2023",
    publishedOnSource: "Medium - Nav9 Team",
  },
  en: {
    sectionTitle: "ARTICLES",
    pushArticleImageAlt: "Push Notification article",
    pushArticleTitle:
      "Implementing Push Notification (Android/iOS) in React Native with Amazon SNS",
    publishedOnLabel: "Published on:",
    publishedOnDate: "July 19, 2023",
    publishedOnSource: "Medium - Nav9 Team",
  },
};
