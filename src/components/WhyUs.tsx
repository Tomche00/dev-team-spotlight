import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHY_US } from "@/lib/constants";

const WhyUs = () => (
  <section className="relative py-28 md:py-36 border-t border-border overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] blur-[120px] rounded-full" />

    <div className="container relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <span className="section-label">Why us</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
          Why Work <span className="text-gradient">With Us</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          What sets us apart from typical agencies or freelancers.
        </p>
      </motion.div>

      <div className="space-y-3">
        {WHY_US.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group flex items-center gap-5 rounded-2xl bg-card-gradient border border-border p-5 sm:p-6 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] border border-primary/10 group-hover:bg-primary/[0.15] transition-colors duration-300">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <p className="text-sm sm:text-[15px] text-foreground/85 font-medium leading-relaxed">
              {point}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
