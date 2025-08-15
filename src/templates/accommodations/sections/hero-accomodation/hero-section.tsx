import Image from "next/image";
import React from "react";
import { HeroCarousel } from "./hero-carousel";

interface Image {
  url: string;
  alt: string;
}

interface HeroSectionsProps {
  title?: string;
  images: Image[];
}

export function HeroAccomodation({ title, images }: HeroSectionsProps) {
  return (
    <div className="relative h-[70vh] md:h-screen w-full bg-gray-900">
      <HeroCarousel images={images} />
      <div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-xl sm:text-5xl md:text-7xl font-semibold mb-4 uppercase tracking-[3px]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
