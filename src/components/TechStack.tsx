import { motion } from "framer-motion";

const techs = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Redis", icon: "🔴" },
  { name: "GraphQL", icon: "◈" },
  { name: "Terraform", icon: "🏗️" },
  { name: "Go", icon: "🔵" },
  { name: "Python", icon: "🐍" },
];

// Double the list for seamless loop
const doubled = [...techs, ...techs];

const TechStack = () => (
  <section className="py-16 md:py-20 border-t border-border overflow-hidden">
    <div className="container mb-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest"
      >
        Technologies we work with
      </motion.p>
    </div>

    {/* Marquee */}
    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 shrink-0 hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-sm font-semibold whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechStack;
