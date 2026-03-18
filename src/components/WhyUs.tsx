import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHY_US } from "@/lib/constants";

const WhyUs = () => (
  <section className="py-24 md:py-32 border-t border-border">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Why Work <span className="text-gradient">With Us</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          What sets us apart from typical agencies or freelancers.
        </p>
      </motion.div>

      <div className="space-y-4">
        {WHY_US.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 rounded-xl bg-card-gradient border border-border p-5 hover:border-primary/20 transition-colors"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed pt-1">
              {point}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
