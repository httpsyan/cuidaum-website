import { Companies, Header, Hero, WhyUs } from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="my-14 flex flex-col space-y-14">
        <Companies />
        <WhyUs />
      </div>
    </main>
  );
}
