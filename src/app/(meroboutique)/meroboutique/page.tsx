import { MeroBoutiquePage } from "@/templates/meroboutique";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mero Hotel | Boutique",
  description:
    "No Mero Hotel Boutique, em Barra Grande-PI, cada amanhecer é memorável. Nosso refúgio mediterrâneo oferece acomodações com piscinas privativas ou jacuzzis, massagens e hidromassagens térmicas. Desfrute do chá da tarde e do acesso ao Mero Mar Lounge. Atendimento dedicado e café da manhã na varanda opcional elevam a experiência.",
};

export default function MeroBoutique() {
  return <MeroBoutiquePage />;
}
