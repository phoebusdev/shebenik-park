import { Metadata } from "next"
import Link from "next/link"
import { Car, Bus, MapPin, Clock, Fuel, Navigation, AlertCircle } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "How to Get to Shebenik National Park from Tirana | Directions & Travel Guide",
  description: "Complete travel guide from Tirana to Shebenik National Park. Driving directions via A3 highway, public transport options, travel times, and route tips for reaching Albania's pristine wilderness.",
  keywords: "Tirana to Shebenik National Park, driving directions Albania, A3 highway Elbasan, how to reach Shebenik, Albania road trip, Tirana to Librazhd, national park access",
  openGraph: {
    title: "Travel from Tirana to Shebenik National Park - Complete Guide",
    description: "Detailed directions and travel options from Albania's capital to Shebenik National Park. 120km journey through scenic Albanian countryside.",
    url: "https://shebenik-park.vercel.app/visit/from-tirana",
    type: "website",
  },
  alternates: {
    canonical: "https://shebenik-park.vercel.app/visit/from-tirana"
  }
}

export default function FromTiranaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: "Visit", href: "/visit" },
        { label: "From Tirana" }
      ]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            From Tirana to Shebenik
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Your complete guide to reaching Albania's pristine wilderness from the capital city.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Travel Time</h3>
              <p className="text-gray-600 font-light">2.5-3 hours</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Navigation className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Distance</h3>
              <p className="text-gray-600 font-light">120 kilometers</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Main Route</h3>
              <p className="text-gray-600 font-light">A3 via Elbasan</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Fuel className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Fuel Stops</h3>
              <p className="text-gray-600 font-light">Elbasan, Librazhd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="icon-circle icon-circle-md bg-green-100">
              <Car className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight">
              Driving Directions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="card-feature p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tirana to Elbasan (A3 Highway)</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-3">
                    Leave Tirana heading southeast on the A3 highway (Rruga Nacionale 3). This is a modern, well-maintained highway. Follow signs for Elbasan.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 font-light">
                    <li>• Distance: 50 km</li>
                    <li>• Duration: 40-50 minutes</li>
                    <li>• Road conditions: Excellent (highway)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-feature p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Elbasan to Librazhd</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-3">
                    Continue on A3 through Elbasan toward Librazhd. You'll pass through scenic countryside with mountain views.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 font-light">
                    <li>• Distance: 45 km</li>
                    <li>• Duration: 45-60 minutes</li>
                    <li>• Road conditions: Good</li>
                    <li>• Fuel and services available in Elbasan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-feature p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Librazhd to Park Entrance</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-3">
                    From Librazhd, take regional roads toward Rrajcë village and the park entrance. Roads become narrower and more mountainous.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 font-light">
                    <li>• Distance: 25 km</li>
                    <li>• Duration: 45-60 minutes</li>
                    <li>• Road conditions: Variable (mountain roads)</li>
                    <li>• Last fuel stop: Librazhd</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Transport */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-green-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="icon-circle icon-circle-md bg-green-100">
              <Bus className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight">
              Public Transport Options
            </h2>
          </div>

          <div className="card-feature p-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bus Service</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              Limited public transport is available. Buses run from Tirana to Librazhd, but connections to the park entrance are infrequent.
            </p>
            <ul className="space-y-2 text-gray-600 font-light">
              <li>• Tirana to Librazhd: Daily buses from South Bus Station</li>
              <li>• Frequency: 2-3 departures per day</li>
              <li>• Duration: 2-3 hours</li>
              <li>• Cost: Approximately 400-600 ALL (€3-5)</li>
              <li>• From Librazhd: Arrange local transport or taxi to park entrance</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">Recommendation</h4>
                <p className="text-amber-800 font-light leading-relaxed">
                  Due to limited public transport beyond Librazhd, we strongly recommend renting a car for visiting the park.
                  This provides flexibility for exploring trails and accessing accommodations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-12 tracking-tight">
            Travel Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-feature p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Travel Times</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Leave Tirana early morning (7-8 AM) to arrive at the park by mid-morning.
                Avoid driving mountain sections after dark.
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Weather Considerations</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Check weather forecasts before departure. Mountain roads can be challenging in rain or snow.
                May-October offers best conditions.
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fuel & Services</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Fill up in Elbasan or Librazhd. No fuel stations near the park entrance.
                Bring snacks and water for the journey.
              </p>
            </div>

            <div className="card-feature p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Download offline maps before departure. Mobile signal can be weak in mountain areas.
                GPS coordinates: 41.2928, 20.5619
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
            Ready to <span className="font-light">Visit?</span>
          </h2>
          <p className="text-lg text-white/90 mb-12 font-light leading-relaxed">
            Plan your perfect visit with our comprehensive visitor guide.
          </p>
          <Link
            href="/visit"
            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Complete Visitor Guide
          </Link>
        </div>
      </section>

      {/* Structured Data - HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Get to Shebenik National Park from Tirana",
            "description": "Complete driving directions from Tirana to Shebenik National Park via A3 highway through Elbasan and Librazhd.",
            "totalTime": "PT3H",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "ALL",
              "value": "2000-3000"
            },
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Tirana to Elbasan via A3 Highway",
                "text": "Leave Tirana heading southeast on the A3 highway. This modern highway leads directly to Elbasan.",
                "url": "https://shebenik-park.vercel.app/visit/from-tirana",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "Distance: 50 km, Duration: 40-50 minutes, Excellent road conditions"
                  }
                ]
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Elbasan to Librazhd",
                "text": "Continue on A3 through Elbasan toward Librazhd through scenic countryside.",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "Distance: 45 km, Duration: 45-60 minutes, Good road conditions"
                  }
                ]
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Librazhd to Park Entrance",
                "text": "From Librazhd, take regional roads toward Rrajcë village and the park entrance.",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "Distance: 25 km, Duration: 45-60 minutes, Mountain roads with variable conditions"
                  }
                ]
              }
            ]
          })
        }}
      />
    </div>
  )
}
