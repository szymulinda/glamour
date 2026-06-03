import AppLayout from "@/components/AppLayout";
import OptimizedImage from "@/components/OptimizedImage";
import { Sparkles, Stethoscope, Activity, Zap, Heart } from "lucide-react";
import treatmentFace from "@/assets/kosmeto.webp";
import treatmentAestheticMedicine from "@/assets/treatment-aesthetic-medicine.webp";
import treatmentBody from "@/assets/treatment-body.webp";
import treatmentLaser from "@/assets/laser.webp";
import treatmentBeauty from "@/assets/beauty.webp";
import AnimatedPage from "@/components/Animated";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  JsonLd,
  buildOfferCatalogItems,
  buildPersonSchema,
  buildPhysicianSchema,
  buildTreatmentProcedureSchema,
  usePageSeo,
} from "@/lib/seo";
import {
  BUSINESS_NAME,
  CITY,
  OFFER_CATALOG_SECTIONS,
  SITE_ORIGIN,
  TREATMENTS_PAGE_SEO,
  buildPageUrl,
} from "@/lib/site-data";

type Treatment = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: string;
  services: string[];
  subtitle?: string;
  imageAlt?: string;
  imageClassName?: string;
  medical?: boolean;
};

const treatments: Treatment[] = [
  {
    title: "Kosmetologia Estetyczna & Twarzy",
    slug: "kosmetologia-estetyczna",
    description:
      "Zaawansowane zabiegi odmładzające i regenerujące, które przywracają skórze twarzy naturalny blask. Wykorzystujemy najnowsze technologie, aby Twoja cera wyglądała promiennie i młodo.",
    icon: Sparkles,
    image: treatmentFace,
    imageAlt:
      "Kosmetologia estetyczna twarzy — wodorowe oczyszczanie, mezoterapia mikroigłowa i RF, Glamour Kosmetik Opole",
    services: [
      "Wodorowe oczyszczanie twarzy",
      "Mezoterapia mikroigłowa",
      "RF Radiofrekwencja Mikroigłowa",
      "Eksfoliacja kwasami",
    ],
  },
  {
    title: "Medycyna Estetyczna",
    slug: "medycyna-estetyczna",
    subtitle: "Lek. med. Jarosław Głowacki",
    description:
      "Lekarskie zabiegi estetyczne prowadzone przez specjalistę ginekologii i położnictwa z ponad 12-letnim doświadczeniem. Indywidualne konsultacje i certyfikowane preparaty — dla naturalnego, harmonijnego efektu bez przerysowania. Przyjęcia: środy.",
    icon: Stethoscope,
    image: treatmentAestheticMedicine,
    imageAlt:
      "Lek. med. Jarosław Głowacki — medycyna estetyczna, botoks i leczenie bruksizmu, Opole",
    imageClassName: "object-top",
    medical: true,
    services: [
      "Konsultacja medycyny estetycznej",
      "Botoks",
      "Bruksizm",
    ],
  },
  {
    title: "Modelowanie Sylwetki",
    slug: "modelowanie-sylwetki",
    description:
      "Nowoczesne technologie wspierające redukcję tkanki tłuszczowej i ujędrnianie ciała. Nasze zabiegi pomogą Ci osiągnąć wymarzoną sylwetkę bez inwazyjnych procedur.",
    icon: Activity,
    image: treatmentBody,
    imageAlt:
      "Modelowanie sylwetki bez skalpela — endomasaż Magnifico II Premium i liposukcja kawitacyjna, Opole",
    services: [
      "Endomasaż Magnifico II Premium",
      "Liposukcja kawitacyjna",
    ],
  },
  {
    title: "Laseroterapia",
    slug: "laseroterapia",
    description:
      "Precyzyjne zabiegi laserowe wykonywane na najwyższej klasy sprzęcie. Epilacja, peeling węglowy, usuwanie przebarwień — bezpiecznie i skutecznie.",
    icon: Zap,
    image: treatmentLaser,
    imageAlt:
      "Laseroterapia — epilacja laserowa, peeling węglowy i usuwanie przebarwień, Glamour Kosmetik Opole",
    services: [
      "Epilacja laserowa",
      "Laserowy Peeling Węglowy",
      "Laserowe odmładzanie Resurfacing",
      "Laserowe usuwanie przebarwień",
    ],
  },
  {
    title: "Strefa Beauty",
    slug: "strefa-beauty",
    subtitle: "Paznokcie, Brwi, Rzęsy",
    description:
      "Profesjonalna stylizacja paznokci, pedicure leczniczy oraz laminacja brwi i przedłużanie rzęs. Zadbaj o każdy detal swojego wyglądu.",
    icon: Heart,
    image: treatmentBeauty,
    imageAlt:
      "Strefa beauty — stylizacja paznokci, pedicure leczniczy, laminacja brwi i rzęs, Opole",
    services: [
      "Stylizacja paznokci",
      "Pedicure",
      "Stylizacja brwi i rzęs",
    ],
  },
];

const BOOKSY_URL =
  "https://booksy.com/pl-pl/232184_glamour-kosmetik_salon-kosmetyczny_12930_opole#ba_s=seo";

const Treatments = () => {
  usePageSeo(TREATMENTS_PAGE_SEO);
  const pageUrl = buildPageUrl(TREATMENTS_PAGE_SEO.path);

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HealthAndBeautyBusiness", "BeautySalon"],
        "@id": `${SITE_ORIGIN}/#business`,
        name: BUSINESS_NAME,
        url: buildPageUrl("/"),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Katalog zabiegów ${BUSINESS_NAME}`,
          itemListElement: buildOfferCatalogItems(OFFER_CATALOG_SECTIONS),
        },
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: TREATMENTS_PAGE_SEO.title,
        description: TREATMENTS_PAGE_SEO.description,
        inLanguage: "pl-PL",
        about: { "@id": `${SITE_ORIGIN}/#business` },
      },
      buildPersonSchema(),
      buildPhysicianSchema(pageUrl),
      ...OFFER_CATALOG_SECTIONS.map((section) =>
        buildTreatmentProcedureSchema(section, pageUrl),
      ),
    ],
  };

  return (
    <AnimatedPage>
      <AppLayout>
        <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Nasze zabiegi
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-foreground">
              Kosmetologia premium — zabiegi w {CITY}
            </h1>
          </div>
        </header>

        <section
          className="py-16 md:py-24 bg-background"
          aria-label="Katalog zabiegów Glamour Kosmetik Opole"
        >
          <div className="container mx-auto px-4 max-w-6xl space-y-20 md:space-y-28">
            {treatments.map((t, index) => (
              <motion.article
                id={t.slug}
                key={t.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`scroll-mt-24 md:scroll-mt-28 flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-14 items-center`}
              >
                <figure className="w-full lg:w-1/2 overflow-hidden rounded-lg">
                  <OptimizedImage
                    src={t.image}
                    alt={t.imageAlt ?? t.title}
                    priority={index === 0}
                    className={`w-full h-[450px] md:h-[600px] object-cover transition-transform duration-500 hover:scale-105 ${t.imageClassName ?? ""}`}
                  />
                </figure>

                <section className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <t.icon
                      className="w-6 h-6 text-primary"
                      aria-hidden="true"
                    />
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
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                          aria-hidden="true"
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Umów wizytę na ${t.title} w ${BUSINESS_NAME} ${CITY} — rezerwacja Booksy`}
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-dark transition-colors"
                  >
                    Umów wizytę
                  </a>
                </section>
              </motion.article>
            ))}
          </div>
        </section>

      </AppLayout>
      <JsonLd data={pageStructuredData} />
    </AnimatedPage>
  );
};

export default Treatments;
