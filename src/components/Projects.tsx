import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

const accentColors = [
  "from-primary/20 via-primary/5 to-transparent",
  "from-accent/20 via-accent/5 to-transparent",
  "from-primary/15 via-accent/5 to-transparent",
  "from-accent/15 via-primary/5 to-transparent",
];

const Projects = () => (
  <section id="projects" className="relative py-28 md:py-36 border-t border-border overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.02] blur-[180px] rounded-full" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-center"
      >
        <span className="section-label">Portfolio</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
          Selected <span className="text-gradient">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          A selection of platforms we've contributed to and helped evolve.
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[11px] text-muted-foreground/40 text-center max-w-2xl mx-auto mb-14 font-mono leading-relaxed tracking-wide"
      >
        Selected work reflects contributions made by team members during previous employment or product engagements. All product names and trademarks belong to their respective owners.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl bg-card-gradient border border-border overflow-hidden card-hover"
          >
            {/* Top gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${accentColors[i]} opacity-60`} />

            <div className="relative p-8 sm:p-9">
              {/* Project number */}
              <span className="absolute top-6 right-7 text-[11px] font-mono text-muted-foreground/25 tracking-wider">
                0{i + 1}
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/[0.08] border border-primary/10 mb-6 group-hover:bg-primary/[0.15] transition-colors duration-300">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>

              <h3 className="text-lg font-bold mb-3 leading-snug tracking-tight pr-8 group-hover:text-primary/90 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-[1.75] mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-secondary/80 border border-border/50 px-3 py-1 text-[11px] font-medium text-secondary-foreground/80 font-mono tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom hover line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
