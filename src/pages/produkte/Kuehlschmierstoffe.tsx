import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard } from "@/lib/animations";

const features = [
  { title: "Wassermischbare KSS", text: "Stabile Emulsionen für Zerspanung und Schleifen. Optimale Kühlung und Schmierung für beste Oberflächengüten." },
  { title: "Nicht wassermischbare KSS", text: "Für Spezialanwendungen mit hohem Schmierbedarf. Reine Öle für maximalen Werkzeugschutz." },
  { title: "Korrosionsschutz", text: "Integrierter Schutz für Werkstücke und Maschinen gegen Korrosion während und nach der Bearbeitung." },
  { title: "Gesundheitsschutz", text: "Hautverträgliche Formulierungen und Allergieprävention stehen bei unserer Produktauswahl im Fokus." },
  { title: "Luft- und Raumfahrt", text: "Spezial-KSS für anspruchsvollste Anwendungen bis hin zur Luft- und Raumfahrtindustrie." },
  { title: "Individuelle Beratung", text: "Fragebogen zur Produktauswahl und persönliche technische Beratung für Ihre spezifischen Anforderungen." },
];

const Kuehlschmierstoffe = () => (
  <ProductPageTemplate
    title="Kühlschmierstoffe (KSS)"
    subtitle="Wassermischbar & nicht wassermischbar"
    heroImage="/images/Filter-Slider-scheu-1-wmb-kss-2024.jpg"
    intro="Die Wahl des richtigen Kühlschmierstoffs ist entscheidend für die Bearbeitungsqualität und Werkzeugstandzeiten. KSS erfüllen mehrere Funktionen: Reibungsreduzierung, Späneableitung, Korrosionsschutz und Beeinflussung der Oberflächengüte."
    cartItem={{ id: "kuehlschmierstoffe", name: "Kühlschmierstoffe", category: "Produkte" }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="grid gap-px bg-border overflow-hidden md:grid-cols-2 max-w-4xl"
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

export default Kuehlschmierstoffe;
