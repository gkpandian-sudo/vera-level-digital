# Vera Level Digital — Optimus Visual Restyle

**Date:** 2026-06-21  
**Scope:** Full visual + layout restyle of all 13 sections to match the Optimus theme's design language, preserving all VLD content, i18n, dark/light toggle, WhatsApp CTA, and VLD blue (`#0062FF`) as the brand accent colour.

---

## 1. Design System

### Fonts
Replace `Inter` (body) and `Space Grotesk` (headings) with three Optimus fonts loaded via `next/font/google`:

| Role | Font | Usage |
|------|------|-------|
| Display | Instrument Serif | All `h1`–`h4`, hero headline, section headings |
| Body | Instrument Sans | Body copy, nav links, buttons |
| Mono | JetBrains Mono | Eyebrow labels, section numbers, tags, small caps |

Add a `font-display` utility class in `globals.css` that applies `Instrument Serif`.

### Colour Tokens
Migrate `globals.css` from RGB-channel custom properties to `oklch` values matching Optimus. The two-mode split (`:root` light / `.dark`) is preserved. VLD blue `#0062FF` replaces Optimus's monochrome `--primary` in both modes so all `text-primary`, `bg-primary`, `border-primary` usages continue to render blue.

| Token | Light | Dark |
|-------|-------|------|
| `--background` | `oklch(0.985 0.002 90)` (off-white) | `oklch(0.09 0.005 60)` (near-black) |
| `--foreground` | `oklch(0.12 0.01 60)` (near-black) | `oklch(0.97 0.002 90)` (off-white) |
| `--primary` | `oklch(0.43 0.25 264)` (VLD blue #0062FF) | `oklch(0.60 0.22 264)` (lighter blue) |
| `--muted` | `oklch(0.94 0.005 90)` | `oklch(0.18 0.005 60)` |
| `--muted-foreground` | `oklch(0.45 0.02 60)` | `oklch(0.60 0.01 60)` |
| `--border` | `oklch(0.88 0.01 90)` | `oklch(0.22 0.01 60)` |
| `--radius` | `0.25rem` | `0.25rem` |

### Global Utilities (additions to `globals.css`)
```css
/* Noise texture overlay */
.noise-overlay::after { ... }          /* SVG fractal noise, opacity 0.03 */

/* Character blur-in animation */
.animate-char-in { ... }              /* blur(40px) + translateY(100%) → 0, 0.5s */
@keyframes char-in { ... }

/* Text-stroke (outlined/hollow text) */
.text-stroke { -webkit-text-stroke: 1.5px currentColor; -webkit-text-fill-color: transparent; }

/* Hatched sketch border */
.border-sketch { ... }                 /* diagonal 8px repeating-linear-gradient border */

/* Hover lift spring */
.hover-lift { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
.hover-lift:hover { transform: translateY(-4px); }
```

### New Component: `AnimatedSphere`
Copy `_optimus_theme/components/landing/animated-sphere.tsx` directly into `components/animated-sphere.tsx`. Used only in the Hero.

---

## 2. Navigation (`components/nav.tsx`)

### Floating Pill Behaviour
- **Default (top of page):** full-width, transparent background, `h-20`.
- **Scrolled (>20px):** shrinks to `max-w-[1200px] mx-auto`, gains `bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg`, reduces to `h-14`. Animated with `transition-all duration-500`.

### Logo
`VLD` text mark retained, re-classed to `font-display text-2xl`.

### Desktop Links
Same anchors as current. Hover style: `w-0 → w-full h-px bg-foreground` underline slide, `transition-all duration-300`.

### Right-side Controls (left → right)
1. **Language switcher** — `TA | HI | EN` in `font-mono text-[11px] tracking-widest`, single `border border-foreground/10 rounded overflow-hidden` container. Active: `bg-primary text-white`. Inactive: `hover:bg-accent text-muted-foreground`.
2. **Theme toggle** — Sun/Moon icon, `border border-foreground/10` square button, `p-2 rounded`.
3. **CTA** — "Get a Free Quote" (from `t.nav.cta`), `bg-primary text-white rounded-full px-6 h-9 text-sm font-medium`.

### Mobile Menu
Full-screen overlay (`fixed inset-0 bg-background z-40`) with:
- Nav links at `text-5xl font-display`, staggered fade-in (`transitionDelay: i * 75ms`).
- Bottom strip: language buttons + theme toggle + CTA button, revealed after 300ms delay.
- Hamburger → X icon transition.

---

## 3. Hero (`components/hero.tsx`)

### Layout
`min-h-screen flex flex-col justify-center relative overflow-hidden`.

**Background layers (absolute, pointer-events-none):**
1. Grid lines: 8 horizontal + 12 vertical `h-px / w-px bg-foreground/10` divs, `opacity-30`.
2. `AnimatedSphere`: `absolute right-0 top-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] opacity-40`.

**Content (`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32`):**

1. **Eyebrow:** `font-mono text-sm text-muted-foreground` with leading `w-8 h-px bg-foreground/30` — renders `h.eyebrow`.
2. **Headline:** `clamp(3rem,12vw,10rem) font-display leading-[0.9] tracking-tight`. Each character of `h.headline` split and wrapped in `<span className="animate-char-in">` with `animationDelay: i * 50ms`. The accent word (`h.headlineAccent`) gets `text-primary`.
3. **Sub-copy + CTAs** in a `grid lg:grid-cols-2 gap-12 items-end`:
   - Left: `h.sub` in `text-xl lg:text-2xl text-muted-foreground max-w-xl`.
   - Right: WhatsApp primary CTA (`bg-primary text-white rounded-full h-14 px-8`) + secondary CTA (`variant="outline" rounded-full h-14`).

**Marquee stats strip:** `absolute bottom-24 left-0 right-0`. Renders `t.techStack.stats` duplicated (×2 for seamless loop). Value in `text-4xl lg:text-5xl font-display`, label in `text-sm text-muted-foreground font-mono`. Uses existing `animate-marquee` keyframe.

---

## 4. NoTemplate (`components/no-template.tsx`)

- Section eyebrow: horizontal line + mono label.
- Heading: `font-display text-4xl lg:text-6xl tracking-tight`. The `headlineAccent` span (e.g. "பூஜ்யம் டெம்ப்ளேட்." / "Zero Template." / "शून्य टेम्पलेट.") gets `text-stroke`.
- Feature points numbered `01`–`N` in `font-mono text-sm text-muted-foreground`, each in a `border-b border-foreground/10` row with title in `font-display text-2xl` and description in `text-muted-foreground`. Hover: title nudges `translate-x-2`.

---

## 5. Value (`components/value.tsx`)

Same numbered-list row pattern as NoTemplate. Each value item: number (`01`/`02`...) + title in `font-display text-3xl` + body in `text-muted-foreground`. Scroll-triggered fade-up via existing Framer Motion variants.

---

## 6. Services (`components/services.tsx`)

Rebuilt as Optimus-style numbered list:

Each service row:
- `border-b border-foreground/10 py-12 lg:py-20`
- Left: `font-mono text-sm text-muted-foreground` number
- Centre: title in `font-display text-3xl lg:text-4xl` + description in `text-lg text-muted-foreground`. Hover: `translate-x-2 transition-transform duration-500`.
- Right: small inline animated SVG visual (unique per service, ~200×160 viewBox with CSS `animate` elements).

---

## 7. TechStack (`components/tech-stack.tsx`)

- Logo marquee strip: unchanged.
- Stats row: `grid grid-cols-2 lg:grid-cols-4` with `border-r border-foreground/10` dividers. Value in `text-5xl font-display`, label in `font-mono text-xs uppercase tracking-widest text-muted-foreground`.

---

## 8. Compare (`components/compare.tsx`)

- Heading: "WordPress" gets `text-stroke` (outlined = the old way); "Modern Tech Stack" renders solid.
- Table cells: `border border-foreground/10`. VLD column highlighted with `border-sketch` and `bg-primary/5`.
- Check/cross symbols in `font-mono`.

---

## 9. Industries (`components/industries.tsx`)

- Grid of cards with `hover-lift`.
- Each card: `border border-foreground/10 p-6 rounded-sm`. Industry name in `font-display text-xl`. Hover: `border-foreground/40 transition`.

---

## 10. Pricing (`components/pricing.tsx`)

- Heading: "Pricing" word gets `text-stroke`.
- Monthly/annual toggle: kept.
- Grid: `grid md:grid-cols-3 gap-px bg-foreground/10` (Optimus pattern).
- Popular plan: `border-2 border-primary md:-my-4 md:py-16` (blue border instead of foreground).
- Plan number in `font-mono text-xs`. Price in `font-display text-5xl lg:text-6xl`. Features list with `Check` icon `text-primary`.
- CTA buttons: popular gets `bg-primary text-white`, others get `border border-foreground/20 hover:border-foreground`.

---

## 11. Portfolio (`components/portfolio.tsx`)

- Project cards with `hover-lift`.
- Project title in `font-display text-xl`. Category tag in `font-mono text-xs text-muted-foreground uppercase tracking-widest`.
- Card border: `border border-foreground/10`, hover `border-foreground/30`.

---

## 12. FAQ (`components/faq.tsx`)

- Eyebrow pattern + `font-display` section heading.
- Accordion items: question in `font-display text-xl`, answer in `text-muted-foreground text-base`. Dividers `border-foreground/10`.

---

## 13. CTA (`components/cta.tsx`)

- Giant `font-display` heading (`text-5xl lg:text-8xl`). One word gets `text-stroke`.
- WhatsApp CTA: `bg-primary text-white rounded-full h-14 px-10 text-base`.
- Section container: `border-sketch` border.

---

## 14. Footer (`components/footer.tsx`)

- Logo in `font-display`.
- Links: `text-sm text-muted-foreground`, hover underline-slide.
- Bottom bar: copyright in `font-mono text-xs text-muted-foreground`.
- WhatsApp float (`components/whatsapp-float.tsx`): unchanged.

---

## 15. Preserved (No Changes)

| Item | Status |
|------|--------|
| All i18n copy (`lib/i18n.tsx`) | Unchanged |
| Theme toggle logic (`lib/theme.tsx`) | Unchanged |
| Framer Motion animation variants (`lib/motion.ts`) | Unchanged (used for scroll-triggered reveals) |
| WhatsApp float component | Unchanged |
| Section order in `app/page.tsx` | Unchanged |
| `next.config.ts`, `tailwind.config.ts` | Minor additions only (font vars) |

---

## 16. Files Changed

| File | Change |
|------|--------|
| `app/globals.css` | Full rewrite — new tokens, new utilities |
| `app/layout.tsx` | Swap font imports to Instrument Serif/Sans + JetBrains Mono |
| `components/nav.tsx` | Floating pill, desktop/mobile restyle |
| `components/hero.tsx` | Full restyle — sphere, grid, char animation, marquee |
| `components/no-template.tsx` | Eyebrow + numbered list rows |
| `components/value.tsx` | Numbered list rows |
| `components/services.tsx` | Numbered list + SVG visuals |
| `components/tech-stack.tsx` | Stats grid restyle |
| `components/compare.tsx` | text-stroke heading, sketch border highlight |
| `components/industries.tsx` | hover-lift cards |
| `components/pricing.tsx` | Optimus grid pattern, text-stroke |
| `components/portfolio.tsx` | hover-lift cards, font-display titles |
| `components/faq.tsx` | font-display, muted-foreground |
| `components/cta.tsx` | Giant display heading, text-stroke, border-sketch |
| `components/footer.tsx` | font-display logo, underline-slide links |
| `components/animated-sphere.tsx` | New — copied from Optimus theme |
