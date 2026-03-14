import { motion } from "framer-motion";
import { Globe, Server, ShieldCheck, Layers } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "E-Commerce Platform",
    description: "High-traffic marketplace with real-time inventory, payment processing, and microservices architecture.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    icon: Server,
    title: "Cloud Infrastructure Dashboard",
    description: "Monitoring and management tool for multi-cloud deployments with automated scaling and alerting.",
    tags: ["TypeScript", "Go", "Kubernetes", "Terraform"],
  },
  {
    icon: ShieldCheck,
    title: "FinTech API Gateway",
    description: "Secure, PCI-compliant API layer handling millions of daily transactions with sub-50ms latency.",
    tags: ["Java", "Spring Boot", "Redis", "Docker"],
  },
  {
    icon: Layers,
    title: "SaaS Analytics Engine",
    description: "Real-time data pipeline and visualization platform processing terabytes of event data daily.",
    tags: ["Python", "Kafka", "ClickHouse", "React"],
  },
];

const Projects = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A selection of the systems we've designed, built, and shipped to production.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-xl bg-card-gradient border border-border p-8 hover:border-primary/30 card-hover"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
              <project.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground font-mono">
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
