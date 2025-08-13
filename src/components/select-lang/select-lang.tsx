"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

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
      alt: "Bandeira do Reino Unido",
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
    value: "italy",
    label: "Italiano",
    image: {
      src: "/flag/italy.svg",
      alt: "Bandeira da Itália",
    },
  },
];

export function SelectLanguage() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState({
    value: "pt",
    label: "Português",
    image: {
      src: "/flag/brazil.svg",
      alt: "Bandeira do Brasil",
    },
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex gap-2 items-center cursor-pointer">
        <Image
          src={lang.image.src}
          alt={lang.image.alt}
          width={20}
          height={20}
        />{" "}
        <span className="hidden sm:block"> {lang.label} </span>
        <ChevronDownIcon className="size-4" />
      </PopoverTrigger>
      <PopoverContent className="w-[140px] p-1">
        {langs.map((lang, index) => {
          return (
            <div
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
              <span> {lang.label} </span>
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
