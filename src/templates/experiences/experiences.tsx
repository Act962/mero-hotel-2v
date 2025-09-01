import { experiencesGroupMero } from "@/lib/info";
import {  ExperienceSection, HeroExperiences } from "./sections";

const images = experiencesGroupMero.flatMap((experience) => experience.images)

export function ExperiencesPage() {
  return (
    <>
      <HeroExperiences
        title="Experiências"
        images={images}
      />
      <ExperienceSection />
    </>
  );
}
