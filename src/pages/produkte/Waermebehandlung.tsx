import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard } from "@/lib/animations";

const salts = [
  { num: "01", title: "Nitriersalze", text: "Oberflächenhärtung durch Nitrieren für deutlich verbesserte Verschleißfestigkeit und Härte." },
  { num: "02", title: "Härtesalze", text: "Gleichmäßige Wärmeübertragung und kontrolliertes Abschrecken für präzise Härteergebnisse." },
  { num: "03", title: "Anlassen & Glühen", text: "Erhöht die Zähigkeit und baut innere Spannungen in Werkstücken ab." },
  { num: "04", title: "Boriersalze", text: "Steigert Oberflächenhärte, Verschleiß- und Korrosionsbeständigkeit signifikant." },
  { num: "05", title: "Reinigungs- und Entfettungssalze", text: "Vorbehandlungsreinigung zur Vorbereitung der Oberflächen vor der Wärmebehandlung." },
];

const Waermebehandlung = () => (
  <ProductPageTemplate
    title="Wärmebehandlung"
    subtitle="Spezialchemische Salze für die Metallverarbeitung"
    heroImage="/images/Filter-Slider-scheu-7-Haerteoele-2024.jpg"
    intro="Spezialisierte chemische Salze für die thermochemische Metallbehandlung. Qualität, Zuverlässigkeit und umweltbewusste Prozesse stehen im Mittelpunkt unseres Angebots."
    cartItem={{ id: "waermebehandlung", name: "Wärmebehandlung", category: "Produkte" }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="max-w-4xl"
    >
      {salts.map((s) => (
        <motion.div
          key={s.num}
          variants={fadeUpCard}
          className="grid grid-cols-[auto_1fr] gap-6 py-6 border-b border-border last:border-0"
        >
          <span className="text-xs font-mono text-muted-foreground/40 pt-0.5">{s.num}</span>
          <div>
            <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </ProductPageTemplate>
);

export default Waermebehandlung;
