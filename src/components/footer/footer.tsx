import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="w-full flex items-start justify-between flex-col md:flex-row space-y-8 md:space-y-0">
          {/* Logo and Social Media */}
          <div className="space-y-4 md:space-y-6 w-full md:w-auto">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="CuidaUm Logo"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm md:text-base max-w-xs">
              CuidaUm - Cuidando de quem você ama com expertise e dedicação
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/cuidaum"
                className=" transition-colors"
              >
                <Instagram className="text-gray-600 h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </div>
          </div>

          <div className="space-y-4 w-full md:w-auto">
            <h3 className="text-base md:text-lg font-semibold text-gray-900">
              App CuidaUm
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="#"
                className="inline-flex items-center text-sm md:text-base text-gray-600 transition-colors"
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  alt="App Store"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Em breve na App Store
              </Link>
              <Link
                href="#"
                className="inline-flex items-center text-sm md:text-base text-gray-600 transition-colors"
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  alt="Google Play"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Em breve no Google Play
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-xs md:text-sm text-gray-600">
              © 2025 CuidaUm | Rio de janeiro - RJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
