import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { fadeUp } from "@/lib/animations";

const Datenschutz = () => (
  <PageLayout>
    <PageHero title="Datenschutzerklärung" />
    <section className="pt-8 pb-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl prose prose-sm">
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Personenbezogene
          Daten umfassen Namen, Adressen, Telefonnummern, Geburtsdaten und alle Informationen,
          die einer identifizierbaren Person zugeordnet werden können.
        </p>
        <p>
          Daten werden nur im für den Websitebetrieb und die Dienstleistungserbringung
          erforderlichen Umfang erhoben, gemäß BDSG, TMG und EU-DSGVO.
        </p>

        <h2>2. Verantwortliche Stelle (Art. 4 Abs. 7 DSGVO)</h2>
        <p>
          Oel-Scheu GmbH<br />
          Zeppelinstraße 13<br />
          D-72285 Pfalzgrafenweiler<br />
          Telefon: +49 7445 2560<br />
          E-Mail: info@oelscheu.de
        </p>

        <h2>3. Server-Logfiles</h2>
        <p>
          Bei jedem Besuch werden automatisch folgende Daten erfasst: Browser-Typ/-Version,
          Betriebssystem, IP-Adresse, Datum/Uhrzeit des Zugriffs, aufgerufene Seiten/Ressourcen
          und verweisende Websites.
        </p>
        <p>
          Speicherung: Löschung nach spätestens 3 Monaten. Zweck: Kompatibilität, Missbrauchsprävention,
          Fehlerbehebung, IT-Sicherheit.
        </p>

        <h2>4. Kontaktformulare</h2>
        <p>
          In Kontaktformulare eingegebene Daten werden ausschließlich zur Bearbeitung der
          jeweiligen Anfrage verwendet. Löschung erfolgt umgehend nach Bearbeitung, sofern
          keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>

        <h2>5. Cookies</h2>
        <p>
          Zur Gewährleistung der vollständigen Websitefunktionalität und Verbesserung der
          Benutzerfreundlichkeit werden Cookies eingesetzt. Cookie-Typen:
        </p>
        <ul>
          <li><strong>Session-Cookies:</strong> Verfallen am Ende der Sitzung</li>
          <li><strong>Persistente Cookies:</strong> Bleiben bis zur manuellen Löschung im Browser gespeichert</li>
        </ul>
        <p>
          Sie können Ihre Browser-Einstellungen so konfigurieren, dass Cookies blockiert,
          abgefragt oder akzeptiert werden.
        </p>

        <h2>6. E-Mail-Sicherheit & Archivierung</h2>
        <p>
          Unverschlüsselte E-Mail kann keine vollständige Übertragungssicherheit garantieren.
          Alle ein- und ausgehenden E-Mails werden automatisch in einem revisionssicheren
          digitalen System archiviert.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Aufbewahrungsfrist: bis zu 10 Jahre
          (§§ 146, 147 AO).
        </p>

        <h3>Bewerbungen per E-Mail</h3>
        <ul>
          <li>Nur PDF-Format wird akzeptiert</li>
          <li>Komprimierte Dateien (ZIP, RAR, 7Zip) werden herausgefiltert</li>
          <li>Word- und andere Formate werden ungelesen gelöscht</li>
        </ul>

        <h2>7. Ihre Rechte</h2>
        <ul>
          <li>Einmal jährlich kostenlose Auskunft über gespeicherte Daten</li>
          <li>Jederzeit Berichtigung, Sperrung oder Löschung Ihrer Daten</li>
          <li>Daten werden auf erste Anfrage gelöscht, sofern keine gesetzlichen Pflichten entgegenstehen</li>
          <li>Einwilligung zur Datennutzung kann jederzeit widerrufen werden</li>
        </ul>
        <p>Anfragen richten Sie an: Oel-Scheu GmbH, Zeppelinstraße 13, D-72285 Pfalzgrafenweiler.</p>

        <h2>8. Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)</h2>
        <p>
          Bei Verdacht auf unrechtmäßige Datenverarbeitung können Sie sich an eine Aufsichtsbehörde
          in Ihrem EU-Mitgliedstaat des Wohnsitzes, Arbeitsplatzes oder des vermuteten Verstoßes wenden.
        </p>
      </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Datenschutz;
