import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import footerBg from "@/assets/image.webp";
import logo from "@/assets/logo.webp";
import OptimizedImage from "@/components/OptimizedImage";
import { BOOKSY_URL, BUSINESS_NAME, CITY } from "@/lib/site-data";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src={footerBg}
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-16 text-center">
            <OptimizedImage
              src={logo}
              alt={`Logo ${BUSINESS_NAME} — salon kosmetyczny ${CITY}`}
              className="h-28 md:h-32 w-auto mx-auto mb-4"
            />
            <p className="font-body text-sm text-primary-foreground/60 max-w-md mx-auto leading-relaxed">
              Witaj w świecie piękna Glamour Kosmetik, gdzie piękno spotyka się z relaksem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
            <nav aria-labelledby="footer-nav-heading">
              <h2
                id="footer-nav-heading"
                className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary"
              >
                Nawigacja
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="font-body text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                    Strona Główna
                  </Link>
                </li>
                <li>
                  <Link to="/zabiegi" className="font-body text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                    Zabiegi
                  </Link>
                </li>
                <li>
                  <Link to="/cennik" className="font-body text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                    Cennik
                  </Link>
                </li>
                <li>
                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Rezerwacja online ${BUSINESS_NAME} ${CITY}`}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    Rezerwacja online
                  </a>
                </li>
              </ul>
            </nav>

            <address className="not-italic">
              <h2 className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary">
                Kontakt
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                  <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  ul. Partyzancka 37, 45-801 Opole
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                  <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <a href="tel:+48794042087" aria-label="Zadzwoń do Glamour Kosmetik">
                    +48 794 042 087
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                  <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <a href="mailto:kontakt@glamourkosmetik.pl" aria-label="Wyślij e-mail do Glamour Kosmetik">
                    kontakt@glamourkosmetik.pl
                  </a>
                </li>
              </ul>
            </address>

            <section aria-labelledby="footer-social-heading">
              <h2
                id="footer-social-heading"
                className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary"
              >
                Social Media
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/glamourkosmetikopole?utm_source=qr"
                  aria-label="Instagram Glamour Kosmetik Opole"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:border-primary hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/glamourkosmetikopole/?ref=NONE_xav_ig_profile_page_web#"
                  aria-label="Facebook Glamour Kosmetik Opole"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:border-primary hover:text-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </section>
          </div>

          <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center">
            <p className="font-body text-xs text-primary-foreground/40 tracking-wider">
              © {new Date().getFullYear()} Glamour Kosmetik. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
