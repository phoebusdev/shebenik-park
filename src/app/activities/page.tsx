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
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Adventure Awaits
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            From challenging mountain peaks to serene glacial lakes, discover endless outdoor adventures in Albania's pristine wilderness.
          </p>
        </div>
      </section>

      {/* Quick Activity Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Hiking Trails</h3>
              <p className="text-sm text-gray-600">4 Marked Routes</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Peak Climbing</h3>
              <p className="text-sm text-gray-600">2,253m Summit</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Lake Swimming</h3>
              <p className="text-sm text-gray-600">14 Glacial Lakes</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Photography</h3>
              <p className="text-sm text-gray-600">Wildlife & Landscape</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hiking Trails */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hiking Trails
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore 4 marked hiking trails ranging from gentle walks to challenging mountain ascents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mount Shebenik Summit Trail */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Mount Shebenik Summit</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-red-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">2,253m</p>
                  <p className="text-xs text-gray-600">Elevation</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">8-10 hours</p>
                  <p className="text-xs text-gray-600">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Expert</p>
                  <p className="text-xs text-gray-600">Difficulty</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                The ultimate challenge for serious hikers. This demanding trail leads to the park's highest peak, 
                offering breathtaking panoramic views of the Albanian Alps and North Macedonia. Best attempted as 
                a 2-day trek with camping.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Trail Highlights</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Panoramic views from the highest peak</li>
                  <li>• Alpine meadows and rare mountain flora</li>
                  <li>• Challenging rocky terrain and scrambling</li>
                  <li>• Possible wildlife sightings (chamois, bears)</li>
                </ul>
              </div>
            </div>

            {/* Mount Jabllanicë Trail */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Mount Jabllanicë Trail</h3>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 text-orange-500 fill-current" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">2,100m</p>
                  <p className="text-xs text-gray-600">Elevation</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">6-8 hours</p>
                  <p className="text-xs text-gray-600">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Advanced</p>
                  <p className="text-xs text-gray-600">Difficulty</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                A challenging but more accessible alternative to Mount Shebenik. This trail offers spectacular 
                views and passes through diverse ecosystems, from dense forests to alpine zones. Perfect for 
                experienced hikers seeking adventure.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Trail Highlights</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Diverse forest ecosystems</li>
                  <li>• Views of glacial valleys</li>
                  <li>• Mountain ridges and rocky outcrops</li>
                  <li>• Excellent wildlife observation opportunities</li>
                </ul>
              </div>
            </div>

            {/* Glacial Lakes Circuit */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Glacial Lakes Circuit</h3>
                <div className="flex">
                  {[1, 2, 3].map((star) => (
                    <Star key={star} className="h-5 w-5 text-blue-500 fill-current" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">1,600m</p>
                  <p className="text-xs text-gray-600">Max Elevation</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">4-6 hours</p>
                  <p className="text-xs text-gray-600">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Moderate</p>
                  <p className="text-xs text-gray-600">Difficulty</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                A scenic circular route connecting several of the park's most beautiful glacial lakes. 
                This moderately challenging trail offers stunning reflections, pristine swimming opportunities, 
                and excellent picnic spots.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Trail Highlights</h4>
                <ul className="text-sm text-gray-700 space-y-1">
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
              
              <p className="text-gray-700 mb-6">
                Walk through ancient UNESCO World Heritage beech forests that have remained unchanged for millennia. 
                This gentle trail is perfect for families and nature lovers seeking a peaceful forest experience.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Trail Highlights</h4>
                <ul className="text-sm text-gray-700 space-y-1">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond hiking, discover diverse outdoor activities that showcase the park's natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wildlife Watching */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Binoculars className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wildlife Watching</h3>
              <p className="text-gray-700 mb-6">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Camera className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Photography Tours</h3>
              <p className="text-gray-700 mb-6">
                Capture the park's stunning landscapes, from misty morning valleys to golden hour mountain 
                peaks. Professional guided tours available for all skill levels.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Photo Opportunities</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Glacial lake reflections</li>
                  <li>• Ancient forest details</li>
                  <li>• Mountain sunrise/sunset</li>
                  <li>• Wildlife portraits</li>
                </ul>
              </div>
            </div>

            {/* Lake Swimming */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Waves className="h-12 w-12 text-cyan-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Glacial Lake Swimming</h3>
              <p className="text-gray-700 mb-6">
                Take a refreshing dip in crystal-clear glacial lakes surrounded by pristine mountain wilderness. 
                Perfect for cooling off during summer hikes.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">Swimming Tips</h4>
                <ul className="text-sm text-cyan-700 space-y-1">
                  <li>• Water is cold year-round</li>
                  <li>• Best months: June-September</li>
                  <li>• Always swim with a buddy</li>
                  <li>• Respect the pristine environment</li>
                </ul>
              </div>
            </div>

            {/* Camping */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Tent className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wilderness Camping</h3>
              <p className="text-gray-700 mb-6">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Compass className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mountain Biking</h3>
              <p className="text-gray-700 mb-6">
                Explore forest trails and mountain paths on designated biking routes. Challenging terrain 
                suitable for experienced mountain bikers seeking adventure.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Trail Conditions</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Rocky and technical terrain</li>
                  <li>• Steep climbs and descents</li>
                  <li>• Best in dry weather</li>
                  <li>• Helmet required</li>
                </ul>
              </div>
            </div>

            {/* Guided Nature Walks */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Users className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guided Nature Walks</h3>
              <p className="text-gray-700 mb-6">
                Join experienced local guides to learn about the park's ecology, conservation efforts, 
                and cultural history while exploring at a comfortable pace.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">What You'll Learn</h4>
                <ul className="text-sm text-indigo-700 space-y-1">
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Plan Your Adventure
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
    </div>
  )
}