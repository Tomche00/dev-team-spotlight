import { Terminal, Linkedin, Github, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center sm:items-start gap-1">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
            <Terminal className="h-3 w-3 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold">{SITE.name}</span>
        </div>
        <p className="text-xs text-muted-foreground">{SITE.tagline}</p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={`mailto:${SITE.email}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-primary/40 hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail className="h-3.5 w-3.5" />
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-primary/40 hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-3.5 w-3.5" />
        </a>
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-primary/40 hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-3.5 w-3.5" />
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
