import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Navigation, Hotel, Coffee, Fuel, Building2 } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Nearby Towns & Services - Shebenik National Park Area | Elbasan County Guide",
  description: "Discover towns near Shebenik National Park: Librazhd, Elbasan, Rrajcë village. Find accommodation, restaurants, fuel stations, and services in the park vicinity.",
  keywords: "Shebenik nearby towns, Librazhd Albania, Elbasan County, Rrajcë village, park area services, accommodation near Shebenik, Eastern Albania towns",
  openGraph: {
    title: "Nearby Towns & Services - Shebenik National Park Area",
    description: "Complete guide to towns and services surrounding Albania's Shebenik National Park in Elbasan County.",
    url: "https://shebenik-park.vercel.app/visit/nearby",
    type: "website",
  },
  alternates: {
    canonical: "https://shebenik-park.vercel.app/visit/nearby"
  }
}

export default function NearbyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: "Visit", href: "/visit" },
        { label: "Nearby Towns" }
      ]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            Nearby Towns & Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the charming Eastern Albanian towns surrounding Shebenik National Park.
          </p>
        </div>
      </section>

      {/* Major Towns */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-16 tracking-tight text-center">
            Major Gateway Towns
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Librazhd */}
            <div className="card-feature p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="icon-circle icon-circle-md bg-green-100 flex-shrink-0">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Librazhd</h3>
                  <p className="text-sm text-gray-600 font-light">Main gateway town • 25 km from park</p>
                </div>
              </div>

              <p className="text-gray-600 font-light leading-relaxed mb-6">
                The primary access point for Shebenik National Park, Librazhd is a historic town in central Albania.
                Last major town before entering the park area.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Hotel className="h-4 w-4 mr-2 text-green-600" />
                    Services Available
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1 font-light ml-6">
                    <li>• Hotels and guesthouses</li>
                    <li>• Restaurants and cafes</li>
                    <li>• Fuel stations</li>
                    <li>• ATMs and banks</li>
                    <li>• Medical clinic</li>
                    <li>• Grocery stores</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Information</h4>
                  <ul className="text-sm text-gray-600 space-y-1 font-light">
                    <li>• Population: ~10,000</li>
                    <li>• Distance from Tirana: 95 km</li>
                    <li>• Distance from park entrance: 25 km</li>
                    <li>• Elevation: 200m</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Elbasan */}
            <div className="card-feature p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="icon-circle icon-circle-md bg-green-100 flex-shrink-0">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Elbasan</h3>
                  <p className="text-sm text-gray-600 font-light">Regional capital • 70 km from park</p>
                </div>
              </div>

              <p className="text-gray-600 font-light leading-relaxed mb-6">
                The fourth largest city in Albania and capital of Elbasan County. Historic fortress town with full urban amenities.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Hotel className="h-4 w-4 mr-2 text-green-600" />
                    Services Available
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1 font-light ml-6">
                    <li>• Wide range of hotels</li>
                    <li>• Restaurants and nightlife</li>
                    <li>• Shopping centers</li>
                    <li>• Hospital and medical facilities</li>
                    <li>• Banks and currency exchange</li>
                    <li>• Bus station for regional travel</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Information</h4>
                  <ul className="text-sm text-gray-600 space-y-1 font-light">
                    <li>• Population: ~80,000</li>
                    <li>• Distance from Tirana: 50 km</li>
                    <li>• Distance from park: 70 km</li>
                    <li>• Major attractions: Elbasan Castle, King Mosque</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villages Near Park */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-green-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-16 tracking-tight text-center">
            Villages Near the Park
          </h2>

          <div className="space-y-6">
            <div className="card-feature p-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rrajcë Village</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    Traditional mountain village at the park entrance. Primary access point for hikers and visitors.
                    Several family-run guesthouses offering traditional Albanian hospitality.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 font-light">
                    <li>• Distance from park: At entrance</li>
                    <li>• Population: ~500</li>
                    <li>• Services: Guesthouses, local guides</li>
                    <li>• Elevation: 600m</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-feature p-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Hotolisht Village</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    Small village near the western park boundary. Access point for alternative hiking routes.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 font-light">
                    <li>• Distance from park: 3 km</li>
                    <li>• Population: ~300</li>
                    <li>• Services: Limited guesthouses</li>
                    <li>• Elevation: 550m</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-feature p-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Stebleve Village</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    Mountain village offering stunning views of the Shebenik range. Traditional architecture and rural lifestyle.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 font-light">
                    <li>• Distance from park: 8 km</li>
                    <li>• Population: ~200</li>
                    <li>• Services: Basic accommodation</li>
                    <li>• Elevation: 700m</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Directory */}
      <section className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-16 tracking-tight text-center">
            Essential Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Fuel className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Fuel Stations</h3>
              </div>
              <ul className="text-gray-600 space-y-2 font-light">
                <li>• <span className="font-medium">Elbasan:</span> Multiple stations on A3 highway</li>
                <li>• <span className="font-medium">Librazhd:</span> 3 fuel stations in town center</li>
                <li>• <span className="font-medium">Note:</span> No fuel near park entrance - fill up in Librazhd</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Dining Options</h3>
              </div>
              <ul className="text-gray-600 space-y-2 font-light">
                <li>• <span className="font-medium">Elbasan:</span> Wide variety of restaurants and cafes</li>
                <li>• <span className="font-medium">Librazhd:</span> Several traditional Albanian restaurants</li>
                <li>• <span className="font-medium">Park area:</span> Guesthouse meals and local eateries</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Hotel className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Accommodation</h3>
              </div>
              <ul className="text-gray-600 space-y-2 font-light">
                <li>• <span className="font-medium">Elbasan:</span> Hotels from budget to mid-range</li>
                <li>• <span className="font-medium">Librazhd:</span> Guesthouses and small hotels</li>
                <li>• <span className="font-medium">Park villages:</span> Traditional guesthouses</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Navigation className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Getting Around</h3>
              </div>
              <ul className="text-gray-600 space-y-2 font-light">
                <li>• <span className="font-medium">Rental cars:</span> Available in Tirana and Elbasan</li>
                <li>• <span className="font-medium">Taxis:</span> Available in Elbasan and Librazhd</li>
                <li>• <span className="font-medium">Local guides:</span> Available through guesthouses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
            Plan Your <span className="font-light">Journey</span>
          </h2>
          <p className="text-lg text-white/90 mb-12 font-light leading-relaxed">
            Explore our complete visitor guide for trip planning resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visitor Guide
            </Link>
            <Link
              href="/visit/from-tirana"
              className="inline-flex items-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors shadow-lg"
            >
              <Navigation className="mr-2 h-5 w-5" />
              From Tirana
            </Link>
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema for Librazhd area */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": "Librazhd Municipality - Shebenik National Park Gateway",
            "description": "Librazhd municipality serves as the primary gateway to Shebenik National Park, offering accommodations, services, and access to Eastern Albania's pristine wilderness.",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.1828",
              "longitude": "20.3167"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AL",
              "addressRegion": "Elbasan County",
              "addressLocality": "Librazhd"
            },
            "containsPlace": {
              "@type": "TouristAttraction",
              "name": "Shebenik National Park",
              "url": "https://shebenik-park.vercel.app"
            },
            "touristType": ["Nature lovers", "Hikers", "Adventure travelers"],
            "availableLanguage": ["Albanian", "English"]
          })
        }}
      />
    </div>
  )
}
