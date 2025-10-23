# Design System Implementation Guide
## Earth Tones + Montserrat + Antique Classic Aesthetic

---

## Overview

This guide shows **exactly where and how** to apply the new design system. Follow each section in order to ensure consistency across the site.

**Total Estimated Time**: 3-4 hours
**Complexity**: Medium (mostly color and font variable updates)
**Risk Level**: Low (mostly CSS changes, no structural changes)

---

## Part 1: Font Import & Configuration

### Step 1.1: Update layout.tsx - Add Montserrat Font

**File**: `src/app/layout.tsx`

**Change**: Import Montserrat alongside existing Inter import

```typescript
// OLD CODE (lines 2-11):
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// NEW CODE:
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

**Then**: Add both font variables to the className of root element (search for `className={` around line 140):

```typescript
// Find this line in the return statement:
<html lang="en" className={`${inter.variable} ${montserrat.variable}`}>

// (If both variables aren't already there, add them)
```

---

## Part 2: Global Styles & Colors

### Step 2.1: Update globals.css - Color Variables

**File**: `src/app/globals.css`

**Replace lines 3-16** with:

```css
:root {
  /* Light backgrounds */
  --background: #ffffff;
  --background-alt: #f5ede4;
  --background-subtle: #fffaf5;

  /* Text colors - Warm charcoal */
  --foreground: #3e3631;
  --foreground-muted: #5c5550;
  --foreground-light: #8b8680;

  /* Primary color - Warm Terracotta */
  --primary: #a45a3c;
  --primary-light: #b87345;
  --primary-dark: #8b4524;
  --primary-foreground: #ffffff;

  /* Secondary - Sage Green (heritage accent) */
  --secondary: #7a8d6e;
  --secondary-light: #8b9d7e;
  --secondary-foreground: #ffffff;

  /* Accent colors */
  --accent: #f0dfd8;
  --accent-foreground: #a45a3c;
  --accent-gold: #c4a574;
  --accent-brown: #8b7355;

  /* Functional colors */
  --destructive: #c85a3b;
  --destructive-foreground: #ffffff;
  --border: #ddd3c6;
  --border-light: #ebe3d8;
  --input: #f5ede4;
  --ring: #a45a3c;
}
```

### Step 2.2: Update globals.css - Tailwind Theme

**Replace lines 19-32** with:

```css
@theme inline {
  --color-background: var(--background);
  --color-background-alt: var(--background-alt);
  --color-background-subtle: var(--background-subtle);

  --color-foreground: var(--foreground);
  --color-foreground-muted: var(--foreground-muted);
  --color-foreground-light: var(--foreground-light);

  --color-primary: var(--primary);
  --color-primary-light: var(--primary-light);
  --color-primary-dark: var(--primary-dark);
  --color-primary-foreground: var(--primary-foreground);

  --color-secondary: var(--secondary);
  --color-secondary-light: var(--secondary-light);
  --color-secondary-foreground: var(--secondary-foreground);

  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent-gold: var(--accent-gold);
  --color-accent-brown: var(--accent-brown);

  --color-border: var(--border);
  --color-border-light: var(--border-light);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --font-sans: var(--font-inter);
  --font-display: var(--font-montserrat);
}
```

### Step 2.3: Update globals.css - Body & Heading Fonts

**Replace lines 34-38** with:

```css
body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), sans-serif;
}

/* Montserrat for all headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-montserrat), sans-serif;
}
```

### Step 2.4: Update globals.css - Gradient Utilities

**Replace lines 156-200** (the three gradient definitions) with:

```css
/* Premium gradients with earth tones */
.gradient-primary {
  @apply bg-gradient-to-br from-primary to-primary-dark relative;
  position: relative;
}

.gradient-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
  opacity: 0.15;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.gradient-secondary {
  @apply bg-gradient-to-br from-primary-light to-primary relative;
  position: relative;
}

.gradient-secondary::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
  opacity: 0.15;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.gradient-accent {
  @apply bg-gradient-to-br from-accent-gold to-accent-brown relative;
  position: relative;
}

.gradient-accent::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
  opacity: 0.15;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

### Step 2.5: Update globals.css - Mesh Gradient (Antique Effect)

**Replace lines 202-210** with:

```css
/* Subtle mesh gradient overlay with earth tones */
.mesh-gradient {
  background-image:
    radial-gradient(at 40% 20%, rgba(164, 90, 60, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(184, 115, 69, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(164, 90, 60, 0.05) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(122, 141, 110, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(184, 115, 69, 0.07) 0px, transparent 50%);
}
```

### Step 2.6: Update globals.css - Card Styling

**Replace lines 94-117** with:

```css
.card-base {
  @apply bg-background-subtle backdrop-blur-sm rounded-2xl border border-border-light;
  box-shadow: 0 1px 3px rgba(62, 54, 49, 0.08), 0 4px 12px rgba(62, 54, 49, 0.04);
}

.card-interactive {
  @apply bg-background-subtle backdrop-blur-sm rounded-2xl border border-border-light hover:-translate-y-0.5 transition-all duration-500 ease-out;
  box-shadow: 0 1px 3px rgba(62, 54, 49, 0.08), 0 4px 12px rgba(62, 54, 49, 0.04);
}

.card-interactive:hover {
  @apply border-border;
  box-shadow: 0 4px 8px rgba(62, 54, 49, 0.08), 0 12px 24px rgba(62, 54, 49, 0.10);
}

.card-feature {
  @apply bg-background-alt backdrop-blur-md rounded-3xl border border-border-light hover:-translate-y-1 transition-all duration-500 ease-out;
  box-shadow: 0 2px 4px rgba(62, 54, 49, 0.08), 0 8px 24px rgba(62, 54, 49, 0.08);
}

.card-feature:hover {
  @apply border-border;
  box-shadow: 0 8px 16px rgba(62, 54, 49, 0.10), 0 20px 40px rgba(62, 54, 49, 0.12);
}
```

---

## Part 3: Component Updates

### Step 3.1: Navigation Component

**File**: `src/components/navigation.tsx`

**Look for**: Logo/brand colors and links styling

**Update**:
- Logo color: Change from green to terracotta (#a45a3c)
- Link hover: Change to `text-primary` (now terracotta)
- Active link underline: Change to `bg-primary`

Example changes:
```typescript
// Look for className containing text-green-600 or bg-green-600
// Replace with: text-primary and bg-primary

// Link styling:
// className="text-foreground hover:text-primary transition-colors"
```

### Step 3.2: Footer Component

**File**: `src/components/footer.tsx`

**Update**:
- Background: Change from white to `bg-foreground` (warm charcoal #3e3631)
- Text: Change to `text-background-alt` (light cream)
- Link hover: Use `text-accent-gold` (#c4a574)

Example:
```typescript
// OLD: <footer className="bg-white">
// NEW: <footer className="bg-foreground">

// OLD: <p className="text-gray-600">
// NEW: <p className="text-background-alt">
```

---

## Part 4: Logo & Favicon

### Step 4.1: Create New Logo

**Recommended Approach**:
1. Create an SVG logo with:
   - Terracotta color (#A45A3C)
   - Simple Byzantine or Aramonian-inspired shape
   - Montserrat-style geometric letterforms
   - Scalable design (works at 30px and 200px)

2. Save as: `public/logo.svg`

3. Update navigation to use it:
```typescript
import Image from "next/image";

// In navigation JSX:
<Image
  src="/logo.svg"
  alt="Voskopojë"
  width={40}
  height={40}
  className="text-primary"
/>
```

### Step 4.2: Update Favicon

**Steps**:
1. Create favicon in terracotta (#A45A3C)
   - 32x32 PNG (modern browsers)
   - Monogram or simplified architectural element

2. Replace: `public/favicon.ico`

3. Update layout.tsx (if needed):
```typescript
// In metadata export:
icons: {
  icon: '/favicon.ico',
  apple: '/apple-touch-icon.png',
}
```

---

## Part 5: Theme Color Updates

### Step 5.1: Update layout.tsx - Viewport Theme

**File**: `src/app/layout.tsx`

**Find lines 13-19** (viewport config):

```typescript
// OLD: themeColor: "#059669",
// NEW: themeColor: "#a45a3c",
```

This changes the browser tab color on Android.

---

## Part 6: Detailed Color Mapping Reference

### Colors to Find & Replace

| Old | New | Context |
|-----|-----|---------|
| `text-green-600` | `text-primary` | Links, icons, accents |
| `bg-green-600` | `bg-primary` | Buttons, backgrounds |
| `bg-green-100` | `bg-accent` | Icon backgrounds |
| `text-green-800` | `text-primary-dark` | Strong emphasis |
| `from-green-600` | `from-primary` | Gradients |
| `to-green-700` | `to-primary-dark` | Gradients |
| `border-green-500` | `border-primary` | Borders |
| `text-gray-900` | `text-foreground` | Text |
| `text-gray-600` | `text-foreground-muted` | Muted text |
| `bg-gray-100` | `bg-accent` | Light backgrounds |
| `bg-white` | `bg-background` or `bg-background-subtle` | Backgrounds |

---

## Part 7: Page-by-Page Updates

### All Page Files

**Location**: `src/app/*/page.tsx`

**Changes Needed**:
1. Headings are already using Montserrat (via globals.css)
2. Update color classNames:
   - `text-green-600` → `text-primary`
   - `bg-green-100` → `bg-accent`
   - `border-green-500` → `border-primary`

### Homepage (page.tsx)
- Hero gradient: Already using `gradient-primary`
- Icon circles: `bg-green-100` → `bg-accent`
- CTA buttons: Update to use primary color

### Gallery (gallery/page.tsx)
- Section backgrounds: Cream tones
- Card accents: Terracotta primary

### Other Pages
- Update icon background colors
- Update section gradients
- Update button styling

---

## Part 8: Implementation Steps (In Order)

### Step 1: Setup (15 minutes)
- [ ] Create backup of globals.css
- [ ] Read through DESIGN-SYSTEM.md
- [ ] Open layout.tsx and globals.css

### Step 2: Font Configuration (10 minutes)
- [ ] Add Montserrat import to layout.tsx
- [ ] Update className with both font variables
- [ ] Update globals.css font definitions

### Step 3: Colors (30 minutes)
- [ ] Replace color variables in globals.css
- [ ] Update gradient definitions
- [ ] Update card styling
- [ ] Update mesh gradient

### Step 4: Components (20 minutes)
- [ ] Update navigation.tsx colors
- [ ] Update footer.tsx colors
- [ ] Update layout.tsx theme color

### Step 5: Pages (30 minutes)
- [ ] Quick find/replace: `text-green-600` → `text-primary`
- [ ] Quick find/replace: `bg-green-100` → `bg-accent`
- [ ] Update icon colors in components
- [ ] Verify gradients

### Step 6: Logo & Favicon (20 minutes)
- [ ] Create or source new logo
- [ ] Create or source new favicon
- [ ] Test display in browser tabs

### Step 7: Testing (20 minutes)
- [ ] npm run build
- [ ] Visual check on all pages
- [ ] Check mobile responsiveness
- [ ] Test link hover states
- [ ] Verify accessibility (color contrast)

### Step 8: Refinement (15 minutes)
- [ ] Fine-tune any color values
- [ ] Adjust shadows if needed
- [ ] Check print styles if applicable

---

## Part 9: Build & Verify Checklist

- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] All pages render
- [ ] Colors consistent across pages
- [ ] Navigation uses terracotta
- [ ] Footer is warm charcoal
- [ ] Montserrat loads for headings
- [ ] Logo displays correctly
- [ ] Favicon displays in tab
- [ ] Mobile looks good
- [ ] Print preview acceptable
- [ ] Accessibility acceptable (WCAG AA)

---

## Part 10: Fallback & Rollback

**If something breaks**:

1. Check `npm run build` output for errors
2. Verify font imports are correct
3. Check color variable syntax
4. Inspect browser DevTools (Elements tab)
5. Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

**To revert**:
```bash
git checkout src/app/layout.tsx src/app/globals.css
# Or restore from backup
```

---

## Part 11: Performance Notes

**Font Performance**:
- Montserrat added to layout (adds ~15KB gzipped)
- Inter already optimized
- Both fonts use Google Fonts (cached)
- Impact: Minimal (<50ms on average connection)

**Color Variables**:
- CSS custom properties are native (no JS overhead)
- Smaller CSS than Tailwind color hardcoding
- Better for consistency

---

## Part 12: Maintenance & Future Updates

**To adjust colors later**:
1. Edit `:root` variables in globals.css
2. Changes cascade throughout site
3. No need to update individual components

**To add new colors**:
1. Add to `:root` in globals.css
2. Add to `@theme inline`
3. Use via Tailwind classes

---

**Document Version**: 1.0
**Last Updated**: 2025-10-23
**Status**: Ready for Implementation
