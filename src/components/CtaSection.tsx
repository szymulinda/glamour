const BOOKSY_URL = "https://booksy.com/pl-pl/232184_glamour-kosmetik_salon-kosmetyczny_12930_opole#ba_s=seo";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
          Pozwól sobie na chwilę luksusu.
        </h2>
        <p className="font-body text-base text-muted-foreground mb-10">
          Znajdź wolny termin i&nbsp;zarezerwuj wizytę online.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-dark transition-colors"
        >
          Przejdź do Booksy
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
