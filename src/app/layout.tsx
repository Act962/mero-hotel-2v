import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import TripAdvisorWidget from "@/components/tripadvisor/tripadvisor";

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
  description: "Aqui você encontra conforto de verdade",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${novera.variable} ${novera.className}  antialiased`}>
        {children}
        <TripAdvisorWidget />
      </body>
    </html>
  );
}
