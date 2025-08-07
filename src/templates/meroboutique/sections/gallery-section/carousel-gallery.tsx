"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-4.jpg",
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
    src: "/image-4.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-3.jpg",
    alt: "Image do Mero",
  },
  {
    src: "/image-4.jpg",
    alt: "Image do Mero",
  },
];

const TWEEN_FACTOR_BASE = 0.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface EmblaCarouselProps {
  className?: string;
}

export const CarouselGallery: React.FC<EmblaCarouselProps> = ({
  className = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__image") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const opacity = numberWithinRange(tweenValue, 0.1, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];

          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
            tweenNode.style.opacity = opacity;
            tweenNode.style.transition =
              "opacity 0.3s ease-out, transform 0.3s ease-out";
          }
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);

    // Cleanup function
    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tweenScale)
        .off("scroll", tweenScale)
        .off("slideFocus", tweenScale);
    };
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor]);

  return (
    <div className={`relative w-full mx-auto ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {images.map((slide, index) => (
            <div className="flex-[0_0_70%] min-w-0 pl-4" key={`slide-${index}`}>
              <div className="embla__slide__image relative h-80 md:h-96 w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-1/2 cursor-pointer rounded-full size-8 bg-white/50 hover:bg-white/80 flex items-center justify-center"
      >
        <ChevronLeft className="size-4 text-gray-600" strokeWidth={4} />
      </button>

      <button
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        aria-label="Next slide"
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-full size-8 bg-white/50 hover:bg-white/80 flex items-center justify-center"
      >
        <ChevronRight className="size-4 text-gray-600" strokeWidth={4} />
      </button>
    </div>
  );
};

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
