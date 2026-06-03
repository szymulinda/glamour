import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => (
  <>
    <Header />
    <main className="min-h-screen bg-background">{children}</main>
    <Footer />
  </>
);

export default AppLayout;
