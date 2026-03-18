import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/constants";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Background effects */}
    <div className="absolute inset-0 bg-hero-gradient" />
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
    
    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="container relative z-10 text-center max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Available for new projects
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          We help companies{" "}
          <span className="text-gradient">modernize and scale</span>{" "}
          SaaS products
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
          Senior engineering team focused on backend-heavy systems, frontend modernization, QA automation, and production-ready delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={SITE.bookCallUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity btn-press shadow-glow-primary"
          >
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-secondary-foreground hover:bg-muted transition-colors btn-press"
          >
            View Selected Work
          </a>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground/70 max-w-xl mx-auto leading-relaxed font-mono">
          Experience across marketing automation, workflow systems, media platforms, frontend systems, and QA automation.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5 text-muted-foreground/40" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
