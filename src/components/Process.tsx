import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Lightbulb, Map, Code2, FlaskConical, Cloud, PackageCheck } from "lucide-react";
import { useState, useRef } from "react";

const steps = [
  { icon: Lightbulb, label: "Idea", desc: "Brainstorm & define" },
  { icon: Map, label: "Plan", desc: "Architecture & design" },
  { icon: Code2, label: "Code", desc: "Build & develop" },
  { icon: FlaskConical, label: "Test", desc: "QA & validate" },
  { icon: Cloud, label: "Deploy", desc: "Push to servers" },
  { icon: PackageCheck, label: "Ship", desc: "Deliver product" },
];

const TOTAL = steps.length;
const CYCLE_MS = 8000;

interface EllipseConfig {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  w: number;
  h: number;
  nodeSize: number;
  dotR: number;
  glowR: number;
  fontSize: string;
  descSize: string;
  iconSize: string;
}

const desktop: EllipseConfig = {
  cx: 350, cy: 200, rx: 280, ry: 140,
  w: 700, h: 400, nodeSize: 64, dotR: 6, glowR: 18,
  fontSize: "text-xs", descSize: "text-[10px]", iconSize: "h-6 w-6",
};

const mobile: EllipseConfig = {
  cx: 175, cy: 150, rx: 130, ry: 100,
  w: 350, h: 300, nodeSize: 44, dotR: 4, glowR: 12,
  fontSize: "text-[10px]", descSize: "text-[8px]", iconSize: "h-4 w-4",
};

function ellipsePoint(cx: number, cy: number, rx: number, ry: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + rx * Math.cos(rad), y: cy + ry * Math.sin(rad) };
}

function arrowAt(cx: number, cy: number, rx: number, ry: number, angleDeg: number, size = 6) {
  const rad = (angleDeg * Math.PI) / 180;
  const px = cx + rx * Math.cos(rad);
  const py = cy + ry * Math.sin(rad);
  const tx = -rx * Math.sin(rad);
  const ty = ry * Math.cos(rad);
  const len = Math.sqrt(tx * tx + ty * ty);
  const nx = tx / len;
  const ny = ty / len;
  const perpx = -ny;
  const perpy = nx;
  return `M ${px} ${py} L ${px - nx * size + perpx * size * 0.5} ${py - ny * size + perpy * size * 0.5} L ${px - nx * size - perpx * size * 0.5} ${py - ny * size - perpy * size * 0.5} Z`;
}

const ProcessLoop = ({ config, id }: { config: EllipseConfig; id: string }) => {
  const { cx, cy, rx, ry, w, h, nodeSize, dotR, glowR, fontSize, descSize, iconSize } = config;
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef(0);

  const stepAngles = steps.map((_, i) => (i / TOTAL) * 360 - 90);
  const arrowAngles = steps.map((_, i) => {
    const a1 = stepAngles[i];
    const a2 = stepAngles[(i + 1) % TOTAL];
    return a2 > a1 ? (a1 + a2) / 2 : (a1 + a2 + 360) / 2;
  });

  const dotX = useMotionValue(cx + rx * Math.cos(-Math.PI / 2));
  const dotY = useMotionValue(cy + ry * Math.sin(-Math.PI / 2));

  useAnimationFrame((_, delta) => {
    progressRef.current = (progressRef.current + delta) % CYCLE_MS;
    const fraction = progressRef.current / CYCLE_MS;
    const angle = fraction * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    dotX.set(cx + rx * Math.cos(rad));
    dotY.set(cy + ry * Math.sin(rad));

    // Determine which step is closest
    const newIndex = Math.floor(((fraction + 1 / (TOTAL * 2)) % 1) * TOTAL);
    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  });

  return (
    <div className="relative" style={{ width: w, height: h }}>
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${w} ${h}`} fill="none">
        {/* Track */}
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} stroke="hsl(var(--border))" strokeWidth="2" />

        {/* Arrows */}
        {arrowAngles.map((angle, i) => (
          <path key={`${id}-arr-${i}`} d={arrowAt(cx, cy, rx, ry, angle, dotR + 1)} fill="hsl(var(--primary) / 0.35)" />
        ))}

        {/* Gradient def */}
        <defs>
          <radialGradient id={`${id}-glow`}>
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Orbiting glow */}
        <motion.circle r={glowR} fill={`url(#${id}-glow)`} cx={dotX} cy={dotY} />
        {/* Orbiting dot */}
        <motion.circle r={dotR} fill="hsl(var(--primary))" cx={dotX} cy={dotY} />
      </svg>

      {/* Step nodes */}
      {steps.map((step, i) => {
        const pos = ellipsePoint(cx, cy, rx, ry, stepAngles[i]);
        const isActive = i === activeIndex;
        return (
          <motion.div
            key={step.label}
            className="absolute flex flex-col items-center"
            style={{ left: pos.x, top: pos.y, x: "-50%", y: "-50%" }}
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
        <ProcessLoop config={desktop} id="desktop" />
      </div>
      <div className="md:hidden flex justify-center">
        <ProcessLoop config={mobile} id="mobile" />
      </div>
    </div>
  </section>
);

export default Process;
