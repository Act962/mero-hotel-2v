"use client";

import { useEffect, useMemo, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const langs = [
  {
    value: "pt",
    label: "Português",
    image: {
      src: "/flag/brazil.svg",
      alt: "Bandeira do Brasil",
    },
  },
  {
    value: "en",
    label: "Inglês",
    image: {
      src: "/flag/united-states.svg",
      alt: "Bandeira dos Estados Unidos",
    },
  },
  {
    value: "fr",
    label: "Francês",
    image: {
      src: "/flag/france.svg",
      alt: "Bandeira da França",
    },
  },
  {
    value: "es",
    label: "Espanhol",
    image: {
      src: "/flag/spain.svg",
      alt: "Bandeira da Espanha",
    },
  },
  {
    value: "it",
    label: "Italiano",
    image: {
      src: "/flag/italy.svg",
      alt: "Bandeira da Itália",
    },
  },
];
export function SelectLanguage() {
  const local = useLocale();
  const t = useTranslations("SelectLang");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Busca o idioma atual com base no locale usando useMemo para otimização
  const currentLang = useMemo(() => {
    return langs.find((lang) => lang.value === local) || langs[0];
  }, [local]);

  const [lang, setLang] = useState(currentLang);

  // Sincroniza o estado lang com mudanças no locale
  useEffect(() => {
    setLang(currentLang);
  }, [currentLang]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex gap-2 items-center cursor-pointer">
        <Image
          src={lang.image.src}
          alt={lang.image.alt}
          width={20}
          height={20}
        />{" "}
        <span className="hidden sm:block"> {t(`${lang.value}`)} </span>
        <ChevronDownIcon className="size-4" />
      </PopoverTrigger>
      <PopoverContent className="w-[140px] p-1">
        {langs.map((lang, index) => {
          return (
            <Link
              href={pathname}
              locale={lang.value}
              key={`${lang.value}-${index}`}
              className="flex gap-2 focus:bg-accent focus:text-accent-foreground cursor-pointer rounded-sm py-1.5 pr-8 pl-2 text-sm"
              onClick={() => {
                setLang(lang);
                setOpen(false);
              }}
            >
              <Image
                src={lang.image.src}
                alt={lang.image.alt}
                width={20}
                height={20}
              />{" "}
              <span> {t(`${lang.value}`)} </span>
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
