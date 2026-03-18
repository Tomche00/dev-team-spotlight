import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { SITE } from "@/lib/constants";

const FinalCTA = () => (
  <section className="py-24 md:py-32 border-t border-border">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
          Have a product to{" "}
          <span className="text-gradient">modernize, stabilize, or scale?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          We're open to contract work, long-term collaboration, and selected full-time opportunities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.bookCallUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity btn-press shadow-glow-primary"
          >
            Book a Call <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={SITE.sendProjectUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-secondary-foreground hover:bg-muted transition-colors btn-press"
          >
            Send Us Your Project <Send className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
