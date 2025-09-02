import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#059669",
  colorScheme: "light" as const,
}

export const metadata: Metadata = {
  title: "Shebenik National Park - Albania's Pristine Wilderness",
  description: "Discover Shebenik National Park, Albania's second-largest national park. Explore glacial lakes, ancient forests, and spot rare wildlife including the endangered Balkan lynx.",
  keywords: "Shebenik National Park, Albania tourism, hiking, wildlife, Balkan lynx, glacial lakes, UNESCO World Heritage, Jabllanice, Albanian Alps",
  authors: [{ name: "Shebenik National Park Tourism" }],
  creator: "Shebenik National Park Tourism",
  publisher: "Albania National Tourism Agency",
  robots: "index, follow",
  category: "Tourism",
  classification: "Travel & Tourism",
  metadataBase: new URL("https://shebenik-park.vercel.app"),
  alternates: {
    canonical: "https://shebenik-park.vercel.app",
    languages: {
      'en': 'https://shebenik-park.vercel.app',
      'sq': 'https://shebenik-park.vercel.app/sq'
    }
  },
  openGraph: {
    title: "Shebenik National Park - Albania's Pristine Wilderness",
    description: "Discover Shebenik National Park, Albania's second-largest national park. Explore glacial lakes, ancient forests, and spot rare wildlife including the endangered Balkan lynx.",
    url: "https://shebenik-park.vercel.app",
    siteName: "Shebenik National Park",
    type: "website",
    locale: "en_US",
    alternateLocale: "sq_AL",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG",
        width: 1200,
        height: 630,
        alt: "Panoramic view of Shebenik National Park from Black Stone Peak",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShebenikPark",
    creator: "@AlbaniaTourism",
    title: "Shebenik National Park - Albania's Pristine Wilderness",
    description: "Discover Albania's second-largest national park. Glacial lakes, ancient forests, and the endangered Balkan lynx await.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG"]
  },
  verification: {
    google: "your-google-site-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  },
  other: {
    "geo.region": "AL",
    "geo.placename": "Shebenik National Park",
    "geo.position": "41.2928;20.5619",
    "ICBM": "41.2928, 20.5619",
    "DC.title": "Shebenik National Park - Albania's Pristine Wilderness",
    "DC.creator": "Albania National Tourism Agency",
    "DC.subject": "National Park, Tourism, Wildlife, Hiking, Albania",
    "DC.description": "Official tourism website for Shebenik National Park, Albania's second-largest national park featuring glacial lakes, UNESCO World Heritage beech forests, and endangered wildlife including the Balkan lynx."
  }
};

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
        <meta name="apple-mobile-web-app-title" content="Shebenik Park" />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "Shebenik National Park",
              "alternateName": "Shebenik-Jabllanicë National Park",
              "description": "Albania's second-largest national park featuring glacial lakes, UNESCO World Heritage beech forests, and endangered wildlife including the Balkan lynx.",
              "url": "https://shebenik-park.vercel.app",
              "image": [
                "https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG",
                "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AL",
                "addressRegion": "Elbasan County",
                "addressLocality": "Librazhd Municipality"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.2928",
                "longitude": "20.5619"
              },
              "touristType": [
                "Nature lovers",
                "Hikers",
                "Wildlife enthusiasts",
                "Photographers"
              ],
              "availableLanguage": ["English", "Albanian"],
              "openingHours": "Mo-Su 00:00-24:00",
              "isAccessibleForFree": true,
              "publicAccess": true,
              "keywords": "national park, wildlife, hiking, glacial lakes, UNESCO World Heritage, Balkan lynx, ancient forests, Albania tourism",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "containsPlace": [
                {
                  "@type": "Lake",
                  "name": "Fushë Studë Lake",
                  "description": "Main glacial lake in Shebenik National Park"
                },
                {
                  "@type": "Forest",
                  "name": "Shebenik Beech Forest",
                  "description": "UNESCO World Heritage ancient beech forest"
                }
              ],
              "hasMap": "https://maps.google.com/maps?q=41.2928,20.5619"
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
