import { allAccomodations } from "@/lib/accomadations-boutique";
import { AccommodationPage } from "@/templates/accommodation-page";
import { redirect } from "next/navigation";

type AccomodationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AccomodationPage({
  params,
}: AccomodationPageProps) {
  // Aguarda os params antes de usar suas propriedades
  const { slug } = await params;

  const accomodation = allAccomodations.find(
    (accommodation) => accommodation.slug === slug
  );

  if (!accomodation) {
    redirect("/meroboutique/acomodacoes");
  }

  return <AccommodationPage accomodation={accomodation} />;
}
