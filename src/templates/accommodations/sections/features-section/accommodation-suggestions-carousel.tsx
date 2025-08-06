import { Accomodation } from "@/types/accomodation";
import { Carousel } from "./carousel";

type Props = {
  accomodation: Accomodation;
};

export default function AccommodationSuggestionsCarousel({
  accomodation,
}: Props) {
  return (
    <article className="text-start">
      <h3 className="font-medium text-xl tracking-[0.3rem] uppercase">
        Mais Acomodações
      </h3>

      <Carousel accomodation={accomodation} />
    </article>
  );
}
