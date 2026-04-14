import { motion } from "framer-motion";
import { Droplets, Shield, Beaker, FlaskConical, Users, ArrowRight } from "lucide-react";
import kssImg from "@/assets/kss-detail.jpg";

const features = [
  {
    icon: Droplets,
    title: "Wassermischbare KSS",
    text: "Stabile Emulsionen mit hervorragenden Kühl- und Schmiereigenschaften für Zerspanungs- und Schleifprozesse. Optimiert gegen Schaumbildung und Instabilität.",
  },
  {
    icon: FlaskConical,
    title: "Nicht wassermischbare KSS",
    text: "Spezialöle für Anwendungen, bei denen hohe Schmierleistung und effektiver Spülschutz im Vordergrund stehen.",
  },
  {
    icon: Shield,
    title: "Korrosionsschutz",
    text: "Effektiver Schutz für Stahl und andere Metalle – Ihre Werkstücke und Maschinen bleiben rostfrei.",
  },
  {
    icon: Users,
    title: "Gesundheitsschutz",
    text: "Produkte mit maximaler Hautverträglichkeit und Arbeitssicherheit. Umfassende Beratung zu Handhabung und Schutzmaßnahmen.",
  },
  {
    icon: Beaker,
    title: "Individuelle Beratung",
    text: "Unsere Experten finden die optimale KSS-Lösung für Ihre Fertigungsprozesse – von der Zerspanung bis zur Luft- und Raumfahrt.",
  },
];

const KSSDetailSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl overflow-hidden max-w-6xl mx-auto"
        >
          <img src={kssImg} alt="CNC-Maschine mit Kühlschmierstoff" className="w-full h-64 md:h-80 object-cover" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Kernkompetenz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Kühlschmierstoffe für{" "}
              <span className="text-primary">Präzision & Leistung</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die Wahl des richtigen Kühlschmierstoffs ist entscheidend für die
              Bearbeitungsqualität, Werkzeugstandzeiten und die Produktivität in
              der Metallbearbeitung. Wir bieten eine umfassende Palette an
              hochwertigen KSS, speziell auf die Anforderungen Ihrer
              Fertigungsprozesse zugeschnitten.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kühlschmierstoffe sind mehr als nur Kühlmittel. Sie reduzieren
              Reibung und Verschleiß, leiten Späne ab, schützen vor Korrosion
              und beeinflussen maßgeblich die Oberflächengüte Ihrer Werkstücke.
            </p>

            {/* Key stat */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-medium">
                Unser Versprechen
              </p>
              <p className="text-lg font-semibold leading-snug">
                Ein leistungsstarker KSS ist unerlässlich für höchste Präzision
                und maximale Werkzeug- & Maschinenlebensdauer.
              </p>
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </motion.div>
            ))}

            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all"
            >
              Individuelle Beratung anfragen
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default KSSDetailSection;
