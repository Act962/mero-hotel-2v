"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "@/components/input/input-text";
import { applyMask } from "@/lib/mask-phone";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

const formData = z.object({
  name: z.string().min(1, { error: "Nome é obrigatório" }),
  email: z.email({ error: "Email inválido" }),
  phone: z.string().min(14, "Telefone inválido").max(15, "Telefone inválido"),
});

type FormData = z.infer<typeof formData>;

export default function FormWork() {
  const form = useForm<FormData>({
    resolver: zodResolver(formData),
  });

  const sendToCrm = async () => {
    const data = form.getValues();
    try {
      await fetch("https://nasago.bubbleapps.io/api/1.1/wf/create_lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          statusCrmId: "1757364057822x759345082371670000",
          crmId: "1753792499939x407839942752075800",
          name: data.name,
          email: data.email,
          contato: data.phone,
          companyId: "1753791874427x133172997294129150",
          tagId: "",
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmit = async () => {
    await sendToCrm();

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

    //     form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(formSubmit)} className="space-y-6">
      <InputText
        {...form.register("name")}
        placeholder="Nome"
        type="text"
        autoComplete="off"
      />
      <InputText
        {...form.register("email")}
        placeholder="E-mail"
        type="email"
        autoComplete="off"
      />
      <InputText
        {...form.register("phone")}
        placeholder="Telefone"
        type="text"
        autoComplete="off"
        onChange={(e) => {
          const masked = applyMask(e.target.value);
          form.setValue("phone", masked);
        }}
      />
      <Button type="submit" className="w-full" variant="primary">
        Enviar
      </Button>
    </form>
  );
}
