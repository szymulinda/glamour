import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
