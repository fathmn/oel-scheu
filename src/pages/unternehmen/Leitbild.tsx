import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { staggerContainer, fadeUpCard, fadeUp } from "@/lib/animations";

const values = [
  {
    num: "01",
    title: "Unternehmenskern",
    text: "Als unabhängiger und freier Schmierstoffhändler bieten wir unseren Kunden aus der Metallbearbeitung, dem Maschinenbau, Industrieunternehmen, Logistikfirmen und Fuhrparkbetreibern maßgeschneiderte Lösungen an.",
  },
  {
    num: "02",
    title: "Bedeutsame Werte",
    text: "Langfristige, vertrauensvolle Partnerschaften mit Kunden und Lieferanten. Kommunikation und Fairness stehen bei uns an oberster Stelle.",
  },
  {
    num: "03",
    title: "Umfangreiches Sortiment",
    text: "Schneidöle, Schleiföle, Gleitbahnöle, Hydrauliköle, Filtervliese, Misch- und Pflegegeräte für Kühlschmierstoffanwendungen und vieles mehr.",
  },
  {
    num: "04",
    title: "Innovative Dienstleistungen",
    text: "Unser Außendienst steht in enger Zusammenarbeit mit Ingenieuren aus Forschung und Entwicklung, Chemikern und Anwendungstechnikern, um stets aktuelle tribologische Standards zu erfüllen.",
  },
  {
    num: "05",
    title: "Schmierstoff-Fachwissen",
    text: "Jahrzehntelange Erfahrung garantiert technisch und wirtschaftlich optimale Lösungen für Ihre Anwendungsfälle.",
  },
  {
    num: "06",
    title: "Unternehmenseigene Logistik",
    text: "Distributionszentren in Pfalzgrafenweiler und Wetter ermöglichen schnelle, kundenspezifische Lieferung.",
  },
];

const Leitbild = () => (
  <PageLayout>
    <PageHero title="Unser Leitbild" subtitle="Was uns antreibt und welche Werte wir leben" />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Leitbild der Oel-Scheu GmbH
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Seit 1965 sind wir als unabhängiger Schmierstoffhändler Partner der Industrie.
            Unser Antrieb: maßgeschneiderte Lösungen, technische Kompetenz und persönliche Beratung
            auf Augenhöhe.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-px bg-border rounded-sm overflow-hidden max-w-5xl md:grid-cols-2"
        >
          {values.map((v) => (
            <motion.div
              key={v.num}
              variants={fadeUpCard}
              className="bg-background p-6 md:p-8 lg:p-10 group"
            >
              <span className="text-xs font-mono text-muted-foreground/50 tracking-wider">{v.num}</span>
              <h3 className="font-heading text-lg font-semibold mt-2 mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Leitbild;
