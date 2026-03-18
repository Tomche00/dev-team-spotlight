// ============================================
// DevForge — Site Configuration
// Edit these values to update content site-wide
// ============================================

export const SITE = {
  name: "DevForge",
  tagline: "Senior product engineering team",
  email: "hello@devforge.team",
  location: "Remote-first, worldwide",
  linkedin: "https://linkedin.com/company/devforge",
  github: "https://github.com/devforge",
  bookCallUrl: "#contact",
  sendProjectUrl: "#contact",
};

export const TEAM = [
  {
    name: "Viktor Peševski",
    role: "Principal Software Engineer | Software Architect",
    description:
      "Backend-focused technical leader with deep experience in SaaS architecture, scalability, integrations, performance optimization, and long-term platform evolution.",
    initials: "VP",
    linkedin: "https://www.linkedin.com/in/viktor-peshevski-58b667a6/",
    github: "https://github.com/",
  },
  {
    name: "Ivan Naumovski",
    role: "Senior Software Development Engineer",
    description:
      "Full-stack engineer with strong backend depth in PHP, Laravel, Symfony, cloud infrastructure, CI/CD, Docker, and complex business systems.",
    initials: "IN",
    linkedin: "https://www.linkedin.com/in/ivan-naumovski-27b151107/",
    github: "https://github.com/",
  },
  {
    name: "Tomislav Jovanovski",
    role: "Senior Frontend Engineer | QA Automation",
    description:
      "Frontend specialist focused on scalable SaaS interfaces, design systems, browser extensions, UI modernization, and automated quality assurance.",
    initials: "TJ",
    linkedin: "https://www.linkedin.com/in/tomce/",
    github: "https://github.com/Tomche00",
  },
];

export const PROJECTS = [
  {
    title: "Marketing Automation / Customer Engagement Platform",
    description:
      "Worked on the evolution of a large-scale marketing automation platform, covering backend systems, integrations, automation workflows, frontend product experience, and long-term production quality.",
    tags: ["SaaS", "Marketing Automation", "Omnichannel", "Scalability"],
  },
  {
    title: "Workflow & Collaboration Platform",
    description:
      "Contributed to modernization of a workflow-focused SaaS product, including architecture improvements, API development, frontend redesign, QA automation, and deployment workflows.",
    tags: ["Productivity", "API Design", "QA Automation", "Full Stack"],
  },
  {
    title: "Media Distribution Platform",
    description:
      "Supported full-stack modernization of a media and press distribution platform, improving usability, backend structure, performance, and delivery reliability.",
    tags: ["Media", "Frontend Redesign", "Performance", "Distribution"],
  },
  {
    title: "Interactive Platform + Browser Extension",
    description:
      "Delivered frontend improvements, scalable feature work, and extension development for an interactive web platform, with faster iteration enabled by modern tooling.",
    tags: ["Full Stack", "Chrome Extension", "AI-Driven", "Interactive"],
  },
];

export const SERVICES = [
  {
    title: "SaaS Modernization",
    description:
      "Upgrade legacy platforms, improve maintainability, and prepare products for long-term scale.",
    icon: "RefreshCcw" as const,
  },
  {
    title: "Backend Systems & Integrations",
    description:
      "Reliable APIs, business-critical workflows, data-heavy systems, and complex integrations.",
    icon: "Server" as const,
  },
  {
    title: "Frontend Redesign & UX Improvement",
    description:
      "Clear, scalable interfaces for complex products, built with reusable systems and strong UX.",
    icon: "Layout" as const,
  },
  {
    title: "QA Automation & Release Stability",
    description:
      "Automated testing and delivery workflows that reduce regressions and improve confidence in production.",
    icon: "ShieldCheck" as const,
  },
];

export const WHY_US = [
  "We understand both legacy systems and modern stacks",
  "We work comfortably inside production-critical SaaS products",
  "We cover backend, frontend, QA, and delivery end to end",
  "We specialize in existing-product modernization, not only greenfield",
  "We focus on maintainability, performance, and shipping real business value",
];

export const ENGAGEMENT_MODELS = [
  { title: "Technical Audit / Discovery", description: "Deep-dive into your codebase, architecture, and pain points." },
  { title: "Product Modernization", description: "Systematic upgrade of legacy systems to modern standards." },
  { title: "Feature Delivery", description: "Focused sprints to ship production-ready features." },
  { title: "Fractional Technical Leadership", description: "Part-time senior engineering guidance for your team." },
  { title: "Long-term Contract Collaboration", description: "Embedded engineering support over months or quarters." },
  { title: "Full-time Opportunities", description: "Open to the right full-time roles for team or individuals." },
];
