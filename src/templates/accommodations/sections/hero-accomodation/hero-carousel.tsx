"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface Image {
  url: string;
  alt: string;
}

interface Props {
  images: Image[];
}

export function HeroCarousel({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    loop: true,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="size-full relative">
      <div className="overflow-hidden size-full" ref={emblaRef}>
        <div className="flex size-full touch-pan-x touch-pinch-zoom">
          {images.map((image, index) => (
            <div className="relative size-full shrink-0" key={index}>
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover brightness-80"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DotsButton */}
      <div className="absolute hidden right-4 top-1/2 -translate-y-1/2 sm:flex gap-2 flex-col">
        {scrollSnaps.map((_, index) => (
          <button key={`dot-${index}`} onClick={() => onDotButtonClick(index)}>
            {index === selectedIndex ? (
              <Image
                src="/icons/dot-circle.svg"
                alt={`Dot-${index}`}
                width={18}
                height={18}
                className="fill-white cursor-pointer"
              />
            ) : (
              <Image
                src="/icons/circle.svg"
                alt={`Dot-${index}`}
                width={18}
                height={18}
                className="fill-white cursor-pointer transition-colors opacity-70 hover:opacity-100"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
