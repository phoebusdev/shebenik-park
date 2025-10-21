import { Metadata } from "next"
import { TreePine, Mountain, Droplets, Camera, MapPin, Clock, Users, Star, Compass, Binoculars, Tent, Waves } from "lucide-react"

export const metadata: Metadata = {
  title: "Activities in Shebenik National Park - Hiking, Wildlife Watching & More",
  description: "Explore hiking trails, wildlife watching, photography, and outdoor activities in Shebenik National Park. From glacial lakes to mountain peaks.",
}

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            Adventure Awaits
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            From challenging mountain peaks to serene glacial lakes, discover endless outdoor adventures in Albania's pristine wilderness.
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
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Hiking Trails</h3>
              <p className="text-sm text-gray-600 font-light">4 Marked Routes</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Peak Climbing</h3>
              <p className="text-sm text-gray-600 font-light">2,253m Summit</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Lake Swimming</h3>
              <p className="text-sm text-gray-600 font-light">14 Glacial Lakes</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Photography</h3>
              <p className="text-sm text-gray-600 font-light">Wildlife & Landscape</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hiking Trails */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Hiking <span className="font-light text-green-600">Trails</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Explore 4 marked hiking trails ranging from gentle walks to challenging mountain ascents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mount Shebenik Summit Trail */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Mount Shebenik Summit</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-green-500 fill-current" />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">2,253m</p>
                  <p className="text-xs text-gray-600">Elevation</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">8-10 hours</p>
                  <p className="text-xs text-gray-600">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Expert</p>
                  <p className="text-xs text-gray-600">Difficulty</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                The ultimate challenge for serious hikers. This demanding trail leads to the park's highest peak,
                offering breathtaking panoramic views of the Albanian Alps and North Macedonia. Best attempted as
                a 2-day trek with camping.
              </p>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Trail Highlights</h4>
                <ul className="text-sm text-gray-600 space-y-1 font-light">
                  <li>• Panoramic views from the highest peak</li>
                  <li>• Alpine meadows and rare mountain flora</li>
                  <li>• Challenging rocky terrain and scrambling</li>
                  <li>• Possible wildlife sightings (chamois, bears)</li>
                </ul>
              </div>
            </div>

            {/* Mount Jabllanicë Trail */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Mount Jabllanicë Trail</h3>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 text-green-500 fill-current" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">2,100m</p>
                  <p className="text-xs text-gray-600">Elevation</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">6-8 hours</p>
                  <p className="text-xs text-gray-600">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Advanced</p>
                  <p className="text-xs text-gray-600">Difficulty</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                A challenging but more accessible alternative to Mount Shebenik. This trail offers spectacular
                views and passes through diverse ecosystems, from dense forests to alpine zones. Perfect for
                experienced hikers seeking adventure.
              </p>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Trail Highlights</h4>
                <ul className="text-sm text-gray-600 space-y-1 font-light">
                  <li>• Diverse forest ecosystems</li>
                  <li>• Views of glacial valleys</li>
                  <li>• Mountain ridges and rocky outcrops</li>
                  <li>• Excellent wildlife observation opportunities</li>
                </ul>
              </div>
            </div>

            {/* Glacial Lakes Circuit */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Glacial Lakes Circuit</h3>
                <div className="flex">
                  {[1, 2, 3].map((star) => (
                    <Star key={star} className="h-5 w-5 text-green-500 fill-current" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">1,600m</p>
                  <p className="text-xs text-gray-600">Max Elevation</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">4-6 hours</p>
                  <p className="text-xs text-gray-600">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Moderate</p>
                  <p className="text-xs text-gray-600">Difficulty</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                A scenic circular route connecting several of the park's most beautiful glacial lakes.
                This moderately challenging trail offers stunning reflections, pristine swimming opportunities,
                and excellent picnic spots.
              </p>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Trail Highlights</h4>
                <ul className="text-sm text-gray-600 space-y-1 font-light">
                  <li>• 6 pristine glacial lakes</li>
                  <li>• Crystal-clear swimming spots</li>
                  <li>• Perfect for photography</li>
                  <li>• Peaceful picnic locations</li>
                </ul>
              </div>
            </div>

            {/* Rrajca Forests Trail */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Rrajca UNESCO Forests</h3>
                <div className="flex">
                  {[1, 2].map((star) => (
                    <Star key={star} className="h-5 w-5 text-green-500 fill-current" />
                  ))}
                  {[3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">1,200m</p>
                  <p className="text-xs text-gray-600">Max Elevation</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">2-4 hours</p>
                  <p className="text-xs text-gray-600">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Easy</p>
                  <p className="text-xs text-gray-600">Difficulty</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Walk through ancient UNESCO World Heritage beech forests that have remained unchanged for millennia.
                This gentle trail is perfect for families and nature lovers seeking a peaceful forest experience.
              </p>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Trail Highlights</h4>
                <ul className="text-sm text-gray-600 space-y-1 font-light">
                  <li>• Ancient UNESCO beech forests</li>
                  <li>• Rich biodiversity and rare plants</li>
                  <li>• Gentle, family-friendly path</li>
                  <li>• Educational interpretation points</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Activities */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              More <span className="font-light text-green-600">Adventures</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Beyond hiking, discover diverse outdoor activities that showcase the park's natural beauty.
            </p>
          </div>

          <div className="grid-responsive-3">
            {/* Wildlife Watching */}
            <div className="card-feature group card-padding-md">
              <Binoculars className="h-12 w-12 text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wildlife Watching</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Experience the thrill of spotting Europe's most endangered species including the Balkan lynx,
                brown bears, and gray wolves in their natural habitat.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Best Times</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Early morning (5-8 AM)</li>
                  <li>• Late afternoon (4-7 PM)</li>
                  <li>• Autumn months for bear activity</li>
                </ul>
              </div>
            </div>

            {/* Photography Tours */}
            <div className="card-feature group card-padding-md">
              <Camera className="h-12 w-12 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Photography Tours</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Capture the park's stunning landscapes, from misty morning valleys to golden hour mountain
                peaks. Professional guided tours available for all skill levels.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Photo Opportunities</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Glacial lake reflections</li>
                  <li>• Ancient forest details</li>
                  <li>• Mountain sunrise/sunset</li>
                  <li>• Wildlife portraits</li>
                </ul>
              </div>
            </div>

            {/* Lake Swimming */}
            <div className="card-feature group card-padding-md">
              <Waves className="h-12 w-12 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Glacial Lake Swimming</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Take a refreshing dip in crystal-clear glacial lakes surrounded by pristine mountain wilderness.
                Perfect for cooling off during summer hikes.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Swimming Tips</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Water is cold year-round</li>
                  <li>• Best months: June-September</li>
                  <li>• Always swim with a buddy</li>
                  <li>• Respect the pristine environment</li>
                </ul>
              </div>
            </div>

            {/* Camping */}
            <div className="card-feature group card-padding-md">
              <Tent className="h-12 w-12 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wilderness Camping</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Experience the park's pristine wilderness with designated camping areas. Perfect for multi-day
                adventures and stargazing under unpolluted night skies.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Camping Guidelines</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Use designated camping areas only</li>
                  <li>• Pack out all waste</li>
                  <li>• Store food properly (bear safety)</li>
                  <li>• No fires during dry seasons</li>
                </ul>
              </div>
            </div>

            {/* Mountain Biking */}
            <div className="card-feature group card-padding-md">
              <Compass className="h-12 w-12 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mountain Biking</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Explore forest trails and mountain paths on designated biking routes. Challenging terrain
                suitable for experienced mountain bikers seeking adventure.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Trail Conditions</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Rocky and technical terrain</li>
                  <li>• Steep climbs and descents</li>
                  <li>• Best in dry weather</li>
                  <li>• Helmet required</li>
                </ul>
              </div>
            </div>

            {/* Guided Nature Walks */}
            <div className="card-feature group card-padding-md">
              <Users className="h-12 w-12 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guided Nature Walks</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Join experienced local guides to learn about the park's ecology, conservation efforts,
                and cultural history while exploring at a comfortable pace.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">What You'll Learn</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Plant and animal identification</li>
                  <li>• Conservation success stories</li>
                  <li>• Local cultural traditions</li>
                  <li>• Park management practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Your Adventure */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
              Plan Your <span className="font-light">Adventure</span>
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Make the most of your visit with these essential tips for exploring Shebenik National Park.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Essential Gear</h3>
              <div className="bg-blue-700 p-6 rounded-lg">
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Sturdy hiking boots with ankle support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Weather-appropriate layers (temperatures vary)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Rain gear and waterproof backpack
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Navigation tools (GPS, map, compass)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    First aid kit and emergency whistle
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    Plenty of water and high-energy snacks
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Best Times to Visit</h3>
              <div className="space-y-4">
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-100 mb-2">Spring (May-June)</h4>
                  <p className="text-blue-200 text-sm">
                    Wildflowers bloom, moderate temperatures, some trails may still have snow at elevation.
                  </p>
                </div>
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-100 mb-2">Summer (July-August)</h4>
                  <p className="text-blue-200 text-sm">
                    Warmest weather, all trails accessible, perfect for lake swimming and camping.
                  </p>
                </div>
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-100 mb-2">Autumn (September-October)</h4>
                  <p className="text-blue-200 text-sm">
                    Stunning fall colors, excellent wildlife viewing, comfortable hiking temperatures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data - HowTo Schema for Popular Trail */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Hike the Glacial Lakes Circuit in Shebenik National Park",
            "description": "A complete guide to hiking the popular Glacial Lakes Circuit trail, a 4-6 hour moderate difficulty hike connecting six pristine glacial lakes in Shebenik National Park.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Liqeni_i_Fush%C3%AB_Studn%C3%ABs.jpg",
            "totalTime": "PT5H",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "ALL",
              "value": "0"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Sturdy hiking boots"
              },
              {
                "@type": "HowToSupply",
                "name": "2L water per person"
              },
              {
                "@type": "HowToSupply",
                "name": "Trail snacks and lunch"
              },
              {
                "@type": "HowToSupply",
                "name": "Map and compass or GPS"
              },
              {
                "@type": "HowToSupply",
                "name": "Weather-appropriate clothing"
              },
              {
                "@type": "HowToSupply",
                "name": "Camera for photography"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Hiking poles (optional)"
              },
              {
                "@type": "HowToTool",
                "name": "Binoculars for wildlife viewing"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Start at Fushë Studë Trailhead",
                "text": "Begin your hike at the Fushë Studë Lake trailhead near Rrajcë village. The trail is well-marked with green blazes.",
                "url": "https://shebenik-park.vercel.app/activities"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Hike to First Glacial Lake",
                "text": "Follow the trail through beech forest for approximately 1.5 hours, gaining 300m elevation to reach the first glacial lake.",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "Duration: 1.5 hours, Distance: 3km, Elevation gain: 300m"
                  }
                ]
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Circuit Through Lakes 2-5",
                "text": "Continue on the circuit trail passing five more glacial lakes. The path alternates between forest and open alpine meadows.",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "Duration: 2-3 hours, Distance: 6km, Terrain: Mixed forest and alpine"
                  }
                ]
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Return Descent",
                "text": "Complete the circuit loop descending back to Fushë Studë Lake. The descent offers panoramic views of the valley.",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "Duration: 1-1.5 hours, Distance: 4km, Descent: 300m"
                  }
                ]
              }
            ],
            "performTime": "PT5H",
            "prepTime": "PT30M"
          })
        }}
      />
    </div>
  )
}