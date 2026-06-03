import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { JsonLd, usePageSeo } from "@/lib/seo";
import { NOT_FOUND_PAGE_SEO } from "@/lib/site-data";

const NotFound = () => {
  const location = useLocation();

  usePageSeo({
    ...NOT_FOUND_PAGE_SEO,
    path: location.pathname,
    noindex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          className="text-primary underline hover:text-primary/90"
          aria-label="Wróć na stronę główną Glamour Kosmetik"
        >
          Return to Home
        </Link>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: NOT_FOUND_PAGE_SEO.title,
          description: NOT_FOUND_PAGE_SEO.description,
        }}
      />
    </main>
  );
};

export default NotFound;
