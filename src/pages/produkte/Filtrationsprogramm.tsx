import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard, fadeUp } from "@/lib/animations";
import { productImages } from "@/lib/product-images";

const products = [
  { name: "EcoFleece – Polypropylenvlies", variants: "APP 20 / APP 50" },
  { name: "TopFleece – Polyesternadelvlies", variants: "ANP 40 / ANP 80 / ANP 130" },
];

const benefits = [
  "Verhindert Ablagerungen im KSS-Kreislauf",
  "Verlängert die KSS-Standzeit bis auf das 3-Fache",
  "Reduziert Keimwachstum und Ausfallzeiten",
  "Verbessert Prozesssicherheit und senkt Ausschussquoten",
];

const Filtrationsprogramm = () => (
  <ProductPageTemplate
    title="Filtrationsprogramm"
    subtitle="Filtervliese und Filtrationssysteme"
    heroImage={productImages.filtrationsprogramm}
    intro="Filtervliese trennen Feststoffe von Flüssigkeiten und reinigen Kühlschmierstoffe bei Bearbeitungsprozessen wie Schleifen, Fräsen, Drehen und Bohren."
    cartItem={{ id: "filtration", name: "Filtrationsprogramm", category: "Produkte" }}
  >
    <div className="max-w-4xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 gap-px bg-border overflow-hidden mb-4"
      >
        {products.map((p) => (
          <motion.div key={p.name} variants={fadeUpCard} className="bg-background p-6">
            <h3 className="font-heading font-semibold mb-1">{p.name}</h3>
            <p className="text-sm text-muted-foreground">Varianten: {p.variants}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-xs text-muted-foreground mb-12">
        Sonderanfertigungen verfügbar: verschiedene Vliesarten, individuelle Gewichte,
        Rollenbreiten und -längen auf Anfrage.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
          Vorteile erfolgreicher Filtration
        </h3>
        <div className="space-y-3">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {b}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-xs text-muted-foreground mt-8 border-t border-border pt-6">
        Weiteres Sortiment: Filterbeutel, Filterkerzen, Filtermatten, Filtertücher,
        Absorber, Saugfilter und komplette Filteranlagen.
      </motion.p>
    </div>
  </ProductPageTemplate>
);

export default Filtrationsprogramm;
