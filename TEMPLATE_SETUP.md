# Tourism Website Template - Quick Setup Guide

This template provides a complete, production-ready tourism website that can be quickly customized for any national park, town, or tourist destination.

## 🚀 Quick Start (5 Minutes!)

### 1. Edit the Config File

Open `/src/config/site.config.ts` and update:

- **name**: "Your Park/Town Name"
- **tagline**: "Your Tagline"
- **description**: short, long, and hero descriptions
- **branding.primaryColor**: "#YourColor"
- **location**: coordinates, address, country
- **contact**: phone, email, website
- **stats**: area, established, elevation, recognition
- **features**: 3 main selling points

### 2. Run Your Site

```bash
npm install
npm run dev
```

Visit http://localhost:3000 🎉

## 📋 What's Pre-Configured

- Complete SEO (meta tags, Open Graph, structured data)
- Next.js 15 + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui
- 10+ responsive pages
- Vercel Analytics ready

## 🎨 Quick Customization Tips

**Change Colors:**
```typescript
branding: { primaryColor: "#059669" }
```

**Update Location:**
```typescript
location: {
  coordinates: { latitude: 41.2928, longitude: 20.5619 }
}
```

**Customize Features:**
```typescript
features: [
  { icon: "Trees", title: "Forests", description: "..." },
  { icon: "Droplets", title: "Lakes", description: "..." },
  { icon: "Users", title: "Wildlife", description: "..." }
]
```

Available icons: Mountain, Building, TreePine, Landmark, Palmtree, Church, Castle, Waves, Sun, etc.

## 📊 SEO Checklist

- [ ] Update all config values
- [ ] Add real images
- [ ] Set correct coordinates
- [ ] Add verification codes
- [ ] Test on mobile
- [ ] Run npm run build

## 💡 For Claude Code Users

**Example Prompt:**
> "Configure this template for Yosemite National Park in California. Established 1890, area 3,027 km². Main features: granite cliffs, waterfalls, sequoia trees. Use earthy brown colors."

Claude will update the entire config automatically!

---

See README.md for full documentation.
