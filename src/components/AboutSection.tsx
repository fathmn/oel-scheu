import { motion } from "framer-motion";
import { MapPin, Phone as PhoneIcon, Mail, Clock } from "lucide-react";
import teamImg from "@/assets/optimized/team.webp";
import facilityImg from "@/assets/optimized/facility.webp";

const AboutSection = () => (
  <section id="ueber-uns" className="py-10 md:py-20 lg:py-28 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Oel-Scheu GmbH –{" "}
            <span className="text-primary">Erfahrung trifft technische Kompetenz</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Seit 1965 ist die Oel-Scheu GmbH auf Kühlschmierstoffe, Fette und
            Öle spezialisiert. Als Familienunternehmen verbinden wir
            Produktkompetenz mit technischer Beratung. Unser Anspruch ist es,
            Ihre Prozesse nachhaltig zu optimieren und langfristige
            Partnerschaften aufzubauen.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Zeppelinstraße 13</p>
                <p className="text-sm text-muted-foreground">
                  72285 Pfalzgrafenweiler
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:+4974452560" className="font-medium hover:text-primary transition-colors">
                +49 7445 2560
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:info@oelscheu.de" className="font-medium hover:text-primary transition-colors">
                info@oelscheu.de
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>Mo – Do: 07:30 – 12:00, 13:00 – 17:00 Uhr</p>
                <p>Fr: 07:30 – 12:00, 13:00 – 16:00 Uhr</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <img
            src={teamImg}
            alt="Oel-Scheu Team"
            width={1200}
            height={798}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-full rounded-xl object-cover"
          />
          <img
            src={facilityImg}
            alt="Oel-Scheu Standort"
            width={960}
            height={298}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-full rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
