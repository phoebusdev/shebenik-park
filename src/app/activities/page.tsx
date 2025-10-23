import { Metadata } from "next"
import { Church, Snowflake, Camera, Mountain, Users, MapPin, Compass, Coffee } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Things to Do in Voskopojë - Activities & Experiences",
  description: "Explore activities in Voskopojë: church and fresco tours, hiking trails, winter sports, photography, and cultural experiences in this Byzantine mountain village.",
}

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Activities" }]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/8f/Albania_location_map.svg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            An Active Journey Through <span className="font-light">History</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Whether you're an art historian, mountain hiker, or winter sports enthusiast, find memorable ways to connect with Voskopojë's extraordinary spirit.
          </p>
        </div>
      </section>

      {/* Quick Activity Overview */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Church className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Church Tours</h3>
              <p className="text-sm text-gray-600 font-light">Guided & Self-Guided</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Hiking</h3>
              <p className="text-sm text-gray-600 font-light">Forest Trails</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Snowflake className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Winter Sports</h3>
              <p className="text-sm text-gray-600 font-light">Dec-Mar</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Photography</h3>
              <p className="text-sm text-gray-600 font-light">Year-Round</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Activities */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Explore <span className="font-light text-green-600">Voskopojë</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Choose how you want to experience this legendary mountain village.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Church & Fresco Tours */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Church & Fresco Tours</h3>
                <div className="bg-green-100 icon-circle icon-circle-md flex-shrink-0">
                  <Church className="h-6 w-6 text-green-600" />
                </div>
              </div>

              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                This is the essential Voskopojë activity. You can explore the main churches on a self-guided walk, but to truly understand what you're seeing, a guided tour is invaluable. Local guides, many with deep family roots in the village, can be hired to provide access to the churches (which are often locked) and explain the complex iconography of the frescoes.
              </p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">What's Included</h4>
                <ul className="text-sm text-gray-600 space-y-2 font-light">
                  <li>• Access to St. Nicholas Church (essential visit)</li>
                  <li>• Virgin Mary Cathedral exploration</li>
                  <li>• St. Athanasius hilltop church with panoramic views</li>
                  <li>• Stories of David Selenica and Zografi brothers</li>
                  <li>• Detailed fresco iconography explanations</li>
                </ul>
              </div>

              <p className="text-sm text-green-700 font-medium">
                Best for: Art historians, cultural enthusiasts, photographers
              </p>
            </div>

            {/* Hiking & Nature Walks */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Hiking & Nature</h3>
                <div className="bg-green-100 icon-circle icon-circle-md flex-shrink-0">
                  <Mountain className="h-6 w-6 text-green-600" />
                </div>
              </div>

              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Voskopojë is a hiker's delight. The village is the starting point for numerous trails that wind through the surrounding pine forests and mountain pastures. A popular and rewarding hike is to the St. John the Baptist Monastery (45-60 minutes one way) through the forest. Another great walk is to the neighboring village of Shipska with its historic St. George Church.
              </p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Popular Routes</h4>
                <ul className="text-sm text-gray-600 space-y-2 font-light">
                  <li>• St. John Baptist Monastery (moderate, 45-60 min)</li>
                  <li>• Shipska village trail (moderate, 30-45 min)</li>
                  <li>• St. Athanasius hilltop walk (easy, 20-30 min)</li>
                  <li>• Forest panorama trails (varied difficulty)</li>
                  <li>• Alpine meadow strolls (easy, any duration)</li>
                </ul>
              </div>

              <p className="text-sm text-green-700 font-medium">
                Best for: Nature lovers, outdoor enthusiasts, families
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Winter Sports */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Winter Sports</h3>
                <div className="bg-blue-100 icon-circle icon-circle-md flex-shrink-0">
                  <Snowflake className="h-6 w-6 text-blue-600" />
                </div>
              </div>

              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                From December to March, Voskopojë transforms into a snowy alpine village. While it is not a large, organized ski resort, it offers a rustic and adventurous winter sports experience. Several local guesthouses provide access to natural ski slopes, perfect for beginner to intermediate skiing and snowboarding. The surrounding hills are ideal for cross-country skiing and snowshoeing.
              </p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Winter Activities</h4>
                <ul className="text-sm text-gray-600 space-y-2 font-light">
                  <li>• Natural slope skiing (beginner-intermediate)</li>
                  <li>• Snowboarding on gentle hills</li>
                  <li>• Cross-country skiing through forests</li>
                  <li>• Snowshoeing expeditions</li>
                  <li>• Equipment rentals available at guesthouses</li>
                </ul>
              </div>

              <p className="text-sm text-blue-700 font-medium">
                Best for: Winter enthusiasts, families, adventure seekers
              </p>
            </div>

            {/* Photography & Cultural */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Photography & Culture</h3>
                <div className="bg-amber-100 icon-circle icon-circle-md flex-shrink-0">
                  <Camera className="h-6 w-6 text-amber-600" />
                </div>
              </div>

              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                For photographers, Voskopojë is a paradise of texture, light, and history. Capture the contrast of red-tiled roofs against green meadows or winter snow. The prime subjects are the churches—their stone exteriors, arched porticos, and bell towers. Immerse yourself in local Aromanian culture by striking up conversations at cafes with locals who have fascinating stories to share.
              </p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-amber-800 mb-3">Photography Tips</h4>
                <ul className="text-sm text-gray-600 space-y-2 font-light">
                  <li>• Golden hour light (early morning, late afternoon)</li>
                  <li>• Stone architecture and aged details</li>
                  <li>• Mountain landscape panoramas</li>
                  <li>• Seasonal contrasts (green/winter/autumn)</li>
                  <li>• Local people and daily life moments</li>
                </ul>
              </div>

              <p className="text-sm text-amber-700 font-medium">
                Best for: Photographers, cultural enthusiasts, artists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day Trips */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Day Trips from <span className="font-light text-green-600">Voskopojë</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              While Voskopojë itself can occupy you for days, it also serves as a great base for exploring the region.
            </p>
          </div>

          <div className="card-feature card-padding-md">
            <div className="flex items-start space-x-6">
              <div className="bg-green-100 icon-circle icon-circle-md flex-shrink-0">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Korçë - "Little Paris of Albania"</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  The city of Korçë is just 21km (30 minutes) away, a must-visit complement to your mountain tranquility. Known as Albania's "Little Paris," it boasts a beautifully restored old bazaar, the National Museum of Medieval Art (which holds icons from Voskopojë's churches), the first Albanian-language school, and a lively cafe culture.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Distance & Time</h4>
                    <p className="text-sm text-gray-600">21 km | 30-40 minute drive</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Top Attractions</h4>
                    <p className="text-sm text-gray-600">Old Bazaar, Medieval Art Museum, Cafe Culture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Planning Your <span className="font-light text-green-600">Activities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-feature card-padding-md">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                <Compass className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Recommended Duration</h3>
              <div className="space-y-4 text-gray-600 font-light">
                <div>
                  <p className="font-semibold text-green-700">Day Trip</p>
                  <p className="text-sm">See main highlights: St. Nicholas Church, one or two other churches, enjoy lunch</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700">1-2 Nights (Recommended)</p>
                  <p className="text-sm">Explore all major churches, hike, experience evening atmosphere, savor traditional meals</p>
                </div>
              </div>
            </div>

            <div className="card-feature card-padding-md">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Hiring a Guide</h3>
              <div className="space-y-3 text-sm text-gray-600 font-light">
                <p>• Highly recommended for church access and fresco explanations</p>
                <p>• Guides unlock churches (often kept locked)</p>
                <p>• Share family stories and historical context</p>
                <p>• Small fee or tip customary (200-300 ALL per person)</p>
                <p>• Can be arranged through your guesthouse</p>
              </div>
            </div>

            <div className="card-feature card-padding-md">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                <Coffee className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Essential Tip</h3>
              <div className="space-y-3 text-sm text-gray-600 font-light">
                <p><strong className="text-green-700">Bring Cash!</strong></p>
                <p>No ATMs in Voskopojë. Bring enough Albanian Lek from Korçë or Tirana for your entire stay.</p>
                <p className="text-xs text-gray-500">Credit cards rarely accepted in village.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
