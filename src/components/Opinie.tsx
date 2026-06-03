import { Star, ExternalLink } from "lucide-react";
import { BOOKSY_URL, BUSINESS_NAME, CITY } from "@/lib/site-data";

interface Review {
  name: string;
  service: string;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Karina",
    service: "Manicure hybrydowy u Patrycji",
    date: "3 marca 2026",
    text: "W końcu znalazłam salon i osobę, która naprawdę mnie rozumie! Pani Basia cierpliwie doradza, a Pani Patrycja wykonuje przepiękne paznokcie hybrydowe. Wychodzę stamtąd zawsze z uśmiechem. Polecam z całego serca!",
  },
  {
    name: "Małgorzata",
    service: "Wodorowe oczyszczanie twarzy z kwasami",
    date: "30 października 2025",
    text: "Jestem zachwycona wizytą. Pani Basia na bieżąco tłumaczyła każdy etap zabiegu i uczciwie doradziła, co warto wykonać. Z całego serca doceniam takie podejście. Na pewno nie była to ostatnia wizyta.",
  },
  {
    name: "Karina",
    service: "Peeling kawitacyjny twarzy",
    date: "19 marca 2026",
    text: "Bardzo polecam wizytę u pani kosmetolog Basi! Niezwykle uczciwa, rzetelna i skrupulatna – zawsze profesjonalnie doradzi. W salonie panuje cudowna, domowa atmosfera. Zdecydowanie miejsce warte odwiedzenia!",
  },
  {
    name: "Izabela",
    service: "Manicure hybrydowy u Martyny",
    date: "2 października 2025",
    text: "W Glamour Kosmetik byłam pierwszy raz i nie zawiodłam się. Pani Patrycja zrobiła przepiękny manicure – bardzo dokładnie i starannie. Zostałam też miło i przyjaźnie przyjęta w salonie. Dziękuję serdecznie!",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5 mb-4" role="img" aria-label="Ocena pięć na pięć gwiazdek">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 fill-primary text-primary"
        aria-hidden="true"
      />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <article className="flex flex-col bg-background border border-border/40 rounded-lg p-7 h-full">
    <StarRating />
    <blockquote className="font-body text-sm text-foreground/80 leading-relaxed italic flex-1 mb-6">
      &ldquo;{review.text}&rdquo;
    </blockquote>
    <footer className="border-t border-border/30 pt-5">
      <p className="font-heading text-base font-medium text-foreground">
        {review.name}
      </p>
      <p className="font-body text-xs text-primary mt-0.5 tracking-wide">
        {review.service}
      </p>
      <time
        dateTime={review.date}
        className="font-body text-xs text-muted-foreground mt-1 block"
      >
        {review.date}
      </time>
    </footer>
  </article>
);

const ReviewsSection = () => {
  return (
    <section
      className="py-24 md:py-32 bg-background"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Opinie klientek
          </p>
          <h2
            id="reviews-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 leading-tight"
          >
            Co mówią o nas nasze klientki
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Zweryfikowane opinie z&nbsp;platformy Booksy
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {reviews.map((review) => (
            <ReviewCard key={`${review.name}-${review.date}`} review={review} />
          ))}
        </div>

        <div className="text-center">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Więcej opinii o ${BUSINESS_NAME} ${CITY} na Booksy`}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-primary text-primary font-body text-sm font-semibold tracking-widest uppercase rounded hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Więcej opinii na Booksy
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
