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
        className="text-3xl md:text-4xl font-bold mb-14"
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
            whileHover={{ y: -5, boxShadow: "0 16px 32px -12px rgba(0,0,0,0.1)" }}
            className="flex gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/20 transition-colors cursor-default group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SocialProof;
