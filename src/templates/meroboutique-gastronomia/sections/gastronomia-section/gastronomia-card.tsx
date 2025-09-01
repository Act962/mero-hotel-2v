import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CarouselImages } from "./carousel-images";

interface Images {
  url: string;
  alt: string;
}

interface AccommodationCardProps {
  title: string;
  description: string;
  link: string;
  images: Images[];
  imagesOnLeft: boolean;
}

export function GastronomiaCard({
  title,
  description,
  link,
  images,
  imagesOnLeft,
}: AccommodationCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-16",
        imagesOnLeft && "md:flex-row-reverse"
      )}
    >
      <div className="relative shrink-0 w-full h-80 md:w-1/3">
        <CarouselImages images={images} />
      </div>
      <div className="flex flex-col w-full items-start gap-10">
        <div className="space-y-3">
          <h3 className="uppercase font-medium text-2xl tracking-[4px]">
            {title}
          </h3>
          <p className="text-md font-light">{description}</p>
        </div>

        {/* <Link
          prefetch
          href={link}
          className="ml-auto uppercase tracking-[3px] hover:underline underline-offset-3 cursor-pointer text-sm md:text-md"
        >
          Saiba mais
        </Link> */}
      </div>
    </div>
  );
}
