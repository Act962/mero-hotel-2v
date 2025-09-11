import { experiencesGroupMero } from "@/lib/info";
import { ExperienceCard } from "./experience-card";

const rooms = experiencesGroupMero;

export function ExperienceSection() {
  return (
    <section className="min-h-screen h-auto py-20 md:py-36 px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-24">
        {rooms.map((room, index) => {
          return (
            <ExperienceCard
              key={`${room.title}-${index}`}
              title={room.title}
              description={room.description}
              imageUrl={room.imageUrl}
              images={room.images}
              alt={room.alt}
              flag={room.flag}
              slug={room.slug}
            />
          );
        })}
      </div>
    </section>
  );
}
