import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function AccommodationSection() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div>
        <Link href="/">
          <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem] uppercase">
            Acomodações
          </h2>
        </Link>
        <Separator className="!h-px rounded-full bg-white" />
      </div>
    </section>
  );
}
