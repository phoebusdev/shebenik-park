import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";
import { generateMetadata, getViewport } from "@/lib/site-config-helpers";
import { siteConfig } from "@/config/site.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Viewport configuration from site config
export const viewport = getViewport();

// Metadata generated from site config
export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.shortName} />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": siteConfig.name,
              ...(siteConfig.alternateName && { "alternateName": siteConfig.alternateName }),
              "description": siteConfig.description.long,
              "url": siteConfig.contact.website,
              "image": siteConfig.branding.galleryImages,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": siteConfig.location.countryCode,
                "addressRegion": siteConfig.location.region,
                "addressLocality": siteConfig.location.locality
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": siteConfig.location.coordinates.latitude.toString(),
                "longitude": siteConfig.location.coordinates.longitude.toString()
              },
              "touristType": siteConfig.seo.touristTypes,
              "availableLanguage": siteConfig.seo.languages,
              "openingHours": siteConfig.seo.openingHours,
              "isAccessibleForFree": siteConfig.seo.isAccessibleForFree,
              "publicAccess": siteConfig.seo.publicAccess,
              "keywords": siteConfig.seo.keywords,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": siteConfig.seo.rating.value.toString(),
                "reviewCount": siteConfig.seo.rating.reviewCount.toString(),
                "bestRating": siteConfig.seo.rating.bestRating.toString(),
                "worstRating": siteConfig.seo.rating.worstRating.toString()
              },
              "containsPlace": siteConfig.pointsOfInterest.map(poi => ({
                "@type": poi.type,
                "name": poi.name,
                "description": poi.description
              })),
              "hasMap": `https://maps.google.com/maps?q=${siteConfig.location.coordinates.latitude},${siteConfig.location.coordinates.longitude}`
            })
          }}
        />
        <Analytics />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
