import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Thomas Müller",
    company: "Metallwerk Süd GmbH",
    text: "Seit wir mit Oel-Scheu zusammenarbeiten, haben sich unsere Werkzeugstandzeiten um 35% verbessert. Die technische Beratung ist erstklassig.",
    stars: 5,
  },
  {
    name: "Sandra Keller",
    company: "Präzisionsteile AG",
    text: "Das Fluid-Management hat unsere Produktionskosten spürbar gesenkt. Ein Partner, der mitdenkt und nicht nur liefert.",
    stars: 5,
  },
  {
    name: "Markus Hofmann",
    company: "CNC-Technik Hofmann",
    text: "Kompetente Beratung, schnelle Lieferung und immer ein offenes Ohr. Oel-Scheu ist für uns der verlässlichste Schmierstoff-Partner.",
    stars: 5,
  },
  {
    name: "Andrea Braun",
    company: "Braun Maschinenbau",
    text: "Die Umstellung auf das empfohlene KSS-System hat unsere Ausschussrate deutlich reduziert. Hervorragende Zusammenarbeit!",
    stars: 4,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CustomerReviews = () => (
  <section className="py-10 md:py-20 lg:py-28 bg-industrial text-industrial-foreground">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-14"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
          Kundenstimmen
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-industrial-foreground">
          Was unsere <span className="text-accent">Kunden sagen</span>
        </h2>
        <p className="text-industrial-foreground/70 text-lg max-w-2xl">
          Langfristige Partnerschaften basieren auf Vertrauen und messbaren Ergebnissen.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            variants={card}
            className="bg-industrial-foreground/10 backdrop-blur-sm rounded-xl p-7 border border-industrial-foreground/15 relative group hover:border-accent/30 transition-colors"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/15 group-hover:text-accent/25 transition-colors" />

            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.stars
                      ? "text-accent fill-accent"
                      : "text-industrial-foreground/20"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-industrial-foreground/75 leading-relaxed mb-5 italic">
              „{review.text}"
            </p>

            <div>
              <p className="font-semibold text-sm text-industrial-foreground">{review.name}</p>
              <p className="text-xs text-industrial-foreground/60">{review.company}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CustomerReviews;
