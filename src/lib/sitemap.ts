import { SITE_ORIGIN } from "@/lib/site-data";

export type SitemapEntry = {
  path: string;
  changefreq: "weekly" | "monthly";
  priority: string;
};

export const SITEMAP_ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/zabiegi", changefreq: "weekly", priority: "0.9" },
  { path: "/cennik", changefreq: "weekly", priority: "0.9" },
];

export const generateSitemapXml = (lastmod = new Date().toISOString().slice(0, 10)) => {
  const urls = SITEMAP_ENTRIES.map(
    (entry) => `  <url>
    <loc>${SITE_ORIGIN}${entry.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};
