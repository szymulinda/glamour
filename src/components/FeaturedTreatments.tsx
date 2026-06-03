import { Link } from "react-router-dom";
import { Sparkles, Activity, Zap } from "lucide-react";
import { BUSINESS_NAME, CITY } from "@/lib/site-data";

const treatments = [
  {
    title: "Kosmetologia Estetyczna",
    icon: Sparkles,
    slug: "kosmetologia-estetyczna",
  },
  {
    title: "Modelowanie Sylwetki",
    icon: Activity,
    slug: "modelowanie-sylwetki",
  },
  {
    title: "Laseroterapia",
    icon: Zap,
    slug: "laseroterapia",
  },
];

const FeaturedTreatments = () => {
  return (
    <section
      className="py-24 md:py-32 bg-background"
      aria-labelledby="featured-treatments-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Wyróżnione zabiegi
          </p>
          <h2
            id="featured-treatments-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground"
          >
            Nasze specjalizacje
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {treatments.map((t) => (
            <article
              key={t.title}
              className="group bg-card rounded-lg border border-border p-10 text-center hover:border-primary/40 transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <t.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-6">
                {t.title}
              </h3>
              <Link
                to={`/zabiegi#${t.slug}`}
                aria-label={`Dowiedz się więcej o ${t.title} — ${BUSINESS_NAME} ${CITY}`}
                className="font-body text-sm text-primary tracking-wide hover:underline underline-offset-4 transition-colors"
              >
                Dowiedz się więcej →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
