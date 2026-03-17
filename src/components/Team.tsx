import { motion } from "framer-motion";

const team = [
  {
    name: "Viktor Peševski",
    role: "Principal Software Engineer | Software Architect",
    bio: "Viktor is a highly experienced software engineer and architect with a strong focus on backend systems, scalability, and high-performance SaaS platforms. He brings deep expertise in designing complex system architectures and building reliable, large-scale solutions in the CPaaS and marketing automation space.\n\nWith a strong background in performance optimization and system design, he has played a key role in ensuring the stability and scalability of long-running platforms handling high traffic and data-intensive operations.",
    initials: "VP",
    color: "from-primary/20 to-primary/5",
    linkedin: "https://www.linkedin.com/in/viktor-peshevski-58b667a6/",
  },
  {
    name: "Ivan Naumovski",
    role: "Senior Software Development Engineer | Marketing Automation",
    bio: "Ivan is a senior software engineer specializing in marketing automation systems and modern web technologies. His expertise spans backend and frontend development, with strong experience in PHP, Laravel, Symfony, React, and cloud platforms such as GCP.\n\nHe has contributed extensively to building and improving automation workflows, integrations, and scalable features, helping deliver efficient and flexible solutions tailored to complex business needs.",
    initials: "IN",
    color: "from-accent/20 to-accent/5",
    linkedin: "https://www.linkedin.com/in/ivan-naumovski-27b151107/",
  },
  {
    name: "Tomislav Jovanovski",
    role: "Frontend Developer | SaaS & QA Automation",
    bio: "Tomislav is a frontend developer focused on building intuitive, high-quality user interfaces for SaaS products. His work combines frontend development with QA automation and modern tooling, ensuring both usability and reliability.\n\nHe has experience developing user-facing features, optimizing user experience, and contributing to product quality through structured testing and automation processes. He actively works on implementing automated testing strategies, including end-to-end and UI testing, to ensure consistent performance and reduce regression issues across releases.\n\nHis approach emphasizes early detection of issues, continuous integration workflows, and maintaining high standards of code quality throughout the development lifecycle.\n\nIn addition to frontend and QA work, his experience also extends to Chrome extension development and AI-assisted coding workflows, improving development speed and product efficiency.",
    initials: "TJ",
    color: "from-primary/20 to-accent/10",
    linkedin: "https://www.linkedin.com/in/tomce/",
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
          Three specialists, one mission — deliver exceptional software.
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
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold mb-1 inline-block hover:text-primary transition-colors"
            >
              {member.name}
            </a>
            <p className="text-sm font-medium text-primary mb-3 font-mono">{member.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
