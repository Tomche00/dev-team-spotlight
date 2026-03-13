import { motion } from "framer-motion";
import { Lightbulb, Map, Code2, FlaskConical, Cloud, PackageCheck, RotateCcw } from "lucide-react";

const steps = [
  { icon: Lightbulb, label: "Idea", color: "text-yellow-400" },
  { icon: Map, label: "Plan", color: "text-blue-400" },
  { icon: Code2, label: "Code", color: "text-primary" },
  { icon: FlaskConical, label: "Test", color: "text-orange-400" },
  { icon: Cloud, label: "Deploy", color: "text-violet-400" },
  { icon: PackageCheck, label: "Product", color: "text-primary" },
];

const TOTAL = steps.length;
const CYCLE_DURATION = 6; // seconds for full loop

const Process = () => (
  <section className="py-20 md:py-28 border-t border-border overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-gradient">Process</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A continuous cycle of building, testing, and shipping — our CI/CD pipeline never stops.
        </p>
      </motion.div>

      {/* Infinite loop indicator */}
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-12">
        <RotateCcw className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "3s" }} />
        <span className="font-mono">continuous delivery</span>
      </div>

      {/* Desktop: circular/oval loop */}
      <div className="hidden md:flex justify-center">
        <div className="relative" style={{ width: 700, height: 320 }}>
          {/* Oval track */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 320" fill="none">
            <ellipse cx="350" cy="160" rx="310" ry="120" stroke="hsl(220 14% 16%)" strokeWidth="1.5" />
            {/* Animated gradient pulse traveling the loop */}
            <ellipse cx="350" cy="160" rx="310" ry="120" stroke="url(#loopGrad)" strokeWidth="2" strokeDasharray="12 8" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" from="0 350 160" to="360 350 160" dur={`${CYCLE_DURATION}s`} repeatCount="indefinite" />
            </ellipse>
            {/* Orbiting dot */}
            <circle r="5" fill="hsl(160 84% 50%)">
              <animateMotion dur={`${CYCLE_DURATION}s`} repeatCount="indefinite" path="M 660,160 A 310,120 0 1 1 659.99,160" />
            </circle>
            <circle r="10" fill="hsl(160 84% 50% / 0.2)">
              <animateMotion dur={`${CYCLE_DURATION}s`} repeatCount="indefinite" path="M 660,160 A 310,120 0 1 1 659.99,160" />
            </circle>
            <defs>
              <linearGradient id="loopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(160 84% 50% / 0.6)" />
                <stop offset="50%" stopColor="hsl(250 80% 65% / 0.4)" />
                <stop offset="100%" stopColor="hsl(160 84% 50% / 0.6)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Step nodes positioned around the ellipse */}
          {steps.map((step, i) => {
            const angle = (i / TOTAL) * 2 * Math.PI - Math.PI / 2;
            const x = 350 + 310 * Math.cos(angle);
            const y = 160 + 120 * Math.sin(angle);
            return (
              <motion.div
                key={step.label}
                className="absolute flex flex-col items-center"
                style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card-gradient shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 0px hsl(160 84% 50% / 0)",
                      "0 0 20px hsl(160 84% 50% / 0.3)",
                      "0 0 0px hsl(160 84% 50% / 0)",
                    ],
                  }}
                  transition={{
                    duration: CYCLE_DURATION,
                    repeat: Infinity,
                    delay: (i / TOTAL) * CYCLE_DURATION,
                    ease: "easeInOut",
                  }}
                >
                  <step.icon className={`h-7 w-7 ${step.color}`} />
                </motion.div>
                <span className="mt-2 text-xs font-semibold">{step.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: horizontal scrolling loop */}
      <div className="md:hidden relative">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card-gradient"
                animate={{
                  boxShadow: [
                    "0 0 0px hsl(160 84% 50% / 0)",
                    "0 0 16px hsl(160 84% 50% / 0.35)",
                    "0 0 0px hsl(160 84% 50% / 0)",
                  ],
                }}
                transition={{
                  duration: CYCLE_DURATION,
                  repeat: Infinity,
                  delay: (i / TOTAL) * CYCLE_DURATION,
                  ease: "easeInOut",
                }}
              >
                <step.icon className={`h-5 w-5 ${step.color}`} />
              </motion.div>
              <span className="mt-1.5 text-[10px] font-semibold">{step.label}</span>
              {i < TOTAL - 1 && (
                <motion.span
                  className="absolute text-muted-foreground text-xs"
                  style={{ display: "none" }}
                >→</motion.span>
              )}
            </motion.div>
          ))}
        </div>
        {/* Loop arrow beneath */}
        <div className="flex justify-center mt-4">
          <RotateCcw className="h-5 w-5 text-primary/50 animate-spin" style={{ animationDuration: "4s" }} />
        </div>
      </div>
    </div>
  </section>
);

export default Process;
