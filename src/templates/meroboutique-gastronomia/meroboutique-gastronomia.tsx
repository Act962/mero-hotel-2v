import { Hero } from "@/components/hero";
import { GastronomiaSection } from "./sections";
import { Location } from "@/components/location";

export function GastronomiaPage() {
  return (
    <>
      <Hero
        title="Gastronomia"
        image={{
          src: "/meroboutique/gastronomia.jpg",
          alt: "Gastronomia",
        }}
      />
      <GastronomiaSection />
      <Location />
    </>
  );
}
