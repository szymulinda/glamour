import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";
import logo from "@/assets/logo.webp";
import OptimizedImage from "@/components/OptimizedImage";
import { BOOKSY_URL, BUSINESS_NAME, CITY } from "@/lib/site-data";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Strona główna Glamour Kosmetik"
    >
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt={`Wnętrze salonu kosmetologii hi-tech ${BUSINESS_NAME} w ${CITY} — gabinet zabiegowy`}
          className="w-full h-full object-cover contrast-110 brightness-90"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl flex flex-col items-center">
        <div className="flex flex-col items-center mb-10 animate-fade-up">
          <OptimizedImage
            src={logo}
            alt={`Logo ${BUSINESS_NAME} — salon kosmetyczny ${CITY}`}
            className="h-[110px] md:h-[220px] w-auto mb-4 drop-shadow-2xl"
            priority
          />

          <div className="w-12 h-px bg-primary/60 my-8" aria-hidden="true" />

          <h1 className="font-body text-[10px] md:text-xs text-primary-foreground/100 font-light max-w-2xl mx-auto tracking-[0.3em] uppercase leading-loose">
            Kosmetologia premium w {CITY} — technologie bez skalpela. <br />
            Zarezerwuj swój czas dla siebie.
          </h1>
        </div>

        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Zarezerwuj wizytę w ${BUSINESS_NAME} ${CITY} na Booksy`}
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-gold-dark active:scale-95"
          >
            Zarezerwuj na Booksy
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
