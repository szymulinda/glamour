import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Activity, Zap, Heart } from "lucide-react";
import treatmentFace from "@/assets/treatment-face.jpeg";
import treatmentBody from "@/assets/treatment-body.jpeg";
import treatmentLaser from "@/assets/treatment-laser.jpeg";
import treatmentBeauty from "@/assets/treatment-beauty.jpg";

const treatments = [
  {
    title: "Kosmetologia Estetyczna & Twarzy",
    description:
      "Zaawansowane zabiegi odmładzające i regenerujące, które przywracają skórze twarzy naturalny blask. Wykorzystujemy najnowsze technologie, aby Twoja cera wyglądała promiennie i młodo.",
    icon: Sparkles,
    image: treatmentFace,
    services: [
      "Wodorowe oczyszczanie twarzy",
      "Mezoterapia mikroigłowa",
      "RF Radiofrekwencja Mikroigłowa",
      "Eksfoliacja kwasami",
    ],
  },
  {
    title: "Modelowanie Sylwetki",
    description:
      "Nowoczesne technologie wspierające redukcję tkanki tłuszczowej i ujędrnianie ciała. Nasze zabiegi pomogą Ci osiągnąć wymarzoną sylwetkę bez inwazyjnych procedur.",
    icon: Activity,
    image: treatmentBody,
    services: [
      "Endomasaż Magnifico II Premium",
      "Liposukcja kawitacyjna",
    ],
  },
  {
    title: "Laseroterapia",
    description:
      "Precyzyjne zabiegi laserowe wykonywane na najwyższej klasy sprzęcie. Epilacja, peeling węglowy, usuwanie przebarwień — bezpiecznie i skutecznie.",
    icon: Zap,
    image: treatmentLaser,
    services: [
      "Epilacja laserowa",
      "Laserowy Peeling Węglowy",
      "Laserowe odmładzanie Resurfacing",
      "Laserowe usuwanie przebarwień",
    ],
  },
  {
    title: "Strefa Beauty",
    subtitle: "Paznokcie, Brwi, Rzęsy",
    description:
      "Profesjonalna stylizacja paznokci, pedicure leczniczy oraz laminacja brwi i przedłużanie rzęs. Zadbaj o każdy detal swojego wyglądu.",
    icon: Heart,
    image: treatmentBeauty,
    services: [
      "Stylizacja paznokci",
      "Pedicure",
      "Stylizacja brwi i rzęs",
    ],
  },
];

const BOOKSY_URL = "https://booksy.com/pl-pl/232184_glamour-kosmetik_salon-kosmetyczny_12930_opole#ba_s=seo";

const Treatments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Nasze zabiegi
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-foreground">
            Zabiegi
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl space-y-20 md:space-y-28">
          {treatments.map((t, index) => (
            <div
              key={t.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-14 items-center`}
            >
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-[300px] md:h-[420px] object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <t.icon className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                    {t.title}
                  </h2>
                </div>
                {t.subtitle && (
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-3">
                    {t.subtitle}
                  </p>
                )}
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {t.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {t.services.map((s) => (
                    <li
                      key={s}
                      className="font-body text-sm text-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-dark transition-colors"
                >
                  Umów wizytę
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treatments;
