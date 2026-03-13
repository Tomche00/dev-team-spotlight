import { motion } from "framer-motion";
import { Lightbulb, Map, Code2, FlaskConical, Cloud, PackageCheck } from "lucide-react";

const steps = [
  { icon: Lightbulb, label: "Idea", color: "#facc15" },
  { icon: Map, label: "Plan", color: "#60a5fa" },
  { icon: Code2, label: "Code", color: "hsl(160 84% 50%)" },
  { icon: FlaskConical, label: "Test", color: "#fb923c" },
  { icon: Cloud, label: "Deploy", color: "#a78bfa" },
  { icon: PackageCheck, label: "Ship", color: "hsl(160 84% 50%)" },
];

const TOTAL = steps.length;
const CYCLE = 8;

// Ellipse parameters
const RX_DESKTOP = 280;
const RY_DESKTOP = 130;
const CX = 350;
const CY = 170;

const RX_MOBILE = 140;
const RY_MOBILE = 100;
const CX_M = 175;
const CY_M = 130;

function ellipsePoint(cx: number, cy: number, rx: number, ry: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + rx * Math.cos(rad), y: cy + ry * Math.sin(rad) };
}

function ellipsePath(cx: number, cy: number, rx: number, ry: number) {
  return `M ${cx + rx},${cy} A ${rx},${ry} 0 1 1 ${cx + rx - 0.01},${cy}`;
}

// Arrow head pointing along the ellipse tangent
function arrowAt(cx: number, cy: number, rx: number, ry: number, angleDeg: number, size = 6) {
  const rad = (angleDeg * Math.PI) / 180;
  const px = cx + rx * Math.cos(rad);
  const py = cy + ry * Math.sin(rad);
  // tangent direction
  const tx = -rx * Math.sin(rad);
  const ty = ry * Math.cos(rad);
  const len = Math.sqrt(tx * tx + ty * ty);
  const nx = tx / len;
  const ny = ty / len;
  // perpendicular
  const perpx = -ny;
  const perpy = nx;

  const p1x = px - nx * size + perpx * size * 0.5;
  const p1y = py - ny * size + perpy * size * 0.5;
  const p2x = px - nx * size - perpx * size * 0.5;
  const p2y = py - ny * size - perpy * size * 0.5;

  return `M ${px} ${py} L ${p1x} ${p1y} L ${p2x} ${p2y} Z`;
}

const Process = () => {
  const stepAnglesDeg = steps.map((_, i) => (i / TOTAL) * 360 - 90);

  // Arrow angles: midpoint between each consecutive step
  const arrowAngles = steps.map((_, i) => {
    const a1 = stepAnglesDeg[i];
    const a2 = stepAnglesDeg[(i + 1) % TOTAL];
    return a2 > a1 ? (a1 + a2) / 2 : (a1 + a2 + 360) / 2;
  });

  return (
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

        {/* Desktop */}
        <div className="hidden md:flex justify-center">
          <div className="relative" style={{ width: 700, height: 340 }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 340" fill="none">
              {/* Track */}
              <ellipse cx={CX} cy={CY} rx={RX_DESKTOP} ry={RY_DESKTOP} stroke="hsl(220 14% 14%)" strokeWidth="2" />

              {/* Animated dashed overlay */}
              <ellipse
                cx={CX} cy={CY} rx={RX_DESKTOP} ry={RY_DESKTOP}
                stroke="url(#grad1)" strokeWidth="2"
                strokeDasharray="8 6"
                strokeLinecap="round"
              >
                <animateTransform attributeName="transform" type="rotate" from="0 350 170" to="360 350 170" dur={`${CYCLE}s`} repeatCount="indefinite" />
              </ellipse>

              {/* Orbiting glow */}
              <circle r="4" fill="hsl(160 84% 50%)">
                <animateMotion dur={`${CYCLE}s`} repeatCount="indefinite" path={ellipsePath(CX, CY, RX_DESKTOP, RY_DESKTOP)} />
              </circle>
              <circle r="12" fill="hsl(160 84% 50% / 0.15)">
                <animateMotion dur={`${CYCLE}s`} repeatCount="indefinite" path={ellipsePath(CX, CY, RX_DESKTOP, RY_DESKTOP)} />
              </circle>

              {/* Arrows between steps */}
              {arrowAngles.map((angle, i) => (
                <path
                  key={`arrow-${i}`}
                  d={arrowAt(CX, CY, RX_DESKTOP, RY_DESKTOP, angle, 7)}
                  fill="hsl(160 84% 50% / 0.5)"
                />
              ))}

              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(160 84% 50% / 0.5)" />
                  <stop offset="50%" stopColor="hsl(250 80% 65% / 0.3)" />
                  <stop offset="100%" stopColor="hsl(160 84% 50% / 0.5)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Step nodes */}
            {steps.map((step, i) => {
              const pos = ellipsePoint(CX, CY, RX_DESKTOP, RY_DESKTOP, stepAnglesDeg[i]);
              return (
                <motion.div
                  key={step.label}
                  className="absolute flex flex-col items-center"
                  style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 180 }}
                >
                  <motion.div
                    className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-border bg-background"
                    animate={{
                      borderColor: [
                        "hsl(220 14% 16%)",
                        "hsl(160 84% 50% / 0.6)",
                        "hsl(220 14% 16%)",
                      ],
                      boxShadow: [
                        "0 0 0px hsl(160 84% 50% / 0)",
                        "0 0 24px hsl(160 84% 50% / 0.25)",
                        "0 0 0px hsl(160 84% 50% / 0)",
                      ],
                    }}
                    transition={{
                      duration: CYCLE,
                      repeat: Infinity,
                      delay: (i / TOTAL) * CYCLE,
                      ease: "easeInOut",
                    }}
                  >
                    <step.icon className="h-6 w-6" style={{ color: step.color }} />
                  </motion.div>
                  <span className="mt-2 text-xs font-bold tracking-wide">{step.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-center">
          <div className="relative" style={{ width: 350, height: 280 }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 260" fill="none">
              <ellipse cx={CX_M} cy={CY_M} rx={RX_MOBILE} ry={RY_MOBILE} stroke="hsl(220 14% 14%)" strokeWidth="1.5" />
              <ellipse
                cx={CX_M} cy={CY_M} rx={RX_MOBILE} ry={RY_MOBILE}
                stroke="url(#gradM)" strokeWidth="1.5"
                strokeDasharray="6 5"
                strokeLinecap="round"
              >
                <animateTransform attributeName="transform" type="rotate" from={`0 ${CX_M} ${CY_M}`} to={`360 ${CX_M} ${CY_M}`} dur={`${CYCLE}s`} repeatCount="indefinite" />
              </ellipse>
              <circle r="3" fill="hsl(160 84% 50%)">
                <animateMotion dur={`${CYCLE}s`} repeatCount="indefinite" path={ellipsePath(CX_M, CY_M, RX_MOBILE, RY_MOBILE)} />
              </circle>
              {arrowAngles.map((angle, i) => (
                <path
                  key={`arrowM-${i}`}
                  d={arrowAt(CX_M, CY_M, RX_MOBILE, RY_MOBILE, angle, 5)}
                  fill="hsl(160 84% 50% / 0.5)"
                />
              ))}
              <defs>
                <linearGradient id="gradM" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(160 84% 50% / 0.5)" />
                  <stop offset="50%" stopColor="hsl(250 80% 65% / 0.3)" />
                  <stop offset="100%" stopColor="hsl(160 84% 50% / 0.5)" />
                </linearGradient>
              </defs>
            </svg>

            {steps.map((step, i) => {
              const pos = ellipsePoint(CX_M, CY_M, RX_MOBILE, RY_MOBILE, stepAnglesDeg[i]);
              return (
                <motion.div
                  key={step.label}
                  className="absolute flex flex-col items-center"
                  style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, type: "spring" }}
                >
                  <motion.div
                    className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-border bg-background"
                    animate={{
                      borderColor: [
                        "hsl(220 14% 16%)",
                        "hsl(160 84% 50% / 0.6)",
                        "hsl(220 14% 16%)",
                      ],
                      boxShadow: [
                        "0 0 0px hsl(160 84% 50% / 0)",
                        "0 0 16px hsl(160 84% 50% / 0.25)",
                        "0 0 0px hsl(160 84% 50% / 0)",
                      ],
                    }}
                    transition={{
                      duration: CYCLE,
                      repeat: Infinity,
                      delay: (i / TOTAL) * CYCLE,
                      ease: "easeInOut",
                    }}
                  >
                    <step.icon className="h-4 w-4" style={{ color: step.color }} />
                  </motion.div>
                  <span className="mt-1.5 text-[10px] font-bold">{step.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
