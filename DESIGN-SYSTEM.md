# Voskopojë Design System v2.0
## Classic Antique Earth Tones Edition

---

## 1. Design Philosophy

**Aesthetic Vision**: Classic, sophisticated, heritage-focused design inspired by:
- 18th-century Byzantine architecture
- Ottoman mountain village aesthetics
- Antique manuscript and heritage site design
- Warm, earthy, timeless beauty

**Core Principles**:
- Warmth and authenticity over modernity
- Respect for historical context through design
- Elegant restraint with subtle richness
- Timeless quality that won't feel dated

---

## 2. Color Palette

### Primary Colors (Earth Tones)
```
Warm Terracotta
  #A45A3C - Main primary (warm, heritage-rich)
  #B87345 - Lighter variant (accent use)
  #8B4524 - Darker variant (navigation, emphasis)

Burnt Sienna (Accent)
  #9C4423 - Deep burnt earth
  #C85A3B - Vibrant warm accent

Warm Beige/Cream (Backgrounds)
  #F5EDE4 - Warm off-white
  #EBE3D8 - Light cream
  #DDD3C6 - Medium cream
```

### Supporting Palette
```
Soft Sage Green (Heritage accent)
  #7A8D6E - Muted green (complements warm tones)
  #8B9D7E - Lighter variant

Charcoal/Warm Gray (Text)
  #3E3631 - Warm charcoal (primary text)
  #5C5550 - Softer warm gray
  #8B8680 - Light warm gray

Accent Colors
  #C4A574 - Antique gold
  #8B7355 - Warm brown
```

### Color Usage Guidelines

**Primary CTA & Emphasis**: #A45A3C (Terracotta)
- Hero section backgrounds
- Primary buttons
- Important icons
- Section dividers

**Secondary Accents**: #7A8D6E (Sage Green)
- Subtle accent elements
- Icon backgrounds (where earth tone would be too heavy)
- Supporting information highlights

**Text Colors**:
- Headings: #3E3631 (Warm charcoal)
- Body text: #3E3631 (Warm charcoal)
- Muted text: #5C5550 (Softer gray)

**Backgrounds**:
- Body background: #F5EDE4 (Warm off-white) or #FFFFFF
- Card backgrounds: #FFFAF5 or #F9F5F0
- Section backgrounds: Alternating #F5EDE4 and #FFFFFF
- Input fields: #F5EDE4

---

## 3. Typography System

### Fonts
```
Headings (h1-h6): Montserrat
Body & UI Text: Inter (maintaining existing body elegance)
```

### Font Loading (in layout.tsx)
```typescript
// Import both fonts
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

### Heading Hierarchy

| Element | Font | Weight | Size | Usage |
|---------|------|--------|------|-------|
| h1 | Montserrat | 400-500 | 4xl-8xl | Page titles, hero statements |
| h2 | Montserrat | 400-500 | 3xl-6xl | Section headings |
| h3 | Montserrat | 500-600 | 2xl-4xl | Subsection headings |
| h4 | Montserrat | 500-600 | xl-2xl | Card titles, feature heads |
| h5 | Montserrat | 600 | lg-xl | Minor headings |
| h6 | Montserrat | 600 | base-lg | Smallest headings |

### Body Text
```
Font: Inter (sans-serif)
Weight: 300-400 (light to regular)
Size: base (16px) to lg (18px)
Line-height: 1.6-1.8 (enhanced readability)
Letter-spacing: 0.5px (slight opening)
```

### Letter Spacing
- Headings: -0.02em to 0em (tighter, more dignified)
- Body: 0.01em (subtle opening)
- Navigation: 0.025em (classic)

### Font Weights
```
h1, h2: font-weight-400 (light, dignified)
h3, h4, h5: font-weight-500 or 600 (clear hierarchy)
h6: font-weight-600 (emphasis)
body, p, span: font-weight-300 or 400 (readable)
strong, b: font-weight-600 (emphasis within text)
```

---

## 4. Logo & Visual Identity

### Logo Concept
**Style**: Classic serif or sophisticated mark
**Color**: #A45A3C (Terracotta) primary with #3E3631 outline
**Elements Inspired By**:
- Byzantine architectural elements (arches, crosses)
- Aramonian cultural motifs
- Antique heraldic traditions

### Favicon Strategy
- Primary: SVG or high-quality PNG in terracotta (#A45A3C)
- Secondary: Simplified monogram or architectural element
- Colors: Terracotta on white background

### Logo Placement
- Navigation: Left-aligned, ~40-50px height
- Footer: Center or left, slightly larger context
- Favicon: In browser tabs, bookmarks

---

## 5. Component Styling Updates

### Gradient System (Updated)

**Primary Gradient (Hero sections)**
```css
.gradient-primary {
  background: linear-gradient(135deg, #A45A3C 0%, #8B4524 100%);
  /* Warm terracotta gradient */
}
```

**Secondary Gradient**
```css
.gradient-secondary {
  background: linear-gradient(135deg, #B87345 0%, #9C4423 100%);
  /* Lighter terracotta to deep burnt earth */
}
```

**Accent Gradient (Subtle)**
```css
.gradient-accent {
  background: linear-gradient(135deg, #C4A574 0%, #8B7355 100%);
  /* Antique gold to warm brown */
}
```

### Card Styling
```css
.card-base {
  background: #FFFAF5;
  border: 1px solid #DDD3C6;
  box-shadow: 0 1px 3px rgba(62, 54, 49, 0.08);
}

.card-feature {
  background: #F9F5F0;
  border: 1px solid #EBE3D8;
  box-shadow: 0 4px 12px rgba(62, 54, 49, 0.08);
}
```

### Button Styles
```
Primary Button:
  Background: #A45A3C
  Text: #FFFFFF
  Hover: #8B4524 (darker)

Secondary Button:
  Background: #F5EDE4
  Text: #3E3631
  Border: 1px #DDD3C6
  Hover: #EBE3D8
```

### Icon Backgrounds
- Warm sections: Use #FFEAE0 (light terracotta tint)
- Neutral sections: Use #FFFAF5 (warm white)
- Sage accents: Use #E8EFE5 (light sage)

---

## 6. Visual Effects & Textures

### Mesh Gradient (Antique Effect)
Replace modern green mesh with warm earth tones:
```css
.mesh-gradient {
  background-image:
    radial-gradient(at 40% 20%, rgba(164, 90, 60, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(184, 115, 69, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(164, 90, 60, 0.05) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(122, 141, 110, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(184, 115, 69, 0.07) 0px, transparent 50%);
}
```

### Vintage Paper Texture (Optional)
```css
.vintage-texture {
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 1;
  mix-blend-mode: multiply;
}
```

### Shadow System (Warmer)
```css
.shadow-light {
  box-shadow: 0 1px 2px rgba(62, 54, 49, 0.05);
}

.shadow-md {
  box-shadow: 0 4px 8px rgba(62, 54, 49, 0.08);
}

.shadow-lg {
  box-shadow: 0 8px 16px rgba(62, 54, 49, 0.10);
}
```

---

## 7. Navigation & Header

**Background**: #FFFFFF or #FFFAF5
**Text**: #3E3631 (warm charcoal)
**Logo Color**: #A45A3C
**Accent Underline**: #A45A3C (2px, hover effect)
**Navigation Links**:
- Default: #3E3631
- Hover: #A45A3C
- Active: #A45A3C with underline

---

## 8. Footer

**Background**: #3E3631 (warm charcoal) or #2A2420 (darker)
**Text**: #EBE3D8 (light cream)
**Accent**: #C4A574 (antique gold)
**Links**: #C4A574 with hover to #E0C89F

---

## 9. Form Elements

**Input Fields**:
- Background: #FFFAF5
- Border: #DDD3C6
- Focus: #A45A3C (terracotta accent border)
- Text: #3E3631

**Labels**:
- Font: Inter 500
- Color: #3E3631
- Font-size: 0.875rem (14px)

**Placeholders**:
- Color: #8B8680 (light warm gray)
- Opacity: 1.0

---

## 10. Implementation Checklist

### Phase 1: Foundation
- [ ] Import Montserrat font in layout.tsx
- [ ] Update globals.css with new color variables
- [ ] Update Tailwind theme configuration
- [ ] Create/integrate new logo and favicon

### Phase 2: Component Updates
- [ ] Navigation: Update colors and theming
- [ ] Footer: Update to warm charcoal base
- [ ] Hero sections: Update gradient to terracotta
- [ ] Cards: Update background and border colors
- [ ] Buttons: Update primary and secondary colors

### Phase 3: Page Updates
- [ ] Apply Montserrat to all heading elements
- [ ] Update section gradients
- [ ] Refresh icon backgrounds
- [ ] Update badge/pill colors

### Phase 4: Polish
- [ ] Review shadow colors for warmth
- [ ] Test text contrast (WCAG AA minimum)
- [ ] Verify responsive behavior
- [ ] Mobile testing for touch states

### Phase 5: Validation
- [ ] Browser testing (Chrome, Firefox, Safari)
- [ ] Accessibility audit
- [ ] Build test
- [ ] Performance check

---

## 11. Accessibility Considerations

### Color Contrast
- Text on terracotta (#A45A3C): Use white or #F5EDE4
- Text on cream backgrounds: Use #3E3631
- Minimum ratio: 4.5:1 for body text, 3:1 for headings

### Readability
- Maintain line-height of 1.6-1.8 for body
- Use font-weight 300-400 for body (not too light)
- Ensure sufficient letter-spacing

### Interactive States
- Visible focus states (keyboard navigation)
- Clear hover/active states for links
- Sufficient color difference for distinguishing states

---

## 12. File Changes Summary

**Files to Modify**:
1. `src/app/layout.tsx` - Add Montserrat font import
2. `src/app/globals.css` - Update color variables and typography
3. `src/components/navigation.tsx` - Update colors and styling
4. `src/components/footer.tsx` - Update background color
5. Logo/Favicon files - Create new terracotta design
6. All page files - Update headings to use new fonts

**Color Variable Mapping**:
- `--primary: #A45A3C` (was #16a34a)
- `--accent: #F0DFD8` (was #dcfce7)
- New: `--terracotta-dark: #8B4524`
- New: `--sage: #7A8D6E`
- New: `--warm-charcoal: #3E3631`

---

## 13. Design Rationale

### Why Earth Tones?
- **Authenticity**: Reflects natural mountain landscape and Byzantine heritage
- **Timelessness**: Earth tones feel classic, never dated
- **Warmth**: Creates welcoming, human feeling vs. corporate greenness
- **Heritage**: Common in antique manuscripts, historical documents

### Why Montserrat for Headings?
- **Personality**: Modern geometric sans with vintage warmth
- **Readability**: Clean, open letterforms
- **Contrast**: Distinctive from body text (Inter), creates hierarchy
- **Versatility**: Works at all sizes from h1 to h6

### Why Keep Inter for Body?
- **Proven Readability**: Optimized for screen viewing
- **Consistency**: Already established in typography system
- **Performance**: Already loaded, no extra font files
- **Contrast**: Creates visual hierarchy against Montserrat

---

## 14. Brand Guidelines

### Do's
✓ Use terracotta as primary accent color
✓ Pair Montserrat headings with Inter body
✓ Maintain warm, inviting color palette
✓ Use subtle shadows and textures
✓ Preserve accessibility standards

### Don'ts
✗ Don't use bright greens (too modern)
✗ Don't use cold grays or blues
✗ Don't use serifed fonts in headings (unless very specific context)
✗ Don't overuse gold accents
✗ Don't forget focus states in interactive elements

---

## 15. Future Considerations

- **Dark Mode**: Could use #2A2420 background with #EBE3D8 text
- **Seasonal Variants**: Slightly warmer in autumn, cooler in spring
- **Animated Logo**: Montserrat letterforms with subtle animation
- **Pattern Library**: Develop reusable pattern SVGs in earth tones

---

**Design System Version**: 2.0 (Classic Antique Earth Tones)
**Last Updated**: 2025-10-23
**Maintained By**: Voskopojë Tourism Design Team
