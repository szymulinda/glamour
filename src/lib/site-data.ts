export const BUSINESS_NAME = "Glamour Kosmetik";
export const CITY = "Opole";
export const SITE_ORIGIN = "https://glamourkosmetik.pl";
export const OG_IMAGE = `${SITE_ORIGIN}/assets/logo.webp`;
export const BOOKSY_URL =
  "https://booksy.com/pl-pl/232184_glamour-kosmetik_salon-kosmetyczny_12930_opole#ba_s=seo";

export const POSTAL_ADDRESS = {
  streetAddress: "ul. Partyzancka 37",
  addressLocality: CITY,
  postalCode: "45-801",
  addressCountry: "PL",
} as const;

export const GEO_COORDINATES = {
  latitude: 50.6756,
  longitude: 17.9147,
} as const;

export const GLOBAL_METADATA = {
  title: {
    default: `Kosmetologia Premium ${CITY} | ${BUSINESS_NAME}`,
    template: `%s | Kosmetologia Premium ${CITY} | ${BUSINESS_NAME}`,
  },
  description:
    "Salon kosmetologii hi-tech w Opolu: zabiegi bez skalpela, laseroterapia, modelowanie sylwetki i medycyna estetyczna. Umów wizytę online.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: BUSINESS_NAME,
    image: OG_IMAGE,
  },
} as const;

export const buildPageTitle = (topic: string) =>
  `${topic} | Kosmetologia Premium ${CITY} | ${BUSINESS_NAME}`;

export const buildPageUrl = (path: string) =>
  `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;

export type CatalogSection = {
  name: string;
  slug: string;
  description: string;
  services: string[];
  medical?: boolean;
};

export const OFFER_CATALOG_SECTIONS: CatalogSection[] = [
  {
    name: "Kosmetologia Estetyczna & Twarzy",
    slug: "kosmetologia-estetyczna",
    description:
      "Zaawansowane zabiegi odmładzające i regenerujące twarzy z wykorzystaniem technologii hi-tech bez skalpela.",
    services: [
      "Wodorowe oczyszczanie twarzy",
      "Mezoterapia mikroigłowa",
      "RF Radiofrekwencja Mikroigłowa",
      "Eksfoliacja kwasami",
    ],
  },
  {
    name: "Medycyna Estetyczna",
    slug: "medycyna-estetyczna",
    description:
      "Lekarskie zabiegi estetyczne z certyfikowanymi preparatami i naturalnym efektem bez przerysowania.",
    services: [
      "Konsultacja medycyny estetycznej",
      "Botoks",
      "Bruksizm",
    ],
    medical: true,
  },
  {
    name: "Modelowanie Sylwetki",
    slug: "modelowanie-sylwetki",
    description:
      "Nieinwazyjne modelowanie sylwetki i redukcja tkanki tłuszczowej technologiami premium.",
    services: ["Endomasaż Magnifico II Premium", "Liposukcja kawitacyjna"],
  },
  {
    name: "Laseroterapia",
    slug: "laseroterapia",
    description:
      "Epilacja laserowa, peeling węglowy i usuwanie przebarwień na sprzęcie klasy medycznej.",
    services: [
      "Epilacja laserowa",
      "Laserowy Peeling Węglowy",
      "Laserowe odmładzanie Resurfacing",
      "Laserowe usuwanie przebarwień",
    ],
  },
  {
    name: "Strefa Beauty",
    slug: "strefa-beauty",
    description:
      "Stylizacja paznokci, pedicure leczniczy oraz laminacja brwi i rzęs.",
    services: [
      "Stylizacja paznokci",
      "Pedicure",
      "Stylizacja brwi i rzęs",
    ],
  },
];

export const HOME_PAGE_SEO = {
  title: GLOBAL_METADATA.title.default,
  description: GLOBAL_METADATA.description,
  path: "/",
};

export const TREATMENTS_PAGE_SEO = {
  title: buildPageTitle("Zabiegi kosmetologiczne"),
  description:
    "Katalog zabiegów hi-tech w Opolu: kosmetologia, laser, modelowanie i medycyna estetyczna bez skalpela. Umów wizytę w Glamour Kosmetik.",
  path: "/zabiegi",
};

export const PRICING_PAGE_SEO = {
  title: buildPageTitle("Cennik"),
  description:
    "Przejrzysty cennik zabiegów kosmetologicznych i laserowych w Opolu. Rezerwuj wizytę online w Glamour Kosmetik.",
  path: "/cennik",
};

export const NOT_FOUND_PAGE_SEO = {
  title: buildPageTitle("Strona nie znaleziona"),
  description: "Strona nie istnieje. Wróć na stronę główną Glamour Kosmetik w Opolu.",
  path: "",
  noindex: true,
};
