import { Separator } from "@/components/ui/separator";
import CardExperiences from "./card-experiences";
import Link from "next/link";

const experiences = [
  {
    title: "Kit Surf",
    description:
      "Sinta a força do vento e a liberdade do kitesurf em Barra Grande, um dos melhores destinos do mundo para o esporte. Ventos constantes e mar calmo formam o cenário perfeito para iniciantes e experientes. Desfrute de aulas ou sessões guiadas com instrutores experientes. Termine o dia com um pôr do sol inesquecível, celebrando a natureza.",
    imageUrl: "/experiences/kite-surf.jpg",
    alt: "Gastronomia",
    link: "/",
  },
  {
    title: "Revoada dos Guarás",
    description:
      "A Revoada dos Guarás é um espetáculo natural no Delta do Parnaíba, quando centenas de aves de plumagem vermelha retornam aos ninhos ao entardecer. O fenômeno pinta o céu com tons vibrantes, criando um cenário único e inesquecível. O passeio é feito de lancha, passando por ilhas, dunas e manguezais antes do grande momento.",
    imageUrl: "/experiences/rovada-dos-guaras.jpg",
    alt: "Gastronomia",
    link: "/",
  },
  {
    title: "Cajueiro Rei",
    description:
      "Conhecer o Cajueiro-Rei, no litoral do Piauí, é vivenciar a grandiosidade da natureza de perto. Com 8.880 m² de copa, ele encanta pela imponência e pelas histórias que carrega. Passear sob seus galhos centenários é sentir o frescor e a vida pulsando em cada folha. Um cenário único, prestes a conquistar o título de maior cajueiro do mundo.",
    imageUrl: "/experiences/cajueiro-rei.png",
    alt: "Gastronomia",
    link: "/",
  },
  {
    title: "Yahacqua Park",
    description:
      "O Yah Acqua Park é o maior parque aquático do Piauí, localizado em Luís Correia, no coração do litoral. Com estrutura moderna e segura, oferece diversão para todas as idades. São atrações emocionantes e espaços para relaxar, tudo em um só lugar. Perfeito para criar memórias inesquecíveis com família e amigo.",
    imageUrl: "/experiences/yahacqua-park.jpeg",
    alt: "Gastronomia",
    link: "/",
  },
];

export function ExperiencesSection() {
  return (
    <section className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
          Experiências
        </h2>
        <Separator className="!h-px rounded-full bg-black" />

        {/* Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-8 gap-12">
          {experiences.map((experience, index) => (
            <CardExperiences
              key={`${experience.title}-${index}`}
              title={experience.title}
              description={experience.description}
              imageUrl={experience.imageUrl}
              alt={experience.alt}
              link={experience.link}
            />
          ))}
        </div>

        <Link
          prefetch
          href="/experiencias"
          className="text-sm sm:text-base uppercase tracking-[0.2rem] font-medium hover:underline underline-offset-3"
        >
          Outras Experiências
        </Link>
      </div>
    </section>
  );
}
