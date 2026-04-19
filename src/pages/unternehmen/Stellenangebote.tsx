import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { MapPin, Mail, Phone } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const requirements = [
  "Erfahrung im Vertrieb technischer Produkte",
  "Kenntnisse in der Metallbearbeitung oder Schmierstofftechnik von Vorteil",
  "Eigenverantwortliche und selbstständige Arbeitsweise",
  "Kommunikationsstärke und kundenorientiertes Denken",
];

const Stellenangebote = () => (
  <PageLayout>
    <PageHero title="Stellenangebote" subtitle="Werden Sie Teil unseres Teams" />
    <section className="pt-8 pb-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <div className="border-l-2 border-primary pl-6 mb-8">
            <h2 className="font-heading text-xl md:text-2xl font-semibold mb-1">
              Freiberufliche Handelsvertreter (m/w/d)
            </h2>
            <p className="text-muted-foreground">Öle, Schmierstoffe und Fette</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Mehrere Regionen in Deutschland und der Schweiz</span>
          </div>

          <p className="text-foreground leading-relaxed mb-8">
            Wir suchen engagierte, freiberufliche Handelsvertreter für den Vertrieb
            unseres umfangreichen Sortiments an Ölen, Schmierstoffen und Fetten.
            Sie betreuen eigenverantwortlich Kunden aus der Metallbearbeitung,
            dem Maschinenbau und der Industrie in Ihrer Region.
          </p>

          <div className="bg-surface p-6 mb-8">
            <h3 className="font-heading font-semibold mb-4">Ihr Profil</h3>
            <ul className="space-y-2.5">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              Interessiert? Senden Sie Ihre Bewerbung an:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@oelscheu.de"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@oelscheu.de
              </a>
              <a
                href="tel:+4974452560"
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
              >
                <Phone className="w-4 h-4" />
                +49 7445 2560
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Stellenangebote;
