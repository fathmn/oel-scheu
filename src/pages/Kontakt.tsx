import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, Linkedin, Send } from "lucide-react";
import { fadeLeft, fadeRight } from "@/lib/animations";

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <PageLayout>
      <PageHero title="Kontakt" subtitle="Wir freuen uns auf Ihre Nachricht" />
      <section className="pt-8 pb-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 max-w-5xl">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeLeft}>
              <h2 className="font-heading text-2xl font-bold mb-8">Kontaktinformationen</h2>

              <div className="border-l-2 border-primary/20 pl-5 mb-8">
                <h3 className="font-heading font-semibold mb-3">Deutschland</h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold">Oel-Scheu GmbH</p>
                      <p className="text-muted-foreground">Zeppelinstraße 13, D-72285 Pfalzgrafenweiler</p>
                    </div>
                  </div>
                  <a href="tel:+4974452560" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary shrink-0" /> +49 7445 2560
                  </a>
                  <a href="mailto:info@oelscheu.de" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary shrink-0" /> info@oelscheu.de
                  </a>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div className="text-muted-foreground">
                      <p>Mo–Do: 07:30–12:00 / 13:00–17:00</p>
                      <p>Fr: 07:30–12:00 / 13:00–16:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 pl-5 mb-8">
                <h3 className="font-heading font-semibold mb-3">Schweiz</h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold">Oel-Scheu Vertriebspartner GmbH</p>
                      <p className="text-muted-foreground">Hubstrasse 33, CH-9501 Wil / SG</p>
                    </div>
                  </div>
                  <a href="tel:+41719114747" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary shrink-0" /> +41 71 911 47 47
                  </a>
                  <a href="mailto:info@oelscheu-vp.ch" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary shrink-0" /> info@oelscheu-vp.ch
                  </a>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div className="text-muted-foreground">
                      <p>Mo–Do: 08:00–12:00 / 13:30–16:30</p>
                      <p>Fr: 08:00–12:00 / 13:30–16:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://de.linkedin.com/company/oelscheu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" /> Folgen Sie uns auf LinkedIn
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeRight}>
              <h2 className="font-heading text-2xl font-bold mb-8">Nachricht senden</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">E-Mail *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Telefon</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Betreff *</label>
                    <select id="subject" name="subject" required value={form.subject} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="">Bitte wählen...</option>
                      <option value="beratung">Beratungsgespräch</option>
                      <option value="produkt">Produktanfrage</option>
                      <option value="service">Service-Anfrage</option>
                      <option value="bewerbung">Bewerbung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Nachricht *</label>
                  <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors">
                  <Send className="w-4 h-4" /> Nachricht senden
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Kontakt;
