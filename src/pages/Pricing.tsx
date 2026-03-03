import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BOOKSY_URL = "https://booksy.com/pl-pl/232184_glamour-kosmetik_salon-kosmetyczny_12930_opole#ba_s=seo";

interface ServiceItem {
  name: string;
  price: string;
}

interface ServiceGroup {
  id: string;
  label: string;
  services: ServiceItem[];
}

const serviceGroups: ServiceGroup[] = [
  {
    id: "twarz",
    label: "Twarz",
    services: [
      { name: "Konsultacja", price: "Bezpłatna" },
      { name: "Wodorowe oczyszczanie twarzy", price: "od 200 PLN" },
      { name: "Mezoterapia mikroigłowa", price: "od 350 PLN" },
      { name: "RF - Radiofrekwencja Mikroigłowa termolifting", price: "od 400 PLN" },
      { name: "Eksfoliacja kwasami", price: "od 150 PLN" },
    ],
  },
  {
    id: "cialo",
    label: "Ciało",
    services: [
      { name: "Endomasaż - Magnifico II Premium", price: "od 180 PLN" },
      { name: "Liposukcja kawitacyjna - Magnifico II Premium", price: "od 200 PLN" },
    ],
  },
  {
    id: "laser",
    label: "Laser",
    services: [
      { name: "Epilacja laserowa", price: "od 100 PLN" },
      { name: "Laserowy Peeling Węglowy", price: "od 250 PLN" },
      { name: "Laserowe odmładzanie Resurfacing", price: "od 350 PLN" },
      { name: "Laserowe usuwanie przebarwień", price: "od 200 PLN" },
    ],
  },
  {
    id: "beauty",
    label: "Beauty",
    services: [
      { name: "Stylizacja paznokci", price: "od 80 PLN" },
      { name: "Pedicure", price: "od 100 PLN" },
      { name: "Stylizacja brwi i rzęs", price: "od 60 PLN" },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Cennik & Usługi
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-foreground">
            Cennik
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.id}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-px bg-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                  {group.label}
                </h2>
                <span className="flex-1 h-px bg-border" />
              </div>

              <div className="space-y-0">
                {group.services.map((s, i) => (
                  <div
                    key={s.name}
                    className={`flex items-center justify-between py-5 ${
                      i < group.services.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="font-body text-sm md:text-base text-foreground">
                      {s.name}
                    </span>
                    <div className="flex items-center gap-4 md:gap-8 shrink-0 ml-4">
                      <span className="font-body text-sm font-medium text-primary">
                        {s.price}
                      </span>
                      <a
                        href={BOOKSY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                      >
                        Rezerwuj
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
