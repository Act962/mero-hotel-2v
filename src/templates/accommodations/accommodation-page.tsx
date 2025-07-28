import { Accomodation } from "@/types/accomodation";
import { AboutSection, GallerySection, HeroAccomodation } from "./sections";

type AccommodationPageProps = {
  accomodation: Accomodation;
};

export function AccommodationPage({ accomodation }: AccommodationPageProps) {
  return (
    <>
      <HeroAccomodation title={accomodation.name} />
      <AboutSection accomodation={accomodation} />
      <GallerySection />
    </>
  );
}
