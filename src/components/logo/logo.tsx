import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image src="/Logo.png" alt="Logo Grupo Mero" width={60} height={60} />
    </Link>
  );
}
