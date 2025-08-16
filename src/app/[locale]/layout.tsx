import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import { TripAdvisorWidget } from "@/components/tripadvisor/tripadvisor";
import { CookieBanner } from "@/components/cookie-banner";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

const novera = localFont({
  variable: "--font-novera-sans",
  src: [
    {
      path: "../../fonts/Novera-ClassicLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Novera-ClassicRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Novera-ClassicMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Novera-ClassicSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Novera-ClassicBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mero-hotel.vercel.app"),
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
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
