import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard } from "@/lib/animations";

const categories = [
  { title: "Motorenöle", text: "Synthetische, teilsynthetische und mineralische Motorenöle für maximale Leistung mit optimalem Verschleiß- und Korrosionsschutz." },
  { title: "Getriebeöle", text: "Für reibungslosen Gangwechsel, minimieren Verschleiß und schützen Getriebekomponenten vor Korrosion bei verschiedenen Fahrzeugtypen." },
  { title: "Landmaschinenöle", text: "Speziell für extremen Belastungen, hohe Temperaturen und Staubbelastung entwickelt. Reduziert Wartungskosten bei landwirtschaftlichen Maschinen." },
];

const Automotive = () => (
  <ProductPageTemplate
    title="Automotive Schmierstoffe"
    subtitle="Hochwertige Produkte für Ihr Fahrzeug"
    heroImage="/images/Filter-Slider-scheu-11-AutomotiveSchmierstoffe-2024.jpg"
    intro="Der richtige Schmierstoff ist entscheidend für Fahrzeugleistung und Langlebigkeit. Unser Sortiment deckt PKW, LKW, Motorräder und Landmaschinen ab. Alle Schmierstoffe erfüllen aktuelle Normen und Zertifizierungen."
    cartItem={{ id: "automotive", name: "Automotive Schmierstoffe", category: "Produkte" }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="grid gap-px bg-border overflow-hidden md:grid-cols-3 max-w-4xl"
    >
      {categories.map((c) => (
        <motion.div key={c.title} variants={fadeUpCard} className="bg-background p-7">
          <h3 className="font-heading font-semibold mb-2">{c.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </ProductPageTemplate>
);

export default Automotive;
