import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Background effects */}
    <div className="absolute inset-0 bg-hero-gradient" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
    
    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground mb-8">
          <Code2 className="h-3.5 w-3.5 text-primary" />
          Full-Stack Development Team
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
          We Build
          <br />
          <span className="text-gradient">Digital Products</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
          A tight-knit crew of architects, developers, and engineers shipping robust, scalable software from concept to production.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity btn-press">
            View Our Work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#team" className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:bg-muted transition-colors btn-press">
            Meet the Team
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
