import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { TripAdvisorWidget } from "@/components/tripadvisor/tripadvisor";
import { CookieBanner } from "@/components/cookie-banner";

const novera = localFont({
  variable: "--font-novera-sans",
  src: [
    {
      path: "../fonts/Novera-ClassicLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Novera-ClassicRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Novera-ClassicMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Novera-ClassicSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Novera-ClassicBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Mero Hotel",
  description:
    "Aqui você encontra conforto de verdade. Barra Grande pulsa em um ritmo único, e o Grupo Mero te convida a vivenciar cada batida.",
  icons: {
    icon: "/Logo.png",
  },
  openGraph: {
    title: "Mero Hotel",
    description:
      "Aqui você encontra conforto de verdade. Barra Grande pulsa em um ritmo único, e o Grupo Mero te convida a vivenciar cada batida.",
    url: "https://mero-hotel.vercel.app",
    siteName: "Mero Hotel",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://mero-hotel.vercel.app/mero-hotel-boutique.jpg",
        width: 800,
        height: 600,
        alt: "Mero Hotel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${novera.variable} ${novera.className} antialiased relative`}
      >
        {children}
        <TripAdvisorWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
