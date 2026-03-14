import { motion } from "framer-motion";
import { Code2, Terminal, ArrowRight } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Terminal className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold tracking-tight">DevForge</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="#team" className="hover:text-foreground transition-colors">Team</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity btn-press">
        Get in Touch <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  </header>
);

export default Header;
