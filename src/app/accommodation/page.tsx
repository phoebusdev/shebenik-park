import { Metadata } from "next"
import { Home, Phone, Euro, Wifi, MapPin, Coffee, AlertCircle, Bed, Users } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Accommodation in Voskopojë - Traditional Guesthouses & Hotels | Stay in Albania",
  description: "Find traditional bujtina (guesthouses) in Voskopojë and nearby Korçë. Hotel Bacelli, Vila Panorama, Vila Ime, Bujtina Liana, and more. Book authentic Albanian hospitality.",
  keywords: "Voskopojë accommodation, Voskopoja hotels, Albanian guesthouses, bujtina Voskopoje, where to stay Voskopoja, Korçë hotels, traditional Albanian lodging",
  openGraph: {
    title: "Accommodation in Voskopojë - Traditional Albanian Guesthouses",
    description: "Discover traditional bujtina guesthouses in historic Voskopojë and modern hotels in nearby Korçë. Authentic Albanian hospitality awaits.",
    url: "https://voskopoje-template.vercel.app/accommodation",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay in Voskopojë - Albanian Guesthouses",
    description: "Traditional bujtina accommodation in Albania's historic mountain village. Book your authentic stay."
  },
  alternates: {
    canonical: "https://voskopoje-template.vercel.app/accommodation"
  }
}

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Accommodation" }]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Voskopoje_Basilica.jpg/1200px-Voskopoje_Basilica.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            Where to <span className="font-light">Stay</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Experience authentic Albanian hospitality in traditional guesthouses (bujtina) and comfortable hotels.
          </p>
        </div>
      </section>

      {/* Accommodation Types Overview */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid-responsive-2">
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-lg mx-auto mb-4">
                <Home className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Traditional Bujtina in Voskopojë</h3>
              <p className="text-gray-600 font-light">Family-run guesthouses with authentic village atmosphere and home-cooked meals</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-lg mx-auto mb-4">
                <Bed className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Hotels in Korçë</h3>
              <p className="text-gray-600 font-light">Modern amenities and comfort 30 minutes away in Albania's cultural capital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Bujtina Section */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Home className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Traditional <span className="font-light text-green-600">Bujtina</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Stay in traditional Albanian guesthouses (bujtina) right in Voskopojë village. Experience authentic hospitality with home-cooked meals and local insights.
            </p>
          </div>

          {/* What is a Bujtina */}
          <div className="bg-green-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What is a Bujtina?</h3>
            <p className="text-gray-700 leading-relaxed font-light mb-6">
              A <strong>bujtina</strong> is a traditional Albanian guesthouse, typically family-run and located in the family home. Staying in a bujtina offers an authentic cultural experience with warm hospitality, traditional home-cooked meals, and insider knowledge of the village and surrounding area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Typical Features:</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Private or shared rooms with clean bedding</li>
                  <li>• Traditional home-cooked breakfast included</li>
                  <li>• Optional dinner (traditional Albanian cuisine)</li>
                  <li>• Shared or private bathrooms</li>
                  <li>• Family atmosphere and local stories</li>
                  <li>• Help arranging church visits and guides</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">What to Expect:</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Simple, clean, and comfortable accommodations</li>
                  <li>• Not luxury hotels - authentic village experience</li>
                  <li>• Limited English but warm welcomes</li>
                  <li>• Cash payment (bring from Korçë!)</li>
                  <li>• WiFi usually available</li>
                  <li>• Best way to experience village life</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommended Guesthouses */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recommended Guesthouses in Voskopojë</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hotel Bacelli */}
              <div className="card-feature p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">Hotel Bacelli</h4>
                  <div className="flex items-center text-green-600">
                    <Euro className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4 text-sm">
                  One of Voskopojë's established guesthouses with comfortable rooms and excellent traditional cuisine. Known for warm hospitality and good facilities.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Coffee className="h-4 w-4 text-green-600 mr-2" />
                      <span>Breakfast included</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Wifi className="h-4 w-4 text-green-600 mr-2" />
                      <span>WiFi available</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="h-4 w-4 text-green-600 mr-2" />
                      <span>Family rooms</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 text-green-600 mr-2" />
                      <span>Village center</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vila Panorama */}
              <div className="card-feature p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">Vila Panorama</h4>
                  <div className="flex items-center text-green-600">
                    <Euro className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4 text-sm">
                  Beautiful mountain views and traditional architecture. Family-run with excellent home cooking and knowledge of local hiking trails.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Coffee className="h-4 w-4 text-blue-600 mr-2" />
                      <span>Breakfast included</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Wifi className="h-4 w-4 text-blue-600 mr-2" />
                      <span>WiFi available</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                      <span>Mountain views</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      <span>Hiking info</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vila Ime */}
              <div className="card-feature p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">Vila Ime</h4>
                  <div className="flex items-center text-green-600">
                    <Euro className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4 text-sm">
                  Cozy guesthouse with authentic village atmosphere. The family is known for exceptional hospitality and helping guests explore the Byzantine churches.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Coffee className="h-4 w-4 text-purple-600 mr-2" />
                      <span>Meals available</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Wifi className="h-4 w-4 text-purple-600 mr-2" />
                      <span>WiFi available</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 text-purple-600 mr-2" />
                      <span>Near churches</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-4 w-4 text-purple-600 mr-2" />
                      <span>Local guides</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bujtina Liana */}
              <div className="card-feature p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">Bujtina Liana</h4>
                  <div className="flex items-center text-green-600">
                    <Euro className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4 text-sm">
                  Small, intimate guesthouse with personal attention. Great for solo travelers and couples seeking a quiet, authentic experience.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Coffee className="h-4 w-4 text-amber-600 mr-2" />
                      <span>Breakfast included</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Wifi className="h-4 w-4 text-amber-600 mr-2" />
                      <span>WiFi available</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="h-4 w-4 text-amber-600 mr-2" />
                      <span>Small & cozy</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 text-amber-600 mr-2" />
                      <span>Quiet location</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <Euro className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Typical Pricing</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 mb-2">€15-25</p>
                <p className="text-sm text-gray-600">Per person/night</p>
                <p className="text-xs text-gray-500">Including breakfast</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 mb-2">€8-12</p>
                <p className="text-sm text-gray-600">Traditional dinner</p>
                <p className="text-xs text-gray-500">Optional, book ahead</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 mb-2">Cash Only</p>
                <p className="text-sm text-gray-600">Albanian Lek or Euro</p>
                <p className="text-xs text-gray-500">NO ATMs in village!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Korçë Hotels */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Bed className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Hotels in <span className="font-light text-green-600">Korçë</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Prefer modern amenities? Stay in Korçë city (30 minutes away) with easy day trips to Voskopojë.
            </p>
          </div>

          <div className="grid-responsive-2 mb-12">
            <div className="card-feature group card-padding-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Stay in Korçë?</h3>
              <ul className="space-y-3 text-gray-600 mb-6 font-light">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Modern hotel amenities (WiFi, heating, A/C, hot water)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Restaurants, cafes, and shopping nearby</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>ATMs and banks (withdraw cash for Voskopojë!)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Explore Korçë's museums and bazaar</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Easy 21km drive to Voskopojë (30-40 min)</span>
                </li>
              </ul>
            </div>

            <div className="card-feature group card-padding-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hotel Options</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Korçë offers several hotels ranging from budget to mid-range. Most provide standard international amenities and English-speaking staff.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">Price Range</h4>
                    <Euro className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-sm">€30-60 per night for standard rooms</p>
                  <p className="text-gray-600 text-xs">Prices vary by season and hotel category</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">Typical Amenities</h4>
                    <Wifi className="h-5 w-5 text-blue-600" />
                  </div>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Private bathrooms with hot water</li>
                    <li>• WiFi internet access</li>
                    <li>• Heating and air conditioning</li>
                    <li>• On-site restaurants or breakfast service</li>
                    <li>• Credit card payment accepted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ski Resort Lodging */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <AlertCircle className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ski Resort Accommodation</h3>
            </div>
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
              During winter season, the nearby ski resort offers lodging options. This is ideal for winter sports enthusiasts who want to combine skiing with visiting Voskopojë's churches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Winter Season (Dec-Mar)</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Ski-in/ski-out convenience</li>
                  <li>• Equipment rental available</li>
                  <li>• Restaurant and après-ski facilities</li>
                  <li>• Book early for peak season</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Close to Voskopojë village</li>
                  <li>• Combines skiing + cultural tourism</li>
                  <li>• Check seasonal availability</li>
                  <li>• Some facilities may be summer-only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
              Booking <span className="font-light">Tips</span>
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Essential information for reserving your accommodation in Voskopojë and Korçë.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">How to Book Voskopojë Bujtina</h3>
              <ul className="space-y-3 text-green-100">
                <li>• Call ahead (phone numbers from contact page)</li>
                <li>• Book 1-2 weeks in advance in peak season</li>
                <li>• Some guesthouses on booking platforms</li>
                <li>• Confirm meal arrangements when booking</li>
                <li>• Ask about room types and facilities</li>
                <li>• Limited English - be patient and friendly</li>
              </ul>
            </div>

            <div className="bg-green-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Seasonal Availability</h3>
              <ul className="space-y-3 text-green-100">
                <li>• Peak season: June-August (book early!)</li>
                <li>• Winter: December-March (ski season)</li>
                <li>• Some guesthouses close off-season</li>
                <li>• Always call to confirm availability</li>
                <li>• Last-minute bookings sometimes possible</li>
                <li>• Flexible dates help secure rooms</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Important Reminders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Euro className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">BRING CASH</h4>
                <p className="text-green-100 text-sm">
                  NO ATMs in Voskopojë! Withdraw cash in Korçë before arriving. Most guesthouses only accept cash payment.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Confirm Amenities</h4>
                <p className="text-green-100 text-sm">
                  Ask about WiFi, heating, private bathrooms, and meal options when booking. Facilities vary by guesthouse.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Cancellation Policy</h4>
                <p className="text-green-100 text-sm">
                  Ask about cancellation policies when booking. Small guesthouses may have flexible policies but appreciate advance notice.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help Finding Accommodation?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Contact us for recommendations, availability checks, and booking assistance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Contact Us for Help
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
