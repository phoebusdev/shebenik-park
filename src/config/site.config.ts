/**
 * SITE CONFIGURATION
 *
 * This is the central configuration file for your tourism website.
 * Update these values to customize the site for any national park, town, or destination.
 *
 * QUICK START:
 * 1. Update the basic info section with your destination details
 * 2. Modify branding colors to match your destination
 * 3. Update geographic information
 * 4. Customize features and statistics
 * 5. Run the site and see your changes!
 */

export const siteConfig = {
  // ============================================================================
  // BASIC INFORMATION
  // ============================================================================
  name: "Shebenik National Park",
  shortName: "Shebenik Park", // Used in navigation/logos where space is limited
  alternateName: "Shebenik-Jabllanicë National Park", // Optional alternative name
  tagline: "Albania's Pristine Wilderness",

  description: {
    short: "Discover Albania's second-largest national park featuring glacial lakes, ancient forests, and rare wildlife including the endangered Balkan lynx.",
    long: "Discover Shebenik National Park, Albania's second-largest national park. Explore glacial lakes, ancient forests, and spot rare wildlife including the endangered Balkan lynx.",
    hero: "Discover Albania's pristine wilderness. Ancient forests, glacial lakes, and rare wildlife await in this UNESCO World Heritage sanctuary.",
  },

  // ============================================================================
  // BRANDING & THEME
  // ============================================================================
  branding: {
    primaryColor: "#059669", // Main theme color (green-600)
    accentColor: "#10b981", // Accent color (green-500)
    icon: "Mountain", // Lucide React icon name (Mountain, Building, TreePine, Landmark, etc.)

    // Images - Update these URLs with your destination's images
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG",
    ogImage: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG",
    galleryImages: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
    ]
  },

  // ============================================================================
  // GEOGRAPHIC INFORMATION
  // ============================================================================
  location: {
    country: "Albania",
    countryCode: "AL",
    region: "Elbasan County", // State/Province/County
    locality: "Librazhd Municipality", // City/Town/Municipality
    placeName: "Shebenik National Park",

    // Coordinates for the main point of interest
    coordinates: {
      latitude: 41.2928,
      longitude: 20.5619,
    },

    // Visitor center or main entrance address
    address: {
      street: "Fushë Studë Village",
      city: "Librazhd",
      region: "Elbasan County",
      country: "Albania",
    }
  },

  // ============================================================================
  // CONTACT INFORMATION
  // ============================================================================
  contact: {
    phone: "+355 69 6223130",
    email: "info@shebenik-park.al",
    website: "https://shebenik-park.vercel.app", // Update with your domain

    // Social Media - Update or remove as needed
    social: {
      twitter: "@ShebenikPark",
      facebook: null, // Set to null if not available
      instagram: null,
      youtube: null,
    }
  },

  // ============================================================================
  // KEY STATISTICS & FACTS
  // ============================================================================
  stats: {
    area: {
      value: "345",
      unit: "km²",
      description: "Protected Wilderness"
    },
    established: {
      value: "2008",
      description: "Established"
    },
    elevation: {
      value: "2,253",
      unit: "m",
      description: "Highest Peak"
    },
    recognition: {
      value: "UNESCO",
      description: "World Heritage"
    }
  },

  // ============================================================================
  // MAIN FEATURES
  // ============================================================================
  features: [
    {
      icon: "Trees",
      title: "Ancient Forests",
      description: "Explore UNESCO-protected beech forests that have remained unchanged for millennia. 32% of Albania's flora species call this park home."
    },
    {
      icon: "Droplets",
      title: "Glacial Lakes",
      description: "Discover 14 pristine glacial lakes carved by ancient ice, offering crystal-clear waters perfect for swimming and reflection."
    },
    {
      icon: "Users",
      title: "Rare Wildlife",
      description: "Spot the endangered Balkan lynx, brown bears, and gray wolves in their natural habitat. A photographer's paradise."
    }
  ],

  // ============================================================================
  // SEO & METADATA
  // ============================================================================
  seo: {
    keywords: "Shebenik National Park, Albania tourism, hiking, wildlife, Balkan lynx, glacial lakes, UNESCO World Heritage, Jabllanice, Albanian Alps",

    // Target audience types for schema.org
    touristTypes: [
      "Nature lovers",
      "Hikers",
      "Wildlife enthusiasts",
      "Photographers"
    ],

    // Languages available on your site
    languages: ["English", "Albanian"],

    // Site access information
    openingHours: "Mo-Su 00:00-24:00", // Use "Mo-Fr 09:00-17:00" format or similar
    isAccessibleForFree: true,
    publicAccess: true,

    // Mock rating data (update with real data when available)
    rating: {
      value: 4.8,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1
    }
  },

  // ============================================================================
  // POINTS OF INTEREST (for structured data)
  // ============================================================================
  pointsOfInterest: [
    {
      type: "Lake",
      name: "Fushë Studë Lake",
      description: "Main glacial lake in Shebenik National Park"
    },
    {
      type: "Forest",
      name: "Shebenik Beech Forest",
      description: "UNESCO World Heritage ancient beech forest"
    }
  ],

  // ============================================================================
  // ADDITIONAL METADATA
  // ============================================================================
  meta: {
    creator: "Shebenik National Park Tourism",
    publisher: "Albania National Tourism Agency",
    category: "Tourism",
    classification: "Travel & Tourism",
    copyright: "© 2024 Shebenik National Park Tourism. All rights reserved.",
    tagline: "Protecting Albania's Natural Heritage"
  },

  // ============================================================================
  // VERIFICATION CODES (Add when you have them)
  // ============================================================================
  verification: {
    google: "your-google-site-verification-code", // Replace with your code
    bing: "your-bing-verification-code", // Replace with your code
  },

  // ============================================================================
  // ANALYTICS (Optional)
  // ============================================================================
  analytics: {
    // Add your Google Analytics ID here when ready
    // gaId: "G-XXXXXXXXXX",
  }
} as const;

// Type exports for TypeScript support
export type SiteConfig = typeof siteConfig;
