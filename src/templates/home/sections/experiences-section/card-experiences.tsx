import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardExperiencesProps {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  link: string;
}

export default function CardExperiences({
  title,
  description,
  imageUrl,
  alt,
  link,
}: CardExperiencesProps) {
  return (
    <div>
      <div className="relative overflow-hidden group h-64 md:h-72">
        <Image
          src={imageUrl}
          alt={alt}
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          fill
        />
      </div>

      <div className="text-start space-y-3 mt-8">
        <h3 className="font-medium text-xl tracking-[0.6rem] uppercase">
          {title}{" "}
        </h3>
        <p className="text-xs sm:text-sm">{description}</p>
        <Link
          href={link}
          className="uppercase underline underline-offset-3 hover:text-gray-500"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
}
