import heroBg from "@/assets/hero-bg.jpg";

const BOOKSY_URL = "https://booksy.com/pl-pl/232184_glamour-kosmetik_salon-kosmetyczny_12930_opole#ba_s=seo";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Glamour Kosmetik salon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground mb-6 animate-fade-up leading-tight">
          Odkryj swoje naturalne piękno.
        </h1>
        <p className="font-body text-base md:text-lg text-primary-foreground/80 font-light max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Glamour Kosmetik to miejsce, w&nbsp;którym nowoczesna kosmetologia spotyka się z&nbsp;relaksem. Zarezerwuj swój czas dla siebie.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-dark transition-colors animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Zarezerwuj na Booksy
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
