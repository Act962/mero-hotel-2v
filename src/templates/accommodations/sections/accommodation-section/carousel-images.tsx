"use client";

import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { useCallback, useEffect, useState } from "react";

interface Images {
  url: string;
  alt: string;
}

interface CarouselImagesProps {
  images: Images[];
}

export const CarouselImages = ({ images }: CarouselImagesProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <article className="relative w-full h-full">
      <div className="overflow-hidden size-full" ref={emblaRef}>
        <div className="flex gap-2 size-full">
          {images.map((image, index) => (
            <div
              className="relative translate-0 shrink-0 grow-0 size-full"
              key={index}
            >
              <Image
                fill
                src={image.url}
                alt={image.alt}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* DotsButton */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          {scrollSnaps.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => onDotButtonClick(index)}
              className="cursor-pointer size-4 rounded-full border-2 border-white flex items-center justify-center"
            >
              {index === selectedIndex ? (
                <div className="size-2 rounded-full bg-white" />
              ) : null}
            </button>
          ))}
        </div>
      )}
    </article>
  );
};

// use DotButton
type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
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
