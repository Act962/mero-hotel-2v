import { AccommodationCard } from "./accommodation-card";

const accommodations = [
  {
    title: "Acomodações",
    description:
      "Seu refúgio espera por você. No Mero Hotel Boutique, cada uma das suas unidades habitacionais em estilo grego é um convite ao conforto e à privacidade, com varandas voltadas para a deslumbrante piscina. Imagine-se em um dos nossos apartamentos com piscina e jacuzzi privativas, um verdadeiro charme para momentos inesquecíveis. Aqui, cada detalhe foi pensado para criar a atmosfera perfeita para sua estadia dos sonhos.",
    link: "/meroboutique/acomodacoes",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/select/image-1.jpg",
        alt: "Vista do mar da varanda da suíte",
      },
      {
        url: "/image-5.jpg",
        alt: "Cama king size com decoração aconchegante",
      },
    ],
  },
  {
    title: "Gastronomia",
    description:
      "Aqui, cada momento é um presente. Mergulhe em um universo de bem-estar com nosso spa, sauna e espaço fitness. Relaxe nas hidromassagens térmicas ao ar livre ou opte por um café da manhã na privacidade da sua varanda. Para completar, nosso serviço de carrinho de golfe leva você até o Mero Lounge, onde o sol, o mar e drinks refrescantes se unem em um cenário perfeito.",
    link: "/meroboutique/gastronomia",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/gastronomia.jpg",
        alt: "Chalé de madeira com lareira acesa",
      },
      {
        url: "/image-5.jpg",
        alt: "Vista da floresta ao redor do chalé",
      },
    ],
  },
  {
    title: "Experiência",
    description:
      "Localizados no térreo e no 1º piso, área total de 23 m², distribuídos entre varanda privativa, quarto e banheiro. Acomodam até 02 pessoas em cama de casal (King Size). Possui ar condicionado split, 01 TV Smart 40”, acesso gratuito ao wi-fi, mesa de trabalho, frigobar, cofre eletrônico, e apoio de cabeceira. Espelho de corpo inteiro, armário com cabides e portas, ferro e mesa de passar roupa, secador de cabelo e blackout nas cortinas.",
    link: "/meroboutique/experiencias",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/experiences.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
      {
        url: "/image-5.jpg",
        alt: "Sala de estar espaçosa com sofá e TV",
      },
    ],
  },
];

export function AccommodationSection() {
  return (
    <section className="min-h-screen h-auto py-36 px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-24">
        {accommodations.map((accommodation, index) => (
          <AccommodationCard
            key={`${accommodation.title}-${index}`}
            title={accommodation.title}
            description={accommodation.description}
            imagesOnLeft={accommodation.imagesOnLeft}
            link={accommodation.link}
            images={accommodation.images}
          />
        ))}
      </div>
    </section>
  );
}
