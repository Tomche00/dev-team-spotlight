import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ENGAGEMENT_MODELS } from "@/lib/constants";

const EngagementModels = () => (
  <section className="py-24 md:py-32 border-t border-border">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          How We Can <span className="text-gradient">Work Together</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Flexible engagement models tailored to your needs.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {ENGAGEMENT_MODELS.map((model, i) => (
          <motion.div
            key={model.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-start gap-4 rounded-xl bg-card-gradient border border-border p-5 hover:border-primary/20 transition-colors group"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
              <ArrowRight className="h-3.5 w-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div>
              <h3 className="text-sm font-bold mb-1">{model.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {model.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementModels;
