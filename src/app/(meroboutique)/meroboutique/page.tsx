import { MeroBoutiquePage } from "@/templates/meroboutique";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mero Hotel | Boutique",
  description:
    "No Mero Hotel Boutique, em Barra Grande-PI, o sol se ergue em memórias. Nosso oásis mediterrâneo sussurra conforto com piscinas ou jacuzzis privativas, toques de bem-estar e o abraço do Mero Mar Lounge. Desperte para um delicioso café da manhã!",
  openGraph: {
    title: "Mero Hotel | Boutique",
    description:
      "No Mero Hotel Boutique, em Barra Grande-PI, o sol se ergue em memórias. Nosso oásis mediterrâneo sussurra conforto com piscinas ou jacuzzis privativas, toques de bem-estar e o abraço do Mero Mar Lounge. Desperte para um delicioso café da manhã!",
    url: "https://www.grupomero.com.br/meroboutique",
    siteName: "Mero Hotel | Boutique",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.grupomero.com.br/mero-hotel-boutique.jpg",
        width: 800,
        height: 600,
        alt: "Mero Hotel | Boutique",
      },
    ],
  },
};

export default function MeroBoutique() {
  return <MeroBoutiquePage />;
}
