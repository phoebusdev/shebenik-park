# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Tourism Website Template

This is a **reusable template** for creating tourism websites for any national park, town, or destination. The entire site is controlled by a **single configuration file**: `/src/config/site.config.ts`

### When Users Ask You to Create a Site

1. **Read the config file** to understand the structure
2. **Update `/src/config/site.config.ts`** with the new destination's information
3. **Test the build**: Run `npm run build`

### Key Configuration Sections

**Basic Information:**
```typescript
name: "Destination Name",
shortName: "Short Name",
tagline: "Tagline",
description: { short, long, hero }
```

**Branding:**
```typescript
branding: {
  primaryColor: "#059669",  // Any hex color
  icon: "Mountain",         // Lucide icon name
  heroImage: "URL",
  galleryImages: [...]
}
```

**Location:**
```typescript
location: {
  country: "Country",
  countryCode: "CC",
  coordinates: { latitude, longitude },
  address: {...}
}
```

**Statistics (4 key facts):**
```typescript
stats: {
  area: { value, unit, description },
  established: { value, description },
  elevation: { value, unit, description },
  recognition: { value, description }
}
```

**Features (3 main selling points):**
```typescript
features: [
  { icon: "Trees", title: "...", description: "..." }
]
```

### Example User Request

**User:** "Set up this template for Grand Canyon, Arizona"

**Your Response:**
1. Update `site.config.ts`:
   - name: "Grand Canyon National Park"
   - location: Arizona, USA (36.1069, -112.1129)
   - Established: 1919, Area: 4,926 km²
   - Features: dramatic gorge, Colorado River, hiking
   - Color: earthy tones (#8B4513)
2. Test build
3. Inform user of updates

### Tech Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Config in `/src/config/site.config.ts`
- Helpers in `/src/lib/site-config-helpers.ts`

### Template Philosophy

- **Configuration over Code**: Users shouldn't write code
- **Type Safety**: All config is type-checked
- **SEO First**: Everything optimized for search

For full details, see README.md and TEMPLATE_SETUP.md
