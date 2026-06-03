import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_ORIGIN = "https://glamourkosmetik.pl";
const publicDir = resolve(process.cwd(), "public");
const lastmod = new Date().toISOString().slice(0, 10);

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/zabiegi", changefreq: "weekly", priority: "0.9" },
  { path: "/cennik", changefreq: "weekly", priority: "0.9" },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${SITE_ORIGIN}${entry.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robotsTxt = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;

writeFileSync(resolve(publicDir, "sitemap.xml"), sitemapXml);
writeFileSync(resolve(publicDir, "robots.txt"), robotsTxt);
