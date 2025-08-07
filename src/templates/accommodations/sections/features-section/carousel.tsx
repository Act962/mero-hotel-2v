"use client";

import { Button } from "@/components/ui/button";
import { allAccomodations } from "@/lib/accomadations-boutique";
import { Accomodation } from "@/types/accomodation";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  accomodation: Accomodation;
};

export function Carousel({ accomodation }: Props) {
  const [accomodations, setAccomodations] = useState<Accomodation[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (!accomodation.slug) {
      return;
    }
    const filteredAccomodation = allAccomodations.filter(
      (item) => item.slug !== accomodation.slug
    );

    setAccomodations(filteredAccomodation);
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-full mt-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {accomodations.map((item) => (
            <div
              className="translate-0 shrink-0 grow-0 w-full md:w-1/2"
              key={item.slug}
            >
              <div className="h-93 relative">
                <Image
                  src={item.images[0].url}
                  alt={item.slug}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-white uppercase mt-8 mb-2 tracking-widest text-2xl">
                {item.name}
              </h3>
              <Link
                href={item.link}
                className="uppercase underline underline-offset-3 hover:text-gray-300 text-sm"
              >
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-8">
        <Button onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
          <ArrowLeft />
        </Button>
        <Button onClick={onNextButtonClick} disabled={nextBtnDisabled}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

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
