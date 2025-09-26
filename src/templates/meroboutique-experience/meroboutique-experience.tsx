import { Hero } from "@/components/hero";
import { ExperienceSection } from "./sections";
import { Location } from "@/components/location";

export function ExperiencePage() {
  return (
    <>
      <Hero
        title="Experiências"
        image={{
          src: "/meroboutique/experiences.jpg",
          alt: "Quarto com duas camas de solteiro",
        }}
      />
      <ExperienceSection />
      <Location />
    </>
  );
}
