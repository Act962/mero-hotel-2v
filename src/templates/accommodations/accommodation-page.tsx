import { Accomodation } from "@/types/accomodation";
import {
  AboutSection,
  FeaturesSection,
  GallerySection,
  HeroAccomodation,
} from "./sections";
import { LocationBoutique } from "@/components/location";

type AccommodationPageProps = {
  accomodation: Accomodation;
};

export function AccommodationPage({ accomodation }: AccommodationPageProps) {
  return (
    <>
      <HeroAccomodation title={accomodation.name} />
      <AboutSection accomodation={accomodation} />
      <GallerySection />
      <FeaturesSection accomodation={accomodation} />
      <LocationBoutique />
    </>
  );
}
