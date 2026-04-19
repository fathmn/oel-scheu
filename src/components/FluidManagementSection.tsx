import { motion } from "framer-motion";
import { Activity, Gauge, RefreshCw, ShieldCheck, Wrench, ArrowRight } from "lucide-react";
import fluidImg from "@/assets/fluid-management.jpg";

const benefits = [
  { icon: Activity, text: "Biobalance-System für konstante KSS-Qualität" },
  { icon: Gauge, text: "Optimale Menge und Zusammensetzung garantiert" },
  { icon: RefreshCw, text: "Monitoring nach TRGS – Schulungen & Laboranalysen" },
  { icon: Wrench, text: "Spezialisierte Filtrations- und Mischsysteme" },
  { icon: ShieldCheck, text: "KSS-Überwachung nach DGUV Regel 109-003" },
];

const FluidManagementSection = () => (
  <section className="py-20 lg:py-28 bg-industrial relative overflow-hidden">
    {/* Subtle pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="container relative z-10 mx-auto px-4 lg:px-8">
      <div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent/20 rounded-2xl" />
            <img
              src={fluidImg}
              alt="Oel-Scheu Logistik und Service"
              className="w-full rounded-2xl object-cover relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl z-20 font-semibold text-sm shadow-lg">
              Eigene Logistik & Service
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              Service & Dienstleistungen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-foreground mb-6 leading-tight">
              Fluid-Management{" "}
              <span className="text-accent">der nächsten Generation</span>
            </h2>
            <p className="text-industrial-foreground/70 leading-relaxed mb-8">
              Wir bieten Ihnen ein System aufeinander abgestimmter Geräte, die
              Ihren Kühlschmierstoff ständig in der gewünschten
              leistungsfähigen und gesunden Balance halten. Die für den
              Produktionsprozess optimale Menge und Zusammensetzung wird dabei
              garantiert.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <b.icon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-sm text-industrial-foreground/80">
                    {b.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Fluid-Management anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default FluidManagementSection;
