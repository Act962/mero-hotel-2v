import React from "react";

export function HeroSection() {
  return (
    <div className="relative h-[80vh] md:h-screen w-full bg-gray-900">
      <video
        src="/MERO-HOTEL-VIDEO.mp4"
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      ></video>

      <div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-xl sm:text-5xl md:text-7xl font-semibold mb-4 uppercase tracking-[3px]">
            Mero Boutique
          </h1>

          <p className="text-sm">
            No Mero Hotel Boutique, em Barra Grande-PI, cada amanhecer é
            memorável. Nosso refúgio mediterrâneo oferece acomodações com
            piscinas privativas ou jacuzzis, massagens e hidromassagens
            térmicas. Desfrute do chá da tarde e do acesso ao Mero Mar Lounge.
            Atendimento dedicado e café da manhã na varanda opcional
            elevam a experiência.
          </p>
        </div>
      </div>
    </div>
  );
}
