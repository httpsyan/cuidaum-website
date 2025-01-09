import { Companies, Header, Hero, WhyUs, AlwaysCare } from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="my-14 flex flex-col space-y-14">
        <Companies />
        <WhyUs />
        <AlwaysCare />
      </div>
    </main>
  );
}
