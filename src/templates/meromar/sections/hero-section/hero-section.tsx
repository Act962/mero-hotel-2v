// Adicioanr h-[80vh]

export function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-gray-900">
      <video
        src="/mero-mar-hote-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover brightness-80"
      ></video>

      <div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-xl sm:text-5xl md:text-7xl font-semibold mb-4 uppercase tracking-[3px]">
            Mero Mar Hotel
          </h1>
          <span className="uppercase font-light tracking-widest">
            (Em breve)
          </span>
        </div>
      </div>
    </div>
  );
}
