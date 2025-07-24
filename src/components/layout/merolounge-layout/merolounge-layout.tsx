import { Navbar } from "@/components/navbar";

type MeroBoutiqueLayoutProps = {
  children: React.ReactNode;
};

export function MeroLoungeLayout({ children }: MeroBoutiqueLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
