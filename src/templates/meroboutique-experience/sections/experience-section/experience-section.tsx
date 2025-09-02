import { ExperienceCard } from "./experience-card";

const experiences = [
  {
    title: "Chá da Tarde",
    description:
      "It’s tea time at Mero! Todos os dias, às 17h, nossos hóspedes são convidados a viver um momento de aconchego e sabor com o nosso exclusivo chá da tarde. Uma pausa delicada na rotina para apreciar delícias selecionadas, bebidas quentinhas e uma atmosfera encantadora. É o convite perfeito para relaxar, trocar conversas e saborear o melhor da experiência Mero. Tudo isso incluso na sua estadia, com todo o cuidado e carinho que você merece. Reserve um tempo para si e aproveite!",
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
    title: "BG Memorável",
    description:
      "Explore os encantos naturais do litoral com os passeios sugeridos pelo Mero. Barra Grande, um dos vilarejos mais encantadores do Nordeste, é porta de entrada para experiências memoráveis como a Revoada dos Guarás, um espetáculo ao entardecer onde centenas de aves vermelhas colorem o céu sobre o Delta do Parnaíba. O passeio pelo Delta revela um arquipélago de ilhas, dunas e manguezais repletos de biodiversidade e paisagens deslumbrantes. Para os aventureiros, a Trilha do Cavalo-Marinho permite avistar esse pequeno animal em seu habitat natural. A melhor época para visitar vai de julho a dezembro, com clima seco ideal para praias e kitesurf, garantindo uma experiência única na Rota das Emoções.",
    link: "/meroboutique/acomodacoes/superior",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/experiences/bg-memoravel-1.jpg",
        alt: "BG Memorável 1",
      },
      {
        url: "/meroboutique/experiences/bg-memoravel-2.jpg",
        alt: "BG Memorável 2",
      },
      {
        url: "/meroboutique/experiences/bg-memoravel-3.jpg",
        alt: "BG Memorável 3",
      },
      {
        url: "/meroboutique/experiences/bg-memoravel-4.jpg",
        alt: "BG Memorável 4",
      },
    ],
  },
  {
    title: "Balcony Breakfast",
    description:
      "Desperte com um toque de exclusividade no Mero: o nosso Balcony Breakfast torna o início do seu dia verdadeiramente memorável. Saboreie um café da manhã preparado com carinho, servido no conforto do seu quarto. A varanda oferece uma vista deslumbrante para a piscina, acompanhada pela brisa suave e o aroma do café fresco. Uma experiência pensada para surpreender e encantar. Ideal para partilhar a dois ou desfrutar um momento só seu. Comece o dia com tranquilidade, elegância e sabor.",
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
    title: "COM AMOR, MERO.",
    description:
      "Uma experiência exclusiva pensada para celebrar o amor em todos os detalhes. Almoço ou jantar temático à dois, em um ambiente reservado, com decoração especial, menu personalizado e clima intimista. Cada momento é cuidadosamente preparado para surpreender e emocionar. A brisa suave, os sabores marcantes e a vista encantadora tornam tudo ainda mais inesquecível. Ideal para comemorações ou simplesmente para viver o amor com intensidade. Um convite para sentir, brindar e guardar na memória.",
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
  {
    title: "SPA MERO",
    description:
      "Desperte os sentidos e entregue-se ao bem-estar com os rituais do SPA Mero, pensados para proporcionar relaxamento profundo e cuidado integral. O “Ritual Mero” começa com um escalda-pés com esfoliação, seguido de uma massagem à sua escolha e finaliza com um chazinho relaxante com sauna opcional. Já o “Ritual Memorável” eleva a experiência com a adição de uma imersão em jacuzzi com espumante e chá relaxante. As massagens disponíveis incluem as técnicas relaxante, drenagem, terapêutica e desportiva. Um momento exclusivo para renovar corpo, mente e espírito.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: false,
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
  {
    title: "CAMINHADA NA PRAIA",
    description:
      "Comece ou finalize o dia em plena harmonia com a natureza em uma caminhada pela extensa faixa de areia de Barra Grande. Com a brisa constante e o som das ondas como trilha sonora, essa experiência convida à leveza, ao movimento consciente e ao reencontro com o essencial. Como proposta de estilo de vida wellness, o Mero oferece esse momento exclusivo para hóspedes que buscam desacelerar e se reconectar. Momento memorável para renovar as energias e cultivar a presença.",
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
    title: "KITE SURF",
    description:
      "Desperte a sua conexão com o vento em uma das melhores regiões do mundo para o kitesurf. Em Barra Grande, os ventos constantes e o mar calmo criam o cenário ideal para essa experiência cheia de liberdade e adrenalina. O Mero oferece acesso facilitado e curadoria personalizada para aulas ou sessões guiadas com instrutores experientes. Seja você iniciante ou avançado, cada momento na água é uma celebração da natureza. Aproveite o pôr do sol ao fim do dia e sinta-se parte do espetáculo. Uma sugestão imperdível para quem busca emoção com exclusividade.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: true,
    images: [
      {
        url: "/meroboutique/experiences/kite-surf-1.jpg",
        alt: "Kite Surf 1",
      },
      {
        url: "/meroboutique/experiences/kite-surf-2.jpg",
        alt: "Kite Surf 2",
      },
      {
        url: "/meroboutique/experiences/kite-surf-1.jpg",
        alt: "Kite Surf 3",
      },
      {
        url: "/meroboutique/experiences/kite-surf-2.jpg",
        alt: "Kite Surf 4",
      },
    ],
  },
  {
    title: "MBAR & RESTAURANTE",
    description:
      "Nossa cozinha une tradição e sofisticação em um menu que valoriza os sabores da região, acompanhado por uma carta de drinks autorais e surpreendentes. Cada refeição no Mbar é uma experiência sensorial, unindo ingredientes locais com um toque de criatividade. Em um ambiente elegante e acolhedor, convidamos você a desfrutar de momentos memoráveis à mesa. Aberto ao público, é o lugar perfeito para saborear, relaxar e brindar com vista para a piscina. Reservas pelo WhatsApp: (86) 99835-7294.",
    link: "/meroboutique/acomodacoes/premium",
    imagesOnLeft: false,
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
      "Pensado para tornar sua estadia ainda mais especial, oferecemos um serviço exclusivo de translado para hóspedes, com saída diária a partir das 10h. Do Mero Hotel Boutique ao Mero Mar Lounge, você desfruta de um trajeto confortável, com segurança e pontualidade. Tudo isso sob agendamento prévio, para garantir comodidade e organização. Aproveite cada instante da sua viagem, inclusive o percurso. Viva o Mero desde o primeiro passo!",
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
  {
    title: "SUNSET MERO",
    description:
      "É uma experiência para quem deseja viver o pôr do sol mais encantador de Barra Grande-PI. No Mero Mar Lounge, o cenário à beira-mar se completa com drinks autorais, gastronomia marcante e sets envolventes de DJs que transformam o entardecer em celebração. Como hóspede do Mero, você tem benefícios especiais: isenção da taxa de consumação mínima, translado gratuito (mediante agendamento) e acesso com reserva antecipada. Um fim de tarde memorável, para relaxar, brindar e aproveitar o melhor da vida frente ao mar.",
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
    title: "JACUZZI’S AO AR LIVRE",
    description:
      "Cinco Jacuzzi’s ao ar livre esperam por você com conforto e descanso absoluto. Integradas ao paisagismo do Mero, elas oferecem momentos de relaxamento em meio à natureza, com vista para nossos jardins. Disponíveis para uso dos hóspedes a qualquer hora do dia, contam com água morna e bolhas suaves que revigoram o corpo e a mente. Após a praia ou no entardecer, são o refúgio ideal para desacelerar. Viva esse momento com o toque especial do Mero.",
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
