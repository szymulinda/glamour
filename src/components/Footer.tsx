import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import footerBg from "@/assets/image.webp";
import logo from "@/assets/logo.png";

const BOOKSY_URL = "https://booksy.com/pl-pl/232184_glamour-kosmetik_salon-kosmetyczny_12930_opole#ba_s=seo";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={footerBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-16 text-center">
            {/* Zwiększone logo: z h-24 na h-28/h-32 */}
<img 
              src={logo} 
              alt="Glamour Kosmetik" 
              className="h-28 md:h-32 w-auto mx-auto mb-4" 
            />
            <p className="font-body text-sm text-primary-foreground/60 max-w-md mx-auto leading-relaxed">
              Witaj w świecie piękna Glamour Kosmetik, gdzie piękno spotyka się z relaksem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
            <div>
              <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary">
                Nawigacja
              </h4>
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
                  <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                    Rezerwacja online
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary">
                Kontakt
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  ul. Partyzancka 37, 45-801 Opole  
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  +48 794 042 087
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  kontakt@glamourkosmetik.pl
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-primary">
                Social Media
              </h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/glamourkosmetikopole?utm_source=qr" aria-label="Instagram" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:border-primary hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/glamourkosmetikopole/?ref=NONE_xav_ig_profile_page_web#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:border-primary hover:text-primary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
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