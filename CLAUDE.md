# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Shebenik National Park Tourism Website

This is a Next.js 15 tourism website for Shebenik National Park in Albania, built with modern web technologies and comprehensive SEO optimization.

### Development Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Production build with Turbopack
npm run start        # Start production server
npm run lint         # ESLint code quality checks

# Testing Commands (when available)
npm run type-check   # TypeScript type checking (if script exists)
tsc --noEmit        # Manual TypeScript validation fallback
```

### Tech Stack & Architecture

#### Core Technologies
- **Framework**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion (available but minimal usage)
- **Analytics**: Vercel Analytics integrated via `@/components/analytics`

#### Project Structure
- **App Router**: All pages in `src/app/` directory structure
- **Components**: Organized in `src/components/` with `ui/` subfolder for shadcn components
- **Utilities**: `src/lib/utils.ts` for shared utilities (clsx, tailwind-merge)
- **Import Alias**: `@/*` for absolute imports from `src/`

#### Page Architecture
The website has a comprehensive page structure:
- **Homepage**: `/` - Hero section with park overview
- **Core Pages**: `/about`, `/wildlife`, `/activities`, `/visit`, `/accommodation`, `/contact`
- **Content Pages**: `/gallery`, `/testimonials`, `/blog`, `/faq`
- **Custom 404**: `/not-found.tsx` with internal linking

### SEO Implementation

#### Comprehensive SEO Features
- **Technical SEO**: sitemap.xml, robots.txt, canonical URLs
- **Meta Tags**: Page-specific titles, descriptions, keywords
- **Social Media**: Complete Open Graph and Twitter Card implementation
- **Structured Data**: JSON-LD schema for TouristAttraction, breadcrumbs
- **Geographic SEO**: Geo meta tags, coordinates (41.2928, 20.5619)
- **Performance**: Resource hints, font optimization, Core Web Vitals ready

#### Key SEO Components
- **Layout SEO**: Comprehensive meta tags in `src/app/layout.tsx`
- **Structured Data**: TouristAttraction schema with park details
- **Image Optimization**: Wikipedia Commons images with proper alt text
- **Breadcrumbs**: Navigation component at `src/components/breadcrumb.tsx`

### Key Configuration Files

#### Next.js Configuration
- **next.config.ts**: Minimal configuration, ready for extensions
- **Turbopack**: Enabled for both dev and build processes
- **TypeScript**: Strict mode enabled with path aliases

#### Code Quality
- **ESLint**: Next.js + TypeScript rules with custom overrides
- **Rules**: `react/no-unescaped-entities: "off"`, `@next/next/no-img-element: "warn"`
- **Tailwind**: PostCSS configuration for v4

### Content Strategy

#### Target Keywords
- Primary: "Shebenik National Park", "Albania tourism", "UNESCO beech forest"
- Long-tail: "visit Shebenik National Park Albania", "glacial lakes Albania hiking"
- Local: "Dibër County tourism", "Albanian national parks"

#### Content Architecture
- **Authentic Content**: Real park photography vs stock images
- **Geographic Focus**: Dibër County, Librazhd Municipality location
- **Wildlife Focus**: Balkan lynx, brown bears, 340 km² protected area
- **UNESCO Heritage**: Ancient beech forests emphasis

### Development Guidelines

#### Image Handling
- Uses Wikipedia Commons images for authentic park photography
- Background images via CSS `backgroundImage` property
- Consider migrating to Next.js `<Image>` component for optimization

#### Component Patterns
- **UI Components**: shadcn/ui base components in `src/components/ui/`
- **Layout Components**: Navigation, Footer, Analytics wrappers
- **Styling**: Tailwind utility classes with custom green color scheme (#059669)

#### SEO Requirements
- **Google Search Console**: Needs verification code in layout.tsx
- **Analytics Setup**: Vercel Analytics configured, GA4 ready for environment variable
- **Favicon**: Needs complete package generation (current basic implementation)

### Production Checklist

#### Pre-deployment
1. Run `npm run lint` to check code quality
2. Run `npm run build` to verify production build
3. Test Core Web Vitals with PageSpeed Insights
4. Validate structured data with Schema.org tools

#### SEO Setup
1. Generate favicon package for all device types
2. Set up Google Search Console with verification code
3. Configure Google Analytics 4 (environment variable ready)
4. Submit sitemap to search engines

#### Performance Targets
- **PageSpeed Score**: 90+ for Performance, 95+ for Accessibility/Best Practices, 100 for SEO
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1

### Common Development Patterns

#### Adding New Pages
1. Create page in `src/app/[page]/page.tsx`
2. Add navigation link in `src/components/navigation.tsx`
3. Update breadcrumb component if needed
4. Consider SEO meta tags for each page

#### Content Updates
- Use authentic Shebenik National Park imagery when possible
- Maintain consistent green theme (#059669) across components
- Follow established component patterns in existing pages
- Ensure proper TypeScript typing for all new components

### Environment Variables

#### Required for Full Functionality
```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Search Console Verification (replace in layout.tsx)
GOOGLE_SITE_VERIFICATION=your-verification-code
```

The website is production-ready with comprehensive SEO optimization targeting Albania tourism and Shebenik National Park keywords.