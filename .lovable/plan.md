

# Plan: Code Structure Improvements + README Update

## Issues Found

1. **`src/App.css`** — leftover Vite boilerplate (logo spin, `.read-the-docs`). Completely unused. Should be deleted.
2. **Sidebar CSS variables** in `index.css` — unused (no sidebar in this project). Should be removed for cleanliness.
3. **Unused Tailwind `float` keyframe** in `tailwind.config.ts` — the actual float animations are defined in `index.css` (`float-slow`, `float-slower`). The config one is orphaned.
4. **Hardcoded email** in `Contact.tsx` form action (`tomce86@gmail.com`) — should use `SITE.email` from constants for consistency.
5. **`package.json` name** is `vite_react_shadcn_ts` — should be `devforge` or `dev-team-spotlight`.
6. **Heavy unused dependencies** — `recharts`, `react-day-picker`, `date-fns`, `cmdk`, `embla-carousel-react`, `input-otp`, `react-resizable-panels`, `react-hook-form`, `@hookform/resolvers`, `zod`, `next-themes`, `vaul`, and many Radix primitives are installed but never used by any page component.
7. **`index.html`** — likely still has default Vite title/meta. Should reflect DevForge branding.
8. **README.md** — outdated, references generic structure and missing sections. Needs full rewrite.

## Plan

### Step 1: Clean up dead files and code
- Delete `src/App.css` (unused Vite boilerplate)
- Remove sidebar CSS variables from `index.css` (lines 44-51)
- Remove orphaned `float` keyframe from `tailwind.config.ts`

### Step 2: Fix hardcoded values
- `Contact.tsx`: replace hardcoded `tomce86@gmail.com` in form action with `SITE.email`
- `package.json`: rename from `vite_react_shadcn_ts` to `devforge`

### Step 3: Update `index.html`
- Set page title to "DevForge — Senior Product Engineering Team"
- Add meta description and Open Graph tags
- Set favicon reference

### Step 4: Update README.md
New structure:
- DevForge branding header with screenshot
- About section (what DevForge is)
- Live site link
- Tech stack (React, TypeScript, Vite, Tailwind, Framer Motion, shadcn/ui)
- Project structure reflecting actual file layout
- Getting started (clone, install, dev)
- Content editing guide (point to `src/lib/constants.ts`)
- Deployment notes
- License

### Step 5 (optional): Remove unused dependencies
- List the unused packages for removal from `package.json` to reduce bundle and install size. This is low-risk since none are imported by active components.

---

### Technical Details

| File | Change |
|---|---|
| `src/App.css` | Delete |
| `src/index.css` L44-51 | Remove sidebar vars |
| `tailwind.config.ts` L75-78, L83 | Remove orphaned `float` keyframe + animation |
| `src/components/Contact.tsx` L50 | Use `` `https://formsubmit.co/${SITE.email}` `` |
| `package.json` L2 | `"name": "devforge"` |
| `index.html` | Update `<title>`, add meta tags |
| `README.md` | Full rewrite |

