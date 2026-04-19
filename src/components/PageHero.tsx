import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => (
  <section className="relative bg-industrial overflow-hidden min-h-[180px] md:min-h-[340px] flex items-center">
    {image && (
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial via-industrial/80 to-industrial/40" />
      </div>
    )}
    {!image && (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />
    )}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="relative container mx-auto px-4 lg:px-8 pt-20 pb-14 md:pt-24 md:pb-28">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading text-2xl md:text-5xl font-bold text-industrial-foreground mb-2 md:mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm md:text-xl text-industrial-foreground/70 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
    <svg
      viewBox="0 0 1440 60"
      className="absolute bottom-0 left-0 w-full h-auto block"
      preserveAspectRatio="none"
    >
      <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="white" />
    </svg>
  </section>
);

export default PageHero;
