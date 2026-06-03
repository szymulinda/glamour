import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrainingsSection from "@/components/TrainingsSection";
import FeaturedTreatments from "@/components/FeaturedTreatments";
import AppLayout from "@/components/AppLayout";
import AnimatedPage from "@/components/Animated";
import Opinie from "@/components/Opinie";
import { motion } from "framer-motion";
import {
  JsonLd,
  buildHomeStructuredData,
  usePageSeo,
} from "@/lib/seo";
import {
  HOME_PAGE_SEO,
  OFFER_CATALOG_SECTIONS,
  buildPageUrl,
} from "@/lib/site-data";

const Home = () => {
  usePageSeo(HOME_PAGE_SEO);
  const pageUrl = buildPageUrl(HOME_PAGE_SEO.path);

  return (
    <AnimatedPage>
      <AppLayout>
        <HeroSection />

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          aria-label="O salonie i opinie klientek"
        >
          <AboutSection />
          <Opinie />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          aria-label="Wyróżnione zabiegi"
        >
          <FeaturedTreatments />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          aria-label="Szkolenia kosmetologiczne"
        >
          <TrainingsSection />
        </motion.section>
      </AppLayout>
      <JsonLd data={buildHomeStructuredData(pageUrl, OFFER_CATALOG_SECTIONS)} />
    </AnimatedPage>
  );
};

export default Home;
