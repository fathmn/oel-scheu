import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard, fadeUp } from "@/lib/animations";

const products = [
  { name: "HLP 32", desc: "Für Systeme, die eine geringere Viskosität erfordern – geeignet bei niedrigeren Betriebstemperaturen oder schnelleren Zyklusanforderungen." },
  { name: "HLP 46", desc: "Ein mineralisches Hydrauliköl mit hervorragenden Detergent-/Dispersant-Eigenschaften. Schützt vor Verschleiß, Korrosion und Oxidation bei stabiler Viskosität und minimierter Schaumbildung." },
  { name: "HVLPD 46", desc: "Für Systeme mit extremen Temperaturschwankungen und Feuchtigkeitsbelastung. Bietet hohes Schmutztragevermögen und gute Wasserabscheidung." },
];

const grades = [
  "HLP 10", "HLP 15", "HLP 22", "HLP 32", "HLP 46", "HLP 68",
  "HLP 100", "HLP 150", "HLP 220", "HLPD", "HVLP", "HVLPD", "HLP ZF",
];

const Hydraulikoele = () => (
  <ProductPageTemplate
    title="Hydrauliköle"
    subtitle="Leistungsstark und zuverlässig"
    heroImage="/images/Filter-Slider-scheu-10-Hydraulikoel-2024.jpg"
    intro="Hydrauliköle reduzieren Reibung und Verschleiß, leiten Wärme ab und schützen vor Korrosion. Unser Sortiment deckt alle gängigen Viskositätsklassen und Anforderungsprofile ab."
    cartItem={{ id: "hydraulikoele", name: "Hydrauliköle", category: "Produkte" }}
  >
    <div className="max-w-4xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="space-y-4 mb-12"
      >
        {products.map((p) => (
          <motion.div
            key={p.name}
            variants={fadeUpCard}
            className="grid md:grid-cols-[140px_1fr] gap-4 items-baseline border-b border-border pb-4 last:border-0"
          >
            <h3 className="font-heading text-lg font-bold text-primary">{p.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">
          Verfügbare Viskositätsgrade
        </h3>
        <div className="flex flex-wrap gap-2">
          {grades.map((g) => (
            <span key={g} className="bg-surface border border-border px-3 py-1.5 text-sm font-medium">
              {g}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </ProductPageTemplate>
);

export default Hydraulikoele;
