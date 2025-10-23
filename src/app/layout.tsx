import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";

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
  themeColor: "#a45a3c",
  colorScheme: "light" as const,
}

export const metadata: Metadata = {
  title: "Voskopojë - A Byzantine Treasure in the Albanian Mountains",
  description: "Discover Voskopojë, the 'Jerusalem of the Aromanians.' Explore stunning 18th-century Byzantine churches with masterpiece frescoes, hike pristine alpine trails, and experience living history in this legendary mountain village.",
  keywords: "Voskopojë, Albania tourism, Byzantine churches, David Selenica, Zografi brothers, Aromanian culture, Moscopole, Korçë, hiking, UNESCO, Albanian history, mountain village",
  authors: [{ name: "Voskopojë Tourism" }],
  creator: "Voskopojë Tourism",
  publisher: "Albania National Tourism Agency",
  robots: "index, follow",
  category: "Tourism",
  classification: "Travel & Tourism",
  metadataBase: new URL("https://voskopoje-tourism.vercel.app"),
  alternates: {
    canonical: "https://voskopoje-tourism.vercel.app",
    languages: {
      'en': 'https://voskopoje-tourism.vercel.app',
      'sq': 'https://voskopoje-tourism.vercel.app/sq'
    }
  },
  openGraph: {
    title: "Voskopojë - A Byzantine Treasure in the Albanian Mountains",
    description: "Discover Voskopojë's 18th-century golden age, magnificent Byzantine frescoes, and mountain beauty near Korçë, Albania.",
    url: "https://voskopoje-tourism.vercel.app",
    siteName: "Voskopojë Tourism",
    type: "website",
    locale: "en_US",
    alternateLocale: "sq_AL",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Albania_location_map.svg",
        width: 1200,
        height: 630,
        alt: "Voskopojë mountain village in southeastern Albania",
        type: "image/svg+xml"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@VisitVoskopoje",
    creator: "@AlbaniaTourism",
    title: "Voskopojë - A Byzantine Treasure in the Albanian Mountains",
    description: "Explore the legendary 18th-century city of Moscopole. Byzantine churches, masterpiece frescoes, and alpine beauty await.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/8/8f/Albania_location_map.svg"]
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "REPLACE_WITH_BING_WEBMASTER_CODE"
    }
  },
  other: {
    "geo.region": "AL",
    "geo.placename": "Voskopojë, Korçë",
    "geo.position": "40.633;20.589",
    "ICBM": "40.633, 20.589",
    "DC.title": "Voskopojë - A Byzantine Treasure in the Albanian Mountains",
    "DC.creator": "Albania National Tourism Agency",
    "DC.subject": "Byzantine Art, Mountain Village, Aromanian Culture, Tourism, Albania",
    "DC.description": "Official tourism website for Voskopojë, featuring the legendary 18th-century city of Moscopole with its magnificent Byzantine churches, priceless frescoes by David Selenica and the Zografi brothers, and pristine alpine landscapes."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <meta name="apple-mobile-web-app-title" content="Shebenik Park" />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "TouristAttraction",
                  "@id": "https://shebenik-park.vercel.app/#attraction",
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
                  "hasMap": "https://maps.google.com/maps?q=41.2928,20.5619",
                  "areaServed": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": "41.2928",
                      "longitude": "20.5619"
                    },
                    "geoRadius": "17500"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://shebenik-park.vercel.app/#organization",
                  "name": "Shebenik National Park Tourism",
                  "url": "https://shebenik-park.vercel.app",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://shebenik-park.vercel.app/icon.svg",
                    "width": "32",
                    "height": "32"
                  },
                  "description": "Official tourism information and visitor services for Shebenik National Park, Albania",
                  "email": "info@shebenik-park.al",
                  "areaServed": {
                    "@type": "Country",
                    "name": "Albania"
                  },
                  "knowsAbout": ["National Parks", "Ecotourism", "Wildlife Conservation", "Hiking Trails", "Albanian Tourism"]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://shebenik-park.vercel.app/#website",
                  "url": "https://shebenik-park.vercel.app",
                  "name": "Shebenik National Park - Official Tourism Website",
                  "description": "Discover Albania's pristine wilderness: glacial lakes, ancient forests, and endangered Balkan lynx at Shebenik National Park.",
                  "publisher": {
                    "@id": "https://shebenik-park.vercel.app/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://shebenik-park.vercel.app/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  },
                  "inLanguage": ["en", "sq"]
                }
              ]
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
