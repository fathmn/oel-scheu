import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { fadeUp, staggerContainer, fadeUpCard } from "@/lib/animations";

const areas = [
  { title: "Stahlbau", text: "Schutz großer Flächen unter extremen Bedingungen. Robuste Schutzfilme gegen Feuchtigkeit, Sauerstoff und aggressive Medien." },
  { title: "Metall Rostschutz", text: "Umfassender Korrosionsschutz für Eisen, Aluminium und Nichteisenmetalle mit hochwirksamen Lösungen." },
  { title: "Korrosionsschutzklasse C4+", text: "Produkte für Industrie, Küstengebiete und chemisch belastete Umgebungen mit höchsten Anforderungen." },
];

const Korrosionsschutz = () => (
  <ProductPageTemplate
    title="Korrosionsschutz"
    subtitle="Hochwirksame Lösungen für Stahl und Metall"
    heroImage="/images/Filter-Slider-scheu-6-Korresionsschutz-2024.jpg"
    intro="Unsere Korrosionsschutzmittel bilden einen robusten Schutzfilm, der Feuchtigkeit, Sauerstoff und aggressive Medien effektiv abwehrt. Von temporärem Zwischenschutz bis zur Langzeitkonservierung."
    cartItem={{ id: "korrosionsschutz", name: "Korrosionsschutz", category: "Produkte" }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="max-w-4xl space-y-4"
    >
      {areas.map((a, i) => (
        <motion.div
          key={a.title}
          variants={fadeUpCard}
          className="grid md:grid-cols-[200px_1fr] gap-4 items-baseline border-b border-border pb-4 last:border-0"
        >
          <h3 className="font-heading font-semibold">{a.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </ProductPageTemplate>
);

export default Korrosionsschutz;
