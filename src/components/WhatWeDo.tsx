import { motion } from "framer-motion";
import { RefreshCcw, Server, Layout, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = { RefreshCcw, Server, Layout, ShieldCheck };

const WhatWeDo = () => (
  <section id="services" className="relative py-28 md:py-36 border-t border-border overflow-hidden">
    {/* Subtle background accent */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] blur-[150px] rounded-full" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="section-label">Services</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
          What We <span className="text-gradient">Do</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Focused expertise across the full product engineering lifecycle.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl bg-card-gradient border border-border p-7 hover:border-primary/30 card-hover"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.08] border border-primary/10 mb-5 group-hover:bg-primary/[0.12] transition-colors duration-300">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-[15px] font-bold mb-2.5 tracking-tight">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.7]">
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
