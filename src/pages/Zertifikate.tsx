import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Award, ExternalLink } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const Zertifikate = () => (
  <PageLayout>
    <PageHero title="Zertifikate" subtitle="Qualitätsmanagement nach höchsten Standards" />
    <section className="pt-8 pb-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl grid md:grid-cols-[auto_1fr] gap-6 items-start"
        >
          <div className="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0">
            <Award className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">ISO 9001:2015</h2>
            <p className="text-sm text-muted-foreground mb-6">DIN EN ISO 9001:2015 Zertifizierung</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Die Oel-Scheu GmbH erfüllt alle Anforderungen der Zertifizierung nach
              DIN EN ISO 9001:2015. Dieses Zertifikat gibt unseren Kunden die Sicherheit,
              dass Produkt- und Servicequalität das Ergebnis strikter Einhaltung der
              Schmierstoffhandelsvorschriften ist.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unser Qualitätsmanagementsystem gewährleistet disziplinierte, regelbasierte
              Qualitätsprozesse in allen Geschäftsbereichen.
            </p>
            <a
              href="https://oelscheu.de/cms/wp-content/uploads/2024/07/QAS9001-GM2155-24-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Zertifikat anzeigen (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Zertifikate;
