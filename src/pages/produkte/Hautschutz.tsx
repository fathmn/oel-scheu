import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard } from "@/lib/animations";

const pillars = [
  {
    num: "1",
    title: "Schutz",
    text: "Barrierenbildung vor Arbeitsbeginn. Schützt die Haut präventiv vor schädlichen Substanzen am Arbeitsplatz.",
    accent: "border-blue-400",
  },
  {
    num: "2",
    title: "Reinigung",
    text: "Gründliche Entfernung von Schmutz ohne übermäßige Belastung der Haut. Schonend und effektiv.",
    accent: "border-green-400",
  },
  {
    num: "3",
    title: "Pflege",
    text: "Regeneration und Pflege nach der Arbeit. Stellt die natürliche Hautbarriere wieder her.",
    accent: "border-rose-400",
  },
];

const Hautschutz = () => (
  <ProductPageTemplate
    title="Hautschutzprogramm"
    subtitle="Schutz – Reinigung – Pflege"
    heroImage="/images/Filter-Slider-scheu-12-Hautschutzprogramm-2024.jpg"
    intro="Tägliche Hautbelastung durch schädliche Substanzen in Handwerk und Industrie erfordert professionellen Hautschutz. Unser 3-Säulen-Programm bietet optimale Hautverträglichkeit bei bestem Kosten-Nutzen-Verhältnis."
    cartItem={{ id: "hautschutz", name: "Hautschutzprogramm", category: "Produkte" }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="grid md:grid-cols-3 gap-6 max-w-4xl"
    >
      {pillars.map((p) => (
        <motion.div
          key={p.title}
          variants={fadeUpCard}
          className={`border-t-2 ${p.accent} bg-surface p-7`}
        >
          <span className="text-3xl font-heading font-bold text-muted-foreground/20">{p.num}</span>
          <h3 className="font-heading text-lg font-semibold mt-2 mb-3">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </ProductPageTemplate>
);

export default Hautschutz;
