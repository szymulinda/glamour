import aboutSalon from "@/assets/about-salon.webp";
import OptimizedImage from "@/components/OptimizedImage";
import { JsonLd, buildPersonSchema } from "@/lib/seo";
import { BUSINESS_NAME, CITY } from "@/lib/site-data";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <article className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          <figure className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
            <OptimizedImage
              src={aboutSalon}
              alt={`Barbara Maślak — właścicielka i kosmetolog ${BUSINESS_NAME}, ${CITY}`}
              className="w-full h-[500px] md:h-[650px] object-cover"
            />
          </figure>

          <section className="w-full lg:w-1/2">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              O nas
            </p>
            <h2
              id="about-heading"
              className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight"
            >
              Pasja poparta wiedzą.
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              W&nbsp;Glamour Kosmetik wierzymy, że każda cera zasługuje na indywidualne
              podejście. Nasz zespół to dyplomowani specjaliści, którzy nieustannie
              podnoszą swoje kwalifikacje, by dostarczać efekty, o&nbsp;jakich marzysz.
            </p>
          </section>
        </article>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [buildPersonSchema()],
        }}
      />
    </section>
  );
};

export default AboutSection;
