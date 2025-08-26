import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accomodation } from "@/types/accomodation";
import Image from "next/image";

type AboutSectionProps = {
  accomodation: Accomodation;
};

export function AboutSection({ accomodation }: AboutSectionProps) {
  const groupedServices = [];
  for (let i = 0; i < accomodation.services.length; i += 2) {
    groupedServices.push(accomodation.services.slice(i, i + 2));
  }

  return (
    <section className="bg-background min-h-screen flex justify-center items-center px-8  py-16 md:py-32">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
        {/* Sobre */}
        <div>
          <h3 className="text-lg md:text-xl font-medium tracking-[0.6rem] uppercase">
            {accomodation.name}
          </h3>
          <p className="mt-8 text-sm font-light whitespace-pre-line">
            {accomodation.description}
          </p>
          <Button variant="ligth" className="mt-7">
            Reserve agora
          </Button>
        </div>
        {/* Serviços */}
        <div>
          <h3 className="text-lg md:text-xl font-medium tracking-[0.6rem] uppercase">
            Serviços
          </h3>

          {/* Layout para Mobile: Lista simples */}
          <div className="md:hidden mt-8">
            <ul className="space-y-2">
              {accomodation.services.map((service, index) => (
                <li
                  className="flex gap-2 items-center p-2 rounded"
                  key={`mobile-${service.name}-${index}`}
                >
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="size-5"
                  />
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Layout para Desktop: Grid com separators */}
          <div className="hidden md:block space-y-4 mt-8">
            {groupedServices.map((serviceRow, rowIndex) => (
              <div key={rowIndex}>
                <div className="grid grid-cols-2 gap-2">
                  {serviceRow.map((service, index) => (
                    <div
                      className="flex gap-2 items-center p-2 rounded"
                      key={`desktop-${service.name}-${index}`}
                    >
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={64}
                        height={64}
                        className="size-7"
                      />
                      {service.name}
                    </div>
                  ))}
                </div>
                {rowIndex < groupedServices.length - 1 && (
                  <Separator className="mt-4 bg-black/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
