import { Separator } from "@/components/ui/separator";
import FormWork from "./form-work";

export function CareersSection() {
  //   const handleEmailClick = () => {
  //     const subject = encodeURIComponent("Candidatura - Trabalhe Conosco");
  //     const body = encodeURIComponent(`Olá,

  // Tenho interesse em fazer parte da equipe da Mero Boutique.

  // Segue em anexo meu currículo para análise.

  // Nome:
  // Cargo de interesse:
  // Telefone:
  // Experiência relevante:

  // Atenciosamente,`);

  //     window.location.href = `mailto:diretoriageral@meroboutique.com.br?subject=${subject}&body=${body}`;
  //   };

  return (
    <section className=" p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
          Trabalhe conosco
        </h2>
        <Separator className="!h-px rounded-full bg-black" />
        <FormWork />
      </div>
    </section>
  );
}
