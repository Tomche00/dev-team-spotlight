import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
          <Terminal className="h-3 w-3 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold">DevForge</span>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 DevForge. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
