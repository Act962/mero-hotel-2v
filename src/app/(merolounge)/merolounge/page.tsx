import { MeroLoungeLayout } from "@/components/layout/merolounge-layout";
import { MeroLoungePage } from "@/templates/merolounge";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mero Hotel | Lounge",
  description:
    "No Mero Mar Lounge, em Barra Grande, a gastronomia encontra o charme à beira-mar. Pés na areia, coquetéis e pratos poéticos criam uma imersão sensorial profunda. Perfeito para almoços e pôr do sol, é mais que um restaurante: é a arte de viver com leveza e sabor.",
  openGraph: {
    title: "Mero Hotel | Lounge",
    description:
      "No Mero Mar Lounge, em Barra Grande, a gastronomia encontra o charme à beira-mar. Pés na areia, coquetéis e pratos poéticos criam uma imersão sensorial profunda. Perfeito para almoços e pôr do sol, é mais que um restaurante: é a arte de viver com leveza e sabor.",
    url: "https://mero-hotel.vercel.app/meroboutique",
    siteName: "Mero Hotel | Lounge",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://mero-hotel.vercel.app/mero-hotel-lounge.jpg",
        width: 800,
        height: 600,
        alt: "Mero Hotel | Lounge",
      },
    ],
  },
};

export default function MeroLonge() {
  return (
    <MeroLoungeLayout>
      <MeroLoungePage />
    </MeroLoungeLayout>
  );
}
