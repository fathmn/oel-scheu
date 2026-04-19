import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { staggerContainer, fadeUpCard, fadeUp } from "@/lib/animations";

const sections = [
  {
    num: "01",
    title: "Prüfung & Analyse",
    items: [
      "Regelmäßige KSS-Analysen zur Erkennung von Keimwachstum, pH-Abweichungen und Konzentrationsschwankungen",
      "Handrefraktometer für die KSS-Konzentrationsprüfung vor Ort",
      "Laboranalysen für detaillierte Auswertungen",
    ],
  },
  {
    num: "02",
    title: "Management & Optimierung",
    items: [
      "Beratung zum richtigen Kühlschmierstoff-Mischen und zur korrekten Konzentration",
      "KSS-Filtration zur Entfernung von Partikeln und Reduktion von Mikroorganismen",
      "Verlängerung der Flüssigkeitslebensdauer durch optimierte Prozesse",
    ],
  },
  {
    num: "03",
    title: "Entsorgung",
    items: [
      "Verantwortungsvolle KSS-Entsorgung mit Sammlung und Transport",
      "Gesetzeskonforme Aufbereitung und Behandlung",
      "Dokumentation und Nachweisführung",
    ],
  },
];

const KSSManagement = () => (
  <PageLayout>
    <PageHero
      title="KSS-Management"
      subtitle="Kühlschmierstoff-Management 4.0 – Effizienz und Sicherheit"
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
            Effektives KSS-Management ist zentral für optimierte Fertigung,
            längere Werkzeugstandzeiten und die Einhaltung gesetzlicher Vorschriften.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {sections.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUpCard}
              className="grid md:grid-cols-[200px_1fr] gap-8 py-10 border-b border-border last:border-0"
            >
              <div>
                <span className="text-xs font-mono text-muted-foreground/40 block mb-1">{s.num}</span>
                <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default KSSManagement;
