import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";
import { siteConfig } from "@/config/site";
import { createOGMetadata, createTwitterMetadata, createGeoMetadata } from "@/lib/metadata";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: siteConfig.branding.themeColor,
  colorScheme: "light" as const,
}

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.organization.name }],
  creator: siteConfig.organization.name,
  publisher: siteConfig.organization.legalName,
  robots: "index, follow",
  category: "Tourism",
  classification: "Travel & Tourism",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en': siteConfig.url,
      'sq': `${siteConfig.url}/sq`
    }
  },
  openGraph: createOGMetadata(),
  twitter: createTwitterMetadata(),
  verification: {
    google: siteConfig.social.googleSiteVerification || "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
    other: {
      "msvalidate.01": siteConfig.social.bingVerification || "REPLACE_WITH_BING_WEBMASTER_CODE"
    }
  },
  other: {
    ...createGeoMetadata(),
    "DC.title": `${siteConfig.name} - ${siteConfig.tagline}`,
    "DC.creator": siteConfig.organization.legalName,
    "DC.subject": siteConfig.keywords.slice(0, 5).join(', '),
    "DC.description": siteConfig.description
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO (using trusted config data - safe for dangerouslySetInnerHTML)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAttraction",
        "@id": `${siteConfig.url}/#attraction`,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "url": siteConfig.url,
        "image": siteConfig.images.og,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": siteConfig.location.countryCode,
          "addressRegion": siteConfig.location.region,
          "addressLocality": siteConfig.name
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": siteConfig.location.coordinates.lat.toString(),
          "longitude": siteConfig.location.coordinates.lng.toString()
        },
        "touristType": [
          "Culture enthusiasts",
          "History lovers",
          "Hikers",
          "Photographers"
        ],
        "availableLanguage": ["English", "Albanian"],
        "openingHours": "Mo-Su 00:00-24:00",
        "isAccessibleForFree": true,
        "publicAccess": true,
        "keywords": siteConfig.keywords.join(', '),
        "hasMap": `https://maps.google.com/maps?q=${siteConfig.location.coordinates.lat},${siteConfig.location.coordinates.lng}`,
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.organization.name,
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/icon.svg`,
          "width": "32",
          "height": "32"
        },
        "description": `Official tourism information for ${siteConfig.name}`,
        "email": siteConfig.organization.email,
        "areaServed": {
          "@type": "Country",
          "name": siteConfig.location.country
        },
        "knowsAbout": siteConfig.keywords.slice(0, 5)
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": `${siteConfig.name} - Official Tourism Website`,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": ["en", "sq"]
      }
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.pwa.shortName} />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
