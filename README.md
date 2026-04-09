# EpagPOS

Landing page for EpagPOS — a point-of-sale product. Built with Astro 6, React 19 islands, and Tailwind CSS 4.

## Tech Stack

- **Framework:** Astro 6.x (SSG/SSR hybrid)
- **UI Islands:** React 19 (interactive components loaded via `client:visible` / `client:load`)
- **Styling:** Tailwind CSS 4.x with custom design tokens via `@theme` directive
- **Language:** TypeScript (strict mode)
- **Icons:** Lucide React
- **Fonts:** Poppins (headings) + Open Sans (body) via Google Fonts
- **Node:** >= 22.12.0

## Project Structure

```
src/
  design-tokens/       Color, typography, spacing, shadow, animation, and z-index tokens (TS modules)
  styles/              Global CSS — Tailwind theme config, base styles, component utilities, font imports
  components/
    ui/                Shared React primitives (Button, Badge, GlassCard, ThemeToggle)
    layout/            Astro layout components (Navbar, Footer, Logo)
    sections/          Landing page sections (Hero, ValueProposition, Comparison, HowItWorks, etc.)
  layouts/             Astro page layouts
  pages/               Astro page routes
```

## Design System

The project uses a glassmorphism-hybrid visual language with mode-adaptive light/dark theming.

- **Theme switching:** `.dark` class on `<html>`, persisted to `localStorage`. Flash-free via inline `<script>` in `<head>`.
- **Brand palette:** `#18B2FE` (primary), `#0437A3` (deep), `#00B1F9` (accent), `#56E7FA` (light cyan), `#0850B5` (blue).
- **Surfaces, text, borders:** Defined as CSS custom properties on `:root` (light) / `.dark` (dark), consumed by Tailwind token classes (`bg-surface-card`, `text-text-primary`, `border-border-default`, etc.).
- **Glass effects:** `.glass-card` utility auto-adapts per mode. Glow shadows via `shadow-glow-*` utilities.
- **Accessibility:** WCAG AA minimum. All color pairings validated for contrast. `prefers-reduced-motion` respected.

## Development

All commands run from the project root:

```sh
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Production build to ./dist/
npm run preview      # Preview production build locally
```

## Architecture Notes

- Astro pages (`.astro`) own layout, routing, and static content.
- React is used only where client-side interactivity is required (theme toggle, interactive UI primitives).
- Landing page sections are Astro components — no JS shipped unless explicitly needed.
- Design tokens are defined as TypeScript modules in `src/design-tokens/` and mapped into Tailwind via CSS custom properties in `src/styles/global.css`.
- No arbitrary hex values in components — all colors reference token classes.
