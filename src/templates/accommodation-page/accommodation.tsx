import { Accomodation } from "@/types/accomodation";
import { AboutSection, GallerySection, HeroSection } from "./sections";

type AccommodationPageProps = {
  accomodation: Accomodation;
};

export function AccommodationPage({ accomodation }: AccommodationPageProps) {
  return (
    <>
      <HeroSection title={accomodation.name} />
      <AboutSection accomodation={accomodation} />
      <GallerySection />
    </>
  );
}
