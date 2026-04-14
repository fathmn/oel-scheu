import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import trucksImg from "@/assets/trucks.png";

const Testimonials = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
            <Handshake className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Langfristige Partnerschaften in der Industrie
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seit Jahrzehnten vertrauen Industrieunternehmen auf die technische
            Kompetenz und die zuverlässige Betreuung der Oel-Scheu GmbH.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <img
            src={trucksImg}
            alt="Oel-Scheu Lieferfahrzeuge"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Testimonials;
