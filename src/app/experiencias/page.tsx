import { HomeLayout } from "@/components/layout/home-layout";
import { ExperiencesPage } from "@/templates/experiences";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grupomero.com.br/"),
  title: "Mero Hotel | Experiências",
  description:
    "Aqui você encontra conforto de verdade. Barra Grande pulsa em um ritmo único, e o Grupo Mero te convida a vivenciar cada batida.",
  icons: {
    icon: "/Logo.png",
  },
  openGraph: {
    title: "Mero Hotel",
    description:
      "Aqui você encontra conforto de verdade. Barra Grande pulsa em um ritmo único, e o Grupo Mero te convida a vivenciar cada batida.",
    url: "https://www.grupomero.com.br",
    siteName: "Mero Hotel",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.grupomero.com.br/mero-hotel-boutique.jpg",
        width: 800,
        height: 600,
        alt: "Mero Hotel",
      },
    ],
  },
};


export default function Experiences() {
  return (
    <HomeLayout>
      <ExperiencesPage />
    </HomeLayout>
  );
}
