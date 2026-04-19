import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ShoppingCart, Check, Search, Filter, ArrowRight } from "lucide-react";
import { useInquiryCart, CartItem } from "@/context/InquiryCartContext";
import { fadeUp } from "@/lib/animations";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const products: Product[] = [
  { id: "fluid-management", name: "Fluid-Management", category: "Service & Dienstleistungen", description: "Biobalance-System, Monitoring, Filtrations-Beratung und KSS Management 4.0.", image: "/images/Filter-Slider-scheu-13-Fluid_Management-2024.jpg", link: "/produkte/fluid-management" },
  { id: "kuehlschmierstoffe", name: "Kühlschmierstoffe (KSS)", category: "Kühlschmierstoffe", description: "Wassermischbare und nicht wassermischbare KSS für die Metallbearbeitung.", image: "/images/Filter-Slider-scheu-1-wmb-kss-2024.jpg", link: "/produkte/kuehlschmierstoffe" },
  { id: "filtration", name: "Filtrationsprogramm", category: "Filtration", description: "EcoFleece, TopFleece, Filterbeutel, Filterkerzen und komplette Filteranlagen.", image: "/images/Filter-Slider-scheu-3-4D-Filtervlies-2024.jpg", link: "/produkte/filtrationsprogramm" },
  { id: "reiniger", name: "Reiniger", category: "Prozesschemie", description: "Kohlenwasserstoffreiniger und wässrige Reiniger für die industrielle Reinigung.", image: "/images/Filter-Slider-scheu-4-Reiniger.jpg", link: "/produkte/reiniger" },
  { id: "korrosionsschutz", name: "Korrosionsschutz", category: "Prozesschemie", description: "Hochwirksame Lösungen für den Korrosionsschutz von Stahl und anderen Metallen.", image: "/images/Filter-Slider-scheu-6-Korresionsschutz-2024.jpg", link: "/produkte/korrosionsschutz" },
  { id: "waermebehandlung", name: "Wärmebehandlung", category: "Spezialprodukte", description: "Nitriersalze, Härtesalze, Anlassen & Glühen, Boriersalze und Reinigungssalze.", image: "/images/Filter-Slider-scheu-7-Haerteoele-2024.jpg", link: "/produkte/waermebehandlung" },
  { id: "gleit-bettbahnoele", name: "Gleit- & Bettbahnöle", category: "Industrieöle", description: "CGLP ISO-VG 32 bis 220 für Werkzeugmaschinen und Produktionsanlagen.", image: "/images/Filter-Slider-scheu-8-Bettbahnoele-2024.jpg", link: "/produkte/gleit-bettbahnoele" },
  { id: "schmierstoffe", name: "Schmierstoffe & Kompressoröle", category: "Industrieöle", description: "Motoröle, Getriebeöle, Industrieöle und Spezialschmierstoffe mit Öl-Freigabe.", image: "/images/Filter-Slider-scheu-5-Spezialschmierstoffe-2024.jpg", link: "/produkte/schmierstoffe" },
  { id: "hydraulikoele", name: "Hydrauliköle", category: "Industrieöle", description: "HLP, HLPD, HVLP und HVLPD in allen gängigen Viskositätsgraden.", image: "/images/Filter-Slider-scheu-10-Hydraulikoel-2024.jpg", link: "/produkte/hydraulikoele" },
  { id: "fette", name: "Fette", category: "Schmierfette", description: "Abschmierfette, Wälzlagerfette und Trennfette für höchste Ansprüche.", image: "/images/Filter-Slider-scheu-14-Fette-2024.jpg", link: "/produkte/fette" },
  { id: "automotive", name: "Automotive Schmierstoffe", category: "Automotive", description: "Motorenöle, Getriebeöle und Landmaschinenöle für alle Fahrzeugtypen.", image: "/images/Filter-Slider-scheu-11-AutomotiveSchmierstoffe-2024.jpg", link: "/produkte/automotive" },
  { id: "hautschutz", name: "Hautschutzprogramm", category: "Arbeitsschutz", description: "3-Säulen-Programm: Schutz, Reinigung und Pflege für die Haut am Arbeitsplatz.", image: "/images/Filter-Slider-scheu-12-Hautschutzprogramm-2024.jpg", link: "/produkte/hautschutz" },
];

const categories = [...new Set(products.map((p) => p.category))];

const Shop = () => {
  const { addItem, removeItem, isInCart, itemCount } = useInquiryCart();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = products.filter((p) => {
    const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !activeCategory || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleCart = (p: Product) => {
    const item: CartItem = { id: p.id, name: p.name, category: p.category, image: p.image };
    isInCart(p.id) ? removeItem(p.id) : addItem(item);
  };

  return (
    <PageLayout>
      <PageHero title="Produktkatalog" subtitle="Stellen Sie Ihre individuelle Anfrageliste zusammen" />
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-4 mb-10"
          >
            <div className="relative w-full md:w-80">
              <label className="block text-sm font-medium mb-1.5">Suche</label>
              <Search className="absolute left-3 bottom-2.5 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Produkt suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Filter</label>
              <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${!activeCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                Alle
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  {cat}
                </button>
              ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {itemCount > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-primary/5 border border-primary/20 p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 overflow-hidden"
              >
                <p className="text-sm font-medium">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  {itemCount} {itemCount === 1 ? "Produkt" : "Produkte"} in Ihrer Anfrageliste
                </p>
                <Link
                  to="/anfrage"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Anfrage absenden
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((p, i) => {
              const inCart = isInCart(p.id);
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`bg-background border overflow-hidden group transition-colors ${inCart ? "border-primary/40" : "border-border hover:border-muted-foreground/20"}`}
                >
                  <Link to={p.link}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">{p.category}</span>
                    <Link to={p.link}>
                      <h3 className="font-heading font-semibold mt-1 mb-2 hover:text-primary transition-colors">{p.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{p.description}</p>
                    <button
                      onClick={() => toggleCart(p)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors ${inCart ? "bg-green-600 text-white hover:bg-green-700" : "bg-primary/10 text-primary hover:bg-primary/20"}`}
                    >
                      {inCart ? (<><Check className="w-4 h-4" />In der Anfrageliste</>) : (<><ShoppingCart className="w-4 h-4" />Zur Anfrage hinzufügen</>)}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-16">
              <p className="text-muted-foreground">Keine Produkte gefunden.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Shop;
