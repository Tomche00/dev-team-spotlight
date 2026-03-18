import { motion } from "framer-motion";
import { RefreshCcw, Server, Layout, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = { RefreshCcw, Server, Layout, ShieldCheck };

const WhatWeDo = () => (
  <section id="services" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          What We <span className="text-gradient">Do</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Focused expertise across the full product engineering lifecycle.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl bg-card-gradient border border-border p-6 hover:border-primary/30 card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhatWeDo;
