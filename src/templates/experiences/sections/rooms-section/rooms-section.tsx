import { RoomCard } from "./room-card";

const rooms = [
  {
    title: "Suíte Luxo Vista Mar",
    description:
      "Localizados no térreo e no 1º piso, área total de 23 m², distribuídos entre varanda privativa, quarto e banheiro. Acomodam até 02 pessoas em cama de casal (King Size). Possui ar condicionado split, 01 TV Smart 40”, acesso gratuito ao wi-fi, mesa de trabalho, frigobar, cofre eletrônico, e apoio de cabeceira. Espelho de corpo inteiro, armário com cabides e portas, ferro e mesa de passar roupa, secador de cabelo e blackout nas cortinas.",
    link: "/",
    imagesOnLeft: false,
    images: [
      {
        url: "/image-5.jpg",
        alt: "Vista do mar da varanda da suíte",
      },
      {
        url: "/image-5.jpg",
        alt: "Cama king size com decoração aconchegante",
      },
    ],
  },
  {
    title: "Chalé na Montanha",
    description:
      "Localizados no térreo e no 1º piso, área total de 23 m², distribuídos entre varanda privativa, quarto e banheiro. Acomodam até 02 pessoas em cama de casal (King Size). Possui ar condicionado split, 01 TV Smart 40”, acesso gratuito ao wi-fi, mesa de trabalho, frigobar, cofre eletrônico, e apoio de cabeceira. Espelho de corpo inteiro, armário com cabides e portas, ferro e mesa de passar roupa, secador de cabelo e blackout nas cortinas.",
    link: "/",
    imagesOnLeft: true,
    images: [
      {
        url: "/image-5.jpg",
        alt: "Chalé de madeira com lareira acesa",
      },
      {
        url: "/image-5.jpg",
        alt: "Vista da floresta ao redor do chalé",
      },
    ],
  },
  {
    title: "Apartamento Familiar",
    description:
      "Localizados no térreo e no 1º piso, área total de 23 m², distribuídos entre varanda privativa, quarto e banheiro. Acomodam até 02 pessoas em cama de casal (King Size). Possui ar condicionado split, 01 TV Smart 40”, acesso gratuito ao wi-fi, mesa de trabalho, frigobar, cofre eletrônico, e apoio de cabeceira. Espelho de corpo inteiro, armário com cabides e portas, ferro e mesa de passar roupa, secador de cabelo e blackout nas cortinas.",
    link: "/",
    imagesOnLeft: false,
    images: [
      {
        url: "/image-5.jpg",
        alt: "Quarto com duas camas de solteiro",
      },
      {
        url: "/image-5.jpg",
        alt: "Sala de estar espaçosa com sofá e TV",
      },
    ],
  },
  {
    title: "Quarto Standard Econômico",
    description:
      "Localizados no térreo e no 1º piso, área total de 23 m², distribuídos entre varanda privativa, quarto e banheiro. Acomodam até 02 pessoas em cama de casal (King Size). Possui ar condicionado split, 01 TV Smart 40”, acesso gratuito ao wi-fi, mesa de trabalho, frigobar, cofre eletrônico, e apoio de cabeceira. Espelho de corpo inteiro, armário com cabides e portas, ferro e mesa de passar roupa, secador de cabelo e blackout nas cortinas.",
    link: "/",
    imagesOnLeft: true,
    images: [
      {
        url: "/image-5.jpg",
        alt: "Quarto com cama de casal e escrivaninha",
      },
      {
        url: "/image-5.jpg",
        alt: "Banheiro moderno com chuveiro quente",
      },
    ],
  },
  {
    title: "Suíte Master com Hidromassagem",
    description:
      "Localizados no térreo e no 1º piso, área total de 23 m², distribuídos entre varanda privativa, quarto e banheiro. Acomodam até 02 pessoas em cama de casal (King Size). Possui ar condicionado split, 01 TV Smart 40”, acesso gratuito ao wi-fi, mesa de trabalho, frigobar, cofre eletrônico, e apoio de cabeceira. Espelho de corpo inteiro, armário com cabides e portas, ferro e mesa de passar roupa, secador de cabelo e blackout nas cortinas.",
    link: "/",
    imagesOnLeft: false,
    images: [
      {
        url: "/image-5.jpg",
        alt: "Banheira de hidromassagem com velas",
      },
      {
        url: "/image-5.jpg",
        alt: "Varanda com espreguiçadeira e vista panorâmica",
      },
    ],
  },
];

export function RoomsSection() {
  return (
    <section className="min-h-screen h-auto py-20 md:py-36 px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-24">
        {rooms.map((room, index) => {
          return (
            <RoomCard
              key={`${room.title}-${index}`}
              title={room.title}
              description={room.description}
              images={room.images}
              link={room.link}
            />
          );
        })}
      </div>
    </section>
  );
}
