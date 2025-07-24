// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
// } from "@/components/ui/accordion";
// import { Separator } from "@/components/ui/separator";
// import { PlusIcon } from "lucide-react";
// import { Accordion as AccordionPrimitive } from "radix-ui";

// export function FaqSection() {
//   return (
//     <section className="min-h-screen p-8 flex flex-col items-center justify-center">
//       <div className="w-full max-w-6xl text-center mx-auto space-y-12">
//         <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
//           Informações Gerais
//         </h2>
//         <Separator className="!h-px rounded-full bg-black" />

//         <div>
//           <Accordion
//             type="single"
//             collapsible
//             className="w-full space-y-2"
//             defaultValue="1"
//           >
//             <AccordionItem
//               value="1"
//               key="1"
//               className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 border px-4 py-3 outline-none last:border-b has-focus-visible:ring-[3px] shadow-md"
//             >
//               <AccordionPrimitive.Header className="flex">
//                 <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left text-sm text-[16px] leading-6 font-semibold transition-all outline-none focus-visible:ring-0 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
//                   Mero Boutique
//                   <PlusIcon
//                     size={24}
//                     className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
//                     aria-hidden="true"
//                   />
//                 </AccordionPrimitive.Trigger>
//               </AccordionPrimitive.Header>
//               <AccordionContent className="text-muted-foreground py-2 text-start">
//                 ...
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// }

export const FaqSection = () => {
  return (
    <div>
      <h1>FaqSection</h1>
    </div>
  );
};
