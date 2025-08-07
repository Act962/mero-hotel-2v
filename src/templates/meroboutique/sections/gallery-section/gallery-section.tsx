import React from "react";
import { CarouselGallery } from "./carousel-gallery";

export function GallerySection() {
  return (
    <section className="relative  px-4 py-4 md:py-18 flex flex-col items-center justify-center bg-gray-300">
      <div className="relative w-full max-w-6xl text-center mx-auto space-y-18 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
          Galeria de Fotos
        </h2>

        <CarouselGallery />
      </div>
    </section>
  );
}
