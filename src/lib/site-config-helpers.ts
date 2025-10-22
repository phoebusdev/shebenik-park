/**
 * SITE CONFIG HELPERS
 *
 * Utility functions to help work with the site configuration.
 * These make it easier to generate metadata, structured data, and other site elements.
 */

import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

/**
 * Generate complete metadata for a page
 * @param override - Override specific metadata fields for individual pages
 */
export function generateMetadata(override?: Partial<Metadata>): Metadata {
  const { name, description, contact, location, seo, verification, meta } = siteConfig;

  return {
    title: override?.title || `${name} - ${siteConfig.tagline}`,
    description: override?.description || description.long,
    keywords: override?.keywords || seo.keywords,
    authors: [{ name: meta.creator }],
    creator: meta.creator,
    publisher: meta.publisher,
    robots: "index, follow",
    category: meta.category,
    classification: meta.classification,
    metadataBase: new URL(contact.website),
    alternates: {
      canonical: contact.website,
      languages: {
        'en': contact.website,
        ...(seo.languages.includes("Albanian") && { 'sq': `${contact.website}/sq` })
      }
    },
    openGraph: {
      title: override?.openGraph?.title || `${name} - ${siteConfig.tagline}`,
      description: override?.openGraph?.description || description.long,
      url: contact.website,
      siteName: name,
      type: "website",
      locale: "en_US",
      ...(seo.languages.includes("Albanian") && { alternateLocale: "sq_AL" }),
      images: [
        {
          url: siteConfig.branding.ogImage,
          width: 1200,
          height: 630,
          alt: `Panoramic view of ${name}`,
          type: "image/jpeg"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      ...(contact.social.twitter && {
        site: contact.social.twitter,
        creator: contact.social.twitter,
      }),
      title: override?.twitter?.title || `${name} - ${siteConfig.tagline}`,
      description: override?.twitter?.description || description.short,
      images: [siteConfig.branding.ogImage]
    },
    verification: {
      google: verification.google,
      other: {
        "msvalidate.01": verification.bing
      }
    },
    other: {
      "geo.region": location.countryCode,
      "geo.placename": location.placeName,
      "geo.position": `${location.coordinates.latitude};${location.coordinates.longitude}`,
      "ICBM": `${location.coordinates.latitude}, ${location.coordinates.longitude}`,
      "DC.title": `${name} - ${siteConfig.tagline}`,
      "DC.creator": meta.creator,
      "DC.subject": meta.category,
      "DC.description": description.long
    },
    ...override
  };
}

/**
 * Generate JSON-LD structured data for TouristAttraction
 */
export function generateStructuredData() {
  const { name, alternateName, description, contact, location, seo, pointsOfInterest, branding } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": name,
    ...(alternateName && { "alternateName": alternateName }),
    "description": description.long,
    "url": contact.website,
    "image": branding.galleryImages,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": location.countryCode,
      "addressRegion": location.region,
      "addressLocality": location.locality
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates.latitude.toString(),
      "longitude": location.coordinates.longitude.toString()
    },
    "touristType": seo.touristTypes,
    "availableLanguage": seo.languages,
    "openingHours": seo.openingHours,
    "isAccessibleForFree": seo.isAccessibleForFree,
    "publicAccess": seo.publicAccess,
    "keywords": seo.keywords,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": seo.rating.value.toString(),
      "reviewCount": seo.rating.reviewCount.toString(),
      "bestRating": seo.rating.bestRating.toString(),
      "worstRating": seo.rating.worstRating.toString()
    },
    "containsPlace": pointsOfInterest.map(poi => ({
      "@type": poi.type,
      "name": poi.name,
      "description": poi.description
    })),
    "hasMap": `https://maps.google.com/maps?q=${location.coordinates.latitude},${location.coordinates.longitude}`
  };
}

/**
 * Get viewport configuration
 */
export function getViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover" as const,
    themeColor: siteConfig.branding.primaryColor,
    colorScheme: "light" as const,
  };
}

/**
 * Get the Lucide icon component by name
 * This is a helper for dynamically loading icons based on config
 */
export function getIconName(): string {
  return siteConfig.branding.icon;
}

/**
 * Generate page title with site name
 */
export function generatePageTitle(pageTitle: string): string {
  return `${pageTitle} - ${siteConfig.name}`;
}

/**
 * Get formatted coordinates for maps
 */
export function getMapUrl(): string {
  const { latitude, longitude } = siteConfig.location.coordinates;
  return `https://maps.google.com/maps?q=${latitude},${longitude}`;
}

/**
 * Get contact information formatted for display
 */
export function getContactInfo() {
  return {
    phone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: siteConfig.location.address,
  };
}
