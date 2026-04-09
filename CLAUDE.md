# EpagPOS — Project Guidelines

## Tech Stack

- **Framework:** Astro 6.x (SSG/SSR) with React 19 islands
- **Styling:** Tailwind CSS 4.x (configured via `@theme` in `src/styles/global.css`)
- **Language:** TypeScript (strict mode)
- **Fonts:** Poppins (headings) + Open Sans (body) via Google Fonts
- **Icons:** Lucide React (SVG icons — never use emojis as icons)

## Architecture

- Astro pages (`.astro`) own layout and routing
- React components are interactive islands loaded via `client:visible` or `client:load`
- Static content stays in `.astro` files; React is only for interactivity
- Design tokens live in `src/design-tokens/` as TypeScript modules
- Tailwind theme defined in `src/styles/global.css` using `@theme` directive
- CSS custom properties available for component-layer styles

## Design System

- **Theme:** Light mode (default) + Dark mode, toggled via `.dark` class on `<html>`
- **Brand colors:** `#18B2FE` (primary), `#0437A3` (deep), `#00B1F9` (accent), `#56E7FA` (light cyan), `#0850B5` (blue)
- **Style:** Glassmorphism hybrid with blue glow effects (mode-adaptive)
- **Mode switching:** CSS custom properties on `:root` (light) / `.dark` (dark), referenced in `@theme`
- **Glass cards:** Use `.glass-card` class — automatically adapts to light (white glass) and dark (midnight glass)
- **Glow effects:** Use `shadow-glow-*` utilities — subtle in light, vivid in dark
- **Background patterns:** `.bg-dot-pattern`, `.bg-line-pattern` — adapt opacity per mode
- **Gradient text:** `.text-gradient-brand` — deeper blues in light, bright cyan in dark
- **Orb decorations:** `.orb-blue`, `.orb-cyan` — subtle in light, more visible in dark
- **Theme toggle:** `ThemeToggle` React component in Navbar, persists to `localStorage`

### Light/Dark Mode Rules
- **NEVER use hardcoded `border-white/*` or `bg-white/*`** — use semantic tokens: `border-border-default`, `bg-surface-card`
- **NEVER use `text-brand-accent-light` for text** — use `text-brand-primary` (works in both modes)
- **Use mode-aware tokens** for all surfaces, text, borders, and shadows
- Flash prevention: inline `<script>` in `<head>` reads `localStorage('theme')` before paint

## File Structure

```
src/
  design-tokens/     Token definitions (colors, typography, spacing, shadows, etc.)
  styles/            Global CSS (theme config, base styles, component utilities, fonts)
  components/
    ui/              Shared React primitives (Button, Card, GlassCard, Input, Badge)
    layout/          Astro layout components (Navbar, Footer)
    sections/        Landing page section components (React islands)
  layouts/           Astro page layouts
  pages/             Astro page routes
```

## Component Conventions

- React components: PascalCase filenames, one component per file
- Props: TypeScript interfaces defined above the component
- Astro components: `PascalCase.astro`
- Use `client:visible` for below-fold React islands, `client:load` for above-fold interactive
- Keep React components under 150 lines
- Use composition over prop drilling
- Type all event handlers with React event types (e.g., `React.MouseEvent<HTMLButtonElement>`)

## Styling Rules

- Use Tailwind utility classes as the primary styling method
- Use design token classes: `bg-surface-card`, `text-text-secondary`, `shadow-glow`, `font-heading`
- Use component utilities from `global.css` for compound styles: `.glass-card`, `.text-gradient-brand`
- **Never use arbitrary hex values** — always reference token colors
- All interactive elements must have `cursor-pointer` and visible `:focus-visible` states
- Hover transitions: `transition-colors duration-normal` (250ms)

## Tailwind Token Classes Reference

### Colors (mode-adaptive via CSS custom properties)
- Brand (static): `bg-brand-primary`, `bg-brand-primary-deep`, `bg-brand-accent`, `bg-brand-accent-light`, `bg-brand-blue`
- Surfaces (dynamic): `bg-surface-base`, `bg-surface-raised`, `bg-surface-card`, `bg-surface-card-hover`, `bg-surface-overlay`, `bg-surface-input`
- Text (dynamic): `text-text-primary`, `text-text-secondary`, `text-text-tertiary`, `text-text-accent`, `text-text-link`
- Borders (dynamic): `border-border-default`, `border-border-subtle`, `border-border-medium`, `border-border-strong`, `border-border-brand`
- Status (static): `text-status-success`, `text-status-warning`, `text-status-error`, `text-status-info`

### Shadows & Glows
- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`
- `shadow-glow-sm`, `shadow-glow`, `shadow-glow-md`, `shadow-glow-lg`, `shadow-glow-xl`
- `shadow-glow-cyan`, `shadow-glow-cta`, `shadow-glow-cta-hover`

### Animations
- `animate-fade-in`, `animate-fade-in-up`, `animate-glow-pulse`, `animate-float`, `animate-shimmer`

### Z-Index
- `z-behind`, `z-base`, `z-raised`, `z-dropdown`, `z-sticky`, `z-navbar`, `z-overlay`, `z-modal`, `z-popover`, `z-toast`, `z-tooltip`, `z-max`

## Accessibility (WCAG AA minimum)

- **Light mode:** Text primary `#0F172A` on `#FFFFFF` = 15.4:1 (AAA), secondary `#475569` on `#FFFFFF` = 7.1:1 (AAA)
- **Dark mode:** Brand primary `#18B2FE` on `#000000` = 8.6:1 (AAA), secondary `#A0AEC0` on `#000000` = 8.9:1 (AAA)
- Tertiary text = decorative only, never for body text
- Always include `prefers-reduced-motion` handling
- Use semantic HTML (`button`, `nav`, `main`, `section`, `article`)
- All images must have `alt` text
- Form inputs must have associated `<label>` elements
- Minimum 44x44px touch targets on interactive elements

## Coding Standards

- TypeScript strict mode, no `any` types
- Named exports preferred over default exports
- `const` over `let`; never `var`
- `async`/`await` over `.then()` chains
- React hooks follow Rules of Hooks
- Custom hooks prefixed with `use`
- Clean up effects (return cleanup function)
- Do not use `useEffect` for derived state — compute during render

## Performance

- Images: use Astro `<Image>` component for optimization (WebP, srcset)
- Fonts: Google Fonts with `display=swap`
- React islands: minimize JavaScript sent to client
- Lazy load below-fold sections with `client:visible`
- Use `transform` and `opacity` for animations, not `width`/`height`
