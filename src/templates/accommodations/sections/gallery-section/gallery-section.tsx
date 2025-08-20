import React from "react";
import { CarouselGallery } from "./carousel-gallery";
import { Accomodation } from "@/types/accomodation";

type Props = {
  accomodation: Accomodation;
};

export function GallerySection({ accomodation }: Props) {
  return (
    <section className="relative min-h-screen px-4 py-8 flex flex-col items-center justify-center bg-gray-300">
      <div className="relative w-full max-w-6xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
          Galeria de Fotos
        </h2>

        <CarouselGallery images={accomodation.images} />
      </div>
    </section>
  );
}
