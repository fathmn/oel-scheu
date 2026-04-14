import { motion } from "framer-motion";
import { Award, Users, MapPin, Wrench } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Familienunternehmen",
    text: "Jahrzehntelange Branchenerfahrung seit 1965",
  },
  {
    icon: Award,
    title: "ISO 9001",
    text: "Zertifiziertes Qualitätsmanagement",
  },
  {
    icon: MapPin,
    title: "3 Standorte",
    text: "Deutschland und Schweiz",
  },
  {
    icon: Wrench,
    title: "Technische Beratung",
    text: "Statt reiner Produktlieferung",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const SocialProof = () => (
  <section className="bg-surface py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Qualität und Partnerschaft seit 1965
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={card}
            whileHover={{ y: -6, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.1)" }}
            className="bg-card rounded-lg p-6 border border-border text-center cursor-default"
          >
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
            >
              <item.icon className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SocialProof;
