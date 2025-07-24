import { cn } from "@/lib/utils";
import Image from "next/image";

interface Images {
  url: string;
  alt: string;
}

interface AccommodationCardProps {
  title: string;
  description: string;
  images: Images[];
  imagesOnLeft: boolean;
}

export function AccommodationCard({
  title,
  description,
  images,
  imagesOnLeft,
}: AccommodationCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-16 h-auto",
        imagesOnLeft && "md:flex-row-reverse"
      )}
    >
      <Image
        src={images[0].url}
        alt={images[0].alt}
        width={400}
        height={400}
        className="object-cover h-96 w-full md:w-1/3"
      />

      <div className="flex flex-col w-full items-start gap-10">
        <div className="space-y-3">
          <h3 className="uppercase font-medium text-2xl tracking-[4px]">
            {title}
          </h3>
          <p className="text-md font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}
