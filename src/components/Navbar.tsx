import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ShoppingCart } from "lucide-react";
import { useInquiryCart } from "@/context/InquiryCartContext";
import logo from "@/assets/logo.png";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Unternehmen",
    href: "/unternehmen",
    children: [
      { label: "Leitbild", href: "/unternehmen/leitbild" },
      { label: "Historie", href: "/unternehmen/historie" },
      { label: "Team", href: "/unternehmen/team" },
      { label: "Stellenangebote", href: "/unternehmen/stellenangebote" },
      { label: "Standort Deutschland", href: "/unternehmen/standort-deutschland" },
      { label: "Standort Schweiz", href: "/unternehmen/standort-schweiz" },
    ],
  },
  {
    label: "Produkte",
    href: "/produkte",
    children: [
      { label: "Fluid-Management", href: "/produkte/fluid-management" },
      { label: "Kühlschmierstoffe", href: "/produkte/kuehlschmierstoffe" },
      { label: "Filtrationsprogramm", href: "/produkte/filtrationsprogramm" },
      { label: "Reiniger", href: "/produkte/reiniger" },
      { label: "Korrosionsschutz", href: "/produkte/korrosionsschutz" },
      { label: "Wärmebehandlung", href: "/produkte/waermebehandlung" },
      { label: "Gleit- & Bettbahnöle", href: "/produkte/gleit-bettbahnoele" },
      { label: "Schmierstoffe & Kompressoröle", href: "/produkte/schmierstoffe" },
      { label: "Hydrauliköle", href: "/produkte/hydraulikoele" },
      { label: "Fette", href: "/produkte/fette" },
      { label: "Automotive Schmierstoffe", href: "/produkte/automotive" },
      { label: "Hautschutzprogramm", href: "/produkte/hautschutz" },
    ],
  },
  {
    label: "Service",
    href: "/service",
    children: [
      { label: "Fluid Management", href: "/service/fluid-management" },
      { label: "KSS-Management", href: "/service/kss-management" },
      { label: "Probleme mit KSS", href: "/service/kss-probleme" },
    ],
  },
  { label: "Zertifikate", href: "/zertifikate" },
  { label: "Shop", href: "/shop" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const { itemCount } = useInquiryCart();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Oel-Scheu GmbH" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.children ? (
                <button
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                    location.pathname.startsWith(item.href) && item.href !== "/"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                    location.pathname.startsWith(item.href) && item.href !== "/"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-1 min-w-[240px]">
                  <div className="bg-background rounded-lg shadow-lg border border-border py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                          location.pathname === child.href
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/anfrage"
            className="relative inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
          <a
            href="tel:+4974452560"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Beratung anfragen
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <Link to="/anfrage" className="relative text-foreground">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full text-sm font-medium text-foreground py-3 border-b border-border/50"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block text-sm text-muted-foreground py-2 hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className="block text-sm font-medium text-foreground py-3 border-b border-border/50"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <a
            href="tel:+4974452560"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold w-full justify-center mt-4"
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
