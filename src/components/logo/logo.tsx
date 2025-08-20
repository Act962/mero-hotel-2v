import Image from "next/image";
import Link from "next/link";

type Props = {
  isChange?: boolean;
};

export function Logo({ isChange }: Props) {
  return (
    <Link href="/">
      <Image
        src={isChange ? "/logo-black-new.png" : "/logo-ligth-new.png"}
        alt="Logo Grupo Mero"
        width={80}
        height={80}
        className="object-cover"
        style={{ height: "auto" }}
      />
    </Link>
  );
}
