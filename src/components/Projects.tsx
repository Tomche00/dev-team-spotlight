import { motion } from "framer-motion";
import { Mail, CheckSquare, Newspaper, Globe } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    icon: Mail,
    title: "MarketingPlatform (EmailPlatform)",
    summary: "A scalable SaaS solution for marketing automation and customer communication, used by businesses across Europe.",
    description: "Over the past decade, we played a key role in the development and evolution of MarketingPlatform (EmailPlatform), a scalable SaaS solution for marketing automation and customer communication.\n\nAs part of the engineering team, we contributed to building a robust platform used by businesses across Europe to manage and optimize omnichannel communication. Our work focused on performance, scalability, and delivering a reliable system capable of handling large volumes of data and real-time interactions.\n\nWe were involved in the continuous improvement of core platform features, including automation workflows, audience segmentation, campaign execution, and system integrations. The platform evolved from a focused email marketing tool into a full-featured marketing automation and customer data platform.\n\nThrough long-term development and iteration, we helped shape a product that delivers high-performance communication infrastructure and advanced marketing capabilities.\n\nThe platform was successfully acquired by LINK Mobility, becoming part of a larger global ecosystem for digital communication and customer engagement.",
    tags: ["SaaS", "Marketing Automation", "Omnichannel", "Scalability"],
  },
  {
    icon: CheckSquare,
    title: "TaskPlatform",
    summary: "A productivity and task management platform designed to streamline workflows and improve team collaboration.",
    description: "TaskPlatform is a productivity and task management platform designed to streamline workflows and improve team collaboration.\n\nAs a team, we contributed to both frontend and backend development, including a full UI redesign to enhance usability and user experience. On the backend and infrastructure side, we worked on system architecture improvements, performance optimization, and server-side enhancements to support scalability and reliability.\n\nWe also implemented QA automation workflows to improve testing efficiency, reduce regression issues, and ensure stable releases. Our combined efforts resulted in a more robust, scalable, and user-friendly platform.",
    tags: ["Productivity", "UI Redesign", "QA Automation", "Full Stack"],
  },
  {
    icon: Newspaper,
    title: "MyPressWire",
    summary: "A press release distribution and media platform for publishing and distributing content across multiple channels.",
    description: "MyPressWire is a press release distribution and media platform that enables businesses to publish and distribute content efficiently across multiple channels.\n\nOur team worked on a comprehensive platform improvement, including frontend redesign and backend optimizations. We enhanced the user interface for better usability and responsiveness, while also improving system performance and maintainability through backend refinements.\n\nAdditionally, we contributed to system stability and deployment processes, ensuring the platform can handle growing usage and content distribution demands more efficiently.",
    tags: ["Media", "Frontend Redesign", "Backend Optimization", "Distribution"],
  },
  {
    icon: Globe,
    title: "SLOIF",
    summary: "A modern digital platform delivering interactive web experiences and integrated tools.",
    description: "SLOIF is a modern digital platform focused on delivering interactive web experiences and integrated tools.\n\nWe contributed as a team across the full development stack, including frontend redesign, backend architecture improvements, and overall platform evolution. Our work included enhancing system structure, improving performance, and supporting scalable feature development.\n\nWe also developed a Chrome browser extension integrated with the platform, expanding its functionality and user reach. As part of our development approach, we leveraged AI-driven coding practices to accelerate prototyping, experimentation, and feature delivery.",
    tags: ["Full Stack", "Chrome Extension", "AI-Driven", "Interactive"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl bg-card-gradient border border-border p-8 hover:border-primary/30 card-hover"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
        <project.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {expanded ? project.description.split("\n\n").map((p, i) => (
          <span key={i} className="block mb-3 last:mb-0">{p}</span>
        )) : project.summary}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-5 font-mono"
      >
        {expanded ? "Show less ↑" : "Read more ↓"}
      </button>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground font-mono">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

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
          A selection of the platforms we've designed, built, and helped scale to production.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
