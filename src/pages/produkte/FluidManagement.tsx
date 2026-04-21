import { motion } from "framer-motion";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { staggerContainer, fadeUpCard } from "@/lib/animations";
import { productImages } from "@/lib/product-images";

const features = [
  { title: "Biobalance-System", text: "Ein koordiniertes Gerätesystem, das Kühlschmierstoffe in optimaler, gesunder Balance hält und produktionsgerechte Qualität garantiert." },
  { title: "TRGS-Monitoring", text: "Unterstützung bei der Einhaltung gesetzlicher Vorschriften, Mitarbeiterschulungen, KSS-Überwachungsblätter und Laboranalysen." },
  { title: "Filtrations-Beratung", text: "Fachkundige Beratung zu allen Filtrationsfragen mit maßgeschneiderten Verbesserungsempfehlungen." },
  { title: "Anlagen- und Maschinenreinigung", text: "Vermittlung von Anlagen- und Maschinenreinigung bis hin zur industriellen Deckenreinigung." },
  { title: "Mischrechner & KSS Management 4.0", text: "Online-Tool zur Berechnung der benötigten Nachfüllkonzentrationen und automatisiertes Tankmanagement." },
];

const FluidManagement = () => (
  <ProductPageTemplate
    title="Fluid-Management"
    subtitle="Service & Dienstleistungen"
    heroImage={productImages.fluidManagement}
    intro="Fluidmanagement mit Biobalance! Ein koordiniertes Gerätesystem hält Ihre Kühlschmierstoffe in optimaler Balance für Ihre Produktion."
    cartItem={{ id: "fluid-management", name: "Fluid-Management", category: "Produkte" }}
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
      {features.length % 2 !== 0 && <div className="bg-background" />}
    </motion.div>
  </ProductPageTemplate>
);

export default FluidManagement;
