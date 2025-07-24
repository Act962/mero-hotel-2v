import { CallToBook } from "@/components/call-to-book";
import { Footer } from "@/components/footer";
import { Navbar } from "../../navbar";

interface AccommodationLayouProps {
  children: React.ReactNode;
}

export function RoomsLayout({ children }: AccommodationLayouProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="h-full flex flex-col"> {children} </main>
      <CallToBook />
      <Footer />
    </div>
  );
}
