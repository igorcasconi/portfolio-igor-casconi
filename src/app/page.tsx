import { AboutMe, Header } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen w-100 flex-col items-center ">
      <Header />
      <AboutMe />
    </main>
  );
}
