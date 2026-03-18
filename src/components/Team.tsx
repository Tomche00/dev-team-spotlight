import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { TEAM } from "@/lib/constants";

const colors = [
  "from-primary/20 to-primary/5",
  "from-accent/20 to-accent/5",
  "from-primary/20 to-accent/10",
];

const Team = () => (
  <section id="team" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Meet the <span className="text-gradient">Team</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Three senior engineers, one mission — deliver exceptional software.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl bg-card-gradient border border-border p-6 text-center hover:border-primary/30 card-hover"
          >
            <div
              className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${colors[i]}`}
            >
              <span className="text-2xl font-bold text-foreground">
                {member.initials}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
            <p className="text-sm font-medium text-primary mb-3 font-mono leading-snug">
              {member.role}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {member.description}
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary hover:border-primary/40 hover:text-primary transition-colors"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary hover:border-primary/40 hover:text-primary transition-colors"
                aria-label={`${member.name} GitHub`}
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
