import Image from "next/image";
import logo from "@/assets/companies/hypo.png";
import playstore from "@/assets/companies/playstore.png";
import applestore from "@/assets/companies/apple.png";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="w-full border-t py-8 md:py-12"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:justify-between">
          {/* Brand Section */}
          <section className="flex flex-col gap-6 max-w-md">
            <Link href="/" className="inline-block">
              <Image
                src={logo.src}
                width={130}
                height={50}
                alt="CuidaUm Logo"
                className="w-auto h-10"
              />
            </Link>
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
                Seja um dos primeiros a conhecer o CuidaUm!
              </h2>
              <p className="text-[#6F6C90] text-base ">
                Cadastre-se para receber novidades e condições especiais de
                lançamento
              </p>
            </div>

            <form className="flex flex-col gap-4">
              <Input
                placeholder="Nome completo"
                className="h-12"
                aria-label="Nome completo"
                required
              />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="h-12"
                aria-label="E-mail"
                required
              />
              <Input
                type="tel"
                placeholder="WhatsApp com DDD"
                className="h-12"
                aria-label="WhatsApp"
                required
              />

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione o seu perfil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="patient">Sou paciente</SelectItem>
                    <SelectItem value="professional">
                      Sou profissional de saúde
                    </SelectItem>
                    <SelectItem value="company">
                      Represento uma empresa
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className="h-12 mt-2 bg-[#1C44F2] hover:bg-[#1C44F2]/80"
              >
                Quero fazer parte dessa transformação
              </Button>
            </form>
          </section>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200">
          <p className="text-[#6F6C90] text-sm md:text-base order-2 md:order-1">
            © 2024 CuidaUm | Rio de Janeiro - RJ
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
    </footer>
  );
};
