import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const BOOKSY_URL = "https://booksy.com/pl-pl/232184_glamour-kosmetik_salon-kosmetyczny_12930_opole#ba_s=seo";

const navLinks = [
  { label: "Strona Główna", path: "/" },
  { label: "Zabiegi", path: "/zabiegi" },
  { label: "Cennik", path: "/cennik" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border supports-[backdrop-filter]:bg-background/90 supports-[backdrop-filter]:backdrop-blur-md overflow-visible">
      <div className="container mx-auto flex items-center justify-between min-h-16 md:min-h-20 px-4 py-2 md:py-3 gap-4">
        <Link to="/" className="flex flex-col items-start leading-none group py-2 shrink-0 min-w-0">
          <span className="text-gilded text-2xl md:text-4xl font-heading font-light transition-all duration-300 group-hover:brightness-125">
            Glamour Kosmetik
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm tracking-widest uppercase transition-colors relative group ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${location.pathname === link.path ? "scale-x-100" : ""}`} />
            </Link>
          ))}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/10"
          >
            Umów wizytę
          </a>
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-8 animate-fade-in">
          <nav className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-sm tracking-widest uppercase text-left ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium tracking-widest uppercase rounded-sm"
            >
              Umów wizytę
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;