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
  link: string;
  images: Images[];
  imagesOnLeft: boolean;
}

export function AccommodationCard({
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
      <div className="relative shrink-0 w-full h-72 md:w-1/3">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col w-full items-start gap-10">
        <div className="space-y-3">
          <h3 className="uppercase font-medium text-2xl tracking-[4px]">
            {title}
          </h3>
          <p className="text-md font-light">{description}</p>
        </div>

        <div className="flex items-center justify-between w-full">
          <Button variant="secondary" className="uppercase" asChild>
            <Link href={link}>Reserve agora</Link>
          </Button>
          <span className="uppercase tracking-[3px] hover:underline underline-offset-3 cursor-pointer text-sm md:text-md">
            Saiba mais
          </span>
        </div>
      </div>
    </div>
  );
}
