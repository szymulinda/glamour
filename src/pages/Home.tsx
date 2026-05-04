import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrainingsSection from "@/components/TrainingsSection";
import FeaturedTreatments from "@/components/FeaturedTreatments";
import Footer from "@/components/Footer";
import AnimatedPage from "@/components/Animated";
import Opinie from "@/components/Opinie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* HeroSection animuje się razem z wejściem całej strony */}
        <HeroSection />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <AboutSection />
          <Opinie />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <FeaturedTreatments />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <TrainingsSection />
        </motion.div>

        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Home;