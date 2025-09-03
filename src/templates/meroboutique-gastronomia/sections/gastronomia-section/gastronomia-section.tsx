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
        url: "/meroboutique/gastronomia/cafe-da-manha-1.jpg",
        alt: "Café da Manhã 1",
      },
      {
        url: "/meroboutique/gastronomia/cafe-da-manha-2.jpg",
        alt: "Café da Manhã 2",
      },
      {
        url: "/meroboutique/gastronomia/cafe-da-manha-3.jpg",
        alt: "Café da Manhã 3",
      },
      {
        url: "/meroboutique/gastronomia/cafe-da-manha-3.jpg",
        alt: "Café da Manhã 4",
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
        url: "/meroboutique/gastronomia/petiscos-1.jpg",
        alt: "Petiscos 1",
      },
      {
        url: "/meroboutique/gastronomia/petiscos-2.jpg",
        alt: "Petiscos 2",
      },
      {
        url: "/meroboutique/gastronomia/petiscos-3.jpg",
        alt: "Petiscos 3",
      },
      {
        url: "/meroboutique/gastronomia/petiscos-4.jpg",
        alt: "Petiscos 4",
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
        url: "/meroboutique/gastronomia/almoco-1.jpg",
        alt: "Almoço 1",
      },
      {
        url: "/meroboutique/gastronomia/almoco-2.jpg",
        alt: "Almoço 2",
      },
      {
        url: "/meroboutique/gastronomia/almoco-3.jpg",
        alt: "Almoço 3",
      },
      {
        url: "/meroboutique/gastronomia/almoco-4.jpg",
        alt: "Almoço 4",
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
        url: "/meroboutique/gastronomia/drinks-1.jpg",
        alt: "Drinks 1",
      },
      {
        url: "/meroboutique/gastronomia/drinks-1.jpg",
        alt: "Drinks 2",
      },
      {
        url: "/meroboutique/gastronomia/drinks-1.jpg",
        alt: "Drinks 3",
      },
      {
        url: "/meroboutique/gastronomia/drinks-1.jpg",
        alt: "Drinks 4",
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
