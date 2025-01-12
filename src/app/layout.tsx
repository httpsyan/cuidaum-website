import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CuidarUm | Encontre Cuidadores de Idosos Profissionais",
  description:
    "Conectamos você aos melhores cuidadores de idosos. Profissionais qualificados, cuidados domiciliares, acompanhantes hospitalares e assistência 24h para idosos. Atendimento humanizado e personalizado para sua família.",
  keywords:
    "cuidador de idosos, cuidadores, assistência ao idoso, cuidados domiciliares, acompanhante de idosos, cuidador profissional, home care, cuidados especializados, acompanhante hospitalar, cuidador 24 horas",
  authors: [{ name: "CuidaUm" }],
  openGraph: {
    title: "CuidarUm | Cuidadores de Idosos Profissionais",
    description:
      "Encontre cuidadores de idosos qualificados para atendimento domiciliar e hospitalar. Cuidados 24h com profissionais experientes.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased bg-[#F8FAFC]`}>
        <Toaster theme="light" richColors closeButton position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
