/**
 * TypeScript interfaces for site configuration
 * These provide type safety and autocomplete for the config
 */

export interface NavigationItem {
  name: string
  href: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface QuickFact {
  label: string
  value: string
}

export interface SiteConfig {
  // Identity
  name: string
  tagline: string
  description: string
  longDescription: string

  // Branding
  branding: {
    primaryColor: string
    themeColor: string
    logoIcon: string
  }

  // URLs
  url: string
  deploymentUrl: string

  // Location
  location: {
    coordinates: Coordinates
    region: string
    country: string
    countryCode: string
    detailedLocation: string
  }

  // Statistics
  stats: {
    size: string
    elevation: string
    established: string
    highlights: string[]
    quickFacts: QuickFact[]
  }

  // Navigation
  navigation: NavigationItem[]

  // Social
  social: {
    twitterHandle: string
    twitterCreator: string
    googleSiteVerification: string
    bingVerification: string
  }

  // Contact
  contact: {
    email: string
  }

  // SEO
  keywords: string[]

  // Organization
  organization: {
    name: string
    legalName: string
    email: string
  }

  // Images
  images: {
    og: string
    hero: string
  }

  // PWA
  pwa: {
    shortName: string
    categories: string[]
  }

  // Copyright
  copyright: {
    year: number
    holder: string
    statement: string
    tagline: string
  }
}
