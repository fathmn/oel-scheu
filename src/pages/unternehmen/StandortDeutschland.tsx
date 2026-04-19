import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";

const StandortDeutschland = () => (
  <PageLayout>
    <PageHero title="Standort Deutschland" subtitle="Unsere Standorte in Deutschland" />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hauptsitz */}
        <div className="mb-20 max-w-5xl">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-heading text-2xl font-bold mb-6">Hauptsitz Pfalzgrafenweiler</motion.h2>
          <div className="grid lg:grid-cols-[1fr_320px] gap-4">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeLeft}>
              <img
                src="/images/panorama.jpg"
                alt="Oel-Scheu Standort Pfalzgrafenweiler"
                className="w-full rounded-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Im Hintergrund die Verwaltung, davor die SB-Waschanlage und rechts die Lagerhalle
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeRight}
              className="flex flex-col gap-4"
            >
              <div className="flex-1">
                <img src="/images/schmierstoffgaslager.jpg" alt="Schmierstoff- und Gaslager" className="w-full h-full object-cover rounded-sm" />
              </div>
              <div>
                <img src="/images/fuhrpark.jpg" alt="Fuhrpark" className="w-full rounded-sm" />
                <p className="text-xs text-muted-foreground mt-1.5">Unser Fuhrpark</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-8 space-y-3">
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Oel-Scheu GmbH</p>
                <p className="text-muted-foreground">Zeppelinstraße 13<br />D-72285 Pfalzgrafenweiler</p>
              </div>
            </div>
            <a href="tel:+4974452560" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary shrink-0" /> +49 7445 2560
            </a>
            <a href="mailto:info@oelscheu.de" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary shrink-0" /> info@oelscheu.de
            </a>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div className="text-muted-foreground">
                <p>Mo–Do: 07:30–12:00 / 13:00–17:00</p>
                <p>Fr: 07:30–12:00 / 13:00–16:00</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lager Wetter */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-surface p-8 md:p-10 max-w-5xl"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-3">Lager Wetter (Ruhr)</h2>
              <p className="text-muted-foreground mb-6 text-sm">Betrieben durch die Gebr. Zobel & Co. Speditions GmbH</p>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Gebr. Zobel & Co. Speditions GmbH</p>
                  <p className="text-muted-foreground">An der Knorr-Bremse 6<br />58300 Wetter (Ruhr)</p>
                </div>
              </div>
            </div>
            <img src="/images/Standort-Zobel-1-1.jpg" alt="Lager Wetter (Ruhr)" className="w-full md:w-[280px] rounded-sm" />
          </div>
        </motion.div>

        {/* Partner */}
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

export default StandortDeutschland;
