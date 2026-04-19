import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useInquiryCart } from "@/context/InquiryCartContext";
import { Trash2, ShoppingCart, Send, ArrowLeft, CheckCircle2 } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

const Anfrage = () => {
  const { items, removeItem, clearCart, itemCount } = useInquiryCart();
  const [form, setForm] = useState({ company: "", name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageLayout>
        <PageHero title="Anfrage gesendet" subtitle="Vielen Dank für Ihre Anfrage" />
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="bg-green-50 border border-green-200 p-6 sm:p-10 max-w-2xl">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-6" />
              <h2 className="font-heading text-2xl font-bold text-green-900 mb-4">Vielen Dank!</h2>
              <p className="text-green-700 mb-2">
                Wir haben Ihre Anfrage mit {itemCount} {itemCount === 1 ? "Produkt" : "Produkten"} erhalten.
              </p>
              <p className="text-green-700 mb-8">Unser Team wird sich schnellstmöglich bei Ihnen melden.</p>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors">
                Zurück zum Katalog
              </Link>
            </motion.div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHero
        title="Anfrageliste"
        subtitle={itemCount > 0 ? `${itemCount} ${itemCount === 1 ? "Produkt" : "Produkte"} in Ihrer Liste` : "Ihre Anfrageliste ist leer"}
      />
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {itemCount === 0 ? (
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="py-16">
              <ShoppingCart className="w-12 h-12 text-muted-foreground/30 mb-6" />
              <h2 className="font-heading text-xl font-semibold mb-2">Ihre Anfrageliste ist leer</h2>
              <p className="text-muted-foreground mb-8">Fügen Sie Produkte aus unserem Katalog hinzu.</p>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Zum Produktkatalog
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_380px] gap-8">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeLeft}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl font-bold">Ausgewählte Produkte</h2>
                  <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-red-600 transition-colors">Alle entfernen</button>
                </div>
                <div className="space-y-2">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -30 }}
                        layout
                        className="flex items-center gap-4 bg-surface p-3 border border-border/50"
                      >
                        {item.image && <img src={item.image} alt={item.name} className="w-16 h-12 object-cover shrink-0" />}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="p-2 text-muted-foreground hover:text-red-600 transition-colors" aria-label="Entfernen">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-4">
                  <ArrowLeft className="w-4 h-4" /> Weitere Produkte hinzufügen
                </Link>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeRight}>
                <div className="bg-surface p-6 sticky top-24">
                  <h2 className="font-heading text-xl font-bold mb-6">Anfrage absenden</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1.5">Firma</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">E-Mail *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Telefon</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5">Nachricht</label>
                      <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Optionale Anmerkungen..." className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors">
                      <Send className="w-4 h-4" /> Anfrage absenden
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Anfrage;
