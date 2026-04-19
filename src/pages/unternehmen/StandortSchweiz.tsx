import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { fadeLeft, fadeRight } from "@/lib/animations";

const StandortSchweiz = () => (
  <PageLayout>
    <PageHero title="Standort Schweiz" subtitle="Unser Schweizer Standort in Wil / SG" />
    <section className="pt-8 pb-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-[auto_1fr] gap-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeLeft} className="md:w-[360px]">
            <img
              src="/images/OelScheu-Vertriebspartner-Bild.jpg"
              alt="Oel-Scheu Vertriebspartner GmbH Schweiz"
              className="w-full rounded-sm"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeRight}>
            <h2 className="font-heading text-2xl font-bold mb-4">Oel-Scheu Vertriebspartner GmbH</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Unsere Schweizer Niederlassung ist Partner und Vertriebshändler für
              Master Fluid Solutions (MFS), einem der weltweit etablierten und innovativen
              Kühlschmierstoffanbieter. Zusätzlich halten wir die Generalvertretung für
              hef-durferrit und unterstützen Kunden in der Wärmebehandlung und Salzbadtechnologie.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Oel-Scheu Vertriebspartner GmbH</p>
                  <p className="text-muted-foreground">Hubstrasse 33<br />CH-9501 Wil / SG</p>
                </div>
              </div>
              <a href="tel:+41719114747" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" /> +41 71 911 47 47
              </a>
              <a href="mailto:info@oelscheu-vp.ch" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" /> info@oelscheu-vp.ch
              </a>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="text-muted-foreground">
                  <p>Mo–Do: 08:00–12:00 / 13:30–16:30</p>
                  <p>Fr: 08:00–12:00 / 13:30–16:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-8">Unsere Partner</h3>
          <div className="flex items-center gap-6 md:gap-12 flex-wrap">
            <img src="/images/MFS-Logo.png" alt="Master Fluid Solutions" className="h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <img src="/images/HEF_DURFERRIT-Logo.png" alt="hef durferrit" className="h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default StandortSchweiz;
