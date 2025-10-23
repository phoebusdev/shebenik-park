# Tourism Site Template - Adaptation Guide

## 🎯 Purpose

This tourism website template is designed for **easy adaptation by LLMs and developers**. All site-specific content is centralized in a single configuration file, making it simple to adapt this template for any tourism destination.

---

## 📋 Quick Start: Adapting This Template

### Step 1: Update Site Configuration

**File to edit:** `src/config/site.ts`

This is the **SINGLE SOURCE OF TRUTH** for all site-specific content. Update ALL values in this file:

#### Required Updates:

1. **Site Identity** (Lines 15-18)
   - `name`: Site/location name (e.g., "Machu Picchu", "Santorini", "Banff National Park")
   - `tagline`: Short descriptive tagline (e.g., "Ancient Wonder", "Aegean Paradise")
   - `description`: Full SEO description (1-2 sentences)
   - `longDescription`: Longer description for footer

2. **Branding** (Lines 23-32)
   - `primaryColor`: Main brand color (hex code, e.g., "#a45a3c")
   - `themeColor`: Browser theme color (usually same as primaryColor)
   - `logoIcon`: Icon name from [Lucide Icons](https://lucide.dev) (e.g., "Mountain", "Church", "Landmark")

3. **Domain & URLs** (Lines 37-40)
   - `url`: Your production domain
   - `deploymentUrl`: Same as url (or staging URL if needed)

4. **Geographic Location** (Lines 45-60)
   - `coordinates`: Exact lat/lng ([find here](https://www.latlong.net/))
   - `region`: Human-readable region (e.g., "Cuzco Region, Peru")
   - `country`: Country name
   - `countryCode`: ISO 2-letter code (e.g., "PE", "GR", "CA")
   - `detailedLocation`: Full location for footer

5. **Site Statistics & Facts** (Lines 65-81)
   - `size`: Area/size description
   - `elevation`: Altitude/elevation
   - `established`: Founded/established date
   - `highlights`: Array of 3-4 key highlights
   - `quickFacts`: Array of 4 key facts with label+value

6. **Navigation** (Lines 86-98)
   - Update menu items if your site structure differs
   - Keep consistent with your actual pages

7. **Social Media** (Lines 103-110)
   - `twitterHandle`: Your site's Twitter handle
   - `twitterCreator`: Organization Twitter
   - Verification codes (optional)

8. **Contact** (Lines 115-119)
   - `email`: Contact email address

9. **SEO Keywords** (Lines 124-139)
   - Replace with relevant keywords for your destination
   - Include location names, attractions, activities

10. **Organization** (Lines 144-149)
    - `name`: Organization name
    - `legalName`: Legal/official name
    - `email`: Contact email

11. **Images** (Lines 154-160)
    - `og`: Social media share image URL (1200x630px recommended)
    - `hero`: Homepage hero image URL

12. **PWA Settings** (Lines 165-169)
    - `shortName`: Short app name (e.g., "Voskopojë")
    - `categories`: Relevant categories

13. **Copyright** (Lines 174-180)
    - `year`: Current year
    - `holder`: Copyright holder name
    - `tagline`: Footer tagline

---

### Step 2: Update Color Scheme (Optional)

**File to edit:** `src/app/globals.css`

If you want to change the color palette beyond the primary color:

1. Lines 14-29: Update CSS color variables
   - `--primary`: Main brand color
   - `--secondary`: Secondary/accent color
   - Other color variables as needed

2. The primary color in `globals.css` should match `siteConfig.branding.primaryColor`

---

### Step 3: Update Page Content

Update content in individual page files:

- `src/app/page.tsx` - Homepage hero, features, CTAs
- `src/app/about/page.tsx` - About page content
- `src/app/attractions/page.tsx` - Attractions/points of interest
- `src/app/activities/page.tsx` - Activities and experiences
- `src/app/visit/page.tsx` - Visitor information
- `src/app/accommodation/page.tsx` - Lodging options
- `src/app/gallery/page.tsx` - Photo gallery
- `src/app/testimonials/page.tsx` - Reviews and testimonials
- `src/app/faq/page.tsx` - Frequently asked questions
- `src/app/contact/page.tsx` - Contact information

**Tip for LLMs:** Use the `siteConfig.stats.quickFacts` array for homepage hero statistics.

---

### Step 4: Replace Images

Update image URLs throughout page files. Current template uses Wikipedia Commons images.

**Best practice:** Use high-quality images from:
- Wikimedia Commons (free, properly licensed)
- Unsplash (free, no attribution required)
- Your own photography
- Licensed stock photos

**Key images to replace:**
- Social media share image (`siteConfig.images.og`)
- Homepage hero image
- Gallery images
- About page images

---

### Step 5: Verify Build

Run the following command to verify everything works:

```bash
npm run build
```

**Common issues:**
- TypeScript errors: Check all required fields in `siteConfig` are filled
- Import errors: Verify file paths are correct
- Build warnings: Review and fix any ESLint warnings

---

### Step 6: Test All Pages

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit each page and verify:
   - Navigation shows correct site name and tagline
   - Footer shows correct location, stats, copyright
   - Meta tags are correct (view page source)
   - All links work
   - Content is appropriate for new site

---

## 🏗️ Architecture Overview

### Centralized Configuration System

```
src/config/
├── site.ts       # Main configuration (SINGLE SOURCE OF TRUTH)
├── types.ts      # TypeScript interfaces
└── README.md     # This file

src/lib/
└── metadata.ts   # Helper functions for generating metadata
```

### How It Works

1. **Configuration** (`src/config/site.ts`)
   - Exports `siteConfig` object with all site-specific data
   - Type-safe with TypeScript interfaces
   - Extensively commented for LLM understanding

2. **Components** import and use config:
   ```typescript
   import { siteConfig } from '@/config/site'

   // Use in JSX
   <h1>{siteConfig.name}</h1>
   <p>{siteConfig.tagline}</p>
   ```

3. **Metadata helpers** (`src/lib/metadata.ts`)
   - `createMetadata()`: Generate base page metadata
   - `createOGMetadata()`: OpenGraph metadata
   - `createTwitterMetadata()`: Twitter card metadata
   - `createGeoMetadata()`: Geographic SEO metadata

4. **Automatic propagation**:
   - Navigation: Reads from `siteConfig.navigation`
   - Footer: Reads from `siteConfig` (name, tagline, stats, copyright)
   - Layout: Uses config for all meta tags
   - Sitemap: Generates from navigation config
   - Robots.txt: Uses config URL
   - Manifest.json: Updated with config values

---

## 🎨 Design System

### Color Scheme

The template uses CSS custom properties in `src/app/globals.css`:

- **Primary color**: Main brand color (buttons, links, accents)
- **Secondary color**: Supporting accent color
- **Background colors**: Light backgrounds (3 shades)
- **Foreground colors**: Text colors (3 shades)

All colors are defined once and used throughout via Tailwind utility classes.

### Typography

- **Display font**: Montserrat (headings, logo)
- **Body font**: Inter (paragraphs, UI text)

Both fonts are loaded via `next/font/google` for optimal performance.

### Component Patterns

Reusable utility classes in `globals.css`:

- `.card-base`: Static cards
- `.card-interactive`: Hoverable cards
- `.card-feature`: Premium cards with lift effect
- `.gradient-primary`: Primary gradient background
- `.icon-circle`: Circular icon containers
- `.grid-responsive-2/3/4`: Responsive grid patterns

---

## 📝 Template Adaptation Checklist

Use this checklist when adapting the template:

- [ ] Updated `siteConfig` in `src/config/site.ts` (all fields)
- [ ] Verified color scheme matches branding
- [ ] Replaced all page content in `src/app/` files
- [ ] Updated all images (hero, OG image, gallery)
- [ ] Ran `npm run build` successfully
- [ ] Tested all pages in browser
- [ ] Verified navigation works correctly
- [ ] Checked footer information is correct
- [ ] Tested responsive design on mobile
- [ ] Verified SEO meta tags (view source)
- [ ] Updated PWA manifest if needed
- [ ] Tested social media share preview

---

## 🔍 For LLMs: Key Files to Modify

When adapting this template, focus on these files in this order:

### Priority 1: Core Configuration
1. `src/config/site.ts` - Update ALL values

### Priority 2: Page Content
2. `src/app/page.tsx` - Homepage content
3. `src/app/about/page.tsx` - About page
4. `src/app/attractions/page.tsx` - Main attractions

### Priority 3: Additional Pages
5. Other pages in `src/app/` as needed

### Priority 4: Styling (if needed)
6. `src/app/globals.css` - Color scheme customization

### Files That Auto-Update
These files automatically use the config and typically don't need manual editing:
- `src/components/navigation.tsx` ✅ Uses config
- `src/components/footer.tsx` ✅ Uses config
- `src/app/layout.tsx` ✅ Uses config
- `src/app/sitemap.ts` ✅ Uses config
- `src/app/robots.ts` ✅ Uses config

---

## 🚀 Deployment

This template is optimized for Vercel deployment:

1. Push code to GitHub/GitLab
2. Import project in Vercel
3. Vercel auto-detects Next.js and deploys
4. Update `siteConfig.url` with your production URL
5. Redeploy

---

## 💡 Tips for LLMs

### When Adapting This Template:

1. **Start with config**: Always edit `src/config/site.ts` first
2. **Be thorough**: Update ALL fields in siteConfig
3. **Check coordinates**: Use correct lat/lng for the location
4. **Keywords matter**: Choose relevant SEO keywords
5. **Test the build**: Run `npm run build` to catch errors
6. **Verify consistency**: Ensure colors match across config and CSS

### Common Patterns:

**Using config in components:**
```typescript
import { siteConfig } from '@/config/site'

// Display site name
{siteConfig.name}

// Display tagline
{siteConfig.tagline}

// Display location
{siteConfig.location.region}

// Display stats
{siteConfig.stats.elevation}
```

**Using metadata helpers:**
```typescript
import { createMetadata, createOGMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: "Custom Page Title",
  description: "Custom description"
})
```

---

## 📚 Additional Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev
- **Wikipedia Commons Images**: https://commons.wikimedia.org
- **Lat/Lng Finder**: https://www.latlong.net/

---

## ❓ Troubleshooting

### Build Fails

**Error: Missing field in siteConfig**
- Solution: Check all required fields in `src/config/site.ts` are filled

**Error: Module not found**
- Solution: Verify import paths use `@/` alias correctly

### Content Not Updating

**Old content still showing**
- Solution: Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### Images Not Loading

**Images return 404**
- Solution: Verify image URLs are publicly accessible

---

## ✅ Success Criteria

Your template adaptation is complete when:

1. ✅ Build completes without errors
2. ✅ All pages load correctly
3. ✅ Navigation and footer show correct information
4. ✅ Meta tags reflect new site (check page source)
5. ✅ No references to old site remain
6. ✅ Colors match your branding
7. ✅ All links work
8. ✅ Responsive design works on mobile

---

**This template is LLM-optimized for easy adaptation. Happy building! 🎉**
