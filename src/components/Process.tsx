import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Lightbulb, Map, Code2, FlaskConical, Cloud } from "lucide-react";
import { useState, useRef } from "react";

const steps = [
  { icon: Lightbulb, label: "Idea", desc: "Brainstorm & define" },
  { icon: Map, label: "Plan", desc: "Architecture & design" },
  { icon: Code2, label: "Code", desc: "Build & develop" },
  { icon: Cloud, label: "Deploy", desc: "Ship & deliver" },
];

const CYCLE_MS = 10000;

// Infinity (lemniscate) curve parametric equations
function infinityPoint(cx: number, cy: number, a: number, b: number, t: number) {
  const denom = 1 + Math.sin(t) * Math.sin(t);
  const x = cx + (a * Math.cos(t)) / denom;
  const y = cy + (b * Math.sin(t) * Math.cos(t)) / denom;
  return { x, y };
}

interface InfinityConfig {
  cx: number; cy: number; a: number; b: number;
  w: number; h: number; nodeSize: number;
  dotR: number; glowR: number;
  fontSize: string; descSize: string; iconSize: string;
}

const desktop: InfinityConfig = {
  cx: 400, cy: 250, a: 320, b: 180,
  w: 800, h: 500, nodeSize: 64, dotR: 6, glowR: 18,
  fontSize: "text-xs", descSize: "text-[10px]", iconSize: "h-6 w-6",
};

const mobile: InfinityConfig = {
  cx: 175, cy: 200, a: 140, b: 120,
  w: 350, h: 400, nodeSize: 44, dotR: 4, glowR: 12,
  fontSize: "text-[10px]", descSize: "text-[8px]", iconSize: "h-4 w-4",
};

function infinityPath(cx: number, cy: number, a: number, b: number, segments = 200) {
  const points: string[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * 2 * Math.PI;
    const { x, y } = infinityPoint(cx, cy, a, b, t);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return points.join(" ") + " Z";
}

// 4 steps: 2 on the right lobe, 2 on the left lobe
function getStepPositions(cx: number, cy: number, a: number, b: number) {
  const params = [
    Math.PI * 0.25,   // right-top
    Math.PI * 0.75,   // right-bottom (before crossing)
    Math.PI * 1.25,   // left-top
    Math.PI * 1.75,   // left-bottom
  ];
  return params.map(t => infinityPoint(cx, cy, a, b, t));
}

const InfinityLoop = ({ config, id }: { config: InfinityConfig; id: string }) => {
  const { cx, cy, a, b, w, h, nodeSize, dotR, glowR, fontSize, descSize, iconSize } = config;
  const [activeIndex, setActiveIndex] = useState(0);
  const [testActive, setTestActive] = useState(false);
  const progressRef = useRef(0);

  const stepPositions = getStepPositions(cx, cy, a, b);

  const initPoint = infinityPoint(cx, cy, a, b, 0);
  const dotX = useMotionValue(initPoint.x);
  const dotY = useMotionValue(initPoint.y);

  useAnimationFrame((_, delta) => {
    progressRef.current = (progressRef.current + delta) % CYCLE_MS;
    const fraction = progressRef.current / CYCLE_MS;
    const t = fraction * 2 * Math.PI;
    const pos = infinityPoint(cx, cy, a, b, t);
    dotX.set(pos.x);
    dotY.set(pos.y);

    // Center crossings at fraction ≈ 0 and ≈ 0.5
    // Order: Test(0) → Idea(0.125) → Plan(0.375) → Test(0.5) → Code(0.625) → Deploy(0.875)
    const nearCenter = (fraction < 0.09 || fraction > 0.91) || (Math.abs(fraction - 0.5) < 0.09);
    if (nearCenter !== testActive) setTestActive(nearCenter);

    if (!nearCenter) {
      const stepParams = [0.25, 0.75, 1.25, 1.75];
      const currentParam = fraction * 2;
      let closest = 0;
      let minDist = Infinity;
      stepParams.forEach((sp, i) => {
        let dist = Math.abs(currentParam - sp);
        dist = Math.min(dist, 2 - dist);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      if (closest !== activeIndex) setActiveIndex(closest);
    } else {
      if (activeIndex !== -1) setActiveIndex(-1);
    }
  });

  const path = infinityPath(cx, cy, a, b);

  return (
    <div className="relative" style={{ width: w, height: h }}>
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${w} ${h}`} fill="none">
        <path d={path} stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
        <defs>
          <radialGradient id={`${id}-glow`}>
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.circle r={glowR} fill={`url(#${id}-glow)`} cx={dotX} cy={dotY} />
        <motion.circle r={dotR} fill="hsl(var(--primary))" cx={dotX} cy={dotY} />
      </svg>

      {/* Center: Test */}
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}
      >
        <motion.div
          className="relative z-10 flex items-center justify-center rounded-full border-2 bg-background"
          style={{ width: nodeSize * 1.3, height: nodeSize * 1.3 }}
          animate={{
            borderColor: testActive ? "hsl(var(--primary))" : "hsl(var(--border))",
            boxShadow: testActive
              ? "0 0 24px hsl(var(--primary) / 0.4), 0 0 48px hsl(var(--primary) / 0.15)"
              : "0 0 0px hsl(var(--primary) / 0)",
            scale: testActive ? 1.15 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <FlaskConical className={id === "desktop" ? "h-8 w-8" : "h-5 w-5"} style={{ color: testActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }} />
        </motion.div>
        <motion.span
          className={`mt-1.5 font-bold tracking-wide ${fontSize}`}
          animate={{ color: testActive ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
        >
          Test
        </motion.span>
        <motion.span
          className={`${descSize} text-muted-foreground`}
          animate={{ opacity: testActive ? 1 : 0.4 }}
        >
          QA & validate
        </motion.span>
      </div>

      {/* 4 step nodes */}
      {steps.map((step, i) => {
        const pos = stepPositions[i];
        const isActive = i === activeIndex;
        return (
          <motion.div
            key={step.label}
            className="absolute flex flex-col items-center"
            style={{ left: pos.x, top: pos.y, x: "-50%", y: `-${nodeSize / 2}px` }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="relative z-10 flex items-center justify-center rounded-full border-2 bg-background"
              style={{ width: nodeSize, height: nodeSize }}
              animate={{
                borderColor: isActive ? "hsl(var(--primary))" : "hsl(var(--border))",
                boxShadow: isActive
                  ? "0 0 24px hsl(var(--primary) / 0.4), 0 0 48px hsl(var(--primary) / 0.15)"
                  : "0 0 0px hsl(var(--primary) / 0)",
                scale: isActive ? 1.15 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <step.icon
                className={iconSize}
                style={{ color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
              />
            </motion.div>
            <motion.span
              className={`mt-1.5 font-bold tracking-wide ${fontSize}`}
              animate={{ color: isActive ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
              transition={{ duration: 0.3 }}
            >
              {step.label}
            </motion.span>
            <motion.span
              className={`${descSize} text-muted-foreground`}
              animate={{ opacity: isActive ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
            >
              {step.desc}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
};

const Process = () => (
  <section className="py-20 md:py-28 border-t border-border overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-gradient">Process</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A continuous CI/CD cycle — we iterate endlessly to deliver excellence.
        </p>
      </motion.div>

      <div className="hidden md:flex justify-center">
        <InfinityLoop config={desktop} id="desktop" />
      </div>
      <div className="md:hidden flex justify-center">
        <InfinityLoop config={mobile} id="mobile" />
      </div>
    </div>
  </section>
);

export default Process;
