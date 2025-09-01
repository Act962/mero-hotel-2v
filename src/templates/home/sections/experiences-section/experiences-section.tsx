import { Separator } from "@/components/ui/separator";
import CardExperiences from "./card-experiences";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { experiencesGroupMero } from "@/lib/info";

const experiences = experiencesGroupMero.slice(0, 4)

export function ExperiencesSection() {
  const t = useTranslations("HeroPage.Experiences");
  return (
    <section className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
          {t("title")}
        </h2>
        <Separator className="!h-px rounded-full bg-black" />

        {/* Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-8 gap-12">
          {experiences.map((experience, index) => (
            <CardExperiences
              key={`${experience.title}-${index}`}
              title={t(`${experience.flag}.title`)}
              description={t(`${experience.flag}.description`)}
              slug={experience.slug}
              imageUrl={experience.imageUrl}
              alt={experience.alt}
              link={experience.link}
              linkLegend={t(`${experience.flag}.link`)}
            />
          ))}
        </div>

        <Link
          prefetch
          href="/experiencias"
          className="text-sm sm:text-base uppercase tracking-[0.2rem] font-medium hover:underline underline-offset-3"
        >
          {t("link")}
        </Link>
      </div>
    </section>
  );
}
