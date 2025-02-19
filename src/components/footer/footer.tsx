"use client";

import Image from "next/image";
import playstore from "@/assets/companies/playstore.png";
import applestore from "@/assets/companies/apple.png";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaHeart, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { LeadForm } from "../lead-form";

export const Footer = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.footer
      className="w-full border-t py-8 md:py-12"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      aria-labelledby="footer-heading"
      id="footer"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:justify-between">
          <section className="flex flex-col gap-6 max-w-md">
            <div className="flex items-center space-x-2">
              <FaHeart className="text-primary text-xl" />
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Cuidar-sempre
              </span>
            </div>
            <p className="text-[#6F6C90] text-base md:text-lg text-balance leading-relaxed">
              Conectamos pacientes a profissionais de saúde qualificados para um
              atendimento personalizado e de qualidade.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Image
                src={applestore.src}
                width={120}
                height={44}
                alt="Disponível na App Store"
                className="w-32 h-auto"
              />
              <Image
                src={playstore.src}
                width={120}
                height={44}
                alt="Disponível no Google Play"
                className="w-32 h-auto"
              />
            </div>
          </section>

          <section className="flex flex-col gap-8 w-full lg:w-[32.25rem]">
            <div className="text-pretty">
              <h2 className="text-[#27272A] font-semibold text-xl md:text-3xl mb-3">
                Seja um dos primeiros a descobrir o cuidar-sempre!
              </h2>
              <p className="text-[#6F6C90] text-base ">
                Cadastre-se para receber novidades e condições especiais de
                lançamento
              </p>
            </div>

            <LeadForm />
          </section>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200">
          <p className="text-[#6F6C90] text-sm md:text-base order-2 md:order-1">
            © {new Date().getFullYear()} Cuidar-sempre | Rio de Janeiro - RJ
          </p>

          <div className="flex items-center gap-4 order-1 md:order-2">
            <Link
              href="https://instagram.com/cuidaum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="h-5 w-5 md:h-6 md:w-6" color="#6F6C90" />
            </Link>
            <Link
              href="https://instagram.com/cuidaum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" color="#6F6C90" />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
