import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeUpCard, fadeUp } from "@/lib/animations";

const services = [
  { title: "Biobalance-System", text: "Ein koordiniertes Gerätesystem hält Ihre KSS in optimaler, gesunder Balance und garantiert produktionsgerechte Qualität." },
  { title: "Monitoring / TRGS-Unterstützung", text: "Unterstützung bei gesetzlichen Vorschriften, Mitarbeiterschulungen, KSS-Überwachungsblätter und Laboranalysen gemäß DGUV Regel 109-003." },
  { title: "Filtrationsberatung", text: "Fachkundige Beratung zu allen Filtrationsfragen mit maßgeschneiderten Verbesserungsempfehlungen für Ihre Anlagen." },
  { title: "Anlagen- und Maschinenreinigung", text: "Vermittlung von Anlagen- und Maschinenreinigung bis hin zur industriellen Deckenreinigung. Individuelle Servicepakete auf Anfrage." },
  { title: "Mischrechner", text: "Online-Tool zur Berechnung der benötigten Nachfüllkonzentrationen für Ihre KSS-Systeme." },
  { title: "KSS-Überwachungsblatt", text: "Bereitgestellt nach DGUV Regel 109-003 – ein herunterladbares Formular für die optimale KSS-Überwachung." },
];

const FluidManagementService = () => (
  <PageLayout>
    <PageHero
      title="Fluid Management Service"
      subtitle="Fluidmanagement mit Biobalance!"
      image="/images/Filter-Slider-scheu-13-Fluid_Management-2024.jpg"
    />
    <section className="pt-8 pb-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unser Fluid Management Service umfasst Monitoring, Filtration, Reinigung und
            automatisiertes Tankmanagement – alles aus einer Hand für optimale
            KSS-Prozesse in Ihrer Produktion.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-px bg-border overflow-hidden md:grid-cols-2 max-w-4xl"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUpCard} className="bg-background p-7">
              <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <a
            href="tel:+4974452560"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Jetzt Beratungstermin vereinbaren
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default FluidManagementService;
