import { useEffect } from "react";
import {
  BUSINESS_NAME,
  GEO_COORDINATES,
  OG_IMAGE,
  POSTAL_ADDRESS,
  SITE_ORIGIN,
  type CatalogSection,
} from "@/lib/site-data";

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

const upsertMeta = (
  selector: string,
  create: () => HTMLMetaElement | HTMLLinkElement,
  content: string,
) => {
  let element = document.head.querySelector(selector) as
    | HTMLMetaElement
    | HTMLLinkElement
    | null;
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

export const usePageSeo = ({
  title,
  description,
  path,
  noindex = false,
}: PageSeoConfig) => {
  useEffect(() => {
    const previousTitle = document.title;
    const canonicalUrl = path ? `${SITE_ORIGIN}${path}` : SITE_ORIGIN;
    document.title = title;

    upsertMeta(
      'meta[name="description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        return meta;
      },
      description,
    );

    upsertMeta(
      'meta[name="robots"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "robots");
        return meta;
      },
      noindex ? "noindex, follow" : "index, follow",
    );

    upsertMeta(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        return link;
      },
      canonicalUrl,
    );

    const ogTags: Array<{ property: string; content: string }> = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:site_name", content: BUSINESS_NAME },
    ];

    ogTags.forEach(({ property, content }) => {
      upsertMeta(
        `meta[property="${property}"]`,
        () => {
          const meta = document.createElement("meta");
          meta.setAttribute("property", property);
          return meta;
        },
        content,
      );
    });

    const twitterTags: Array<{ name: string; content: string }> = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ];

    twitterTags.forEach(({ name, content }) => {
      upsertMeta(
        `meta[name="${name}"]`,
        () => {
          const meta = document.createElement("meta");
          meta.setAttribute("name", name);
          return meta;
        },
        content,
      );
    });

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, path, noindex]);
};

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const buildBusinessAddress = () => ({
  "@type": "PostalAddress",
  ...POSTAL_ADDRESS,
});

export const buildGeo = () => ({
  "@type": "GeoCoordinates",
  latitude: GEO_COORDINATES.latitude,
  longitude: GEO_COORDINATES.longitude,
});

export const buildOfferCatalogItems = (sections: CatalogSection[]) =>
  sections.flatMap((section) =>
    section.services.map((serviceName) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": section.medical ? "MedicalProcedure" : "Service",
        name: serviceName,
        description: section.description,
        serviceType: section.name,
        provider: {
          "@type": "HealthAndBeautyBusiness",
          name: BUSINESS_NAME,
          address: buildBusinessAddress(),
        },
      },
    })),
  );

export const buildHomeStructuredData = (
  pageUrl: string,
  sections: CatalogSection[],
) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HealthAndBeautyBusiness", "BeautySalon", "MedicalClinic"],
      "@id": `${SITE_ORIGIN}/#business`,
      name: BUSINESS_NAME,
      url: SITE_ORIGIN,
      image: OG_IMAGE,
      priceRange: "$$",
      telephone: "+48794042087",
      email: "kontakt@glamourkosmetik.pl",
      address: buildBusinessAddress(),
      geo: buildGeo(),
      areaServed: { "@type": "City", name: POSTAL_ADDRESS.addressLocality },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Katalog zabiegów ${BUSINESS_NAME}`,
        itemListElement: buildOfferCatalogItems(sections),
      },
      founder: { "@id": `${SITE_ORIGIN}/#person` },
      employee: [
        { "@id": `${SITE_ORIGIN}/#person` },
        { "@id": `${SITE_ORIGIN}/#physician` },
      ],
    },
    buildPersonSchema(),
    buildPhysicianSchema(SITE_ORIGIN),
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: BUSINESS_NAME,
      publisher: { "@id": `${SITE_ORIGIN}/#business` },
      inLanguage: "pl-PL",
    },
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: BUSINESS_NAME,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#business` },
      inLanguage: "pl-PL",
    },
  ],
});

export const buildTreatmentProcedureSchema = (
  section: CatalogSection,
  pageUrl: string,
) => ({
  "@type": section.medical ? "MedicalProcedure" : "Service",
  name: section.name,
  description: section.description,
  url: `${pageUrl}#${section.slug}`,
  provider: {
    "@type": section.medical ? "MedicalClinic" : "HealthAndBeautyBusiness",
    name: BUSINESS_NAME,
    address: buildBusinessAddress(),
  },
  areaServed: POSTAL_ADDRESS.addressLocality,
});

export const buildPhysicianSchema = (pageUrl: string) => ({
  "@type": "Physician",
  "@id": `${SITE_ORIGIN}/#physician`,
  name: "Jarosław Głowacki",
  honorificPrefix: "Lek. med.",
  medicalSpecialty: "Medycyna estetyczna",
  worksFor: { "@id": `${SITE_ORIGIN}/#business` },
  url: `${pageUrl}#medycyna-estetyczna`,
});

export const buildPersonSchema = () => ({
  "@type": "Person",
  "@id": `${SITE_ORIGIN}/#person`,
  name: "Barbara Maślak",
  jobTitle: "Właścicielka salonu kosmetycznego",
  worksFor: { "@id": `${SITE_ORIGIN}/#business` },
  knowsAbout: [
    "Kosmetologia estetyczna",
    "Mezoterapia mikroigłowa",
    "Oczyszczanie wodorowe",
    "Trychologia",
  ],
});
