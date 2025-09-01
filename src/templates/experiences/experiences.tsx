import { experiencesGroupMero } from "@/lib/info";
import {  ExperienceSection, HeroExperiences } from "./sections";

const images = experiencesGroupMero.map((experience) => {
  return {
    url: experience.imageUrl,
    alt: experience.title
  }
})

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
