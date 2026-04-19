import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, fadeUpCard } from "@/lib/animations";

const problems = [
  "Schaumbildung in der Emulsion",
  "Geruchsentwicklung durch Keimbefall",
  "Verkürzte Standzeiten der KSS",
  "Qualitätsverluste an Werkstücken",
  "Bakterienwachstum und Nitritbildung",
  "Fremdölkontamination",
  "Schwebstoffe und Verunreinigungen",
  "Konzentrations- und Füllstandschwankungen",
];

const solutions = [
  { title: "KSS-Produktauswahl-Beratung", text: "Abstimmung des Kühlschmierstoffs auf Materialien und Prozesse" },
  { title: "Mikrobelüfter", text: "Bekämpfung von Bakterien und Reduzierung von Nitrit" },
  { title: "Ölskimmer", text: "Zuverlässige Entfernung von Fremdölen aus der Emulsion" },
  { title: "Filtration / Filtervlies", text: "Kontinuierliche Entfernung von Schwebstoffen" },
  { title: "Vollautomatische Nachfüllanlagen", text: "Konstante Konzentration und Füllstände" },
];

const benefits = [
  "Maximale Prozesssicherheit",
  "Hervorragende Oberflächengüte",
  "Verlängerte Werkzeugstandzeit",
  "Erhöhte Emulsionsstandzeit",
  "Reduzierte KSS-Entsorgungskosten",
];

const KSSProbleme = () => (
  <PageLayout>
    <PageHero
      title="Probleme mit KSS?"
      subtitle="Wir finden die Lösung für Ihre Kühlschmierstoff-Herausforderungen"
    />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="border-l-2 border-red-400 pl-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h2 className="font-heading text-xl font-bold">Häufige Probleme</h2>
              </div>
              <ul className="space-y-2.5">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeRight}
              className="border-l-2 border-green-400 pl-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h2 className="font-heading text-xl font-bold">Unsere Lösungen</h2>
              </div>
              <ul className="space-y-4">
                {solutions.map((s) => (
                  <li key={s.title}>
                    <p className="text-sm font-semibold">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
              Vorteile automatischer Nachfüllanlagen
            </h3>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="flex flex-wrap gap-2"
            >
              {benefits.map((b) => (
                <motion.span
                  key={b}
                  variants={fadeUpCard}
                  className="inline-flex items-center gap-2 bg-surface border border-border px-4 py-2 text-sm font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 border-t border-border pt-8"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Zusätzlich bieten wir Prozessflussanalysen, Mitarbeiterschulungen und individuelle Beratung.
            </p>
            <a
              href="tel:+4974452560"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Kostenlose Beratung anfragen
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default KSSProbleme;
