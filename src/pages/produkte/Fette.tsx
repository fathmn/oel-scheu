import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard } from "@/lib/animations";

const types = [
  { title: "Abschmierfett", text: "Effektive Schmierung verlängert die Maschinenlebensdauer. Unsere Produkte bieten Haftung und Beständigkeit gegen Wasser und Temperaturschwankungen und reduzieren Wartungsintervalle und Betriebskosten." },
  { title: "Wälzlagerfett", text: "Für Wälzlager unter hohen Lasten und Drehzahlen – minimiert Reibung, reduziert Wärmeaufbau und schützt vor Korrosion und Oxidation." },
  { title: "Trennfette", text: "Bilden einen zuverlässigen Film zwischen Werkstück und Form. Einsatz in Gießereien, Kunststoffverarbeitung und ähnlichen Industrien, die saubere Trennung erfordern." },
];

const Fette = () => (
  <ProductPageTemplate
    title="Fette"
    subtitle="Für höchste Ansprüche"
    heroImage="/images/Filter-Slider-scheu-14-Fette-2024.jpg"
    intro="Hochleistungsfette für Maschinen und Anlagen. Von Abschmierfetten über Wälzlagerfette bis hin zu Trennfetten für die Produktion – unser Sortiment deckt alle Anforderungen ab."
    cartItem={{ id: "fette", name: "Fette", category: "Produkte" }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="max-w-4xl"
    >
      {types.map((t, i) => (
        <motion.div
          key={t.title}
          variants={fadeUpCard}
          className="py-6 border-b border-border last:border-0"
        >
          <h3 className="font-heading font-semibold mb-2">{t.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{t.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </ProductPageTemplate>
);

export default Fette;
