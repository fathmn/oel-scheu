import { motion } from "framer-motion";
import { Droplets, Filter, FlaskConical, Cog, ClipboardCheck, Fuel } from "lucide-react";

const areas = [
  {
    icon: Droplets,
    title: "Kühlschmierstoffe (KSS)",
    text: "Auswahl des richtigen Produkts für Ihre Anwendung und umfassende Betreuung im laufenden Betrieb.",
  },
  {
    icon: Filter,
    title: "Filtrations- & Mischsysteme",
    text: "Systeme zur Wartung und Verlängerung der Lebensdauer Ihrer Schmierstoffe.",
  },
  {
    icon: FlaskConical,
    title: "Prozesschemie",
    text: "Teilereinigungsmittel, Emulsionspflegeprodukte und Korrosionsschutz.",
  },
  {
    icon: Fuel,
    title: "Spezialschmierstoffe & Industrieöle",
    text: "Härteöle, Gleit- und Bettbahnöle, Hydrauliköle, Fette, Automotive Schmierstoffe.",
  },
  {
    icon: Cog,
    title: "Korrosionsschutz-Produkte",
    text: "Umfassende Lösungen für temporären und dauerhaften Korrosionsschutz.",
  },
  {
    icon: ClipboardCheck,
    title: "Fluid-Management / Service",
    text: "Strukturierte Betreuung Ihrer Schmierstoffprozesse zur Effizienzsteigerung.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

const Competencies = () => (
  <section id="leistungen" className="bg-surface py-10 md:py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unsere Kompetenzbereiche
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Schmierstoffe & Dienstleistungen
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {areas.map((area) => (
          <motion.div
            key={area.title}
            variants={card}
            whileHover={{ y: -5, boxShadow: "0 16px 32px -12px rgba(0,0,0,0.1)" }}
            className="flex gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/20 transition-colors duration-300 group cursor-default"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <area.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Competencies;
