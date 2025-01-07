import { Separator } from "@/ui/separator";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="border-b bg-[#F8FBFD] backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xl">Cuide1</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="font-medium text-[#695C68] hover:text-primary"
            >
              Início
            </Link>
            <Link
              href="#"
              className="font-medium text-[#695C68] hover:text-primary"
            >
              Soluções
            </Link>
            <Link
              href="#"
              className="font-medium text-[#695C68] hover:text-primary"
            >
              Depoimentos
            </Link>
            <Link
              href="#"
              className="font-medium text-[#695C68] hover:text-primary"
            >
              Sobre nós
            </Link>
            <Separator className="bg-[#CBD5E1] w-[1px] h-7" />
            <Link
              href="#"
              className="border-[#00850D] border text-[#00850D] font-bold px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaWhatsapp size={24} />
              Fale conosco
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
