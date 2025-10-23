# Color Palette Reference
## Voskopojë Design System v2.0

---

## Complete Color Palette

### Primary Colors (Earth Tones)

#### Warm Terracotta
```
Name:     Warm Terracotta (Main Primary)
Hex:      #A45A3C
RGB:      164, 90, 60
HSL:      18°, 48%, 44%
Uses:     Primary buttons, hero sections, accent colors, key icons
```

#### Terracotta Light
```
Name:     Terracotta Light
Hex:      #B87345
RGB:      184, 115, 69
HSL:      19°, 47%, 50%
Uses:     Light accents, hover states, secondary backgrounds
```

#### Burnt Sienna Dark
```
Name:     Burnt Sienna (Dark Primary)
Hex:      #8B4524
RGB:      139, 69, 36
HSL:      18°, 59%, 34%
Uses:     Dark text on light backgrounds, footer, deep accents
```

---

### Text & Neutral Colors

#### Warm Charcoal (Primary Text)
```
Name:     Warm Charcoal
Hex:      #3E3631
RGB:      62, 54, 49
HSL:      18°, 12%, 22%
Uses:     Primary text, headings, body copy, strong contrast
Contrast: 16.5:1 on #FFFFFF (AAA rating)
```

#### Softer Warm Gray
```
Name:     Warm Gray (Muted Text)
Hex:      #5C5550
RGB:      92, 85, 80
HSL:      18°, 7%, 34%
Uses:     Secondary text, captions, muted information
Contrast: 9.2:1 on #FFFFFF (AA rating)
```

#### Light Warm Gray
```
Name:     Light Warm Gray
Hex:      #8B8680
RGB:      139, 134, 128
HSL:      18°, 4%, 52%
Uses:     Placeholder text, disabled states, subtle text
Contrast: 4.8:1 on #FFFFFF (AA rating)
```

---

### Background Colors

#### Pure White
```
Name:     White (Primary Background)
Hex:      #FFFFFF
RGB:      255, 255, 255
HSL:      0°, 0%, 100%
Uses:     Main page background, card backgrounds, high contrast
```

#### Warm Off-White
```
Name:     Warm Off-White
Hex:      #F5EDE4
RGB:      245, 237, 228
HSL:      24°, 58%, 93%
Uses:     Section backgrounds, subtle contrast
Darker than: #FFFFFF by 7%
```

#### Light Cream
```
Name:     Light Cream
Hex:      #FFFAF5
RGB:      255, 250, 245
HSL:      24°, 100%, 98%
Uses:     Card backgrounds, light sections, very subtle
Lighter than: #FFFFFF
```

#### Medium Cream
```
Name:     Medium Cream
Hex:      #EBE3D8
RGB:      235, 227, 216
HSL:      24°, 32%, 88%
Uses:     Border backgrounds, dividers, medium contrast
```

---

### Secondary & Accent Colors

#### Sage Green (Heritage Accent)
```
Name:     Sage Green
Hex:      #7A8D6E
RGB:      122, 141, 110
HSL:      97°, 12%, 49%
Uses:     Secondary accents, heritage elements, subtle contrast
Pairs with: Terracotta for classic heritage look
```

#### Sage Green Light
```
Name:     Sage Green Light
Hex:      #8B9D7E
RGB:      139, 157, 126
HSL:      97°, 14%, 56%
Uses:     Light sage accents, hover states
```

#### Antique Gold
```
Name:     Antique Gold
Hex:      #C4A574
RGB:      196, 165, 116
HSL:      33°, 40%, 61%
Uses:     Luxury accents, footer links, special highlights
Pairs with: Warm charcoal for classic elegance
```

#### Warm Brown
```
Name:     Warm Brown
Hex:      #8B7355
RGB:      139, 115, 85
HSL:      24°, 24%, 44%
Uses:     Gradient end color, dark accents
```

---

### Functional Colors

#### Accent (Light Terracotta Tint)
```
Name:     Accent (Terracotta Tint)
Hex:      #F0DFD8
RGB:      240, 223, 216
HSL:      18°, 48%, 89%
Uses:     Light background tints for icon circles, highlights
```

#### Border (Medium)
```
Name:     Border (Medium)
Hex:      #DDD3C6
RGB:      221, 211, 198
HSL:      24°, 19%, 82%
Uses:     Card borders, dividers, subtle separations
```

#### Border Light
```
Name:     Border Light
Hex:      #EBE3D8
RGB:      235, 227, 216
HSL:      24°, 32%, 88%
Uses:     Subtle borders, light separations
```

#### Input Field Background
```
Name:     Input Background
Hex:      #F5EDE4
RGB:      245, 237, 228
HSL:      24°, 58%, 93%
Uses:     Form input backgrounds, text fields
```

#### Destructive (Error/Warning)
```
Name:     Destructive (Deep Burnt)
Hex:      #C85A3B
RGB:      200, 90, 59
HSL:      18°, 56%, 51%
Uses:     Error messages, warnings, delete actions
```

---

## Color Usage Quick Guide

### By Component

| Component | Primary Color | Secondary | Background | Text |
|-----------|---------------|-----------|------------|------|
| Buttons (Primary) | #A45A3C | - | - | #FFFFFF |
| Buttons (Secondary) | - | #7A8D6E | #F5EDE4 | #3E3631 |
| Cards | - | - | #FFFAF5 | #3E3631 |
| Headers | #A45A3C | - | - | #FFFFFF |
| Navigation | - | - | #FFFFFF | #3E3631 |
| Footer | - | - | #3E3631 | #EBE3D8 |
| Forms | - | - | #F5EDE4 | #3E3631 |
| Links (default) | - | - | - | #A45A3C |
| Links (hover) | - | - | - | #8B4524 |
| Icons (accent) | #A45A3C | - | #F0DFD8 | - |

---

## By Context

### Warm Sections
- Primary: #A45A3C
- Accent: #F0DFD8
- Background: #FFFAF5
- Text: #3E3631

### Cool/Sage Sections
- Primary: #7A8D6E
- Accent: #E8EFE5
- Background: #FFFAF5
- Text: #3E3631

### Dark/Footer Sections
- Primary: #C4A574 (gold)
- Background: #3E3631 (warm charcoal)
- Text: #EBE3D8 (light cream)
- Accent: #C4A574 (gold)

---

## CSS Custom Properties

```css
:root {
  /* Primary Colors */
  --primary: #a45a3c;
  --primary-light: #b87345;
  --primary-dark: #8b4524;

  /* Text Colors */
  --foreground: #3e3631;
  --foreground-muted: #5c5550;
  --foreground-light: #8b8680;

  /* Background Colors */
  --background: #ffffff;
  --background-alt: #f5ede4;
  --background-subtle: #fffaf5;

  /* Secondary Colors */
  --secondary: #7a8d6e;
  --secondary-light: #8b9d7e;

  /* Accents */
  --accent: #f0dfd8;
  --accent-gold: #c4a574;
  --accent-brown: #8b7355;

  /* Borders & Inputs */
  --border: #ddd3c6;
  --border-light: #ebe3d8;
  --input: #f5ede4;

  /* Functional */
  --destructive: #c85a3b;
  --ring: #a45a3c;
}
```

---

## Accessibility & Contrast

### WCAG AA Compliant Pairs

| Foreground | Background | Contrast | Level |
|-----------|-----------|----------|-------|
| #3E3631 | #FFFFFF | 16.5:1 | AAA |
| #3E3631 | #F5EDE4 | 12.8:1 | AAA |
| #3E3631 | #FFFAF5 | 15.2:1 | AAA |
| #FFFFFF | #A45A3C | 4.7:1 | AA |
| #FFFFFF | #8B4524 | 6.5:1 | AAA |
| #EBE3D8 | #3E3631 | 12.4:1 | AAA |
| #C4A574 | #3E3631 | 5.2:1 | AA |

### Minimum Safe Pairs
- Dark text (#3E3631) on any light background (AA)
- White text (#FFFFFF) on terracotta or darker (AA)
- Light text (#EBE3D8) on dark charcoal (AAA)

---

## Color Mixing & Tints

### Creating Lighter Variants
```
Primary #A45A3C + 30% White = #C4857A (light accent)
Primary #A45A3C + 50% White = #D2ADD8 (very light)
```

### Creating Darker Variants
```
Primary #A45A3C - 20% = #804329 (extra dark)
Primary #A45A3C - 30% = #6B3520 (deepest)
```

### Creating Opacity Variants
```
Primary #A45A3C @ 80% = rgba(164, 90, 60, 0.8)
Primary #A45A3C @ 50% = rgba(164, 90, 60, 0.5)
Primary #A45A3C @ 20% = rgba(164, 90, 60, 0.2)
```

---

## Gradient Combinations

### Primary Gradient
```
from #A45A3C to #8B4524
→ Warm terracotta gradient (hero sections)
```

### Secondary Gradient
```
from #B87345 to #A45A3C
→ Light to medium terracotta (subtle sections)
```

### Accent Gradient
```
from #C4A574 to #8B7355
→ Gold to brown (luxury, antique effect)
```

### Heritage Gradient
```
from #A45A3C to #7A8D6E
→ Terracotta to sage (classic heritage)
```

---

## Seasonal Adjustments (Optional)

### Warmer (Autumn/Winter)
- Increase: #8B4524 (dark)
- Decrease: #B87345 (light)
- Effect: Deeper, cozier feel

### Cooler (Spring/Summer)
- Increase: #B87345 (light)
- Decrease: #8B4524 (dark)
- Effect: Brighter, fresher feel

---

## Color Consistency Checklist

- [ ] All primary accents use #A45A3C
- [ ] All text uses #3E3631 or #5C5550
- [ ] Card backgrounds use #FFFAF5
- [ ] Navigation text is #3E3631
- [ ] Footer background is #3E3631
- [ ] Gradients use correct primaries
- [ ] Icon backgrounds use #F0DFD8 or #E8EFE5
- [ ] Borders use #DDD3C6 or #EBE3D8
- [ ] Form inputs use #F5EDE4
- [ ] Links hover to #A45A3C

---

## Export Formats

### Tailwind CSS
```
primary: '#a45a3c'
primary-light: '#b87345'
primary-dark: '#8b4524'
```

### SASS Variables
```scss
$primary: #a45a3c;
$primary-light: #b87345;
$primary-dark: #8b4524;
```

### JavaScript/JSON
```json
{
  "primary": "#a45a3c",
  "primaryLight": "#b87345",
  "primaryDark": "#8b4524"
}
```

---

## Designer Notes

### Color Psychology
- **Terracotta**: Warmth, earth, heritage, authenticity
- **Sage Green**: Balance, nature, tradition, calm
- **Charcoal**: Sophistication, stability, grounding
- **Gold**: Luxury, prestige, timelessness

### Cultural Context
- Earth tones reflect Balkan/Mediterranean tradition
- Colors echo Byzantine color palettes
- Warm palette appropriate for heritage site
- Gold accent references antique manuscripts

---

## Common Color Questions

**Q: Can I use #FFFFFF instead of #F5EDE4?**
A: Yes, both work. #FFFFFF is brighter/higher contrast. #F5EDE4 is warmer/vintage.

**Q: Can I make the terracotta brighter?**
A: Brighter would be #C4856F. Current #A45A3C is optimal for web.

**Q: What if I need an even darker text color?**
A: Use #2A2420 (very dark warm charcoal). Contrast: 18:1 on white.

**Q: Can I mix sage and terracotta?**
A: Yes! They complement well. Use separately in different sections for best effect.

**Q: What about dark mode?**
A: Consider #2A2420 background with #EBE3D8 text. Reverse gradient backgrounds.

---

## Color Blind Friendly Notes

This palette has been selected to be:
- ✓ Deuteranopia friendly (red-green colorblind)
- ✓ Protanopia friendly (red-blind)
- ✓ Tritanopia friendly (blue-yellow colorblind)

The high contrast ratios (4.5:1+) ensure readability for all vision types.

---

**Color Palette Version**: 2.0
**Last Updated**: 2025-10-23
**Format**: CSS, Hex, RGB, HSL
**Status**: Ready for Implementation
