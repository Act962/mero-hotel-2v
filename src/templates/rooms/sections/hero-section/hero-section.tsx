import React from "react";

export function HeroSection() {
  return (
    <div className="relative h-[80vh] md:h-screen w-full bg-gray-900">
      <video
        src="/Fasano-HoteisLazer_Hor_SemLogo-baixa-1.mp4"
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      ></video>

      <div>
        <div className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-semibold mb-4 uppercase tracking-[3px]">
            Quartos
          </h1>
        </div>
      </div>
    </div>
  );
}
