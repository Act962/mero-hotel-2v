import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-24 bg-black text-white px-4 sm:px-8 ">
      {/* Container */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
          {/* 1º Section */}
          <div className="flex flex-col gap-4">
            <div className="space-y-3 text-center sm:text-start">
              <h3 className="font-medium text-sm uppercase tracking-[0.3rem]">
                Mero Hotel Boutique
              </h3>
              <p className="text-xs font-light underline underline-offset-3 text-gray-300">
                R. das Flores, 300 - Barra Grande, <br />
                Cajueiro da Praia - PI, 64222-000
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-start">
              <h3 className="font-medium text-sm uppercase tracking-[0.3rem]">
                Mero Hotel Lounge
              </h3>
              <p className="text-xs font-light underline underline-offset-3 text-gray-300">
                R. das Flores, 300 - Barra Grande, <br />
                Cajueiro da Praia - PI, 64222-000
              </p>
            </div>
            <div className="space-y-3 text-center sm:text-start">
              <h3 className="font-medium text-sm uppercase tracking-[0.3rem]">
                Mero Hotel Mar
              </h3>
              <p className="text-xs font-light underline underline-offset-3 text-gray-300">
                R. das Flores, 300 - Barra Grande, <br />
                Cajueiro da Praia - PI, 64222-000
              </p>
            </div>
          </div>

          {/* 2º Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0.5 text-center sm:text-end">
              <Link
                href="/termos-e-condicoes-de-uso"
                className="text-sm hover:underline underline-offset-3"
              >
                Termos e Condições de Uso
              </Link>
              <Link
                href="/politicas-de-hospedagem"
                className="text-sm hover:underline underline-offset-3"
              >
                Políticas de Hospedagem
              </Link>
              <Link
                href="/politicas-de-privacidade"
                className="text-sm hover:underline underline-offset-3"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/politicas-de-cookies"
                className="text-sm hover:underline underline-offset-3"
              >
                Políticas de Cookies
              </Link>

              <div className="flex items-center gap-x-1 justify-center sm:justify-end mt-5">
                <Link href="/">
                  <Image
                    src="/icons/instagram-light.svg"
                    alt="Instagram"
                    height={24}
                    width={24}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icons/spotify-ligth.svg"
                    alt="Instagram"
                    height={24}
                    width={24}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/icons/linkedin-ligth.svg"
                    alt="Instagram"
                    height={24}
                    width={24}
                  />
                </Link>
              </div>
            </div>

            <div className="max-w-[210px] text-center sm:text-end space-y-2 mt-8">
              <p className="text-xs">
                Inscreva-se na Newsletter Mero para receber as nossas novidades
              </p>
              <div className="h-9 bg-[#4C4C4C] px-3 flex items-center gap-1 w-full">
                <input
                  type="text"
                  placeholder="Seu e-mail"
                  className="w-full h-full min-w-0 border-none focus:outline-none focus-visible:ring-0 placeholder:text-[#727272]"
                />
                <button>
                  <Send className="size-6 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator />
        <div className="w-full flex items-center justify-between">
          <span className="text-xs text-gray-400">
            Copyright &copy; 2025 Mero
          </span>
          <span className="text-xs text-gray-400">Portal de privacidade</span>
        </div>
      </div>
    </footer>
  );
}
