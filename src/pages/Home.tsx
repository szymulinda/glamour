import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrainingsSection from "@/components/TrainingsSection";
import FeaturedTreatments from "@/components/FeaturedTreatments";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrainingsSection />
      <FeaturedTreatments />
      <Footer />
    </div>
  );
};

export default Home;
