import { motion } from "framer-motion";
import { Lightbulb, Map, Rocket, Code2, FlaskConical, Cloud, PackageCheck } from "lucide-react";

const steps = [
  { icon: Lightbulb, label: "Idea", color: "text-yellow-400" },
  { icon: Map, label: "Plan", color: "text-blue-400" },
  { icon: Code2, label: "Code", color: "text-primary" },
  { icon: FlaskConical, label: "Test", color: "text-orange-400" },
  { icon: Cloud, label: "Deploy", color: "text-violet-400" },
  { icon: PackageCheck, label: "Product", color: "text-primary" },
];

const Process = () => (
  <section className="py-20 md:py-28 border-t border-border overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-gradient">Process</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          From the first spark to a shipped product — this is how we work.
        </p>
      </motion.div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block relative max-w-5xl mx-auto">
        {/* Animated connecting line */}
        <motion.div
          className="absolute top-10 left-[8%] right-[8%] h-px bg-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="absolute top-10 left-[8%] right-[8%] h-px"
          style={{
            transformOrigin: "left",
            background: "linear-gradient(90deg, hsl(160 84% 50%), hsl(250 80% 65%))",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
        />

        <div className="grid grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card-gradient mb-4"
                whileHover={{ scale: 1.1, borderColor: "hsl(160 84% 50% / 0.5)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 200 }}
                >
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </motion.div>
              </motion.div>
              <span className="text-sm font-semibold">{step.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden relative pl-12 max-w-sm mx-auto">
        {/* Vertical line */}
        <motion.div
          className="absolute left-5 top-0 bottom-0 w-px bg-border"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div
          className="absolute left-5 top-0 bottom-0 w-px"
          style={{
            transformOrigin: "top",
            background: "linear-gradient(180deg, hsl(160 84% 50%), hsl(250 80% 65%))",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.3 }}
        />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="flex items-center gap-4"
            >
              <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card-gradient">
                <step.icon className={`h-5 w-5 ${step.color}`} />
              </div>
              <span className="text-sm font-semibold">{step.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
