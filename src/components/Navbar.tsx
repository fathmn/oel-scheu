import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Ablauf", href: "#ablauf" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Oel-Scheu GmbH" className="h-14 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4974452560"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Beratung anfragen
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4974452560"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold w-full justify-center"
          >
            <Phone className="w-4 h-4" />
            Beratung anfragen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
