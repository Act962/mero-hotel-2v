import { MeroBoutiqueLayout } from "@/components/layout/meroboutique-layout";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <MeroBoutiqueLayout>{children}</MeroBoutiqueLayout>;
}
