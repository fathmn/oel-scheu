import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const problems = [
  "Instabile Emulsionen",
  "Verkürzte Standzeiten",
  "Hoher Wartungsaufwand",
  "Unnötige Kosten durch ineffiziente Prozesse",
  "Unsicherheit bei der Auswahl geeigneter Produkte",
];

const solutions = [
  "Auswahl geeigneter Kühlschmierstoffe (KSS)",
  "Ganzheitliche Emulsionspflege",
  "Effiziente Filtrations- und Mischsysteme",
  "Hochwertige Prozesschemie",
  "Technische Beratung zur nachhaltigen Prozessoptimierung",
];

const ProblemSolution = () => (
  <section className="py-10 md:py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Schmierstoffe beeinflussen Ihre Produktivität
          <br className="hidden md:block" />
          <span className="text-primary"> stärker, als Sie denken</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-xl p-8 border border-border"
        >
          <h3 className="text-xl font-semibold mb-6 text-primary">
            Typische Herausforderungen
          </h3>
          <ul className="space-y-4">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-industrial rounded-xl p-8"
        >
          <h3 className="text-xl font-semibold mb-3 text-accent">
            Unsere Lösung
          </h3>
          <p className="text-industrial-foreground/70 text-sm mb-6">
            Wir analysieren Ihre Anwendung und liefern nicht nur das passende
            Produkt, sondern ein durchdachtes Gesamtkonzept:
          </p>
          <ul className="space-y-4">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-industrial-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="mt-12">
        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors"
        >
          Jetzt individuelle Beratung anfragen
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
