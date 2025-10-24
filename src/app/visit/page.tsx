import { Metadata } from "next"
import { MapPin, Clock, Car, Euro, AlertTriangle, CheckCircle, Calendar, Users, Backpack } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Plan Your Visit to Voskopojë - Practical Travel Information | Albania Heritage Tourism",
  description: "Essential visitor information for Voskopojë: getting there from Korçë (21km) and Tirana (160km), best times to visit, what to bring, entry fees, and practical travel tips for Albania's historic mountain village.",
  keywords: "visit Voskopojë, how to get to Voskopoja, Korçë to Voskopoja, Albania mountain village travel, best time visit Voskopoja, visitor guidelines, travel tips Albania",
  openGraph: {
    title: "Plan Your Visit to Voskopojë - Albania Heritage Tourism Guide",
    description: "Complete visitor guide to Voskopojë: directions from Korçë and Tirana, best seasons to visit, what to bring, and essential travel information.",
    url: "https://voskopoje-template.vercel.app/visit",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Voskopoje_Basilica.jpg/1200px-Voskopoje_Basilica.jpg",
        width: 1200,
        height: 630,
        alt: "Historic church in Voskopojë - visitor information",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan Your Visit to Voskopojë",
    description: "Everything you need to know for visiting Albania's historic mountain village and Byzantine heritage site.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Voskopoje_Basilica.jpg/1200px-Voskopoje_Basilica.jpg"]
  },
  alternates: {
    canonical: "https://voskopoje-template.vercel.app/visit"
  }
}

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Visit" }]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Voskopoje_Basilica.jpg/1200px-Voskopoje_Basilica.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight">
            Plan Your <span className="font-light">Visit</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-50 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to know for an unforgettable journey to Albania's historic mountain village.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-primary-50/30 to-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid-responsive-3">
            <div className="card-interactive group card-padding-sm text-center">
              <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                Korçë County<br/>
                21 km from Korçë<br/>
                1,160 meters elevation
              </p>
            </div>
            <div className="card-interactive group card-padding-sm text-center">
              <Euro className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entry & Fees</h3>
              <p className="text-gray-600">
                Free village access<br/>
                Small tip for church key-holders<br/>
                Cash recommended
              </p>
            </div>
            <div className="card-interactive group card-padding-sm text-center">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Recommended Stay</h3>
              <p className="text-gray-600">
                1-2 nights ideal<br/>
                Traditional guesthouses<br/>
                Book ahead in season
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Car className="h-12 w-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Getting <span className="font-light text-primary-600">There</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Voskopojë is accessible by car from Korçë and Tirana. The scenic mountain roads offer beautiful views.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* From Korçë */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">From Korçë (Recommended)</h3>

              <div className="space-y-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary-800 mb-3">Distance & Time</h4>
                  <div className="space-y-2 text-primary-700">
                    <div className="flex items-center justify-between">
                      <span>Distance:</span>
                      <span className="font-bold">21 km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Drive time:</span>
                      <span className="font-bold">30-40 minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Road condition:</span>
                      <span className="font-bold">Paved mountain road</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-3 rounded">
                    <p className="text-sm text-primary-700">
                      <strong>Route:</strong> From Korçë city center, follow signs to Voskopojë.
                      The well-maintained mountain road winds through scenic landscapes.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Why Start from Korçë?</h4>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Closest major city with full amenities</li>
                    <li>• ATMs and banks available (bring cash!)</li>
                    <li>• Car rental options</li>
                    <li>• Additional accommodation if needed</li>
                    <li>• Fuel stations and supplies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* From Tirana */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">From Tirana (Capital City)</h3>

              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">Distance & Time</h4>
                  <div className="space-y-2 text-purple-700">
                    <div className="flex items-center justify-between">
                      <span>Distance:</span>
                      <span className="font-bold">160 km (via Elbasan)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Drive time:</span>
                      <span className="font-bold">3-3.5 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Road condition:</span>
                      <span className="font-bold">Highway + mountain roads</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-3 rounded">
                    <p className="text-sm text-purple-700">
                      <strong>Route:</strong> Take the SH3 highway east through Elbasan,
                      continue to Korçë, then follow signs to Voskopojë.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-3">Travel Tips</h4>
                  <ul className="text-amber-700 text-sm space-y-2">
                    <li>• Start early for daylight driving</li>
                    <li>• Consider overnight in Korçë</li>
                    <li>• Check weather in winter months</li>
                    <li>• Mountain roads can be winding</li>
                    <li>• Combine with Korçë sightseeing</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Public Transport Option</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Buses run from Tirana to Korçë daily (3-4 hours). From Korçë,
                    arrange private transport or taxi to Voskopojë.
                  </p>
                  <p className="text-gray-600 text-xs">
                    Note: Direct public transport to Voskopojë is limited. Car rental recommended.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-primary-50/30 to-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Calendar className="h-12 w-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Best Time to <span className="font-light text-primary-600">Visit</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Voskopojë offers unique experiences throughout the year, from winter skiing to summer hiking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Winter Season */}
            <div className="card-interactive group card-padding-sm border-2 border-blue-200">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Winter Season</h3>
                <p className="text-sm text-gray-600">December - March</p>
                <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2 inline-block">
                  SKIING & SNOW
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Skiing at nearby ski resort</li>
                    <li>• Snow-covered Byzantine churches</li>
                    <li>• Winter mountain atmosphere</li>
                    <li>• Cozy guesthouse stays</li>
                    <li>• Traditional winter cuisine</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Considerations</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Check road conditions</li>
                    <li>• Winter tires recommended</li>
                    <li>• Some churches may be inaccessible</li>
                    <li>• Shorter daylight hours</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Spring/Summer/Fall Season */}
            <div className="card-interactive group card-padding-sm border-2 border-primary-200">
              <div className="text-center mb-4">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Spring - Fall Season</h3>
                <p className="text-sm text-gray-600">May - September</p>
                <div className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mt-2 inline-block">
                  HIKING & SIGHTSEEING
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All churches accessible</li>
                    <li>• Excellent hiking weather</li>
                    <li>• Wildflower meadows (spring)</li>
                    <li>• Long daylight hours</li>
                    <li>• Outdoor dining at guesthouses</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Considerations</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Peak season (July-August)</li>
                    <li>• Book accommodation early</li>
                    <li>• More visitors at churches</li>
                    <li>• Afternoon thunderstorms possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Backpack className="h-12 w-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              What to <span className="font-light text-primary-600">Bring</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Essential items for your Voskopojë visit. Pack smart for mountain village travel.
            </p>
          </div>

          <div className="grid-responsive-3 mb-12">
            {/* Cash & Money */}
            <div className="bg-blue-50 card-padding-sm rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Euro className="h-6 w-6 text-blue-600 mr-2" />
                Banking & Currency
              </h3>
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <p className="text-blue-800 font-semibold text-sm mb-2">✓ ATM Available</p>
                <p className="text-blue-700 text-sm">ABI Bank ATM in village center. Carry cash as backup for smaller expenses.</p>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Currency: Albanian Lek (ALL)</li>
                <li>• ABI Bank ATM in village center</li>
                <li>• Visa & Mastercard at major hotels</li>
                <li>• Small denominations helpful for tips</li>
              </ul>
            </div>

            {/* Comfortable Shoes */}
            <div className="bg-blue-50 card-padding-sm rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                Comfortable Walking Shoes
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Sturdy walking shoes or hiking boots</li>
                <li>• Village streets are uneven/cobbled</li>
                <li>• Churches require some walking</li>
                <li>• Waterproof recommended</li>
                <li>• Good traction for mountain paths</li>
              </ul>
            </div>

            {/* Weather Appropriate Gear */}
            <div className="bg-amber-50 card-padding-sm rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-amber-600 mr-2" />
                Weather Appropriate Gear
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Layered clothing (temperature varies)</li>
                <li>• Warm jacket (1,160m elevation)</li>
                <li>• Rain jacket or umbrella</li>
                <li>• Sun protection (hat, sunscreen)</li>
                <li>• Winter: heavy coat, gloves, warm boots</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Essentials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera (Byzantine frescoes are stunning!)</li>
                <li>• Water bottle</li>
                <li>• Snacks for day trips</li>
                <li>• Flashlight (some churches are dark)</li>
                <li>• Phone charger & power bank</li>
                <li>• Basic first aid supplies</li>
                <li>• Travel insurance documents</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optional but Helpful</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Binoculars (for mountain views)</li>
                <li>• Guidebook or downloaded maps</li>
                <li>• Albanian phrasebook</li>
                <li>• Reusable shopping bag</li>
                <li>• Notebook for sketching/journaling</li>
                <li>• Portable WiFi device</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Essentials */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Practical <span className="font-light text-primary-600">Essentials</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Everything you need to know for a smooth, comfortable visit to Voskopojë
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mobile & Internet */}
            <div className="card-feature card-padding-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mobile & Internet</h3>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">📱</span>
                  <div>
                    <p className="font-semibold text-gray-900">Mobile Coverage</p>
                    <p className="text-sm">Vodafone and One networks available; signal varies in village proper and surrounding mountains</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">📡</span>
                  <div>
                    <p className="font-semibold text-gray-900">WiFi Availability</p>
                    <p className="text-sm">Available in most guesthouses and hotels; limited connectivity in village center; basic speeds (not suitable for streaming)</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">🗺️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Navigation Tip</p>
                    <p className="text-sm">Download offline maps (Google Maps, Maps.me) before arriving—cell coverage for GPS can be unreliable</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">🔌</span>
                  <div>
                    <p className="font-semibold text-gray-900">Power Banks</p>
                    <p className="text-sm">Bring a portable battery—guesthouses charge devices, but availability varies in remote locations</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Language & Communication */}
            <div className="card-feature card-padding-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Language & Communication</h3>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">🗣️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Primary Languages</p>
                    <p className="text-sm">Albanian is the primary language; some English spoken in guesthouses and by tourist guides</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">📚</span>
                  <div>
                    <p className="font-semibold text-gray-900">Useful Phrases</p>
                    <p className="text-sm">Learn basic Albanian greetings and phrases—locals appreciate the effort and are generally friendly and helpful</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">📱</span>
                  <div>
                    <p className="font-semibold text-gray-900">Translation Apps</p>
                    <p className="text-sm">Google Translate app helpful for real-time translation; download offline language packs</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold mt-1">👥</span>
                  <div>
                    <p className="font-semibold text-gray-900">Hiring a Guide</p>
                    <p className="text-sm">Local guides speak English and Aramonian, providing cultural context and church access unavailable otherwise</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Planning Duration */}
            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Recommended Duration</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-primary-700 text-sm">Quick Day Trip</p>
                  <p className="text-gray-600 font-light text-sm">4-6 hours: Main church, quick village walk</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-700 text-sm">Standard Visit</p>
                  <p className="text-gray-600 font-light text-sm">1-2 nights: All major churches, one hike, village experience</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-700 text-sm">Full Immersion</p>
                  <p className="text-gray-600 font-light text-sm">3+ days: Multiple hikes, photography, cultural engagement, day trips</p>
                </div>
              </div>
            </div>

            {/* Pre-Visit Checklist */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Before You Go</h4>
              <ul className="space-y-2 text-gray-600 font-light text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Book guesthouses in advance (peak season Jul-Aug)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Arrange travel from Korçë (no direct public transport)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Download offline maps and hiking trail info</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Withdraw sufficient cash in Korçë (ATM available)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Check weather/road conditions in winter</span>
                </li>
              </ul>
            </div>

            {/* Money Matters */}
            <div className="bg-amber-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Practical</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-amber-700 text-sm">Currency</p>
                  <p className="text-gray-600 font-light text-sm">Albanian Lek (ALL); Euros less useful than cash</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 text-sm">ATMs in Voskopojë</p>
                  <p className="text-gray-600 font-light text-sm">ABI Bank ATM in village center</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 text-sm">Cash Recommended</p>
                  <p className="text-gray-600 font-light text-sm">Small denominations for church tips (200-500 lek)</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 text-sm">Cards</p>
                  <p className="text-gray-600 font-light text-sm">Visa/Mastercard at major hotels only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Guidelines */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AlertTriangle className="h-12 w-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Visitor <span className="font-light text-primary-600">Guidelines</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please respect these important guidelines to preserve Voskopojë's cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Church Visiting Etiquette</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-primary-500">
                  <h4 className="font-semibold text-primary-800 mb-2">Respectful Behavior</h4>
                  <p className="text-primary-700 text-sm">
                    Churches are active places of worship and cultural heritage. Speak quietly,
                    turn off phone ringers, and be mindful of other visitors.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-2">Dress Code</h4>
                  <p className="text-blue-700 text-sm">
                    Dress modestly when visiting churches. Cover shoulders and knees.
                    Remove hats inside. Respectful attire shows appreciation for sacred spaces.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 mb-2">NO Flash Photography</h4>
                  <p className="text-red-700 text-sm">
                    Flash photography damages ancient frescoes. Natural light photos are permitted
                    in most churches, but always ask the key-holder first. Respect any photography restrictions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">General Guidelines</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800 mb-2">Church Access</h4>
                  <p className="text-purple-700 text-sm">
                    Most churches are kept locked to protect frescoes. Local key-holders
                    (usually elderly village residents) will open churches for visitors.
                    A small tip (200-500 lek) is customary and appreciated.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800 mb-2">Support Local Community</h4>
                  <p className="text-orange-700 text-sm">
                    Stay at local guesthouses, eat at family restaurants, and purchase from
                    village shops. Your tourism directly supports the small community preserving this heritage.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-gray-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Leave No Trace</h4>
                  <p className="text-gray-700 text-sm">
                    Take all trash with you. Respect private property. Stay on marked paths.
                    Do not remove stones, artifacts, or natural items. Help preserve this historic village.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-primary-50 p-8 rounded-card">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Accessibility Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Terrain & Mobility</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Village streets are uneven, cobbled, and hilly</li>
                  <li>• Churches often require walking on unpaved paths</li>
                  <li>• Limited wheelchair accessibility</li>
                  <li>• Some churches have stairs</li>
                  <li>• Guesthouses vary in accessibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Planning for Limited Mobility</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Contact guesthouses about accessibility</li>
                  <li>• Some churches easier to access than others</li>
                  <li>• Arrange private transport with driver</li>
                  <li>• Visit in good weather for easier walking</li>
                  <li>• Consider shorter visits to main churches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <CheckCircle className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-8 tracking-tight">
              Final <span className="font-light">Tips</span>
            </h2>
            <p className="text-xl lg:text-2xl text-primary-50 max-w-3xl mx-auto font-light leading-relaxed">
              Make the most of your Voskopojë experience with these helpful reminders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Recommended Stay Duration</h3>
              <p className="text-primary-100 mb-4">
                <strong>1-2 nights is ideal</strong> to experience churches, hiking, and village atmosphere without rush.
              </p>
              <ul className="space-y-2 text-primary-100 text-sm">
                <li>• Day 1: Main churches + village exploration</li>
                <li>• Day 2: Hiking trails + remaining churches</li>
                <li>• Combine with Korçë city visit</li>
              </ul>
            </div>

            <div className="bg-primary-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Mobile & WiFi</h3>
              <ul className="space-y-2 text-primary-100 text-sm">
                <li>• Mobile coverage: Variable but generally available</li>
                <li>• WiFi: Most guesthouses have internet</li>
                <li>• Download maps offline before arriving</li>
                <li>• Save important phone numbers</li>
                <li>• Albanian SIM cards available in Korçë</li>
              </ul>
            </div>

            <div className="bg-primary-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Language & Communication</h3>
              <ul className="space-y-2 text-primary-100 text-sm">
                <li>• Albanian is primary language</li>
                <li>• Some English in guesthouses</li>
                <li>• Learn basic Albanian phrases</li>
                <li>• Translation apps helpful</li>
                <li>• Locals are friendly and helpful</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-primary-700 p-8 rounded-card text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Voskopojë?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Explore our accommodation options and contact information to plan your visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/accommodation"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                View Accommodation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
