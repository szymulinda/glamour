import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedPage from "@/components/Animated";
import { motion } from "framer-motion";

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
    id: "mezoterapia-mikroiglowa",
    label: "Mezoterapia mikroigłowa",
    services: [
      { name: "Mezoterapia mikroigłowa z kwasami BioRePeel3cl", price: "420 zł" },
      { name: "Mezoterapia mikroigłowa egzosomy", price: "500 zł" },
      { name: "Mezoterapia mikroigłowa skóry głowy", price: "400 zł+" },
      { name: "Glow Time Vit C", price: "399 zł" },
      { name: "Mezoterapia mikroigłowa Dermapen", price: "500 zł" },
    ],
  },
  {
    id: "kosmetologia-estetyczna",
    label: "Kosmetologia estetyczna",
    services: [
      { name: "Tropolift", price: "400 zł+" },
      { name: "Lifting twarzy - stymulator tkankowy", price: "950 zł" },
      { name: "Mezoterapia igłowa twarzy - stymulator", price: "400 zł+" },
      { name: "Mezoterapia igłowa skóry głowy", price: "400 zł+" },
      { name: "Mezoterapia igłowa tropokolagenem", price: "400 zł+" },
      { name: "Tropokolagen redukcja podbródka, chomików", price: "399 zł" },
      { name: "Koktajl Monte Carlo - twarz", price: "520 zł" },
    ],
  },
  {
    id: "oczyszczanie-wodorowe",
    label: "Oczyszczanie wodorowe",
    services: [
      { name: "Wodorowe oczyszczanie standard", price: "240 zł" },
      { name: "Wodorowe oczyszczanie z kwasami", price: "280 zł" },
      { name: "Wodorowe oczyszczanie premium", price: "350 zł" },
      { name: "Wodorowe oczyszczanie skóry głowy", price: "260 zł" },
      { name: "Wodorowe oczyszczanie twarzy z Dermapen", price: "600 zł" },
      { name: "Wodorowe oczyszczanie Hydrodetox Hair", price: "280 zł" },
    ],
  },
  {
    id: "ekstoliacja-kwasami",
    label: "Ekstoliacja kwasami",
    services: [
      { name: "Peeling chemiczny całoroczny", price: "320 zł" },
      { name: "Terapia kwasami", price: "220 zł+" },
      { name: "Azac Peel dla skóry z problemami", price: "250 zł" },
      { name: "Arkana kwasy", price: "250 zł" },
      { name: "Nano-needles", price: "320 zł" },
    ],
  },
  {
    id: "manicure",
    label: "Manicure",
    services: [
      { name: "Manicure hybrydowy", price: "140 zł" },
      { name: "Manicure żelowy", price: "160 zł" },
      { name: "Manicure japoński", price: "90 zł" },
      { name: "Ściągnięcie stylizacji", price: "90 zł" },
      { name: "Manicure biologiczny", price: "80 zł" },
      { name: "Manicure ByeBye", price: "90 zł" },
      { name: "Manicure klasyczny", price: "90 zł" },
    ],
  },
  {
    id: "pedicure",
    label: "Pedicure",
    services: [
      { name: "Pedicure hybrydowy", price: "160 zł" },
      { name: "Pedicure biologiczny", price: "110 zł" },
      { name: "Pedicure klasyczny z lakierem", price: "120 zł" },
      { name: "Pedicure tylko hybryda", price: "130 zł" },
      { name: "Pedicure męski", price: "130 zł" },
      { name: "Pedicure kwasowy", price: "180 zł" },
      { name: "Pedicure kwasowy z hybrydą", price: "230 zł" },
    ],
  },
  {
    id: "laserowy-peeling-weglowy",
    label: "Laserowy peeling węglowy",
    services: [
      { name: "Laserowy peeling węglowy - Twarz", price: "260 zł" },
      { name: "Laserowy peeling węglowy - Twarz Szyja", price: "300 zł" },
      { name: "Laserowy peeling węglowy - Twarz Szyja Dekolt", price: "350 zł" },
      { name: "Laserowy peeling węglowy - Dłonie", price: "200 zł" },
      { name: "Laserowy peeling węglowy - Plecy", price: "350 zł" },
    ],
  },
  {
    id: "laserowe-odmladzanie-resurfacing",
    label: "Laserowe odmładzanie resurfacing",
    services: [
      { name: "Laserowe odmładzanie - resurfacing twarz", price: "400 zł" },
      { name: "Laserowe odmładzanie - resurfacing twarz, szyja", price: "450 zł" },
      { name: "Laserowe odmładzanie - resurfacing twarz, szyja, dekolt", price: "550 zł" },
      { name: "Laserowe odmładzanie - resurfacing twarz, szyja + Black Doll", price: "700 zł" },
    ],
  },
  {
    id: "laserowe-usuwanie-przebarwien",
    label: "Laserowe usuwanie przebarwień",
    services: [
      { name: "Laserowe usuwanie przebarwień - pojedyncza zmiana", price: "170 zł" },
      { name: "Laserowe usuwanie przebarwień - czoło", price: "200 zł" },
      { name: "Laserowe usuwanie przebarwień - dekolt", price: "300 zł" },
      { name: "Laserowe usuwanie przebarwień - dłonie", price: "300 zł" },
      { name: "Laserowe usuwanie przebarwień - policzki", price: "250 zł" },
      { name: "Laserowe usuwanie przebarwień - twarz", price: "400 zł" },
      { name: "Laserowe usuwanie przebarwień - broda", price: "200 zł" },
    ],
  },
  {
    id: "laserowe-usuwanie-tatuazu",
    label: "Laserowe usuwanie tatuażu",
    services: [
      { name: "Tatuaż do 5x5 cm", price: "120 zł" },
      { name: "Tatuaż do 10x10 cm", price: "160 zł" },
      { name: "Tatuaż do A3", price: "280 zł" },
      { name: "Tatuaż do A4", price: "380 zł" },
      { name: "Makijaż permanentny", price: "200 zł" },
    ],
  },
  {
    id: "epilacja-laserowa-7-zabiegow",
    label: "Epilacja laserowa - 7 zabiegów",
    services: [
      { name: "Pachy", price: "1320 zł" },
      { name: "Uda", price: "1380 zł" },
      { name: "Wąsik", price: "600 zł" },
      { name: "Plecy", price: "1500 zł" },
      { name: "Klatka piersiowa", price: "1680 zł" },
      { name: "Łydki", price: "1380 zł" },
      { name: "Bikini klasyczne", price: "1200 zł" },
      { name: "Bikini głębokie", price: "1380 zł" },
      { name: "Całe nogi", price: "2520 zł" },
      { name: "Sutki", price: "720 zł" },
      { name: "Ramiona", price: "1320 zł" },
      { name: "Przedramiona", price: "1320 zł" },
      { name: "Linia brzucha", price: "720 zł" },
      { name: "Kark", price: "1380 zł" },
      { name: "Kolana", price: "720 zł" },
      { name: "Brzuch", price: "1200 zł" },
      { name: "Całe ręce", price: "2400 zł" },
      { name: "Broda", price: "1200 zł" },
      { name: "Broda i wąsik", price: "1680 zł" },
      { name: "Cała twarz", price: "2400 zł" },
      { name: "Odcinek lędźwiowy", price: "1200 zł" },
    ],
  },
];

const Pricing = () => {
  return (
    <AnimatedPage>
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
            {serviceGroups.map((group, groupIndex) => (
              <motion.div 
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-px bg-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-light text-foreground tracking-wide">
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
                      <span className="font-body text-sm md:text-base text-foreground tracking-tight">
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
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Pricing;