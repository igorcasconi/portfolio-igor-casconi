import { AboutMe, Career, Header, Skills } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <Header />
      <AboutMe />
      <Skills />
      <Career />
    </main>
  );
}
