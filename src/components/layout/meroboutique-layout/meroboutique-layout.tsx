import { CallToBook } from "@/components/call-to-book";
import { FooterBoutique } from "@/components/footer";
import { NavbarBoutique } from "@/components/navbar";

type MeroBoutiqueLayoutProps = {
  children: React.ReactNode;
};

export function MeroBoutiqueLayout({ children }: MeroBoutiqueLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <NavbarBoutique />
      <main>{children}</main>
      <CallToBook />
      <FooterBoutique />
    </div>
  );
}
