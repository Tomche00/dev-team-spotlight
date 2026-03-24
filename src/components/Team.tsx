import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { TEAM } from "@/lib/constants";

const gradients = [
  "from-primary/25 via-primary/10 to-transparent",
  "from-accent/25 via-accent/10 to-transparent",
  "from-primary/20 via-accent/10 to-transparent",
];

const Team = () => (
  <section id="team" className="relative py-28 md:py-36 border-t border-border overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/[0.03] blur-[130px] rounded-full" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="section-label">Team</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
          Meet the <span className="text-gradient">Team</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Three senior engineers, one mission — deliver exceptional software.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl bg-card-gradient border border-border overflow-hidden card-hover"
          >
            {/* Top gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${gradients[i]} opacity-70`} />

            <div className="relative p-7 text-center">
              {/* Avatar */}
              <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-card via-secondary to-card border border-border/80 shadow-lg">
                <span className="text-xl font-bold text-foreground/80 font-mono">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-base font-bold mb-1 tracking-tight">{member.name}</h3>
              <p className="text-xs font-medium text-primary/80 mb-4 font-mono leading-snug tracking-wide">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground leading-[1.7] mb-6">
                {member.description}
              </p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary/60 hover:border-primary/40 hover:text-primary hover:bg-primary/[0.08] transition-all duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary/60 hover:border-primary/40 hover:text-primary hover:bg-primary/[0.08] transition-all duration-300"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
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

export default Team;
