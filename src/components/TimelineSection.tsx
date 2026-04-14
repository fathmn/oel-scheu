import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const events = [
  { year: "1965", text: "Gründung der Firma Karl Scheu Mineralölgroßhandel." },
  { year: "1972", text: "Grundstückserwerb Schollenrain und Bau der Lagerhalle in der Siemensstraße 17." },
  { year: "1994", text: "Eintragung der Oel-Scheu GmbH im HRB FDS : 756." },
  { year: "1995", text: "Geschäftsübergabe von Karl Scheu Mineralölgroßhandel an Oel-Scheu GmbH." },
  { year: "2004", text: "Übernahme des Gashandels Rolf Ulrich in Pfalzgrafenweiler." },
  { year: "2010", text: "Übernahme Geschäftszweig Houghton Schweiz AG. Gründung der Schweizer Vertriebspartner GmbH." },
  { year: "2012", text: "Management-System ISO-zertifiziert nach ISO 9001 : 2008." },
  { year: "2014", text: "Houghton Schweiz AG wird zur Oel-Scheu Vertriebspartner GmbH firmiert." },
  { year: "2015", text: "50 Jahre Oel-Scheu – ein halbes Jahrhundert Schmierstoff-Kompetenz." },
  { year: "2018", text: "Umzug des Lagers und Logistik Düsseldorf zur Spedition Zobel, Wetter (Ruhr)." },
  { year: "2023", text: "Mit Lukas Scheu ist die 3. Generation im Unternehmen tätig." },
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // The red beam height as a percentage
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Historie
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Über 58 Jahre <span className="text-primary">Tradition & Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Von der Gründung 1965 bis zur 3. Generation – ein Familienunternehmen mit Weitblick.
          </p>
        </motion.div>

        <div ref={containerRef} className="max-w-3xl mx-auto relative">
          {/* Grey background line */}
          <div className="absolute left-[23.5px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {/* Red beam – scroll-driven overlay */}
          <motion.div
            style={{ height: beamHeight }}
            className="absolute left-[23.5px] md:left-1/2 -translate-x-1/2 top-0 w-0.5 bg-primary origin-top z-[1]"
          />

          {events.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative flex items-start gap-6 mb-8 last:mb-0 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot – centered on the line */}
              <div className="absolute left-[17.5px] md:left-1/2 -translate-x-1/2 top-1.5 z-10">
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-background" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                <span className="text-primary font-bold text-lg">{e.year}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {e.text}
                </p>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
