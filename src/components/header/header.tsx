"use client";

import useScrollToSection from "@/hooks/scroll-to-section";
import { Separator } from "@/ui/separator";
import { motion } from "framer-motion";
import { FaWhatsapp, FaHeart } from "react-icons/fa";

export const Header = () => {
  const scrollToSection = useScrollToSection();
  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="border-b bg-[#F8FBFD] backdrop-blur-sm fixed w-full top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 font-montserrat"
            whileHover={{ scale: 1.02 }}
          >
            <FaHeart className="text-primary text-xl" />
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Cuidar-sempre
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <motion.button
              whileHover="hover"
              variants={linkHoverVariants}
              onClick={() => scrollToSection("initial")}
              className="font-medium text-[#695C68] hover:text-primary"
            >
              Início
            </motion.button>

            <motion.button
              whileHover="hover"
              variants={linkHoverVariants}
              onClick={() => scrollToSection("about")}
              className="font-medium text-[#695C68] hover:text-primary"
            >
              Sobre nós
            </motion.button>

            <motion.button
              whileHover="hover"
              variants={linkHoverVariants}
              onClick={() => scrollToSection("care")}
              className="font-medium text-[#695C68] hover:text-primary"
            >
              Solução
            </motion.button>
            <Separator className="bg-[#CBD5E1] w-[1px] h-7" />
            <motion.a
              href="https://wa.me/seu_numero"
              whileHover={{ scale: 1.05 }}
              className="border-[#00850D] border text-[#00850D] font-bold px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaWhatsapp size={24} />
              Fale conosco
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};
