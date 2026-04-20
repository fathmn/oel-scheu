import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const milestones = [
  { year: "2025", text: "60-jähriges Firmenjubiläum (1965–2025)" },
  { year: "2023", text: "Mit Lukas Scheu ist nun die 3. Generation im Unternehmen tätig." },
  { year: "2018", text: "Umzug des Lagers/Logistik zur Spedition Zobel, Wetter (Ruhr)" },
  { year: "2015", text: "50-jähriges Firmenjubiläum" },
  { year: "2014", text: "Houghton Schweiz AG umbenannt in Oel-Scheu Vertriebspartner GmbH" },
  { year: "2013", text: "Lager Düsseldorf im Logistikcenter Cretschmar Cargo" },
  { year: "2012", text: "Management-System der Firma Oel-Scheu ISO-zertifiziert nach ISO 9001:2008" },
  { year: "2010", text: "Übernahme der Houghton Schweiz AG, Gründung der Schweizer Niederlassung in Wil/St. Gallen" },
  { year: "2007", text: "Erweiterung der Lagerhalle abgeschlossen" },
  { year: "2004", text: "Übernahme des Gashandels (Rolf Ulrich) in Pfalzgrafenweiler" },
  { year: "1995", text: "Umfirmierung von Karl Scheu Mineralölgroßhandel zur Oel-Scheu GmbH" },
  { year: "1994", text: "Eintragung der Oel-Scheu GmbH im HRB FDS: 756" },
  { year: "1993", text: "SB-Waschanlage in Freudenstadt eröffnet" },
  { year: "1991", text: "Umzug in das neue Bürogebäude, Zeppelinstraße 13" },
  { year: "1990", text: "Waschanlage in Neustadt an der Weinstraße eröffnet (Scheu & Jäger GbR)" },
  { year: "1987", text: "Waschanlagen in Pfalzgrafenweiler und Nagold gebaut" },
  { year: "1985", text: "Grundstückserweiterung für Leergutlager" },
  { year: "1978", text: "Wohn- und Geschäftshaus an der Zeiss Straße 10 errichtet" },
  { year: "1972", text: "Grundstückserwerb und Lagerbau an der Siemensstraße 17" },
  { year: "1965", text: "Gründung der Firma Karl Scheu Mineralölgroßhandel" },
];

const Historie = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageLayout>
      <PageHero title="Unsere Historie" subtitle="Über 60 Jahre Erfahrung im Schmierstoffhandel" />
      <section className="pt-8 pb-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={containerRef} className="max-w-3xl mx-auto relative">
            {/* Grey spine */}
            <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />
            {/* Scroll-driven red beam */}
            <motion.div
              style={{ height: beamHeight }}
              className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 w-0.5 bg-primary origin-top z-[1]"
            />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year + i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-6 mb-8 last:mb-0 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-[2px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-10">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background" />
                </div>

                <div className={`ml-8 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <span className="text-primary font-bold text-lg">{m.year}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{m.text}</p>
                </div>

                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Historie;
