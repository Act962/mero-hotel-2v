"use client";

import useEmbleCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

const images = [
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
];

export function CarouselGallery() {
  const [emblaRef, embleApi] = useEmbleCarousel({
    align: "center",
    loop: false,
    slidesToScroll: 3,
  });

  const scrollPrev = useCallback(() => {
    if (!embleApi) return;
    embleApi.scrollPrev();
  }, [embleApi]);

  const scrollNext = useCallback(() => {
    if (!embleApi) return;
    embleApi.scrollNext();
  }, [embleApi]);

  return (
    <div
      className="relative embla w-full mt-12 h-72 overflow-hidden "
      ref={emblaRef}
    >
      <div className="embla__container h-full flex gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="embla__slide flex items-center justify-center min-w-0 w-full grow-0 shrink-0 basis-full relative md:w-1/3"
          >
            <Image src={image.src} alt={image.alt} fill />
          </div>
        ))}
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-0 rounded-full p-3 -translate-y-1/2 translate-x-1/2 top-1/2 z-20 bg-white cursor-pointer "
      >
        <ChevronLeft className="!text-transparent" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 rounded-full p-3 -translate-y-1/2 translate-x-1/2 top-1/2 z-20 bg-white cursor-pointer"
      >
        <ChevronRight className="text-black" />
      </button>
    </div>
  );
}
