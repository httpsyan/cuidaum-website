"use client";

import { Separator } from "@/ui/separator";
import Image from "next/image";
import hypo from "@/assets/companies/hypo.png";
import triodos from "@/assets/companies/triodos.png";
import wlink from "@/assets/companies/wlink.png";
import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export const Companies = () => {
  const logos = [
    hypo,
    triodos,
    wlink,
    hypo,
    triodos,
    wlink,
    hypo,
    triodos,
    wlink,
    hypo,
    triodos,
    wlink,
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.scrollLeft += 1;

    if (
      container.scrollLeft >=
      (container.scrollWidth - container.offsetWidth) / 2
    ) {
      container.scrollLeft = 0;
    }
  });

  return (
    <section className="container mx-auto px-4">
      <h3 className="text-[#2D3775] text-lg font-medium">
        Com confiança dos melhores
      </h3>

      <div ref={containerRef} className="mt-5 overflow-hidden relative">
        <div className="flex gap-24 whitespace-nowrap">
          {[...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt=""
              width={143}
              height={30}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      <Separator className="mt-14 h-[.0625rem] bg-[#CBD5E1]" />
    </section>
  );
};
