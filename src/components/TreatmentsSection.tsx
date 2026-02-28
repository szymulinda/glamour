import { Sparkles, Activity, Zap, Heart } from "lucide-react";
import treatmentFace from "@/assets/treatment-face.jpg";
import treatmentBody from "@/assets/treatment-body.jpg";
import treatmentLaser from "@/assets/treatment-laser.jpg";
import treatmentBeauty from "@/assets/treatment-beauty.jpg";

const treatments = [
  {
    title: "Kosmetologia Estetyczna & Twarzy",
    description: "Zaawansowane zabiegi odmładzające, oczyszczające i regenerujące skórę twarzy.",
    icon: Sparkles,
    image: treatmentFace,
  },
  {
    title: "Modelowanie Sylwetki",
    description: "Nowoczesne technologie wspierające redukcję tkanki tłuszczowej i ujędrnianie ciała.",
    icon: Activity,
    image: treatmentBody,
  },
  {
    title: "Laseroterapia",
    description: "Precyzyjne zabiegi laserowe: epilacja, peeling węglowy, usuwanie przebarwień.",
    icon: Zap,
    image: treatmentLaser,
  },
  {
    title: "Strefa Beauty",
    subtitle: "Paznokcie, Brwi, Rzęsy",
    description: "Stylizacja paznokci, pedicure, laminacja brwi i przedłużanie rzęs.",
    icon: Heart,
    image: treatmentBeauty,
  },
];

const TreatmentsSection = () => {
  return (
    <section id="zabiegi" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Nasze zabiegi</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Zabiegi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <t.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground">
                    {t.title}
                  </h3>
                </div>
                {t.subtitle && (
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">{t.subtitle}</p>
                )}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
