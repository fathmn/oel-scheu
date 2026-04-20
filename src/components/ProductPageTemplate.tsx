import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Check, Phone, ArrowRight } from "lucide-react";
import PageLayout from "./PageLayout";
import PageHero from "./PageHero";
import { useInquiryCart, CartItem } from "@/context/InquiryCartContext";
import { fadeUp } from "@/lib/animations";

interface ProductPageTemplateProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  intro: string;
  children: ReactNode;
  cartItem: CartItem;
}

const ProductPageTemplate = ({
  title,
  subtitle,
  heroImage,
  intro,
  children,
  cartItem,
}: ProductPageTemplateProps) => {
  const { addItem, removeItem, isInCart } = useInquiryCart();
  const inCart = isInCart(cartItem.id);

  return (
    <PageLayout>
      <PageHero title={title} subtitle={subtitle} image={heroImage} />
      <section className="pt-8 pb-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mb-8 md:mb-14"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
          </motion.div>

          {children}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 border-t border-border pt-10 max-w-4xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">Interesse an diesem Produkt?</h3>
                <p className="text-sm text-muted-foreground">
                  Zur Anfrageliste hinzufügen oder direkt anrufen.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => (inCart ? removeItem(cartItem.id) : addItem(cartItem))}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors ${
                    inCart
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {inCart ? (
                    <>
                      <Check className="w-4 h-4" />
                      In der Anfrageliste
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      Zur Anfrageliste
                    </>
                  )}
                </button>
                <a
                  href="tel:+4974452560"
                  className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +49 7445 2560
                </a>
              </div>
            </div>
            {inCart && (
              <p className="text-sm text-muted-foreground mt-4">
                <Link to="/anfrage" className="text-primary hover:underline inline-flex items-center gap-1">
                  Zur Anfrageliste
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductPageTemplate;
