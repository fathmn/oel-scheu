import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard } from "@/lib/animations";

const features = [
  { title: "Präzise Maschinenbewegung", text: "Reduziert Reibung und Verschleiß bei gleichzeitig konsistenter, wartungsarmer Maschinenbewegung." },
  { title: "Korrosionsschutz", text: "Integrierter Schutz der Maschinenführungen vor Korrosion und Verschleiß." },
  { title: "Wärmeableitung", text: "Effektive Wärmeabfuhr für langlebige Maschinenkomponenten." },
  { title: "Viskositätsgrade CGLP ISO-VG 32–220", text: "Breites Spektrum für Fertigung, Werkzeugbau und automatisierte Produktionsumgebungen." },
];

const GleitBettbahnoele = () => (
  <ProductPageTemplate
    title="Gleit- & Bettbahnöle"
    subtitle="CGLP Schmierstoffe für Werkzeugmaschinen"
    heroImage="/images/Filter-Slider-scheu-8-Bettbahnoele-2024.jpg"
    intro="Hochwertige Schmierstoffe für Maschinenführungen. Unsere Gleit- und Bettbahnöle sorgen für präzise und wartungsarme Funktion Ihrer Werkzeugmaschinen in den Viskositätsgraden CGLP ISO-VG 32 bis 220."
    cartItem={{ id: "gleit-bettbahnoele", name: "Gleit- & Bettbahnöle", category: "Produkte" }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="grid gap-px bg-border overflow-hidden sm:grid-cols-2 max-w-4xl"
    >
      {features.map((f) => (
        <motion.div key={f.title} variants={fadeUpCard} className="bg-background p-7">
          <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </ProductPageTemplate>
);

export default GleitBettbahnoele;
