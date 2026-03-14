import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Petrov",
    role: "Backend Architect",
    bio: "Designs distributed systems and defines technical strategy. 12+ years crafting scalable architectures.",
    initials: "AP",
    color: "from-primary/20 to-primary/5",
  },
  {
    name: "Maria Chen",
    role: "Backend Developer",
    bio: "Builds robust APIs and services. Deep expertise in databases, message queues, and performance tuning.",
    initials: "MC",
    color: "from-accent/20 to-accent/5",
  },
  {
    name: "David Kim",
    role: "Frontend Developer",
    bio: "Creates pixel-perfect interfaces with modern frameworks. Obsessed with UX, accessibility, and speed.",
    initials: "DK",
    color: "from-primary/20 to-accent/10",
  },
  {
    name: "Sara Novak",
    role: "QA Engineer",
    bio: "Ensures quality through automated testing, CI pipelines, and meticulous regression coverage.",
    initials: "SN",
    color: "from-accent/15 to-primary/10",
  },
  {
    name: "James Wright",
    role: "DevOps Engineer",
    bio: "Manages infrastructure, CI/CD, and cloud deployments. Keeps everything running at scale, 24/7.",
    initials: "JW",
    color: "from-primary/15 to-primary/5",
  },
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
          Five specialists, one mission — deliver exceptional software.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl bg-card-gradient border border-border p-6 text-center hover:border-primary/30 card-hover"
          >
            <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.color}`}>
              <span className="text-2xl font-bold text-foreground">{member.initials}</span>
            </div>
            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
            <p className="text-sm font-medium text-primary mb-3 font-mono">{member.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
