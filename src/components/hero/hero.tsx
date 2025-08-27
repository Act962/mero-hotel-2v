import Image from "next/image";

type HeroProps = React.ComponentProps<"section"> & {
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
    alt: string;
  };
};

export function Hero({ title, description, image, video, ...rest }: HeroProps) {
  return (
    <section
      className="relative h-[80vh] md:h-screen w-full bg-gray-900"
      {...rest}
    >
      {image && (
        <div className="relative size-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover brightness-80"
          />
        </div>
      )}

      {video && (
        <video
          src={video.src}
          title={video.alt}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        ></video>
      )}

      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-xl sm:text-5xl md:text-7xl font-semibold mb-4 uppercase tracking-[3px]">
          {title ? title : "Grupo Mero"}
        </h1>
      </div>
    </section>
  );
}
