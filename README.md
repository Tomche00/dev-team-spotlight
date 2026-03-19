# DevForge

> Senior product engineering team — backend systems, frontend modernization, QA automation, and production-ready delivery.

![DevForge Preview](docs/screenshots/preview.png)

🔗 **Live:** [dev-team-spotlight.lovable.app](https://dev-team-spotlight.lovable.app)

---

## About

**DevForge** is a small, senior software engineering team that helps companies modernize and scale SaaS products. This repository contains our landing page — built to showcase who we are, what we do, and how we work.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Components | shadcn/ui + Radix UI |
| Animations | Framer Motion |
| Routing | React Router |

---

## Project Structure

```
src/
├── components/       # Page sections (Hero, Team, Projects, etc.)
│   └── ui/           # Reusable UI primitives (shadcn/ui)
├── hooks/            # Custom React hooks
├── lib/
│   ├── constants.ts  # ✏️ All editable site content
│   └── utils.ts      # Utility functions
├── pages/            # Route pages
├── index.css         # Design tokens & global styles
└── main.tsx          # App entry point
```

---

## Editing Content

All site copy, team bios, projects, and configuration live in a single file:

```
src/lib/constants.ts
```

Update `SITE`, `TEAM`, `PROJECTS`, `SERVICES`, `WHY_US`, and `ENGAGEMENT_MODELS` to change content across the entire site.

---

## Getting Started

```bash
# Clone
git clone https://github.com/Tomche00/dev-team-spotlight.git
cd dev-team-spotlight

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

---

## License

MIT
