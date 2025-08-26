import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Images {
  url: string;
  alt: string;
}

interface AccommodationCardProps {
  title: string;
  description: string;
  images: Images[];
  link: string;
  imagesOnLeft: boolean;
}

export function AccommodationCard({
  title,
  description,
  images,
  link,
  imagesOnLeft,
}: AccommodationCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-16 h-auto",
        imagesOnLeft && "md:flex-row-reverse"
      )}
    >
      <div className="relative w-full md:w-1/2 flex-shrink-0">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={400}
          height={400}
          className="object-cover w-full h-64 md:h-96"
        />
      </div>

      <div className="flex flex-col w-full items-start gap-10">
        <div className="space-y-3">
          <h3 className="uppercase font-medium text-2xl tracking-[4px]">
            {title}
          </h3>
          <p className="text-md font-light">{description}</p>
          <Button variant="secondary" asChild>
            <Link prefetch href={link}>
              Visitar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
