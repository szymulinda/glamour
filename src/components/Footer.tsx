import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">
              Glamour <span className="text-primary">Kosmetik</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Twoje miejsce piękna i&nbsp;relaksu w&nbsp;samym sercu miasta.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-4 text-primary">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                ul. Przykładowa 12, 00-001 Warszawa
              </li>
              <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +48 123 456 789
              </li>
              <li className="flex items-center gap-3 text-sm font-body text-primary-foreground/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                kontakt@glamourkosmetik.pl
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-4 text-primary">Social Media</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40 tracking-wider">
            © {new Date().getFullYear()} Glamour Kosmetik. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
