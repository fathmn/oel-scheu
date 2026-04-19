import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { fadeUp } from "@/lib/animations";

const Impressum = () => (
  <PageLayout>
    <PageHero title="Impressum" />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl prose prose-sm">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Oel-Scheu GmbH<br />
          Zeppelinstraße 13<br />
          D-72285 Pfalzgrafenweiler
        </p>

        <h3>Kontakt</h3>
        <p>
          Telefon: +49 7445 2560<br />
          E-Mail: info@oelscheu.de
        </p>

        <h3>Vertretungsberechtigte Geschäftsführer</h3>
        <p>
          Geschäftsführender Gesellschafter: Wolfgang Scheu<br />
          Geschäftsführer: Lukas Scheu
        </p>

        <h3>Handelsregister</h3>
        <p>
          Registergericht: Amtsgericht Stuttgart<br />
          Registernummer: HRB 430756
        </p>

        <h3>Umsatzsteuer-Identifikationsnummer</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
          DE 169441218
        </p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>
          Wolfgang Scheu<br />
          Zeppelinstraße 13<br />
          D-72285 Pfalzgrafenweiler
        </p>

        <h3>Streitschlichtung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
          (OS) bereit. Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Impressum;
