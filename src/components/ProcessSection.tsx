import { motion } from "framer-motion";
import beratungImg from "@/assets/beratung.jpg";

const steps = [
  {
    num: "01",
    title: "Analyse",
    text: "Analyse Ihrer Anwendung und Prozessanforderungen",
  },
  {
    num: "02",
    title: "Auswahl",
    text: "Auswahl geeigneter Produkte und Systeme",
  },
  {
    num: "03",
    title: "Implementierung",
    text: "Implementierung und technische Begleitung",
  },
  {
    num: "04",
    title: "Optimierung",
    text: "Laufende Optimierung und Betreuung",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const step = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ProcessSection = () => (
  <section id="ablauf" className="bg-industrial py-10 md:py-20 lg:py-28 relative overflow-hidden">
    {/* Background image overlay */}
    <div className="absolute inset-0 z-0">
      <img src={beratungImg} alt="" className="w-full h-full object-cover opacity-10" />
    </div>
    <div className="container relative z-10 mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-industrial-foreground mb-4">
          So arbeiten wir mit Ihnen zusammen
        </h2>
        <p className="text-industrial-foreground/60">
          Ziel: Wirtschaftliche und stabile Schmierstoffprozesse.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            variants={step}
            className="relative"
          >
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.4, type: "spring" }}
              className="text-5xl font-bold text-accent/20 block mb-3"
            >
              {s.num}
            </motion.span>
            <h3 className="text-xl font-semibold text-industrial-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-industrial-foreground/70 leading-relaxed">
              {s.text}
            </p>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.4, duration: 0.5 }}
                className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-12 h-0.5 bg-accent/20 origin-left"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
