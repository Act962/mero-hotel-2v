import Image from "next/image";
import Link from "next/link";

type Props = {
  isChange?: boolean;
};

export function Logo({ isChange }: Props) {
  return (
    <Link href="/">
      <Image
        src={isChange ? "/logo-black.png" : "/logo-ligth.png"}
        alt="Logo Grupo Mero"
        width={60}
        height={60}
        className="object-cover"
        style={{ height: "auto" }}
      />
    </Link>
  );
}
