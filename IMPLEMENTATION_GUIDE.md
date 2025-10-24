# AI-Friendly Template Configuration - Implementation Guide

## ✅ COMPLETED (Foundation Layer)

The following files have been created:

1. **`/src/config/types.ts`** - Complete TypeScript type definitions
2. **`/src/config/theme.ts`** - Voskopojë theme configuration  
3. **`/src/lib/icon-resolver.tsx`** - Icon resolution component

### ✅ Existing Files (Already Good)
- `/src/config/site.ts` - Site configuration (well-structured, keep as-is)

---

## 🔨 REMAINING WORK

### Phase 1: Complete Config Files (2-3 hours)

#### Step 1.1: Create Content/Asset Configuration

Create `/src/config/content.ts`:

```typescript
import { ContentConfig } from './types';

export const content: ContentConfig = {
  // Asset manifest - migrate all Wikipedia Commons URLs here
  assets: {
    // Hero images
    'hero.home': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg',
      alt: 'Grammos Mountains panorama surrounding Voskopojë village',
      width: 1920,
      height: 1080,
      priority: true,
    },
    'hero.about': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg',
      alt: 'About Voskopojë',
      width: 1920,
      height: 1080,
    },
    // Add more images from gallery page...
  },

  // Page content
  pages: {
    home: {
      hero: {
        title: 'Voskopojë',
        subtitle: 'A Byzantine Treasure',
        description: 'Discover the "Jerusalem of the Aromanians"...',
        image: 'hero.home',
      },
    },
    about: {
      hero: {
        title: 'About Voskopojë',
        subtitle: 'UNESCO Candidate Heritage Site',
        image: 'hero.about',
      },
    },
  },
};
```

**Task**: Extract all image URLs from `/src/app/gallery/page.tsx` and add them to the assets object with semantic keys like `'gallery.churches.stNicholas'`.

---

#### Step 1.2: Create Config Barrel Export

Create `/src/config/index.ts`:

```typescript
/**
 * Unified configuration export
 */

export * from './types';
export { theme } from './theme';
export { siteConfig } from './site';
export { content } from './content';

// Validation function
export function validateConfig() {
  // Add validation logic
  if (!theme.colors.primary[600]) {
    throw new Error('Theme must define primary color 600');
  }
}

// Helper functions
export function getAsset(key: string) {
  return content.assets[key];
}
```

---

### Phase 2: Create Transformation Layer (2 hours)

#### Step 2.1: Create Asset Resolver

Create `/src/lib/asset-resolver.ts`:

```typescript
import { content } from '@/config';
import { AssetConfig } from '@/config/types';

const FALLBACK_IMAGE: AssetConfig = {
  src: '/images/fallback.jpg',
  alt: 'Image not found',
  width: 800,
  height: 600,
};

export function resolveAsset(key: string): AssetConfig {
  const asset = content.assets[key];
  
  if (!asset) {
    console.warn(`Asset key "${key}" not found, using fallback`);
    return FALLBACK_IMAGE;
  }
  
  return asset;
}

export function getAssetProps(key: string) {
  const asset = resolveAsset(key);
  return {
    src: asset.src,
    alt: asset.alt,
    width: asset.width,
    height: asset.height,
    priority: asset.priority,
  };
}
```

---

#### Step 2.2: Create Theme Provider

Create `/src/lib/theme-provider.tsx`:

```typescript
'use client';

import { useEffect } from 'react';
import { theme } from '@/config';

function generateCSSVariables() {
  const vars: Record<string, string> = {};

  // Color variables
  Object.entries(theme.colors).forEach(([name, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      if (value) {
        vars[`--color-${name}-${shade}`] = value;
      }
    });
  });

  // Border radius
  vars['--radius-card'] = theme.tokens.borderRadius.card;
  vars['--radius-button'] = theme.tokens.borderRadius.button;

  return vars;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const vars = generateCSSVariables();
    const root = document.documentElement;

    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  return <>{children}</>;
}
```

---

### Phase 3: Update CSS System (1 hour)

#### Step 3.1: Update globals.css

Add to `/src/app/globals.css` (at the top, after imports):

```css
@layer base {
  :root {
    /* These will be injected by ThemeProvider, but provide fallbacks */
    --color-primary-50: #fdf4f1;
    --color-primary-600: #a45a3c;
    --color-primary-700: #8b4524;
    
    --radius-card: 1.5rem;
    --radius-button: 0.5rem;
  }
}

@layer utilities {
  /* Semantic color utilities */
  .bg-primary {
    background-color: var(--color-primary-600);
  }
  
  .bg-primary-700 {
    background-color: var(--color-primary-700);
  }
  
  .text-primary {
    color: var(--color-primary-600);
  }
  
  .border-primary {
    border-color: var(--color-primary-600);
  }
  
  /* Card utilities */
  .rounded-card {
    border-radius: var(--radius-card);
  }
  
  .rounded-button {
    border-radius: var(--radius-button);
  }
}
```

---

#### Step 3.2: Update Tailwind Config

Update `/home/henri/vibe-coding/projects/shebenik-park-template/tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          DEFAULT: 'var(--color-primary-600)',
        },
      },
      borderRadius: {
        card: 'var(--radius-card)',
        button: 'var(--radius-button)',
      },
    },
  },
}

export default config
```

---

### Phase 4: Wrap App with ThemeProvider (15 minutes)

Update `/src/app/layout.tsx`:

```typescript
import { ThemeProvider } from '@/lib/theme-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

### Phase 5: Migrate Navigation Component (30 minutes)

Update `/src/components/navigation.tsx`:

**BEFORE:**
```typescript
<Mountain className="h-9 w-9 text-primary..." />
```

**AFTER:**
```typescript
import { IconResolver } from '@/lib/icon-resolver'
import { theme } from '@/config'

<IconResolver icon={theme.brand.logo} size={36} className="text-primary..." />
```

Replace all `bg-green-*` with `bg-primary`, `text-green-*` with `text-primary`.

---

### Phase 6: Mass Color Replacement (1 hour)

Run this find & replace across all files in `/src`:

```bash
# In VSCode or your editor:
Find: bg-green-600
Replace: bg-primary

Find: bg-green-700  
Replace: bg-primary-700

Find: text-green-600
Replace: text-primary

Find: hover:bg-green-700
Replace: hover:bg-primary-700

Find: border-green-600
Replace: border-primary
```

**Files to update** (343 instances total):
- All pages in `/src/app/`
- All components in `/src/components/`

---

### Phase 7: Make Cards Square (5 minutes)

To change cards from rounded to square:

1. Edit `/src/config/theme.ts`, line ~148:
   ```typescript
   card: {
     variant: 'square',  // Changed from 'rounded'
   ```

2. Edit `/src/app/globals.css`:
   ```css
   --radius-card: 0;  /* Changed from 1.5rem */
   ```

All cards site-wide instantly become square!

---

## 🧪 TESTING CHECKLIST

After completing implementation:

- [ ] Run `npm run build` - should succeed
- [ ] Run `npm run dev` - check http://localhost:3000
- [ ] Verify all pages load correctly
- [ ] Check navigation logo displays correctly
- [ ] Verify cards have correct border radius (square or rounded)
- [ ] Confirm colors match theme (terracotta, not green)
- [ ] Test responsive design on mobile
- [ ] Run `npm run lint` - fix any errors

---

## 🎯 QUICK WINS

### Change Logo
Edit `/src/config/theme.ts`:
```typescript
logo: { type: 'lucide', name: 'Church' }
// Change to:
logo: { type: 'lucide', name: 'Mountain' }
```

### Change Primary Color  
Edit `/src/config/theme.ts`:
```typescript
primary: {
  600: '#a45a3c',  // Terracotta
  // Change to:
  600: '#059669',  // Green
}
```

### Make Cards Square
Edit `/src/config/theme.ts`:
```typescript
components: {
  card: {
    variant: 'square',  // Changed from 'rounded'
```

---

## 📝 COMPLETION ESTIMATE

| Phase | Time | Complexity |
|-------|------|------------|
| Complete config files | 2-3 hours | Medium |
| Transformation layer | 2 hours | Medium |
| CSS updates | 1 hour | Low |
| Component migration | 3-4 hours | Medium |
| Mass color replacement | 1 hour | Low |
| Testing & fixes | 2 hours | Low |
| **TOTAL** | **11-13 hours** | **Medium** |

---

## 🚀 AI AUTOMATION HINT

You can use Claude CLI to automate the color replacement:

```
"Replace all instances of bg-green-600 with bg-primary across all files in src/"
"Replace all instances of text-green-600 with text-primary"
"Update navigation component to use IconResolver from theme config"
```

---

## 📚 DOCUMENTATION TO CREATE

After completion, create:

1. **`CONFIGURATION.md`** - AI guide for adapting template
2. **`CHANGELOG.md`** - Document changes made
3. Update **`CLAUDE.md`** - Add configuration system section

---

## ✨ RESULT

After completing this guide, you'll have:

✅ Centralized configuration in 3 files  
✅ Logo changeable via config  
✅ Colors changeable via config  
✅ Images centralized in asset manifest  
✅ Cards configurable (square/rounded)  
✅ All 343 color instances replaced  
✅ Type-safe, AI-friendly template  

**Template adaptation time: 5-10 minutes** (just edit config files!)
