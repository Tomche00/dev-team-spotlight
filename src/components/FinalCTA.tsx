import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { SITE } from "@/lib/constants";

const FinalCTA = () => (
  <section className="relative py-28 md:py-36 border-t border-border overflow-hidden">
    {/* Background accent */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--primary)/0.04),transparent)]" />

    <div className="container relative z-10 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Let's talk</span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6 leading-[1.15]">
          Have a product to{" "}
          <span className="text-gradient">modernize, stabilize, or scale?</span>
        </h2>

        <p className="text-muted-foreground max-w-lg mx-auto mb-12 leading-[1.7] text-base">
          We're open to contract work, long-term collaboration, and selected full-time opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.bookCallUrl}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.5)] transition-all duration-300 btn-press"
          >
            Book a Call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={SITE.sendProjectUrl}
            className="inline-flex items-center gap-2.5 rounded-xl border border-border/80 bg-card/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-foreground/80 hover:text-foreground hover:border-primary/30 hover:bg-card/80 transition-all duration-300 btn-press"
          >
            Send Us Your Project <Send className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
