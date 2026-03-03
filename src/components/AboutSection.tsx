import aboutSalon from "@/assets/about-salon.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Zdjęcie: zwiększona wysokość i efekt zoom */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-xl">
            <img
              src={aboutSalon}
              alt="Wnętrze salonu Glamour Kosmetik"
              className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              O nas
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Pasja poparta wiedzą.
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              W&nbsp;Glamour Kosmetik wierzymy, że każda cera zasługuje na indywidualne
              podejście. Nasz zespół to dyplomowani specjaliści, którzy nieustannie
              podnoszą swoje kwalifikacje, by dostarczać efekty, o&nbsp;jakich marzysz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;