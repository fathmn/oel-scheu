import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

const CtaSection = () => (
  <section id="kontakt" className="pt-20 lg:pt-28 pb-10 lg:pb-14">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-3xl mx-auto text-center bg-industrial rounded-2xl p-6 sm:p-10 md:p-16 overflow-hidden"
      >
        {/* Animated glow accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/15 rounded-full blur-3xl pointer-events-none"
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative z-10 inline-flex items-center gap-2 bg-primary/15 border border-primary/25 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Kostenlose Erstberatung
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative z-10 text-3xl md:text-4xl font-bold text-industrial-foreground mb-4"
        >
          Lassen Sie uns Ihre Prozesse gemeinsam optimieren
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative z-10 text-industrial-foreground/70 text-lg mb-8"
        >
          Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch mit
          unseren Experten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="mailto:info@oelscheu.de?subject=Beratungstermin"
            animate={{
              scale: [1, 1, 1.05, 1, 1.03, 1, 1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.4, 0.5, 0.55, 0.65, 0.7, 1] }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Beratungstermin vereinbaren
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="tel:+4974452560"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 border border-industrial-foreground/30 text-industrial-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-industrial-foreground/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Kontakt aufnehmen
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
