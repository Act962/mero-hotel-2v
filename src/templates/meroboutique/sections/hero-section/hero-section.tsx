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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            ullam voluptatem iure modi delectus consequuntur ipsam molestias,
            cum provident dignissimos blanditiis iste, porro eius mollitia?
            Neque id tempora placeat dicta! Minima culpa et a veniam labore
            facere cupiditate. Minus quo sequi similique quas quibusdam.
            Sapiente rerum soluta architecto ullam possimus voluptas, id, sunt
            aliquid repellendus quam, laboriosam commodi quia et.
          </p>
        </div>
      </div>
    </div>
  );
}
