import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard } from "@/lib/animations";

const categories = [
  { title: "Motoröle und Getriebeöle", text: "Optimaler Schutz vor Verschleiß, Korrosion und Ablagerungen für höchste Motorleistung." },
  { title: "Industrieöle", text: "Hydraulik- und Getriebeöle für stationäre industrielle Anlagen und Systeme." },
  { title: "Kompressoröle", text: "Stabile Leistung unter hohen Temperaturen und Drücken. Verhindert Ablagerungen und Verschleiß, oft mit herstellerspezifischen Freigaben." },
  { title: "Spezialschmierstoffe", text: "Maßgeschneiderte Lösungen für Nischen- und kritische Prozesse mit besonderen Anforderungen." },
];

const Schmierstoffe = () => (
  <ProductPageTemplate
    title="Schmierstoffe & Kompressoröle"
    subtitle="Optimale Leistung und Öl-Freigabe"
    heroImage="/images/Filter-Slider-scheu-5-Spezialschmierstoffe-2024.jpg"
    intro="Schmierstoffe sind das Herzstück jeder Maschine. Sie sichern Funktionalität, Effizienz und Anlagenlebensdauer. Eine Öl-Freigabe ist die offizielle Bestätigung, dass ein Schmierstoff die spezifischen Anforderungen eines Maschinenherstellers erfüllt oder übertrifft."
    cartItem={{ id: "schmierstoffe", name: "Schmierstoffe & Kompressoröle", category: "Produkte" }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="grid gap-px bg-border overflow-hidden sm:grid-cols-2 max-w-4xl"
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

export default Schmierstoffe;
