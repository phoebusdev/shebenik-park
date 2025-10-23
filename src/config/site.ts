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
  name: "Voskopojë",
  tagline: "Byzantine Heritage",
  description: "Discover Voskopojë, the 'Jerusalem of the Aromanians.' Explore stunning 18th-century Byzantine churches with masterpiece frescoes, hike pristine alpine trails, and experience living history in this legendary mountain village.",
  longDescription: "Discover the legendary 18th-century city of Moscopole, now a stunning mountain village. Home to priceless Byzantine frescoes and pristine alpine nature.",

  // ============================================================================
  // BRANDING
  // Used in: CSS theme, PWA manifest, meta tags
  // Note: Primary color should match the color in src/app/globals.css
  // ============================================================================
  branding: {
    // Primary brand color (used in gradients, buttons, accents)
    primaryColor: "#a45a3c",      // Warm Terracotta
    themeColor: "#a45a3c",         // Browser theme color (should match primaryColor)
    // Icon name from lucide-react (https://lucide.dev)
    // Examples: Mountain, Landmark, Church, Castle, TreePine, Waves
    logoIcon: "Mountain",
  },

  // ============================================================================
  // DOMAIN & URLS
  // Used in: Meta tags, sitemap, robots.txt, canonical URLs, OpenGraph
  // ============================================================================
  url: "https://voskopoje-tourism.vercel.app",
  // Deployment URL (same as url unless you have multiple environments)
  deploymentUrl: "https://voskopoje-tourism.vercel.app",

  // ============================================================================
  // GEOGRAPHIC LOCATION
  // Used in: Meta tags, structured data, footer, about page
  // ============================================================================
  location: {
    // Exact coordinates (used in maps, geo meta tags, structured data)
    // Find coordinates at: https://www.latlong.net/
    coordinates: {
      lat: 40.633,
      lng: 20.589,
    },
    // Human-readable location descriptions
    region: "Korçë County, SE Albania",
    country: "Albania",
    countryCode: "AL",
    // Detailed location (for footer)
    detailedLocation: "Korçë County, Southeastern Albania",
  },

  // ============================================================================
  // SITE STATISTICS & FACTS
  // Used in: Footer, about page, hero sections, structured data
  // ============================================================================
  stats: {
    // Main statistics (displayed prominently)
    size: "Historic Village",
    elevation: "1,160m",
    established: "8th century",
    // Additional facts (used in various places)
    highlights: [
      "World Monuments Fund Listed",
      "1,160m Altitude",
      "UNESCO Candidate"
    ],
    // Quick facts for homepage hero
    quickFacts: [
      { label: "Mountain Altitude", value: "1,160m" },
      { label: "Golden Age", value: "18th Century" },
      { label: "Churches", value: "7+" },
      { label: "From Korçë", value: "21 km" }
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
    twitterHandle: "@VisitVoskopoje",
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
    email: "info@voskopoje-tourism.al",
    // Optional: Add phone, address, etc. as needed
  },

  // ============================================================================
  // SEO KEYWORDS
  // Used in: Meta tags, structured data
  // ============================================================================
  keywords: [
    "Voskopojë",
    "Albania tourism",
    "Byzantine churches",
    "David Selenica",
    "Zografi brothers",
    "Aromanian culture",
    "Moscopole",
    "Korçë",
    "hiking",
    "UNESCO",
    "Albanian history",
    "mountain village"
  ],

  // ============================================================================
  // ORGANIZATION INFO
  // Used in: Structured data, meta tags, footer
  // ============================================================================
  organization: {
    name: "Voskopojë Tourism",
    legalName: "Albania National Tourism Agency",
    email: "info@voskopoje-tourism.al",
  },

  // ============================================================================
  // IMAGES
  // Used in: OpenGraph, Twitter cards, structured data
  // ============================================================================
  images: {
    // Default social media share image (should be 1200x630px)
    og: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Albania_location_map.svg",
    // Hero image for homepage (can be overridden per page)
    hero: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg",
  },

  // ============================================================================
  // PWA (Progressive Web App) SETTINGS
  // Used in: manifest.json generation
  // ============================================================================
  pwa: {
    shortName: "Voskopojë",
    categories: ["travel", "tourism", "culture", "heritage"],
  },

  // ============================================================================
  // LEGAL & COPYRIGHT
  // Used in: Footer
  // ============================================================================
  copyright: {
    year: 2024,
    holder: "Voskopojë Tourism",
    statement: "All rights reserved.",
    tagline: "Preserving Albanian Cultural Heritage"
  }
}
