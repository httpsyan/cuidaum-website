"use client";

import Image from "next/image";
import examples from "@/assets/home/examples.png";
import hero from "@/assets/home/hero-background.png";
import { ChevronDown } from "lucide-react";
import useScrollToSection from "@/hooks/scroll-to-section";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Hero = () => {
  const scrollToSection = useScrollToSection();
  const { ref, isInView } = useScrollAnimation();

  return (
    <>
      <section
        className="relative"
        aria-label="Seção principal de monitoramento de idosos"
        id="initial"
        ref={ref}
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-8 md:py-40">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <motion.div
                className="max-w-[641px] space-y-4 md:space-y-6 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="uppercase text-[#1C44F2] font-bold text-sm md:text-base">
                  Monitore seus idosos
                </h2>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#0D2056] leading-tight">
                  Se preocupe menos e proteja quem você{" "}
                  <span className="text-[#415EFF]">ama.</span>
                </h1>

                <p className="text-[#475569] text-base md:text-lg leading-relaxed font-medium">
                  Acompanhe a saúde e o bem-estar de quem você ama, onde quer
                  que você esteja, com a ajuda da tecnologia.
                </p>

                <div className="relative inline-block">
                  <button
                    className="bg-[#1C44F2] text-white px-5 md:px-7 py-4 md:py-5 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#1636c7] transition-colors"
                    aria-label="Saiba mais sobre nosso serviço de monitoramento"
                    onClick={() => scrollToSection("footer")}
                  >
                    Acompanhe fácil!
                  </button>
                  <div className="absolute rotate-60 -right-28 hidden lg:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="53"
                      height="70"
                      viewBox="0 0 53 70"
                      fill="none"
                    >
                      <path
                        d="M11.5225 12.4099C31.5249 25.58 42.2834 40.3182 41.8702 68.9431"
                        stroke="#BBB2FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16.1432 7.45619C12.8151 6.48874 9.71286 6.17829 5.9485 6.27241C5.23928 6.29011 2.52628 5.93136 1.75343 6.4072C1.35831 6.65251 8.21414 17.1087 8.9281 18.3643"
                        stroke="#BBB2FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src={examples.src}
                  alt="Exemplos de monitoramento de idosos"
                  width={600}
                  height={700}
                  priority
                  className="max-w-full h-auto"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <button
          className="bg-white absolute rounded-full w-10 h-10 shadow-lg flex items-center justify-center -bottom-5 left-1/2 transform -translate-x-1/2 hover:bg-gray-50 transition-colors"
          aria-label="Rolar para próxima seção"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" color="#1C44F2" />
        </button>
      </section>
    </>
  );
};
