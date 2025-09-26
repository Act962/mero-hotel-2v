import React from "react";

export function HeroSection() {
  return (
    <div className="relative h-[80vh] md:h-screen w-full bg-gray-900">
      <video
        src="/mero-hotel-boutique.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover brightness-80"
      ></video>

      <div className="absolute z-10 inset-0 text-center text-white flex flex-col items-center justify-center px-8">
        <h1 className="text-xl sm:text-5xl md:text-7xl font-semibold mb-4 uppercase tracking-[3px]">
          Mero Boutique
        </h1>

        <p className="text-sm max-w-5xl">
          Descubra o paraíso privativo em Barra Grande-PI. O Mero Hotel Boutique
          é mais que uma hospedagem; é um convite à exclusividade. Nossas
          acomodações de estilo mediterrâneo oferecem o máximo de conforto, com
          a privacidade de piscinas ou jacuzzis exclusivas. Viva uma jornada de
          bem-estar com massagens e hidromassagens térmicas, e deleite-se com
          nosso especial chá da tarde. A experiência se eleva com um atendimento
          dedicado e um café da manhã opcional na sua varanda, garantindo que
          cada desejo seja realizado.
        </p>
      </div>
    </div>
  );
}
