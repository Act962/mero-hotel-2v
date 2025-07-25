import { CardGroup } from "./card-group";

const GROUPS = [
  {
    title: "MERO BOUTIQUE",
    description:
      "No Mero Hotel Boutique, Barra Grande-PI, cada amanhecer é memorável. Um refúgio mediterrâneo. Acomodações com opções de piscina/jacuzzi privativas. Desfrute do café da manhã e chá da tarde. Traslado para o Mero Mar Lounge, com atendimento dedicado e café na varanda opcional.",
    imageUrl: "/mero-hotel-boutique.jpg",
    link: "/meroboutique",
  },
  {
    title: "MERO LOUNGE",
    description:
      "No Mero Mar Lounge, em Barra Grande, a gastronomia encontra o charme à beira-mar. Pés na areia, coquetéis e pratos poéticos criam imersão sensorial profunda. Perfeito para almoços e pôr do sol, é a arte de viver com leveza e sabor.",
    imageUrl: "/mero-hotel-lounge.jpg",
    link: "/merolounge",
  },
  {
    title: "MERO MAR",
    description:
      "O Mero Mar Hotel, será o novo horizonte do Grupo Mero. Com arquitetura contemporânea e vistas para o mar, ele redefinirá conforto e exclusividade. Prepare-se para vivências inesquecíveis, onde a hospitalidade Mero se elevará a um patamar extraordinário.",
    imageUrl: "/mero-mar-hotel.jpeg",
    link: "/meromar",
  },
];

export function GroupSection() {
  return (
    <section className="relative min-h-screen p-8 flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 bg-[url('/image-2.jpg')] bg-cover bg-center bg-no-repeat opacity-100 brightness-50" />
      <div className="relative w-full max-w-6xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem]">
          O GRUPO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Card */}
          {GROUPS.map((group, index) => (
            <CardGroup
              key={`${group.title}-${index}`}
              title={group.title}
              description={group.description}
              imageUrl={group.imageUrl}
              link={group.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
