"use client";

import { useEffect } from "react";
import {
  AboutMe,
  Articles,
  Career,
  Footer,
  Header,
  Skills,
} from "@/components";
import { Portfolio } from "@/components/portfolio";
import { LanguageProvider, useLanguage } from "@/contexts/language-context";

function HomeContent() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <Header />
      <AboutMe />
      <Skills />
      <Career />
      <Portfolio />
      <Articles />
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
