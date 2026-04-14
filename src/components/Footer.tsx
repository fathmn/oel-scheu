import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-industrial border-t-0 py-14">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h4 className="font-semibold text-industrial-foreground mb-4 text-sm uppercase tracking-wider">
            Produktportfolio
          </h4>
          <ul className="space-y-2 text-sm text-industrial-foreground/60">
            <li>Kühlschmierstoffe</li>
            <li>Filtrationsprogramm</li>
            <li>Reiniger</li>
            <li>Spezialschmierstoffe</li>
            <li>Korrosionsschutz-Produkte</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-industrial-foreground mb-4 text-sm uppercase tracking-wider">
            Sortiment / Leistungen
          </h4>
          <ul className="space-y-2 text-sm text-industrial-foreground/60">
            <li>Härteöle / Abschreckmedien</li>
            <li>Gleit- und Bettbahnöle</li>
            <li>Hydrauliköle</li>
            <li>Fette</li>
            <li>Automotive Schmierstoffe</li>
            <li>Hautschutzprogramm</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-industrial-foreground mb-4 text-sm uppercase tracking-wider">
            Unternehmen
          </h4>
          <ul className="space-y-2 text-sm text-industrial-foreground/60">
            <li>Service</li>
            <li>Zertifikate</li>
            <li>Kontakt</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-industrial-foreground mb-4 text-sm uppercase tracking-wider">
            Rechtliches
          </h4>
          <ul className="space-y-2 text-sm text-industrial-foreground/60">
            <li>Impressum</li>
            <li>Datenschutz</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-industrial-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Oel-Scheu GmbH" className="h-8 w-auto opacity-70" />
        <p className="text-xs text-industrial-foreground/40">
          © {new Date().getFullYear()} Oel-Scheu GmbH. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
