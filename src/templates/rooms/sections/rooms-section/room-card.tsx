import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Images {
  url: string;
  alt: string;
}

interface RoomCardProps {
  title: string;
  description: string;
  link: string;
  images: Images[];
}

export function RoomCard({ title, description, link, images }: RoomCardProps) {
  return (
    <div className="p-8 sm:p-16 w-full bg-gray-300 space-y-10">
      <div className="relative w-full h-72 md:h-96">
        <Image
          src={images[0].url}
          alt={images[0].url}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col w-full items-start gap-10">
        <div className="space-y-6">
          <h3 className="uppercase font-medium text-2xl tracking-[4px]">
            {title}
          </h3>
          <p className="text-sm font-light">{description}</p>
        </div>

        <div className="flex flex-col gap-3 items-start sm:flex-row sm:items-center justify-between w-full">
          <Button variant="ligth" className="uppercase" asChild>
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
