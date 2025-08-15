import { allAccomodations } from "@/lib/info";
import { AccommodationPage } from "@/templates/accommodations/accommodation-page";
import { Metadata } from "next";

import { redirect } from "next/navigation";

type AccomodationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: AccomodationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const accomodation = allAccomodations.find(
    (accommodation) => accommodation.slug === slug
  );

  if (!accomodation) {
    return {};
  }

  return {
    title: accomodation.name,
    description: accomodation.description,
    robots: "index, follow",
    openGraph: {
      images: [accomodation.images[0].url],
    },
  };
}

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
