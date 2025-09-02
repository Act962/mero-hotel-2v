import { MeroMarLayout } from "@/components/layout/meromar-layout";
import { MeroMarPage } from "@/templates/meromar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mero | Mar Hotel",
  description:
    "O Mero Mar Hotel é o novo horizonte do Grupo Mero em Barra Grande. Com arquitetura contemporânea e vistas para o mar, oferece puro conforto e exclusividade. A hospitalidade Mero se eleva, desvendando vivências inesquecíveis. Prepare-se para um capítulo extraordinário.",
  openGraph: {
    title: "Mero | Mar Hotel",
    description:
      "O Mero Mar Hotel é o novo horizonte do Grupo Mero em Barra Grande. Com arquitetura contemporânea e vistas para o mar, oferece puro conforto e exclusividade. A hospitalidade Mero se eleva, desvendando vivências inesquecíveis. Prepare-se para um capítulo extraordinário.",
    url: "https://www.grupomero.com.br/meromar",
    siteName: "Mero | Mar Hotel",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.grupomero.com.br/mero-mar-hotel.jpeg",
        width: 800,
        height: 600,
        alt: "Mero | Mar Hotel",
      },
    ],
  },
};

export default function MeroMar() {
  return (
    <MeroMarLayout>
      <MeroMarPage />
    </MeroMarLayout>
  );
}
