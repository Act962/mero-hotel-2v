import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Accomodation } from "@/types/accomodation";

const features = [
  {
    id: "1",
    title: "Visão Geral da Suite",
    description: "...",
  },
  {
    id: "2",
    title: "Serviços e comodiades",
    description: "...",
  },
];

type Props = {
  accomodation: Accomodation;
};

export function FeaturesAccordion({ accomodation }: Props) {
  return (
    <Accordion type="single" collapsible>
      {features.map((feature) => (
        <AccordionItem value={feature.id} key={feature.id} className="">
          <AccordionTrigger className="uppercase font-normal tracking-widest underline underline-offset-4">
            {feature.title}
          </AccordionTrigger>
          <AccordionContent>
            <p>{feature.description}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
