import { Companies, Header, Hero } from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="mt-14">
        <Companies />
      </div>
    </main>
  );
}
