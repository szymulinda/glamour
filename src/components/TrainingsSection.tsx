import { Award, Users, UserCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certyfikowane programy",
  },
  {
    icon: Users,
    title: "Praktyka na modelkach",
  },
  {
    icon: UserCheck,
    title: "Małe grupy",
  },
];

const TrainingsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
          Szkolenia
        </p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 leading-tight">
          Zostań Ekspertem – Szkolenia Glamour
        </h2>
        <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
          Dzielimy się wiedzą z&nbsp;najlepszymi. Prowadzimy profesjonalne szkolenia
          z&nbsp;zakresu nowoczesnej kosmetologii i&nbsp;stylizacji.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground">
                {f.title}
              </h3>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center px-10 py-4 border-2 border-primary text-primary font-body text-sm font-semibold tracking-widest uppercase rounded hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Poznaj ofertę szkoleń
        </a>
      </div>
    </section>
  );
};

export default TrainingsSection;
