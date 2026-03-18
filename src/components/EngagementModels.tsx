import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ENGAGEMENT_MODELS } from "@/lib/constants";

const EngagementModels = () => (
  <section className="relative py-28 md:py-36 border-t border-border overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.02] blur-[130px] rounded-full" />

    <div className="container relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <span className="section-label">Engagement</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
          How We Can <span className="text-gradient">Work Together</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
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
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group flex items-start gap-4 rounded-2xl bg-card-gradient border border-border p-5 sm:p-6 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] border border-primary/10 mt-0.5 group-hover:bg-primary/[0.15] transition-colors duration-300">
              <ArrowRight className="h-3.5 w-3.5 text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold mb-1.5 tracking-tight">{model.title}</h3>
              <p className="text-xs text-muted-foreground leading-[1.7]">
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
