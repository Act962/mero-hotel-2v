import { ExperienceCard } from "./experience-card";

const experiences = [
  {
    title: "Chá da Tarde",
    description:
      "Um Brinde ao Entardecer: Quando o sol se despede, o Mero, acende luzes suaves para o Chá da Tarde. Às 17h, brinde ao entardecer com uma xícara que exala os perfumes e uma mesa de delícias. Uma pausa para o suspiro, um refúgio para o paladar, onde a rotina se dissolve. Um carinho já esperando por você, incluso em sua estadia.",
    link: "/meroboutique/gastronomia",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/experiences/cha-da-tarde-1.jpg",
        alt: "Chá da Trade 1",
      },
      {
        url: "/meroboutique/experiences/cha-da-tarde-2.jpg",
        alt: "Chá da Trade 2",
      },
      {
        url: "/meroboutique/experiences/cha-da-tarde-3.jpg",
        alt: "Chá da Trade 3",
      },
      {
        url: "/meroboutique/experiences/cha-da-tarde-4.jpg",
        alt: "Chá da Trade 4",
      },
    ],
  },
  {
    title: "Balcony Breakfast",
    description:
      "O Despertar da Alma Mero: No Mero, cada manhã é uma tela pintada com a delicadeza do Balcony Breakfast. Desperte para a exclusividade de um café da manhã, servido onde o conforto do seu quarto encontra a beleza da paisagem. Na varanda, a vista da piscina convida ao devaneio, embalada pela brisa e o aroma que desperta a alma. Uma experiência carinhosamente pensada, perfeita para a cumplicidade de um par ou o precioso silêncio pessoal. Deixe o dia florescer com tranquilidade, elegância e o sabor inconfundível do Mero.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/experiences/balcony-breakfast-1.jpg",
        alt: "Balcony Breakfast 1",
      },
      {
        url: "/meroboutique/experiences/balcony-breakfast-2.jpg",
        alt: "Balcony Breakfast 2",
      },
      {
        url: "/meroboutique/experiences/balcony-breakfast-3.jpg",
        alt: "Balcony Breakfast 3",
      },
      {
        url: "/meroboutique/experiences/balcony-breakfast-4.jpg",
        alt: "Balcony Breakfast 4",
      },
    ],
  },
  {
    title: "COM AMOR, MERO.",
    description:
      "Tim-tim: Uma experiência exclusiva para celebrar o amor em cada detalhe. Almoço ou jantar temático a dois em ambiente reservado, com decoração especial, menu personalizado e clima íntimo. Cada momento, é preparado para surpreender e emocionar. Brisa suave, sabores marcantes e vista encantadora tornam tudo inesquecível. Ideal para comemorações ou simplesmente viver o amor. Um convite para sentir, brindar e guardar na memória.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/experiences/com-amor-mero-1.jpg",
        alt: "Com Amor, Mero 1",
      },
      {
        url: "/meroboutique/experiences/com-amor-mero-2.jpg",
        alt: "Com Amor, Mero 2",
      },
      {
        url: "/meroboutique/experiences/com-amor-mero-3.jpg",
        alt: "Com Amor, Mero 3",
      },
      {
        url: "/meroboutique/experiences/com-amor-mero-4.jpg",
        alt: "Com Amor, Mero 4",
      },
    ],
  },
  {
    title: "SPA MERO",
    description:
      'O Santuário da Alma: No Mero, o Mero SPA (MSpa) é um santuário da alma, um convite à quietude. O "Ritual Mero" é uma jornada que inicia com escalda-pés esfoliante, transborda em massagem de sua escolha e culmina com chá relaxante (sauna opcional). O "Ritual Memorável" acrescenta jacuzzi, espumante e chá. Massagens enriquecedoras: relaxamento, drenagem, terapêutica, desportiva. Seu momento exclusivo para renovar corpo, mente e espírito.',
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/experiences/spa-1.jpg",
        alt: "SPA Mero 1",
      },
      {
        url: "/meroboutique/experiences/spa-2.jpg",
        alt: "SPA Mero 2",
      },
      {
        url: "/meroboutique/experiences/spa-3.jpg",
        alt: "SPA Mero 3",
      },
      {
        url: "/meroboutique/experiences/spa-4.jpg",
        alt: "SPA Mero 4",
      },
    ],
  },
  {
    title: "FOLIA GOURMET MERO",
    description:
      "Carnaval é no Mero — um festival para viver quatro dias de pura leveza do litoral. Nossa vibe combina o encanto da praia com experiências que despertam os sentidos e convidam ao descanso. Dos sabores da tradicional feijoada à paella valenciana, passando por ostras frescas e galinhada piauiense, cada momento à mesa é uma celebração gastronômica. A trilha sonora fica por conta de atrações musicais que embalam o clima festivo. Um destino de Carnaval pensado para quem busca paz, sabor e boas vibrações.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/experiences/folia-gourmet-1.jpg",
        alt: "Folia Gourmet, Mero 1",
      },
      {
        url: "/meroboutique/experiences/folia-gourmet-2.jpg",
        alt: "Folia Gourmet, Mero 2",
      },
      {
        url: "/meroboutique/experiences/folia-gourmet-3.webp",
        alt: "Folia Gourmet, Mero 3",
      },
      {
        url: "/meroboutique/experiences/folia-gourmet-4.webp",
        alt: "Folia Gourmet, Mero 4",
      },
    ],
  },
  {
    title: "MBAR & RESTAURANTE",
    description:
      "O Convite à Celebração: O MBar & Restaurante do Mero é seu convite à celebração. Nossa cozinha é palco onde a tradição encontra a vanguarda, criando menu que honra sabores autênticos e seleção de drinks autorais. Cada visita é experiência que se revela em camadas, da escolha de ingredientes à pincelada de criatividade. Em ambiente de elegância e aconchego, cada mesa é ponto de encontro para memória e brinde. Aberto ao público, refúgio perfeito para saborear, relaxar e brindar à felicidade, com vista para a piscina.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/experiences/mbar-1.jpg",
        alt: "MBAR & Restaurante 1",
      },
      {
        url: "/meroboutique/experiences/mbar-2.jpg",
        alt: "MBAR & Restaurante 2",
      },
      {
        url: "/meroboutique/experiences/mbar-3.jpg",
        alt: "MBAR & Restaurante 3",
      },
      {
        url: "/meroboutique/experiences/mbar-4.jpg",
        alt: "MBAR & Restaurante 4",
      },
    ],
  },
  {
    title: "TRASLADO MERO",
    description:
      "Um Trajeto Pitoresco: Pensado para tornar sua estadia especial, oferecemos serviço exclusivo de traslado para hóspedes, com saída diária a partir das 10h. Do elegante Mero Hotel Boutique ao descontraído Mero Mar Lounge. Desfrute de um trajeto confortável, seguro e pontual. Tudo sob agendamento prévio. Aproveite cada instante da sua viagem, inclusive o percurso. Viva o Mero desde o primeiro passo!",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/experiences/translado-mero-1.JPG",
        alt: "Translado Mero",
      },
      {
        url: "/meroboutique/experiences/translado-mero-2.JPG",
        alt: "Translado Mero",
      },
      {
        url: "/meroboutique/experiences/translado-mero-3.JPG",
        alt: "Translado Mero",
      },
      {
        url: "/meroboutique/experiences/translado-mero-4.JPG",
        alt: "Translado Mero",
      },
    ],
  },
  {
    title: "SUNSET MERO",
    description:
      "A cada Pôr do Sol, uma Poesia: Viva no Mero Mar Lounge o momento em que o sol encontra a poesia com o Sunset Mero. Em Barra Grande-PI, o pôr do sol mais deslumbrante, é palco para drinks autorais, gastronomia memorável e DJs vibrantes. Para hóspedes Mero, benefícios como: isenção de consumação mínima, traslado gratuito (agendamento) e acesso com reserva antecipada. Um fim de tarde que se grava na alma, ideal para descontrair, brindar e absorver a beleza da vida à beira-mar.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/experiences/sunset-mero-1.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
      {
        url: "/meroboutique/experiences/sunset-mero-2.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
      {
        url: "/meroboutique/experiences/sunset-mero-3.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
      {
        url: "/meroboutique/experiences/sunset-mero-4.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
    ],
  },
  {
    title: "Jacuzzi's ao Ar Livre",
    description:
      "O Balé das Bolhas: No Mero, cinco Jacuzzis ao ar livre convidam para o balé das bolhas, refúgio de conforto e descanso absoluto. Integradas à beleza do paisagismo, oferecem relaxamento profundo com vista serena dos jardins. Com água morna e bolhas suaves, disponíveis durante sua estada. Após a praia, ou sob o manto do entardecer, são o santuário perfeito para desacelerar e reencontrar a paz. Viva esse instante de pura renovação com o toque especial do Mero.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: false,
    images: [
      {
        url: "/meroboutique/experiences/translado-mero-1.JPG",
        alt: "Translado Mero",
      },
      {
        url: "/meroboutique/experiences/translado-mero-2.JPG",
        alt: "Translado Mero",
      },
      {
        url: "/meroboutique/experiences/translado-mero-3.JPG",
        alt: "Translado Mero",
      },
      {
        url: "/meroboutique/experiences/translado-mero-4.JPG",
        alt: "Translado Mero",
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="min-h-screen h-auto py-36 px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-24">
        {experiences.map((accommodation, index) => (
          <ExperienceCard
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
