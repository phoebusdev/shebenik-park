import { Metadata } from "next"
import { MapPin, Clock, Car, Info, Phone, Calendar, Thermometer, Backpack, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Plan Your Visit to Shebenik National Park - Practical Information",
  description: "Essential information for visiting Shebenik National Park: getting there, visitor center, best times to visit, what to bring, and safety guidelines.",
}

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/6b/Alpine_Pasture_Shebenik_Jabllanice.JPG')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Plan Your Visit
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Everything you need to know for an unforgettable adventure in Shebenik National Park.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visitor Center Hours</h3>
              <p className="text-gray-700">
                Summer: Mon-Thu 9AM-5PM<br/>
                Fri-Sun 9AM-7PM<br/>
                Winter: Daily 9AM-4PM
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Park Entrance</h3>
              <p className="text-gray-700">
                Fushë Studë Village<br/>
                Elbasan County, Albania<br/>
                64km from Tirana
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-700">
                Visitor Center: +355 69 6223130<br/>
                Forest Directorate: +355 51 423 738<br/>
                Emergency: +355 67 207 9658
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Car className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Getting There
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shebenik National Park is accessible by car from several routes. Public transport options are limited.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* By Car */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">By Car (Recommended)</h3>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">From Tirana (Capital City)</h4>
                  <p className="text-green-700 mb-3">Distance: 64 km to Librazhd, then additional distances to park entrances</p>
                  <ol className="text-green-700 text-sm space-y-1">
                    <li>1. Take SH3 highway east towards Elbasan</li>
                    <li>2. Continue to Librazhd (about 1.5 hours)</li>
                    <li>3. From Librazhd, choose your destination:</li>
                  </ol>
                  <ul className="mt-3 text-green-700 text-sm ml-4 space-y-1">
                    <li>• Fushë Studë village (north): 25 km</li>
                    <li>• Stëblevë village (north): 34 km</li>
                    <li>• Qarrishta village (center): 32 km</li>
                    <li>• Rrajca village (south): 50 km</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Vehicle Recommendations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Strongly Recommended:</h5>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• 4×4 vehicle or SUV</li>
                        <li>• High ground clearance</li>
                        <li>• All-weather tires</li>
                        <li>• Full fuel tank</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Road Conditions:</h5>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Paved road to Librazhd</li>
                        <li>• Mountain roads vary by season</li>
                        <li>• Some unpaved sections</li>
                        <li>• Weather-dependent accessibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Transport & Other Options */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Public Transport & Tours</h3>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-3">Limited Public Transport</h4>
                  <p className="text-amber-700 mb-3">
                    Public transport to the park is very limited. A daily minibus runs from Librazhd 
                    to Fushë Studë village, departing around noon.
                  </p>
                  <div className="bg-amber-100 p-3 rounded">
                    <p className="text-amber-800 text-sm font-medium">
                      Note: Return transport may not be guaranteed. Plan accordingly.
                    </p>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">Organized Tours</h4>
                  <p className="text-purple-700 mb-3">
                    Several tour operators offer guided trips to Shebenik National Park from Tirana 
                    and other major Albanian cities.
                  </p>
                  <ul className="text-purple-700 text-sm space-y-2">
                    <li>• Transportation included</li>
                    <li>• Professional guides</li>
                    <li>• Group or private options</li>
                    <li>• Equipment rental available</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Rental Options</h4>
                  <p className="text-gray-700 mb-3">
                    Car and 4×4 rentals are available in Tirana and major cities. Book in advance, 
                    especially during peak season.
                  </p>
                  <div className="text-gray-700 text-sm">
                    <p><strong>Tip:</strong> Many rental agencies offer GPS units and local maps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Best Time to Visit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The park offers different experiences throughout the year, with optimal conditions from May to October.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Spring */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center mb-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Thermometer className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Spring</h3>
                <p className="text-sm text-gray-600">May - June</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Weather</h4>
                  <p className="text-sm text-gray-700">15-25°C (59-77°F)</p>
                  <p className="text-sm text-gray-600">Mild temperatures, occasional rain</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Wildflower blooms</li>
                    <li>• Active wildlife</li>
                    <li>• Fewer crowds</li>
                    <li>• Lush green landscapes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Considerations</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Some high trails may have snow</li>
                    <li>• Muddy conditions possible</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Summer */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-200">
              <div className="text-center mb-4">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Thermometer className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Summer</h3>
                <p className="text-sm text-gray-600">July - August</p>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-2">
                  PEAK SEASON
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Weather</h4>
                  <p className="text-sm text-gray-700">20-30°C (68-86°F)</p>
                  <p className="text-sm text-gray-600">Warm, dry conditions</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All trails accessible</li>
                    <li>• Perfect for lake swimming</li>
                    <li>• Long daylight hours</li>
                    <li>• Ideal camping weather</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Considerations</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• More crowded</li>
                    <li>• Book accommodation early</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Autumn */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-amber-200">
              <div className="text-center mb-4">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Thermometer className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Autumn</h3>
                <p className="text-sm text-gray-600">September - October</p>
                <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full mt-2">
                  RECOMMENDED
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Weather</h4>
                  <p className="text-sm text-gray-700">10-20°C (50-68°F)</p>
                  <p className="text-sm text-gray-600">Cool, crisp conditions</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Spectacular fall colors</li>
                    <li>• Excellent wildlife viewing</li>
                    <li>• Comfortable hiking</li>
                    <li>• Clear mountain views</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Considerations</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Shorter daylight hours</li>
                    <li>• Layer clothing needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Winter */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Thermometer className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Winter</h3>
                <p className="text-sm text-gray-600">November - April</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Weather</h4>
                  <p className="text-sm text-gray-700">-5 to 10°C (23-50°F)</p>
                  <p className="text-sm text-gray-600">Cold, snow at elevation</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Snow-capped mountains</li>
                    <li>• Winter photography</li>
                    <li>• Peaceful solitude</li>
                    <li>• Animal tracks in snow</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Considerations</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Many trails inaccessible</li>
                    <li>• Requires winter gear</li>
                    <li>• Road conditions challenging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Backpack className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What to Bring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pack smart for your wilderness adventure with this comprehensive checklist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Essential Gear */}
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                Essential Gear
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sturdy hiking boots with ankle support</li>
                <li>• Backpack (30-50L for day hikes)</li>
                <li>• Navigation tools (GPS, map, compass)</li>
                <li>• First aid kit and personal medications</li>
                <li>• Headlamp or flashlight with extra batteries</li>
                <li>• Multi-tool or knife</li>
                <li>• Emergency whistle</li>
                <li>• Rope or paracord (for emergencies)</li>
              </ul>
            </div>

            {/* Clothing */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                Clothing & Protection
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Moisture-wicking base layers</li>
                <li>• Insulating mid-layer (fleece/down)</li>
                <li>• Waterproof/breathable outer shell</li>
                <li>• Rain pants and poncho</li>
                <li>• Warm hat and sun hat</li>
                <li>• Waterproof gloves</li>
                <li>• Extra socks and underwear</li>
                <li>• Gaiters (for muddy conditions)</li>
              </ul>
            </div>

            {/* Safety & Comfort */}
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-amber-600 mr-2" />
                Safety & Comfort
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bear spray (recommended)</li>
                <li>• Sunscreen (SPF 30+) and sunglasses</li>
                <li>• Insect repellent</li>
                <li>• Water bottles or hydration system</li>
                <li>• Water purification tablets/filter</li>
                <li>• High-energy snacks and meals</li>
                <li>• Cash (for park fees and local purchases)</li>
                <li>• Garbage bags (Leave No Trace)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Guidelines */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Important Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these essential guidelines for your safety and the protection of the park's pristine environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Guidelines</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 mb-2">Wildlife Safety</h4>
                  <p className="text-red-700 text-sm">
                    Maintain safe distances from all wildlife. Bears, wolves, and lynx inhabit the park. 
                    Never feed animals or approach them for photos.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800 mb-2">Weather Awareness</h4>
                  <p className="text-orange-700 text-sm">
                    Mountain weather changes rapidly. Check forecasts before departing and be prepared 
                    for sudden temperature drops and storms.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-800 mb-2">Emergency Preparedness</h4>
                  <p className="text-yellow-700 text-sm">
                    Inform someone of your plans. Carry emergency contacts and know that cell service 
                    may be limited in remote areas.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conservation Rules</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">Leave No Trace</h4>
                  <p className="text-green-700 text-sm">
                    Pack out all waste, stay on designated trails, and leave natural objects undisturbed. 
                    Respect the pristine wilderness for future generations.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-2">Fire Restrictions</h4>
                  <p className="text-blue-700 text-sm">
                    Campfires may be restricted during dry seasons. Always check current conditions 
                    and use established fire rings when permitted.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800 mb-2">Respect Wildlife</h4>
                  <p className="text-purple-700 text-sm">
                    Observe animals quietly from a distance. Do not use flash photography, make loud noises, 
                    or attempt to attract wildlife for photos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Resources */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Info className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help Planning?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our visitor center staff are ready to help you plan the perfect adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Visitor Center Services</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Trail maps and current conditions</li>
                <li>• Weather forecasts and safety briefings</li>
                <li>• Guided tour arrangements</li>
                <li>• Equipment rental information</li>
                <li>• Local accommodation recommendations</li>
                <li>• Emergency contact coordination</li>
              </ul>
            </div>
            
            <div className="bg-green-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Essential Contacts</h3>
              <div className="space-y-3 text-green-100">
                <div>
                  <p className="font-semibold">Visitor Center (Fushë Studë)</p>
                  <p>Phone: +355 69 6223130</p>
                </div>
                <div>
                  <p className="font-semibold">Librazhd Forest Directorate</p>
                  <p>Phone: +355 51 423 738</p>
                  <p>Mobile: +355 67 207 9658</p>
                </div>
                <div>
                  <p className="font-semibold">Emergency Services</p>
                  <p>Police: 129 | Medical: 127 | Fire: 128</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}