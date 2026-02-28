import { useState } from "react";
import { Menu, X } from "lucide-react";

const BOOKSY_URL = "https://booksy.com";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <button onClick={() => scrollTo("hero")} className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
          Glamour <span className="text-primary">Kosmetik</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("hero")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
            Strona Główna
          </button>
          <button onClick={() => scrollTo("zabiegi")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
            Zabiegi
          </button>
          <button onClick={() => scrollTo("cennik")} className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
            Cennik
          </button>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide rounded hover:bg-gold-dark transition-colors"
          >
            Umów wizytę
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-6 animate-fade-in">
          <nav className="flex flex-col gap-4 pt-2">
            <button onClick={() => scrollTo("hero")} className="font-body text-sm tracking-widest uppercase text-muted-foreground text-left">Strona Główna</button>
            <button onClick={() => scrollTo("zabiegi")} className="font-body text-sm tracking-widest uppercase text-muted-foreground text-left">Zabiegi</button>
            <button onClick={() => scrollTo("cennik")} className="font-body text-sm tracking-widest uppercase text-muted-foreground text-left">Cennik</button>
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide rounded">
              Umów wizytę
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
