"use client";

import {
  AboutMe,
  Articles,
  Career,
  Footer,
  Header,
  Skills,
} from "@/components";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
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
