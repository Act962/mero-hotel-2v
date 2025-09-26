import React from "react";
import { AccommodationSection, GallerySection, HeroSection } from "./sections";
import { Location } from "@/components/location";

export function MeroBoutiquePage() {
  return (
    <>
      <HeroSection />
      <AccommodationSection />
      <GallerySection />
      <Location />
    </>
  );
}
