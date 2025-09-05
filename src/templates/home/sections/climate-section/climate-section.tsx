import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export function ClimateSection() {
  return (
    <section className="min-h-screen p-8 bg-black text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
          Tábua de Marés & Clima
        </h2>
        <Separator className="!h-px rounded-full bg-white" />

        <div className="space-y-8">
          <p className="text-xs sm:text-sm font-light max-w-2xl mx-auto text-center">
            Mantenha-se sempre informado sobre as condições ideais para suas
            atividades em Barra Grande. Consulte dados precisos e atualizados
            sobre marés, ondas e previsões meteorológicas para planejar melhor
            seus dias na costa piauiense.
          </p>

          {/* Cards informativos */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Card Tábua de Marés */}
            <CardClimate
              title="Tábua de Marés"
              description="Acompanhe os horários das marés alta e baixa, altura das ondas
                  e condições do mar em tempo real para Barra Grande."
              imageUrl="/meroboutique/experiences/kite-surf-2.jpg"
              alt="Image Kite Surf"
              link="https://tabuademares.com/br/piaui/barra-grande#_ondas"
              linkLegend="Ver Marés"
            />

            <CardClimate
              title="Clima"
              description="Consulte a previsão meteorológica completa, incluindo
                  temperatura, vento, umidade e condições climáticas para os
                  próximos dias."
              imageUrl="/meroboutique/experiences/caminhada-na-praia-1.jpg"
              alt="Image Caminhada na Praia"
              link="https://tabuademares.com/br/piaui/barra-grande#_tempo"
              linkLegend="Ver Clima"
            />
          </div>

          {/* Call to action final */}
          {/* <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Dados fornecidos por{" "}
              <span className="text-white font-semibold">tabuademares.com</span>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

interface CardClimateProps {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  link: string;
  linkLegend: string;
}

export default function CardClimate({
  title,
  description,
  imageUrl,
  alt,
  link,
  linkLegend,
}: CardClimateProps) {
  return (
    <div>
      <div className="relative overflow-hidden group h-64 md:h-72">
        <Link href={link} target="_blank">
          <Image
            src={imageUrl}
            alt={alt}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            fill
          />
        </Link>
      </div>

      <div className="text-start space-y-3 mt-8">
        <h3 className="font-medium text-xl tracking-[0.6rem] uppercase">
          {title}{" "}
        </h3>
        <p className="text-xs sm:text-sm">{description}</p>
        <Link
          href={link}
          className="uppercase underline underline-offset-3 transition-colors hover:text-white/80"
          target="_blank"
        >
          {linkLegend}
        </Link>
      </div>
    </div>
  );
}
