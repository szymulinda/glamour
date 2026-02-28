import { useState } from "react";

const BOOKSY_URL = "https://booksy.com";

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

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("twarz");

  const activeGroup = serviceGroups.find((g) => g.id === activeTab)!;

  return (
    <section id="cennik" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Cennik & Usługi</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Cennik
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveTab(g.id)}
              className={`font-body text-sm tracking-wider px-6 py-2.5 rounded transition-all duration-300 ${
                activeTab === g.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Service list */}
        <div className="animate-fade-in" key={activeTab}>
          {activeGroup.services.map((s, i) => (
            <div
              key={s.name}
              className={`flex items-center justify-between py-5 ${
                i < activeGroup.services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="font-body text-sm md:text-base text-foreground">{s.name}</span>
              <div className="flex items-center gap-4 md:gap-6 shrink-0 ml-4">
                <span className="font-body text-sm font-medium text-primary">{s.price}</span>
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
    </section>
  );
};

export default PricingSection;
