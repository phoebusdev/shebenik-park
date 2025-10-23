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

# Type Checking
tsc --noEmit        # TypeScript validation without emitting files
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
  - Each route has its own directory with `page.tsx`
  - Global styles in `src/app/globals.css`
  - Root layout in `src/app/layout.tsx`
- **Components**: Organized in `src/components/`
  - `navigation.tsx` - Main navigation component
  - `footer.tsx` - Footer component
  - `breadcrumb.tsx` - Breadcrumb navigation (on all pages except homepage)
  - `analytics.tsx` - Vercel Analytics integration
- **Utilities**: `src/lib/utils.ts` for shared utilities (clsx, tailwind-merge)
- **Import Alias**: `@/*` for absolute imports from `src/` (e.g., `@/components/navigation`, `@/lib/utils`)

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
- **next.config.ts**: Configured to allow Wikipedia Commons images for remote image optimization
- **Turbopack**: Enabled for both dev and build processes (requires Node.js 20+)
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `src/*`)

#### Code Quality & Linting
- **ESLint**: Next.js 15 + TypeScript rules with FlatConfig format (eslint.config.mjs)
- **Rules**:
  - `react/no-unescaped-entities: "off"` - Allows unescaped entities in JSX
  - `@next/next/no-img-element: "warn"` - HTML `<img>` elements warned (use Next.js Image component)
- **Tailwind**: PostCSS v4 configuration with @tailwindcss/postcss plugin
- **Linting**: Run `npm run lint` to check all files in src/ directory

#### Testing
- No test framework currently configured
- TypeScript provides compile-time type safety
- Use `tsc --noEmit` for type checking without emitting files

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

#### Component Architecture
- **Functional Components**: All components are functional React components with TypeScript
- **Server Components**: App Router enables React Server Components by default
- **Client Components**: Use `"use client"` directive at the top of component files when needed (e.g., interactive components)
- **Props Typing**: Always define prop interfaces explicitly for type safety

#### Image Handling
- Uses Wikipedia Commons images for authentic park photography
- Background images via CSS `backgroundImage` property in components
- Remote images configured in `next.config.ts` for Wikipedia Commons domains
- Consider optimizing images by migrating heavy background images to Next.js `<Image>` component

#### Styling Approach
- **Tailwind CSS v4**: Utility-first CSS with custom green color scheme (#059669)
- **Color Scheme**: Primary green `#059669` used throughout for park branding
- **Responsive Design**: Mobile-first approach with breakpoints (sm, md, lg, xl, 2xl)
- **No Component Library**: Custom components built with Tailwind; shadcn/ui available for future use

#### Navigation & Routing
- Main navigation in `src/components/navigation.tsx` - update this for new pages
- Breadcrumb navigation in `src/components/breadcrumb.tsx` - shows on all pages except homepage
- Use Next.js `<Link>` component from `next/link` for internal navigation

#### SEO Requirements
- **Meta Tags**: Centralized in `src/app/layout.tsx` with page-specific overrides in individual page layouts
- **Structured Data**: JSON-LD schema in layout.tsx for TouristAttraction and breadcrumbs
- **Google Search Console**: Verification code in layout.tsx (update with actual verification code)
- **Analytics**: Vercel Analytics configured; GA4 ready (set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in .env.local)
- **Sitemap & Robots**: Auto-generated in `src/app/sitemap.ts` and `src/app/robots.ts`

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
1. Create directory: `src/app/[page-name]/`
2. Create `page.tsx` in that directory with component export
3. Add page layout and SEO metadata (title, description, etc.)
4. Add navigation link in `src/components/navigation.tsx`
5. Breadcrumb navigation automatically appears on new pages (see `src/components/breadcrumb.tsx`)
6. Update `src/app/sitemap.ts` if adding new public routes

#### Example Page Component
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Shebenik National Park',
  description: 'Page description for SEO',
};

export default function PageName() {
  return (
    <div className="space-y-8">
      {/* Page content */}
    </div>
  );
}
```

#### Content Updates
- Use authentic Shebenik National Park imagery when possible
- Maintain consistent green theme (#059669) across components
- Follow established component patterns in existing pages
- Ensure proper TypeScript typing for all new components
- Import components using path alias: `import Navigation from '@/components/navigation'`

#### TypeScript Best Practices
- Define interfaces for component props
- Use `type` for type aliases and `interface` for object structures
- Leverage strict mode for type safety
- No `any` types unless absolutely necessary

### Troubleshooting

#### Build Issues
- **Turbopack errors**: Clear `.next` directory: `rm -rf .next` and rebuild
- **Type errors**: Run `tsc --noEmit` to see full TypeScript diagnostics
- **Memory issues**: Node.js heap space exceeded - increase memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`

#### Development Server Issues
- **Port 3000 in use**: Use different port: `npm run dev -- -p 3001`
- **Hot reload not working**: Check if file changes are detected; restart dev server
- **Turbopack watchman errors**: Ensure sufficient file watchers: `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

#### Linting Issues
- **ESLint errors**: Run `npm run lint -- --fix` to auto-fix fixable issues
- **Rule conflicts**: Check `eslint.config.mjs` for conflicting rule configurations
- **TypeScript + ESLint**: Ensure typescript-eslint plugins are properly configured

#### Image Loading
- **Wikipedia Commons images failing**: Check internet connection; verify image URLs are publicly accessible
- **Background images not showing**: Verify CSS `backgroundImage` property syntax and image URL format

### Environment Variables

#### Required for Full Functionality
```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Search Console Verification (replace in layout.tsx)
GOOGLE_SITE_VERIFICATION=your-verification-code
```

### Notes for Future Development
- **Testing**: Consider adding Vitest or Jest when test coverage is needed
- **Animations**: Framer Motion is available for future interactive elements
- **Components**: shadcn/ui can be added to `src/components/ui/` for reusable UI components
- **Database**: Currently static content; consider Supabase/PostgreSQL for dynamic features
- **Deployment**: Ready for Vercel (recommended), Netlify, or self-hosted Node.js servers

The website is production-ready with comprehensive SEO optimization targeting Albania tourism and Shebenik National Park keywords.