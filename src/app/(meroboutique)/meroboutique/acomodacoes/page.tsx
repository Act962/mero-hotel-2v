import { AccommodationsPage } from "@/templates/accommodations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mero Boutique | Acomodações",
  description:
    "No Mero Hotel Boutique, em Barra Grande-PI, o sol se ergue em memórias. Nosso oásis mediterrâneo sussurra conforto com piscinas ou jacuzzis privativas, toques de bem-estar e o abraço do Mero Mar Lounge. Desperte para um delicioso café da manhã!",
  openGraph: {
    title: "Mero Boutique | Acomodações",
    description:
      "No Mero Hotel Boutique, em Barra Grande-PI, o sol se ergue em memórias. Nosso oásis mediterrâneo sussurra conforto com piscinas ou jacuzzis privativas, toques de bem-estar e o abraço do Mero Mar Lounge. Desperte para um delicioso café da manhã!",
    url: "https://www.grupomero.com.br/meroboutique/acomodacoes",
    siteName: "Mero Boutique | Acomodações",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.grupomero.com.br/mero-hotel-boutique.jpg/meroboutique/select/image-1.jpg",
        width: 800,
        height: 600,
        alt: "Mero Boutique | Acomodações",
      },
    ],
  },
};

export default function Accommodation() {
  return <AccommodationsPage />;
}
