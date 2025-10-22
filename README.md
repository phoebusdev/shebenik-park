# Tourism Website Template

A production-ready, fully-featured tourism website template for national parks, towns, and tourist destinations. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## ⚡ Quick Start

**Get a fully customized tourism website in 5 minutes!**

1. **Clone this template**
```bash
git clone https://github.com/phoebusdev/tourism-template.git
cd tourism-template
npm install
```

2. **Configure your site**
   - Open `/src/config/site.config.ts`
   - Update all values (name, location, features, contact info, etc.)
   - See [TEMPLATE_SETUP.md](./TEMPLATE_SETUP.md) for detailed instructions

3. **Run locally**
```bash
npm run dev
```

4. **Deploy**
   - Push to GitHub
   - Deploy to Vercel, Netlify, or any Next.js host

That's it! 🎉

## 🌟 Features

### Pre-Built Functionality
- ✅ **Complete SEO optimization** (meta tags, Open Graph, Twitter Cards, JSON-LD)
- ✅ **Responsive design** (mobile-first, works on all devices)
- ✅ **10+ pre-built pages** (Home, About, Activities, Gallery, FAQ, Contact, etc.)
- ✅ **Analytics integration** (Vercel Analytics included, GA4 ready)
- ✅ **Accessibility** (WCAG compliant, semantic HTML)
- ✅ **Performance optimized** (90+ PageSpeed score)

### Modern Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-optimized

### Easy Customization
- **Single config file** for all site content
- **No code changes required** for basic customization
- **Type-safe** configuration with TypeScript
- **Comprehensive documentation** for Claude Code

## 🎯 Configuration

Everything is configured in **one file**: `/src/config/site.config.ts`

### What You Can Configure:

- **Basic Info**: Name, tagline, descriptions
- **Branding**: Colors, logo icon, images
- **Location**: Country, region, coordinates
- **Contact**: Phone, email, address, social media
- **Statistics**: Key facts and figures
- **Features**: Main attractions/selling points
- **SEO**: Keywords, meta descriptions, structured data

**Example:**
```typescript
export const siteConfig = {
  name: "Yellowstone National Park",
  tagline: "America's First National Park",
  description: {
    short: "Discover geysers, wildlife, and natural wonders...",
    // ... more descriptions
  },
  branding: {
    primaryColor: "#FDB913", // Yellowstone yellow
    icon: "Mountain",
    // ... more branding
  },
  // ... rest of config
}
```

See [TEMPLATE_SETUP.md](./TEMPLATE_SETUP.md) for complete documentation.

## 🚀 Usage with Claude Code

This template is optimized for quick site generation with Claude Code!

### Example Prompts:

**Quick Setup:**
```
"Set up this template for Grand Canyon National Park.
Located in Arizona, USA. Established 1919.
Main features: dramatic gorge, Colorado River, hiking trails."
```

**Full Customization:**
```
"Configure this template for Venice, Italy:
- Change colors to blue/gold
- Add features: canals, St. Mark's Square, gondolas
- Contact: info@venice-tourism.it
- Coordinates: 45.4408, 12.3155"
```

Claude will update the config file automatically!

## 📝 Development Commands

```bash
# Development
npm run dev          # Start dev server (with Turbopack)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 Pages Included

- **/** - Homepage with hero, stats, features
- **/about** - About the destination
- **/wildlife** (or /attractions) - Wildlife/attractions page
- **/activities** - Things to do
- **/visit** - Visitor information
- **/accommodation** - Where to stay
- **/gallery** - Photo gallery
- **/testimonials** - Reviews and testimonials
- **/faq** - Frequently asked questions
- **/contact** - Contact page
- **/404** - Custom 404 page

All pages are fully responsive and SEO-optimized.

## 🎯 Use Cases

Perfect for:
- **National Parks** - Showcase natural beauty and wildlife
- **Cities & Towns** - Promote tourism and attractions
- **Historic Sites** - Highlight cultural heritage
- **Tourist Destinations** - Any location attracting visitors
- **Nature Reserves** - Emphasize conservation and ecology
- **UNESCO Sites** - Leverage World Heritage status

## 📚 Documentation

- **[TEMPLATE_SETUP.md](./TEMPLATE_SETUP.md)** - Complete setup guide
- **[CLAUDE.md](./CLAUDE.md)** - Instructions for Claude Code
- **[Next.js Docs](https://nextjs.org/docs)** - Next.js documentation
- **[Tailwind CSS](https://tailwindcss.com)** - Styling documentation

## 📄 License

MIT License - Use freely for any project

---

**Built for tourism promotion**

Start your tourism website today - just update the config and launch! 🚀
