import { AccommodationCard } from "./accommodation-card";

const accommodations = [
  {
    title: "SELECT",
    description:
      "Desperte no paraíso! Do seu refúgio, no térreo ou primeiro andar, sinta a brisa da piscina e a vista deslumbrante. Conforto King Size te abraça, com varanda privativa, TV Smart, e cada detalhe pensado para sua estadia dos sonhos. Seu oásis particular espera.",
    link: "/meroboutique/acomodacoes/select",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/select/image-1.jpg",
        alt: "Vista do mar da varanda da suíte",
      },
      {
        url: "/meroboutique/select/image-2.jpg",
        alt: "Cama king size com decoração aconchegante",
      },
      {
        url: "/meroboutique/select/image-3.jpg",
        alt: "Vista do mar da varanda da suíte",
      },
      {
        url: "/meroboutique/select/image-4.jpg",
        alt: "Vista do mar da varanda da suíte",
      },
    ],
  },
  {
    title: "SUPERIOR",
    description:
      "Eleve sua experiência. No primeiro andar, seu refúgio superior te espera. Da varanda, a vista da piscina se alonga pelos jardins, convidando ao MBar. Quartos de 25m², com camas Queen, ou com espaço para até três, onde cada detalhe foi pensado para seu conforto e bem-estar.",
    link: "/meroboutique/acomodacoes/superior",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/superior/image-1.jpg",
        alt: "Chalé de madeira com lareira acesa",
      },
      {
        url: "/meroboutique/superior/image-2.jpg",
        alt: "Chalé de madeira com lareira acesa",
      },
      {
        url: "/meroboutique/superior/image-3.jpg",
        alt: "Chalé de madeira com lareira acesa",
      },
      {
        url: "/meroboutique/superior/image-4.jpg",
        alt: "Chalé de madeira com lareira acesa",
      },
    ],
  },
  {
    title: "PREMIUM",
    description:
      "No térreo, seu refúgio espaçoso de 31m² convida ao relaxamento. Camas King Size e espaço para até quatro pessoas garantem conforto. Uma bela varanda privativa completa o ambiente, oferecendo um oásis aconchegante para momentos inesquecíveis.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/premium/image-1.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
      {
        url: "/meroboutique/premium/image-2.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
      {
        url: "/meroboutique/premium/image-3.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
      {
        url: "/meroboutique/premium/image-4.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
    ],
  },
  {
    title: "LOFT",
    description:
      "Seu santuário particular de 66m² te espera. No térreo, mergulhe na piscina privativa e relaxe no lounge exclusivo. Acima, um refúgio com cama Queen e banheiro, culminando em uma varanda com vista panorâmica do nosso paraíso. Uma experiência de luxo inesquecível.",
    link: "/meroboutique/acomodacoes/loft",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/loft/image-1.jpg",
        alt: "Quarto com cama de casal e escrivaninha",
      },
      {
        url: "/meroboutique/loft/image-5.png",
        alt: "Quarto com cama de casal e escrivaninha",
      },
      {
        url: "/meroboutique/loft/image-3.jpg",
        alt: "Quarto com cama de casal e escrivaninha",
      },
      {
        url: "/meroboutique/loft/image-4.jpg",
        alt: "Quarto com cama de casal e escrivaninha",
      },
    ],
  },
  {
    title: "GRAN CLASS",
    description:
      "Seu refúgio de 31m² espera por você, no térreo ou primeiro andar. Mergulhe na hidromassagem térmica privativa da sua varanda, um convite ao puro relaxamento. Quartos com cama King Size, poltrona com peseira, e cada detalhe pensado para o seu conforto e bem-estar.",
    link: "/meroboutique/acomodacoes/gran-class",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/gran-class/image-1.jpg",
        alt: "Banheira de hidromassagem com velas",
      },
      {
        url: "/meroboutique/gran-class/image-2.jpg",
        alt: "Banheira de hidromassagem com velas",
      },
      {
        url: "/meroboutique/gran-class/image-3.jpg",
        alt: "Banheira de hidromassagem com velas",
      },
      {
        url: "/meroboutique/gran-class/image-4.jpg",
        alt: "Banheira de hidromassagem com velas",
      },
    ],
  },
  {
    title: "PRESIDENT",
    description:
      "Seu refúgio exclusivo de 45m² espera. Em um prédio reservado, desfrute do primeiro ou segundo piso, com varanda privativa, quarto e sala. Relaxe na banheira com hidromassagem e sinta o luxo de uma cama King Size. Cada detalhe pensado para a sua estadia presidencial.",
    link: "/meroboutique/acomodacoes/president",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/president/image-1.jpeg",
        alt: "Banheira de hidromassagem com velas",
      },
      {
        url: "/meroboutique/president/image-2.jpeg",
        alt: "Banheira de hidromassagem com velas",
      },
      {
        url: "/meroboutique/president/image-3.jpeg",
        alt: "Banheira de hidromassagem com velas",
      },
      {
        url: "/meroboutique/president/image-4.jpeg",
        alt: "Banheira de hidromassagem com velas",
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
            link={accommodation.link}
            imagesOnLeft={accommodation.imagesOnLeft}
            images={accommodation.images}
          />
        ))}
      </div>
    </section>
  );
}
