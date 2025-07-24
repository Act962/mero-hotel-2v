import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <h1>Página não encontrada</h1>
      <Button asChild>
        <Link href="/">Voltar para o Início</Link>
      </Button>
    </div>
  );
}
