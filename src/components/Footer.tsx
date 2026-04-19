import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-industrial border-t-0 py-14">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12">
        <div>
          <h4 className="font-semibold text-industrial-foreground mb-4 text-sm uppercase tracking-wider">
            Produktportfolio
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Kühlschmierstoffe", "/produkte/kuehlschmierstoffe"],
              ["Filtrationsprogramm", "/produkte/filtrationsprogramm"],
              ["Reiniger", "/produkte/reiniger"],
              ["Korrosionsschutz", "/produkte/korrosionsschutz"],
              ["Wärmebehandlung", "/produkte/waermebehandlung"],
              ["Fluid-Management", "/produkte/fluid-management"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-industrial-foreground/60 hover:text-industrial-foreground transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-industrial-foreground mb-4 text-sm uppercase tracking-wider">
            Sortiment / Leistungen
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Gleit- & Bettbahnöle", "/produkte/gleit-bettbahnoele"],
              ["Hydrauliköle", "/produkte/hydraulikoele"],
              ["Fette", "/produkte/fette"],
              ["Automotive Schmierstoffe", "/produkte/automotive"],
              ["Hautschutzprogramm", "/produkte/hautschutz"],
              ["Schmierstoffe", "/produkte/schmierstoffe"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-industrial-foreground/60 hover:text-industrial-foreground transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-industrial-foreground mb-4 text-sm uppercase tracking-wider">
            Unternehmen
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Leitbild", "/unternehmen/leitbild"],
              ["Historie", "/unternehmen/historie"],
              ["Team", "/unternehmen/team"],
              ["Stellenangebote", "/unternehmen/stellenangebote"],
              ["Zertifikate", "/zertifikate"],
              ["Kontakt", "/kontakt"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-industrial-foreground/60 hover:text-industrial-foreground transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-industrial-foreground mb-4 text-sm uppercase tracking-wider">
            Kontakt
          </h4>
          <ul className="space-y-3 text-sm text-industrial-foreground/60">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                Zeppelinstraße 13
                <br />
                72285 Pfalzgrafenweiler
              </span>
            </li>
            <li>
              <a
                href="tel:+4974452560"
                className="flex items-center gap-2 hover:text-industrial-foreground transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +49 7445 2560
              </a>
            </li>
            <li>
              <a
                href="mailto:info@oelscheu.de"
                className="flex items-center gap-2 hover:text-industrial-foreground transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                info@oelscheu.de
              </a>
            </li>
            <li>
              <a
                href="https://de.linkedin.com/company/oelscheu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-industrial-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0" />
                LinkedIn
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="font-semibold text-industrial-foreground mb-2 text-sm uppercase tracking-wider">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Impressum", "/impressum"],
                ["Datenschutz", "/datenschutz"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-industrial-foreground/60 hover:text-industrial-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-industrial-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/">
          <img src={logo} alt="Oel-Scheu GmbH" className="h-8 w-auto opacity-70" />
        </Link>
        <p className="text-xs text-industrial-foreground/40">
          © {new Date().getFullYear()} Oel-Scheu GmbH. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
