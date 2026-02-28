import { Link } from "react-router-dom";
import { Sparkles, Activity, Zap } from "lucide-react";

const treatments = [
  {
    title: "Kosmetologia Estetyczna",
    icon: Sparkles,
  },
  {
    title: "Modelowanie Sylwetki",
    icon: Activity,
  },
  {
    title: "Laseroterapia",
    icon: Zap,
  },
];

const FeaturedTreatments = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Wyróżnione zabiegi
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Nasze specjalizacje
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="group bg-card rounded-lg border border-border p-10 text-center hover:border-primary/40 transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <t.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-6">
                {t.title}
              </h3>
              <Link
                to="/zabiegi"
                className="font-body text-sm text-primary tracking-wide hover:underline underline-offset-4 transition-colors"
              >
                Dowiedz się więcej →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
