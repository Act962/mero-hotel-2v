"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "../logo";
import { Separator } from "../ui/separator";
import { SelectLanguage } from "../select-lang/select-lang";
import { Link } from "@/i18n/navigation";

const LINKS = [
  {
    title: "Grupo Mero",
    path: "/",
  },
  {
    title: "Mero Boutique",
    path: "/meroboutique",
  },
  {
    title: "Mero Lounge",
    path: "/merolounge",
  },
  {
    title: "Mero Mar",
    path: "/meromar",
  },
  {
    title: "Experiências",
    path: "/experiencias",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const hanldeScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    hanldeScroll();

    window.addEventListener("scroll", hanldeScroll);

    return () => window.removeEventListener("scroll", hanldeScroll);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-20 px-4 py-5 transition-colors duration-300 text-white",
        isScrolled && "bg-background text-black backdrop-blur border-b"
      )}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Top Navbar */}
        <div className="grid grid-cols-3 items-center w-full">
          <div className="justify-self-start">
            {/* Mobile */}
            <Menu
              className="size-4 md:hidden cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />

            {/* Button Desktop */}
            {isScrolled && (
              <Menu
                className="size-4 hidden md:block cursor-pointer"
                onClick={() => setOpenMenu(true)}
              />
            )}
          </div>
          <div className="justify-self-center">
            <Logo isChange={isScrolled} />
          </div>
          <div className="justify-self-end">
            <SelectLanguage />
          </div>
        </div>
        {/* Bottom Navbar */}
        {!isScrolled && (
          <div className="hidden md:block mt-6">
            <Separator />

            <div className="flex items-center justify-around mt-4">
              {LINKS.map((link, index) => (
                <Link
                  prefetch
                  key={`${link.path}-${index}`}
                  href={link.path}
                  className="uppercase text-sm font-light hover:underline underline-offset-3"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Menu Mobile */}

      <div
        className={`fixed w-full h-screen left-0 top-0 bottom-0 overflow-hidden bg-background transition-all text-black px-4 pt-4 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3>Mero Hotel</h3>
          <X
            className="size-4 cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <Separator className="my-3" />
        <div className="flex flex-col gap-2 mt-4">
          {LINKS.map((link, index) => (
            <Link
              prefetch
              key={`${link.path}-${index}`}
              href={link.path}
              onClick={() => setOpenMenu(false)}
              className="uppercase text-sm font-light hover:underline underline-offset-3"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
