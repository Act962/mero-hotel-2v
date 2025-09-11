import { ExperienceCarousel } from "@/templates/accommodations/sections/accommodation-section/carousel-images";
import { Experience } from "@/types/experiences";
import Image from "next/image";

export function ExperienceCard({
  title,
  description,
  imageUrl,
  alt,
  slug,
  images,
}: Omit<Experience, "link">) {
  return (
    <div className="p-8 sm:p-16 w-full bg-gray-300 space-y-10" id={slug}>
      <div className="relative w-full h-72 md:h-96">
        {/* <Image src={imageUrl} alt={alt} fill className="object-cover" /> */}
        <ExperienceCarousel images={images} />
      </div>

      <div className="flex flex-col w-full items-start gap-10">
        <div className="space-y-6">
          <h3 className="uppercase font-medium text-2xl tracking-[4px]">
            {title}
          </h3>
          <p className="text-sm font-light whitespace-pre-line w-full max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
