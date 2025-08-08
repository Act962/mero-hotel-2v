import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardGroupProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function CardGroup({
  title,
  description,
  imageUrl,
  link,
}: CardGroupProps) {
  return (
    <div className="text-start flex flex-col gap-4">
      <h3 className=" text-lg text-center  md:text-xl font-normal tracking-[0.6rem]">
        {title}
      </h3>

      <Link
        href={link}
        className="relative overflow-hidden group h-60 sm:h-72 md:h-96 w-full"
      >
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          fill
        />
      </Link>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-justify">{description}</p>

        <Separator />
        <Link
          href={link}
          className="uppercase underline underline-offset-3 hover:text-gray-300"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
}
