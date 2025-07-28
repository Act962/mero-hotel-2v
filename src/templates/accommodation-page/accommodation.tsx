import { Accomodation } from "@/types/accomodation";
import { AboutSection, HeroSection } from "./sections";

type AccommodationPageProps = {
  accomodation: Accomodation;
};

export function AccommodationPage({ accomodation }: AccommodationPageProps) {
  return (
    <>
      <HeroSection title={accomodation.name} />
      <AboutSection accomodation={accomodation} />
    </>
  );
}
