# Tourism Website Template - Spec-Based Development Guide

This template encapsulates all learnings and best practices from the Shebenik National Park website, optimized for 2025 SEO/GEO standards.

## Template Overview

Use this spec when building tourism websites for:
- National parks
- City/town tourism
- Tourist attractions
- Regional tourism boards
- Heritage sites
- Nature reserves

## Technology Stack

### Core Framework
```yaml
Framework: Next.js 15.5.2+ with App Router
Runtime: React 19+
Language: TypeScript 5+
Styling: Tailwind CSS v4
UI Components: shadcn/ui (optional, as needed)
Icons: Lucide React
Build Tool: Turbopack
```

### Performance & Analytics
```yaml
Analytics: Vercel Analytics + Google Analytics 4
Images: Next.js Image component
Fonts: Next.js Font Optimization (Inter or similar)
Deployment: Vercel (or similar edge platform)
```

## Phase 1: Foundation & Structure

### 1. Project Initialization
```bash
npx create-next-app@latest [project-name] --typescript --tailwind --app --turbopack
cd [project-name]
```

### 2. Required Directory Structure
```
src/
├── app/
│   ├── layout.tsx           # Root layout with SEO schemas
│   ├── page.tsx             # Homepage (no breadcrumbs)
│   ├── about/page.tsx       # About/History
│   ├── wildlife/page.tsx    # Wildlife/Nature (if applicable)
│   ├── activities/page.tsx  # Things to do
│   ├── visit/
│   │   ├── page.tsx         # Visitor guide
│   │   ├── from-[city]/page.tsx  # Location-specific pages
│   │   └── nearby/page.tsx  # Regional context
│   ├── accommodation/page.tsx
│   ├── gallery/page.tsx
│   ├── testimonials/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Dynamic robots.txt
│   └── icon.svg             # Custom favicon
├── components/
│   ├── navigation.tsx       # Main nav with breadcrumbs
│   ├── footer.tsx           # Site footer
│   ├── breadcrumb.tsx       # Breadcrumb component with schema
│   └── analytics.tsx        # GA4 + Vercel Analytics
└── lib/
    └── utils.ts             # Utility functions
```

### 3. Essential Configuration Files

#### `.env.example`
```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=

# Bing Webmaster Tools
NEXT_PUBLIC_BING_VERIFICATION=
```

#### `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '[your-image-domain]',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

## Phase 2: SEO Optimization (2025 Standards)

### 1. Root Layout SEO (@graph Structure)

**Location**: `src/app/layout.tsx`

**Required Elements**:
- Viewport configuration with theme color
- Comprehensive metadata (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Verification codes (environment-based)
- GEO tags (coordinates, region, placename)

**Structured Data** (JSON-LD @graph):
```typescript
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristAttraction",
      "@id": "[site-url]/#attraction",
      // Complete tourist attraction schema
    },
    {
      "@type": "Organization",
      "@id": "[site-url]/#organization",
      // Organization branding
    },
    {
      "@type": "WebSite",
      "@id": "[site-url]/#website",
      // Website with SearchAction
    }
  ]
}
```

### 2. Dynamic Sitemap

**Location**: `src/app/sitemap.ts`

**Features**:
- Auto-generates from route list
- Proper priority levels (1.0 home, 0.9 visit, 0.8 content, etc.)
- Change frequency metadata
- Current date for lastModified

### 3. Dynamic Robots.txt

**Location**: `src/app/robots.ts`

**Includes**:
- Allow all search engines
- Block AI training crawlers (GPTBot, ChatGPT-User, CCBot)
- Sitemap reference
- Crawl delay (1 second)

### 4. Page-Level SEO

**Every page needs**:
- Unique metadata (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Breadcrumb component (except homepage)

### 5. Structured Data Schemas

**FAQ Page** (`faq/page.tsx`):
```typescript
{
  "@type": "FAQPage",
  "mainEntity": [/* questions and answers */]
}
```

**Activities Page** (`activities/page.tsx`):
```typescript
{
  "@type": "HowTo",
  "name": "How to [Activity Name]",
  // Steps, supplies, tools
}
```

**Location Pages** (`visit/from-[city]/page.tsx`):
```typescript
{
  "@type": "HowTo",
  "name": "How to Get to [Place] from [City]",
  // Driving/transit directions as steps
}
```

**Regional Pages** (`visit/nearby/page.tsx`):
```typescript
{
  "@type": "TouristDestination",
  "name": "[Region Name]",
  "containsPlace": {
    "@type": "TouristAttraction"
  }
}
```

### 6. Breadcrumb Implementation

**Component**: `src/components/breadcrumb.tsx`

**Features**:
- Visual breadcrumb trail
- Automatic BreadcrumbList schema generation
- Responsive design
- Accessibility (aria-current, sr-only)

**Usage**:
```typescript
<Breadcrumb items={[{ label: "Page Name" }]} />
// OR with hierarchy:
<Breadcrumb items={[
  { label: "Parent", href: "/parent" },
  { label: "Child" }
]} />
```

## Phase 3: Visual Design System

### 1. Color Palette

**Primary Theme**: Choose a single brand color (e.g., green for nature)

```css
/* Tailwind config or CSS variables */
--primary: [your-color];      /* e.g., #059669 */
--primary-dark: [darker];     /* e.g., #047857 */
--primary-light: [lighter];   /* e.g., #10b981 */
```

**Avoid**: Multiple accent colors (blue, purple, orange). Stay consistent.

### 2. Typography

**Global Settings** (`globals.css`):
```css
@layer base {
  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.02em;
    font-weight: 300;
  }

  h1 {
    font-weight: 200; /* extralight */
  }

  body {
    font-weight: 300;
  }

  p, li, span, a, div {
    font-weight: 300;
    letter-spacing: 0.01em;
    line-height: 1.7;
  }

  strong, b {
    font-weight: 600;
  }
}
```

### 3. Component Patterns

**Hero Sections**:
```tsx
<section className="relative py-32 lg:py-40 gradient-primary">
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
       style={{backgroundImage: "url('[image-url]')"}} />
  <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
      [Heading]
    </h1>
    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
      [Subheading]
    </p>
  </div>
</section>
```

**Cards**:
```tsx
<div className="card-feature p-8">
  {/* Feature card content */}
</div>

<div className="card-interactive p-8">
  {/* Interactive/hoverable card */}
</div>
```

**Icons**:
```tsx
<div className="icon-circle icon-circle-md bg-green-100">
  <IconComponent className="h-6 w-6 text-green-600" />
</div>
```

**Gradients**:
```css
.gradient-primary {
  @apply bg-gradient-to-br from-green-600 via-green-700 to-emerald-800;
}
```

### 4. Navigation

**Features**:
- Sticky top navigation
- Glassmorphism effect (`backdrop-blur-md`)
- Stacked logo design
- Mobile hamburger menu
- Active state highlighting

### 5. Footer

**Structure**:
- Logo (matching nav)
- Description with key facts
- Quick links column
- Location/contact info column
- Copyright and tagline

## Phase 4: Content Strategy

### 1. Required Pages

**Core Pages** (all sites):
- Homepage
- About / History
- Visit / Plan Your Trip
- FAQ
- Contact / Park Info

**Tourism-Specific**:
- Activities / Things to Do
- Gallery / Photos
- Testimonials / Reviews
- Accommodation / Where to Stay

**For Nature Sites**:
- Wildlife / Flora & Fauna
- Conservation

### 2. Location-Based SEO Pages

**Pattern**: `/visit/from-[city]/page.tsx`

**Purpose**: Target "[place] to [attraction]" queries

**Content Structure**:
- Travel time and distance
- Step-by-step directions
- Public transport options
- Tips and warnings
- HowTo schema for SEO

**Pattern**: `/visit/nearby/page.tsx`

**Purpose**: Regional context and services

**Content**:
- Gateway towns
- Nearby villages
- Services (fuel, food, accommodation)
- Getting around
- TouristDestination schema

### 3. Content Guidelines

**Writing Style**:
- Light, airy prose (300 font weight)
- Generous white space
- Short paragraphs (2-4 sentences)
- Bullet points for lists
- Active voice

**SEO Optimization**:
- Primary keyword in H1
- Secondary keywords in H2s
- Natural keyword distribution
- Alt text for all images
- Internal linking

**AI Search Optimization (AEO)**:
- Clear, concise answers to questions
- Structured content (lists, tables)
- FAQ sections
- HowTo guides with steps
- Summary paragraphs

## Phase 5: Analytics & Tracking

### 1. Google Analytics 4

**Component**: `src/components/analytics.tsx`

```typescript
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

export default function AnalyticsWrapper() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <>
      <Analytics />
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
    </>
  )
}
```

### 2. Search Console Setup

1. Create `.env.local` file
2. Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code`
3. Verify in Google Search Console
4. Submit sitemap URL

### 3. Performance Monitoring

**Core Web Vitals Targets**:
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

**Tools**:
- PageSpeed Insights
- Vercel Analytics
- Chrome DevTools

## Phase 6: Deployment & Production

### 1. Pre-Deployment Checklist

```yaml
☐ All environment variables set
☐ Favicon package generated
☐ Images optimized
☐ Meta tags verified on all pages
☐ Structured data validated (schema.org validator)
☐ Mobile responsiveness tested
☐ Build completes without errors
☐ Lighthouse score > 90
```

### 2. Post-Deployment Tasks

```yaml
☐ Submit sitemap to Google Search Console
☐ Submit sitemap to Bing Webmaster Tools
☐ Create Google Business Profile (if applicable)
☐ Set up Google Analytics 4
☐ Test all forms and CTAs
☐ Check Core Web Vitals in real conditions
☐ Monitor 404 errors
```

### 3. Ongoing Maintenance

**Monthly**:
- Review analytics data
- Check for broken links
- Update seasonal content
- Monitor search rankings

**Quarterly**:
- Audit Core Web Vitals
- Review and update FAQs
- Add new photos to gallery
- Refresh testimonials

## Phase 7: Customization Guide

### Adapting This Template

1. **Find & Replace**:
   - `shebenik-park.vercel.app` → `[your-domain]`
   - `Shebenik National Park` → `[Your Attraction Name]`
   - `Albania` / `Elbasan County` → `[Your Location]`
   - Geographic coordinates
   - Color scheme

2. **Content Customization**:
   - Update all metadata descriptions
   - Replace image URLs
   - Customize page structure for your attraction type
   - Adjust number of pages based on content needs

3. **Schema Customization**:
   - Update touristType arrays
   - Adjust operating hours
   - Modify price information
   - Update contact details

4. **Visual Customization**:
   - Choose brand color palette
   - Select appropriate fonts
   - Customize hero images
   - Adjust spacing/sizing as needed

## Quick Start Commands

```bash
# 1. Clone or create project
npx create-next-app@latest my-tourism-site --typescript --tailwind --app --turbopack

# 2. Install dependencies
npm install lucide-react @vercel/analytics class-variance-authority clsx tailwind-merge

# 3. Copy this template structure to your project

# 4. Set environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 5. Development
npm run dev

# 6. Build & deploy
npm run build
npm run start
```

## Best Practices Summary

### SEO
✅ Use @graph structured data for interconnected schemas
✅ Implement BreadcrumbList on all pages except home
✅ Create location-specific landing pages for GEO SEO
✅ Add FAQ and HowTo schemas for AI search
✅ Dynamic sitemaps auto-update with new content

### Performance
✅ Use Next.js Image component for all images
✅ Implement font optimization
✅ Lazy load below-fold content
✅ Minimize JavaScript bundle size
✅ Edge deployment for global performance

### Design
✅ Consistent color scheme (single brand color)
✅ Light font weights (200-300) for premium feel
✅ Generous white space and padding
✅ Mobile-first responsive design
✅ Glassmorphism for modern aesthetics

### Content
✅ Clear hierarchy and navigation
✅ Breadcrumbs for all non-home pages
✅ FAQ sections for common questions
✅ Rich media (photos, videos)
✅ Authentic testimonials with structured data

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Schema.org**: https://schema.org/
- **Google Search Central**: https://developers.google.com/search
- **Core Web Vitals**: https://web.dev/vitals/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Template Version**: 1.0.0
**Last Updated**: October 2025
**Based On**: Shebenik National Park website (preview-polished-template branch)
**Optimized For**: 2025 SEO/GEO standards, AI-powered search (AEO)
