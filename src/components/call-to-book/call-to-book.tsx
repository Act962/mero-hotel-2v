"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

export function CallToBook() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="fixed bottom-0 text-white w-full h-16 bg-[#4C4C4C] flex items-center justify-between px-4 z-50 md:z-10">
      {/* Descktop */}
      <div className="hidden md:flex w-full max-w-6xl mx-auto items-center justify-between gap-4">
        <h3 className="font-light tracking-[2px] text-sm whitespace-nowrap">
          RESERVE SUA ESTADA
        </h3>
        <div className="flex-1 max-w-md w-full flex items-center justify-between">
          <Popover>
            <PopoverTrigger className="flex items-center gap-2 cursor-pointer">
              <span className="uppercase text-sm font-light">
                Check-in Check-out
              </span>
              <ArrowDown className="size-4" />
            </PopoverTrigger>
            <PopoverContent align="start">
              <div>
                <span>Lista de items</span>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger className="flex items-center gap-2 cursor-pointer">
              <span className="uppercase text-sm font-light">
                Check-in Check-out
              </span>
              <ArrowDown className="size-4" />
            </PopoverTrigger>
            <PopoverContent align="start">
              <div>
                <span>Lista de items</span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Button variant="primary" className="whitespace-nowrap">
          Reservar
        </Button>
      </div>
      {/* Mobile */}
      <div className="md:hidden w-full flex items-center justify-center gap-3">
        <Sheet open={openModal} onOpenChange={setOpenModal}>
          <SheetTrigger className="flex items-center gap-1 cursor-pointer">
            <span className="font-light tracking-[2px] text-sm uppercase">
              Reserve sua estada
            </span>
            <ArrowUp className="size-4 animate-bounce" />
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="min-h-[485px] rounded-tl-2xl rounded-tr-2xl flex flex-col items-center py-8 px-4 bg-background"
          >
            <button
              className="flex items-center uppercase tracking-[3px]  cursor-pointer group"
              onClick={() => setOpenModal(false)}
            >
              <span className="group-hover:text-gray-500">Fechar</span>
              <Image
                src="/icons/angle-down-ligth.svg"
                alt="Angle Down"
                width={24}
                height={24}
                className="group-hover:fill-gray-500"
              />
            </button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
