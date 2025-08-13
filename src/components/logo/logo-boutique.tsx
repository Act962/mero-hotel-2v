import Image from "next/image";
import Link from "next/link";

type Props = {
  isChange?: boolean;
};

export function LogoBoutique({ isChange }: Props) {
  return (
    <Link href="/meroboutique">
      <Image
        src={
          isChange
            ? "/meroboutique/logo-boutique.png"
            : "/meroboutique/logo-boutique-2.png"
        }
        alt="Logo Grupo Mero"
        width={80}
        height={80}
        className="object-cover"
      />
    </Link>
  );
}
