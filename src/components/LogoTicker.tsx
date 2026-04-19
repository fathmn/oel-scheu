const logos = [
  {
    name: "Shell",
    svg: (
      <svg viewBox="0 0 120 40" className="h-12 w-auto">
        <text x="60" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" fill="#DD1D21">Shell</text>
      </svg>
    ),
  },
  {
    name: "Castrol",
    svg: (
      <svg viewBox="0 0 140 40" className="h-12 w-auto">
        <text x="70" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" fill="#009639">Castrol</text>
      </svg>
    ),
  },
  {
    name: "FUCHS",
    svg: (
      <svg viewBox="0 0 120 40" className="h-12 w-auto">
        <text x="60" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" fill="#003366">FUCHS</text>
      </svg>
    ),
  },
  {
    name: "Mobil",
    svg: (
      <svg viewBox="0 0 120 40" className="h-12 w-auto">
        <text x="60" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" fill="#0033A0">
          <tspan fill="#FF0000">M</tspan>obil
        </text>
      </svg>
    ),
  },
  {
    name: "Klüber",
    svg: (
      <svg viewBox="0 0 130 40" className="h-12 w-auto">
        <text x="65" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#004F9F">Klüber</text>
      </svg>
    ),
  },
  {
    name: "Quaker Houghton",
    svg: (
      <svg viewBox="0 0 200 40" className="h-12 w-auto">
        <text x="100" y="26" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="#1D2B4D">Quaker Houghton</text>
      </svg>
    ),
  },
  {
    name: "Blaser",
    svg: (
      <svg viewBox="0 0 130 40" className="h-12 w-auto">
        <text x="65" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#E3000F">Blaser</text>
      </svg>
    ),
  },
  {
    name: "Rhenus",
    svg: (
      <svg viewBox="0 0 130 40" className="h-12 w-auto">
        <text x="65" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#00457C">Rhenus</text>
      </svg>
    ),
  },
];

const LogoTicker = () => (
  <section className="py-14 bg-white">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 overflow-hidden">
        {/* Left: Text (1/3) */}
        <div className="lg:w-1/3 shrink-0">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Partner & Lieferanten
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Starke Marken, <span className="text-primary">starke Lösungen</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wir arbeiten mit den führenden Herstellern der Branche zusammen – für höchste Qualität und optimale Ergebnisse.
          </p>
        </div>

        {/* Right: Logo Marquee (2/3) */}
        <div className="w-full lg:w-2/3 relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 mx-3 flex items-center justify-center px-2 h-14 opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LogoTicker;
