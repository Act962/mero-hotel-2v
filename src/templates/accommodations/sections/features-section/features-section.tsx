import AccommodationSuggestionsCarousel from "./accommodation-suggestions-carousel";
import { FeaturesAccordion } from "./feature-accordion";

export function FeaturesSection() {
  return (
    <section className="relative px-4 py-32 flex flex-col items-center justify-center bg-black text-white">
      <div className="relative w-full max-w-6xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
          Características
        </h2>

        <FeaturesAccordion />
        <AccommodationSuggestionsCarousel />
      </div>
    </section>
  );
}
