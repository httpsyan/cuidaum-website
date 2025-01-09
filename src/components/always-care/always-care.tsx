import { Separator } from "@/ui/separator";
import { Check } from "lucide-react";
import Image from "next/image";
import { BiHealth, BiLogoAirbnb } from "react-icons/bi";

export const AlwaysCare = () => {
  return (
    <section className="bg-[#1C44F2] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <header className="flex items-center flex-col space-y-8 md:space-y-12">
          <div className="bg-[#D9D9D9] w-16 h-16 sm:w-20 sm:h-20 md:w-[6.25rem] md:h-[6.25rem] rounded-2xl flex items-center justify-center">
            <BiLogoAirbnb className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </div>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center text-balance leading-tight">
            Cuidado humanizado e tecnologia integrada para proporcionar o melhor{" "}
            <br /> aos seus entes queridos. Gestão completa dos cuidados com
            idosos <br /> em uma única plataforma.
          </h1>

          <nav className="w-full max-w-4xl">
            <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 md:gap-20">
              <li className="w-full text-center">
                <h2 className="uppercase text-white font-bold text-base hover:text-white/80 transition-colors">
                  saúde e bem estar
                </h2>
              </li>
              <li className="w-full text-center">
                <h2 className="uppercase text-white font-bold text-base hover:text-white/80 transition-colors">
                  Para Viajantes
                </h2>
              </li>
              <li className="w-full text-center">
                <h2 className="uppercase text-white font-bold text-base hover:text-white/80 transition-colors">
                  para explorar
                </h2>
              </li>
            </ul>
          </nav>

          <Separator className="h-px bg-[#6B87FF] w-full " />
        </header>

        <section>
          <div className="flex w-full flex-col md:flex-row justify-between gap-8 md:gap-12 mt-24 md:mt-44">
            <div className="flex flex-col space-y-5 md:max-w-lg">
              <h3 className="uppercase text-[#FFDE69] font-bold leading-6 text-sm md:text-base">
                cuidados personalizados
              </h3>

              <h1 className="font-bold text-[#F8FAFC] text-2xl md:text-3xl lg:text-4xl">
                Tranquilidade para sua família, conforto para seus idosos
              </h1>

              <p className="font-medium text-[#E2E8F0] text-sm md:text-base max-w-lg">
                Nossa plataforma centraliza todas as informações e cuidados
                necessários para seus entes queridos, garantindo atenção
                integral e qualidade de vida.
              </p>

              <ul className="flex flex-col gap-3">
                <li className="gap-2 flex items-center text-[#E2E8F0]">
                  <Check size={24} className="text-[#E2E8F0] flex-shrink-0" />
                  <p>Acompanhamento completo de medicações e consultas</p>
                </li>

                <li className="gap-2 flex items-center text-[#E2E8F0]">
                  <Check size={24} className="text-[#E2E8F0] flex-shrink-0" />
                  <p>
                    Comunicação direta com cuidadores e profissionais de saúde
                  </p>
                </li>

                <li className="gap-2 flex items-center text-[#E2E8F0]">
                  <Check size={24} className="text-[#E2E8F0] flex-shrink-0" />
                  <p>Monitoramento de sinais vitais e relatórios detalhados</p>
                </li>

                <li className="gap-2 flex items-center text-[#E2E8F0]">
                  <Check size={24} className="text-[#E2E8F0] flex-shrink-0" />
                  <p>Suporte 24h para emergências e dúvidas</p>
                </li>
              </ul>
            </div>

            <div className="relative w-full md:max-w-xl">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=3000&auto=format&fit=crop"
                alt="Cuidadora profissional auxiliando pessoa idosa com tablet"
                width={520}
                height={300}
                className="rounded-lg object-cover object-center aspect-[5/4] w-full"
                priority
              />

              <div className="bg-[#D9D9D9] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg">
                <BiHealth className="w-6 h-6 md:w-8 md:h-8" color="#1C44F2" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
