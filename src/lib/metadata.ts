import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

/**
 * Generate base metadata for a page
 * Merges page-specific metadata with site defaults
 *
 * Usage:
 * export const metadata = createMetadata({
 *   title: "About Us | My Site",
 *   description: "Learn more about us"
 * })
 */
export function createMetadata(override?: Metadata): Metadata {
  return {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.organization.name }],
    creator: siteConfig.organization.name,
    publisher: siteConfig.organization.legalName,
    metadataBase: new URL(siteConfig.url),
    ...override,
  }
}

/**
 * Generate OpenGraph metadata
 *
 * Usage:
 * openGraph: createOGMetadata({ title: "Custom Page Title" })
 */
export function createOGMetadata(override?: {
  title?: string
  description?: string
  image?: string
}) {
  return {
    title: override?.title || `${siteConfig.name} - ${siteConfig.tagline}`,
    description: override?.description || siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.organization.name,
    type: 'website' as const,
    locale: 'en_US',
    alternateLocale: 'sq_AL',
    images: [
      {
        url: override?.image || siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      }
    ]
  }
}

/**
 * Generate Twitter card metadata
 *
 * Usage:
 * twitter: createTwitterMetadata({ title: "Custom Tweet Title" })
 */
export function createTwitterMetadata(override?: {
  title?: string
  description?: string
  image?: string
}) {
  return {
    card: 'summary_large_image' as const,
    site: siteConfig.social.twitterHandle,
    creator: siteConfig.social.twitterCreator,
    title: override?.title || `${siteConfig.name} - ${siteConfig.tagline}`,
    description: override?.description || siteConfig.description,
    images: [override?.image || siteConfig.images.og],
  }
}

/**
 * Generate geographic metadata for SEO
 */
export function createGeoMetadata() {
  return {
    "geo.region": siteConfig.location.countryCode,
    "geo.placename": `${siteConfig.name}, ${siteConfig.location.region}`,
    "geo.position": `${siteConfig.location.coordinates.lat};${siteConfig.location.coordinates.lng}`,
    "ICBM": `${siteConfig.location.coordinates.lat}, ${siteConfig.location.coordinates.lng}`,
  }
}
