import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

const Projects = () => (
  <section id="projects" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Selected <span className="text-gradient">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A selection of platforms we've contributed to and helped evolve.
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs text-muted-foreground/60 text-center max-w-2xl mx-auto mb-14 font-mono leading-relaxed"
      >
        Selected work reflects contributions made by team members during previous employment or product engagements. All product names and trademarks belong to their respective owners.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl bg-card-gradient border border-border p-8 hover:border-primary/30 card-hover"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3 leading-snug">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
