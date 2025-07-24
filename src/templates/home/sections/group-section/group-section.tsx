import { CardGroup } from "./card-group";

const GROUPS = [
  {
    title: "MERO BOUTIQUE",
    description:
      "No Mero Hotel Boutique, em Barra Grande-PI, cada amanhecer é memorável. Nosso refúgio mediterrâneo oferece acomodações com piscinas privativas ou jacuzzis, massagens e hidromassagens térmicas. Desfrute do chá da tarde e do acesso ao Mero Mar Lounge. Atendimento dedicado e café da manhã na varanda opcional elevam a experiência.",
    imageUrl: "/image-3.jpg",
    link: "/meroboutique",
  },
  {
    title: "MERO LOUNGE",
    description:
      "No Mero Mar Lounge, em Barra Grande, a gastronomia encontra o charme à beira-mar. Pés na areia, coquetéis e pratos poéticos criam uma imersão sensorial profunda. Perfeito para almoços e pôr do sol, é mais que um restaurante: é a arte de viver com leveza e sabor.",
    imageUrl: "/image-4.jpg",
    link: "/merolounge",
  },
  {
    title: "MERO MAR",
    description:
      "O Mero Mar Hotel é o novo horizonte do Grupo Mero em Barra Grande. Com arquitetura contemporânea e vistas para o mar, oferece puro conforto e exclusividade. A hospitalidade Mero se eleva, desvendando vivências inesquecíveis. Prepare-se para um capítulo extraordinário.",
    imageUrl: "/image-5.jpg",
    link: "/meromar",
  },
];

export function GroupSection() {
  return (
    <section className="relative min-h-screen px-4 py-8 flex flex-col items-center justify-center text-white">
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
