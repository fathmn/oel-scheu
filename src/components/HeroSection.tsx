import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const usps = [
  "Technische Beratung statt reiner Produktlieferung",
  "Messbare Verlängerung Ihrer Werkzeugstandzeiten",
  "Ganzheitliches KSS-Management aus einer Hand",
];

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden pb-[100px] lg:pb-[120px]">
    {/* Background image – more visible */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroBg}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      {/* Lighter overlay so image shines through */}
      <div className="absolute inset-0 bg-industrial/65" />
    </div>

    {/* Top accent line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary z-20" />
    {/* Fluid wave built into hero bottom */}
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[100px] lg:h-[120px]">
        <defs>
          <linearGradient id="hero-oil-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(220 14% 97%)" />
            <stop offset="35%" stopColor="hsl(220 14% 97%)" />
            <stop offset="50%" stopColor="hsl(38 90% 50% / 0.12)" />
            <stop offset="65%" stopColor="hsl(220 14% 97%)" />
            <stop offset="100%" stopColor="hsl(220 14% 97%)" />
          </linearGradient>
        </defs>
        <path d="M0,80 C120,45 240,85 360,62 C480,38 600,78 720,68 C840,58 960,35 1080,52 C1200,68 1320,42 1440,58 L1440,120 L0,120 Z" fill="hsl(220 14% 97%)" opacity="0.45" />
        <path d="M0,88 C180,52 300,98 480,72 C660,44 780,88 960,74 C1140,58 1260,42 1440,68 L1440,120 L0,120 Z" fill="url(#hero-oil-grad)" />
        <path d="M0,96 C200,72 400,104 600,86 C800,66 1000,96 1200,82 C1320,74 1400,90 1440,86 L1440,120 L0,120 Z" fill="hsl(220 14% 97%)" />
      </svg>
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="max-w-2xl">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-industrial-foreground leading-[1.1] mb-5 tracking-tight"
        >
          Kühlschmierstoffe &{" "}
          <span className="text-accent">Prozessoptimierung</span>{" "}
          für die Industrie
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-industrial-foreground/80 mb-8 leading-relaxed"
        >
          Seit 1965 Ihr Partner für KSS, Fette und Öle – mit technischer
          Beratung und messbarem Mehrwert für Ihre Produktion.
        </motion.p>

        {/* 3 USPs */}
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="space-y-3 mb-10"
        >
          {usps.map((usp, i) => (
            <motion.li
              key={usp}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-3 text-industrial-foreground/90"
            >
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm md:text-base font-medium">{usp}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Beratungsgespräch vereinbaren
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+4974452560"
            className="inline-flex items-center justify-center gap-2.5 border border-industrial-foreground/25 text-industrial-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-industrial-foreground/10 transition-all backdrop-blur-sm hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Jetzt Kontakt aufnehmen
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
