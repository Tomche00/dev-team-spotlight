import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/constants";

const FloatingOrb = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay }}
  />
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 noise-overlay">
    {/* Layered background */}
    <div className="absolute inset-0 bg-hero-gradient" />

    {/* Animated floating orbs */}
    <FloatingOrb
      className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px] animate-float-slow"
      delay={0}
    />
    <FloatingOrb
      className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[130px] animate-float-slower"
      delay={0.5}
    />
    <FloatingOrb
      className="absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[100px] animate-float-slower"
      delay={1}
    />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Radial fade on grid */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_75%)]" />

    <div className="container relative z-10 text-center max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] backdrop-blur-sm px-5 py-2 text-xs font-medium text-primary/90 mb-10 font-mono tracking-wide"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for new projects
        </motion.div>

        {/* Main headline */}
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-[-0.03em] leading-[1.08] mb-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-foreground/90"
          >
            We help companies
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-gradient"
          >
            modernize and scale
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-foreground/90"
          >
            SaaS products
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-12 leading-[1.7]"
        >
          Senior engineering team focused on backend-heavy systems, frontend
          modernization, QA automation, and production-ready delivery.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={SITE.bookCallUrl}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-300 btn-press"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 rounded-xl border border-border/80 bg-card/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-foreground/80 hover:text-foreground hover:border-primary/30 hover:bg-card/80 transition-all duration-300 btn-press"
          >
            View Selected Work
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-xs text-muted-foreground/50 max-w-lg mx-auto leading-relaxed tracking-wide"
        >
          Experience across marketing automation · workflow systems · media platforms · frontend systems · QA automation
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-muted-foreground/30 font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground/30" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
