import { motion } from "framer-motion";
import { Target, Handshake, Package, Lightbulb, BookOpen, Truck } from "lucide-react";
import lagerImg from "@/assets/lager.jpg";

const values = [
  {
    icon: Target,
    title: "Unternehmenskern",
    text: "Als unabhängiger und freier Schmierstoffhändler bieten wir Kunden aus metallverarbeitenden Betrieben, Maschinenbauunternehmen und Industrieunternehmen maßgeschneiderte Lösungen an.",
  },
  {
    icon: Handshake,
    title: "Bedeutsame Werte",
    text: "Mit unseren Kunden und Lieferanten pflegen wir eine vertrauensvolle und langfristige Zusammenarbeit, in der Kommunikation und ein fairer Umgang an vorderster Stelle stehen.",
  },
  {
    icon: Package,
    title: "Umfangreiches Sortiment",
    text: "Neben gängigen Schmierstoffen finden Sie bei uns Schneidöle, Schleiföle, Bettbahnöle und Hydrauliköle. Dazu Filtervliese, Pflege- und Mischgeräte.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Dienstleistungen",
    text: "Unser Außendienst steht in enger Zusammenarbeit mit Ingenieuren aus Forschung und Entwicklung sowie Anwendungstechnikern im Service-Labor.",
  },
  {
    icon: BookOpen,
    title: "Schmierstoff-Fachwissen",
    text: "Durch jahrzehntelange Erfahrung in der Anwendung unterschiedlicher Schmierstoffe, Öle und Fette sichern wir Ihnen eine technisch und wirtschaftlich optimale Lösung.",
  },
  {
    icon: Truck,
    title: "Eigene Logistik",
    text: "Unser Service- und Versandcenter in Pfalzgrafenweiler und Wetter ermöglicht eine umfangreiche Bevorratung und zeitnahe Zustellung.",
  },
];

const CompanyValuesSection = () => (
  <section className="py-10 md:py-20 lg:py-28 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-14"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
          Unternehmensleitbild
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Was uns <span className="text-primary">auszeichnet</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Unser Antrieb: Qualität, Partnerschaft und technische Exzellenz.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="bg-card rounded-xl p-7 border border-border hover:border-primary/20 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {v.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Full-width image strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 rounded-2xl overflow-hidden"
      >
        <img src={lagerImg} alt="Oel-Scheu Lagerhalle mit Schmierstoff-Fässern" className="w-full h-56 md:h-72 object-cover" />
      </motion.div>
    </div>
  </section>
);

export default CompanyValuesSection;
