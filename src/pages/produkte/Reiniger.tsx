import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { AlertTriangle, Shield } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

const categories = [
  { title: "Kohlenwasserstoffreiniger", text: "Entwickelt zur Entfernung organischer Verunreinigungen wie Fetten, Wachsen und Ölen." },
  { title: "Wässrige Reiniger", text: "Alkalische und saure Varianten zur Entfernung anorganischer Rückstände wie Metallabrieb und Schmutz. Optimiert für Spritz- und Tauchverfahren." },
];

const safety = [
  "Korrekte Dosierung und Einhaltung der Einwirkzeiten",
  "Schutzausrüstung: Handschuhe, Schutzbrillen und Atemschutz",
  "Ausreichende Arbeitsplatzbelüftung zur Minimierung der Dampfkonzentration",
];

const Reiniger = () => (
  <ProductPageTemplate
    title="Reiniger"
    subtitle="Effektive Lösungen für Ihre Prozesse"
    heroImage="/images/Filter-Slider-scheu-4-Reiniger.jpg"
    intro="Unsere Reinigungsmittel bieten effektive Lösungen für die industrielle Reinigung. Von Kohlenwasserstoffreinigern bis zu wässrigen Systemen finden wir das optimale Produkt für Ihre Anwendung."
    cartItem={{ id: "reiniger", name: "Reiniger", category: "Produkte" }}
  >
    <div className="max-w-4xl">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={i === 0 ? fadeLeft : fadeRight}
          >
            <h3 className="font-heading font-semibold mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-amber-50 border-l-2 border-amber-400 p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h3 className="font-heading font-semibold text-amber-900">Sicherheitshinweise</h3>
        </div>
        <ul className="space-y-2">
          {safety.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-amber-800">
              <Shield className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </ProductPageTemplate>
);

export default Reiniger;
