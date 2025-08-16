import { Navbar } from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";

type MeroBoutiqueLayoutProps = {
  children: React.ReactNode;
};

export function MeroMarLayout({ children }: MeroBoutiqueLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <NextIntlClientProvider>
        <Navbar />
      </NextIntlClientProvider>
      <main>{children}</main>
    </div>
  );
}
