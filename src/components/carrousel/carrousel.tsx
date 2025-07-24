"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  interval?: number; // tempo entre slides (ms)
}

export function ImageCarousel({ images, interval = 3000 }: ImageCarouselProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = images.length;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [totalSlides, interval]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.clientWidth;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-3xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
        >
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      <div className="flex items-center mt-5 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentSlide ? "bg-black" : "bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
