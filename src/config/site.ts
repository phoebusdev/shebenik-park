import { SiteConfig } from './types'

/**
 * SITE CONFIGURATION
 * ===================
 * This is the SINGLE SOURCE OF TRUTH for all site-specific content.
 *
 * TO ADAPT THIS TEMPLATE FOR A NEW SITE:
 * 1. Update all values in this file with new site information
 * 2. Run `npm run build` to verify no errors
 * 3. Check all pages to ensure content is correct
 *
 * All fields are required unless marked as optional.
 */
export const siteConfig: SiteConfig = {
  // ============================================================================
  // SITE IDENTITY
  // Used in: Navigation, Footer, Meta tags, SEO, PWA manifest
  // ============================================================================
  name: "Shëngjergj",
  tagline: "Nature & Heritage",
  description: "Discover Shëngjergj, a hidden mountain gem near Tirana. Explore the breathtaking 30-meter waterfall, hike to the turquoise Rabbit Lake, and experience the legendary village where Skanderbeg made his stand against Ottoman forces.",
  longDescription: "Experience the natural wonders and rich history of Shëngjergj village. From cascading waterfalls to pristine alpine lakes, discover Albania's hidden treasure just 40km from Tirana.",

  // ============================================================================
  // BRANDING
  // Used in: CSS theme, PWA manifest, meta tags
  // Note: Primary color should match the color in src/app/globals.css
  // ============================================================================
  branding: {
    // Primary brand color (used in gradients, buttons, accents)
    primaryColor: "#1e7a8c",      // Mountain Lake Blue
    themeColor: "#1e7a8c",         // Browser theme color (should match primaryColor)
    // Icon name from lucide-react (https://lucide.dev)
    // Examples: Mountain, Landmark, Church, Castle, TreePine, Waves
    logoIcon: "Waves",
  },

  // ============================================================================
  // DOMAIN & URLS
  // Used in: Meta tags, sitemap, robots.txt, canonical URLs, OpenGraph
  // ============================================================================
  url: "https://shengjergj-tourism.vercel.app",
  // Deployment URL (same as url unless you have multiple environments)
  deploymentUrl: "https://shengjergj-tourism.vercel.app",

  // ============================================================================
  // GEOGRAPHIC LOCATION
  // Used in: Meta tags, structured data, footer, about page
  // ============================================================================
  location: {
    // Exact coordinates (used in maps, geo meta tags, structured data)
    // Find coordinates at: https://www.latlong.net/
    coordinates: {
      lat: 41.336,
      lng: 20.114,
    },
    // Human-readable location descriptions
    region: "Tirana County, Central Albania",
    country: "Albania",
    countryCode: "AL",
    // Detailed location (for footer)
    detailedLocation: "Tirana County, 40km East of Tirana",
  },

  // ============================================================================
  // SITE STATISTICS & FACTS
  // Used in: Footer, about page, hero sections, structured data
  // ============================================================================
  stats: {
    // Main statistics (displayed prominently)
    size: "Mountain Village",
    elevation: "520m",
    established: "Medieval era",
    // Additional facts (used in various places)
    highlights: [
      "Skanderbeg's Stronghold",
      "30m Waterfall",
      "Traditional Carpets"
    ],
    // Quick facts for homepage hero
    quickFacts: [
      { label: "Elevation", value: "520m" },
      { label: "Waterfall Height", value: "30 Meters" },
      { label: "Population", value: "~2,200" },
      { label: "From Tirana", value: "40 km" }
    ]
  },

  // ============================================================================
  // NAVIGATION
  // Used in: Navigation component, sitemap, mobile menu
  // ============================================================================
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Attractions", href: "/attractions" },
    { name: "Activities", href: "/activities" },
    { name: "Visit", href: "/visit" },
    { name: "Stay", href: "/accommodation" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],

  // ============================================================================
  // SOCIAL MEDIA & VERIFICATION
  // Used in: Meta tags, Twitter cards, OpenGraph, search console
  // ============================================================================
  social: {
    twitterHandle: "@VisitShengjergj",
    twitterCreator: "@AlbaniaTourism",
    // Search engine verification codes (optional - can also be set in .env)
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bingVerification: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
  },

  // ============================================================================
  // CONTACT INFORMATION
  // Used in: Contact page, footer, structured data
  // ============================================================================
  contact: {
    email: "info@shengjergj-tourism.al",
    // Optional: Add phone, address, etc. as needed
  },

  // ============================================================================
  // SEO KEYWORDS
  // Used in: Meta tags, structured data
  // ============================================================================
  keywords: [
    "Shëngjergj",
    "Albania tourism",
    "Shengjergj waterfall",
    "Rabbit Lake",
    "Skanderbeg",
    "Tirana day trips",
    "Albanian nature",
    "hiking Albania",
    "mountain village",
    "Albanian handicrafts",
    "carpet weaving",
    "traditional Albania"
  ],

  // ============================================================================
  // ORGANIZATION INFO
  // Used in: Structured data, meta tags, footer
  // ============================================================================
  organization: {
    name: "Shëngjergj Tourism",
    legalName: "Albania National Tourism Agency",
    email: "info@shengjergj-tourism.al",
  },

  // ============================================================================
  // IMAGES
  // Used in: OpenGraph, Twitter cards, structured data
  // ============================================================================
  images: {
    // Default social media share image (should be 1200x630px)
    og: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Albania_location_map.svg",
    // Hero image for homepage (can be overridden per page)
    hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tirana_from_Dajti.jpg/1280px-Tirana_from_Dajti.jpg",
  },

  // ============================================================================
  // PWA (Progressive Web App) SETTINGS
  // Used in: manifest.json generation
  // ============================================================================
  pwa: {
    shortName: "Shëngjergj",
    categories: ["travel", "tourism", "nature", "hiking"],
  },

  // ============================================================================
  // LEGAL & COPYRIGHT
  // Used in: Footer
  // ============================================================================
  copyright: {
    year: 2024,
    holder: "Shëngjergj Tourism",
    statement: "All rights reserved.",
    tagline: "Preserving Albanian Natural Heritage"
  }
}
