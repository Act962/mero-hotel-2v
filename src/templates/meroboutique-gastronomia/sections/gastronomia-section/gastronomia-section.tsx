import { GastronomiaCard } from "./gastronomia-card";

const accommodations = [
  {
    title: "CAFÉ DA MANHÃ",
    description:
      "Despertar no Mero é uma arte. Deixe a luz da manhã beijar sua janela e convide o sabor para a sua mesa. Nosso café da manhã à la carte é um espetáculo de frescor e aromas. Saboreie cada momento no ambiente acolhedor do MBar, ou eleve sua experiência com um serviço exclusivo na varanda do seu quarto",
    link: "/meroboutique/gastronomia",
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
    title: "Petiscos",
    description:
      "Sabores que florescem à luz do dia. Nossos petiscos são a tradução do prazer e do frescor. Feitos na hora para você, eles complementam a beleza do nosso hotel e fazem de cada mordida um pequeno momento de felicidade.",
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
    title: "Almoço",
    description:
      "O azul da piscina convida ao relaxamento. O sabor de nossos pratos convida à vida. Nosso almoço à la carte, é a união perfeita entre a tranquilidade do Mero Hotel e a alegria de uma equipe pronta para servir com um sorriso. Uma experiência para todos os sentidos.",
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
    title: "Drinks",
    description:
      "Nossos jardins, um convite ao deleite. Nossos drinks, uma promessa de sabor. Deixe-se levar pela leveza de um espumante ao redor da piscina. Se a noite pedir aconchego, um vinho espera por você, para ser saboreado no conforto de sua varanda. E na hidromassagem, a efervescência de um coquetel traduz a felicidade do momento.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: true,
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
];

export function GastronomiaSection() {
  return (
    <section className="min-h-screen h-auto py-36 px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-24">
        {accommodations.map((accommodation, index) => (
          <GastronomiaCard
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
