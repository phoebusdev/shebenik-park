import { Metadata } from "next"
import { MapPin, Phone, Euro, Wifi, Car, Coffee, Mountain, Users, Home, Tent, Building } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Accommodation Near Shebenik National Park - Guesthouses, Hotels & Camping",
  description: "Find accommodation near Shebenik National Park including guesthouses, hotels in Librazhd, and camping options for your wilderness adventure.",
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
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            Stay Near the Park
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            From cozy guesthouses to wilderness camping, find the perfect accommodation for your Shebenik adventure.
          </p>
        </div>
      </section>

      {/* Accommodation Types Overview */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid-responsive-3">
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-lg mx-auto mb-4">
                <Home className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Local Guesthouses</h3>
              <p className="text-gray-600 font-light">Authentic Albanian hospitality in traditional village settings</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-lg mx-auto mb-4">
                <Building className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Hotels in Librazhd</h3>
              <p className="text-gray-600 font-light">Modern amenities and comfort 30-50km from park entrances</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-lg mx-auto mb-4">
                <Tent className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Camping Sites</h3>
              <p className="text-gray-600 font-light">Wilderness camping in designated areas within the park</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guesthouses */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Home className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Local <span className="font-light text-green-600">Guesthouses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Experience authentic Albanian hospitality at family-run guesthouses near the park entrances.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Overview of Village Guesthouses */}
            <div className="card-feature p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Village Guesthouse Overview</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Several villages surrounding Shebenik National Park offer family-run guesthouses providing
                authentic Albanian hospitality. These accommodations range from basic to comfortable, with
                most including traditional home-cooked meals and local insights into hiking trails.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-4">Typical Amenities</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <Coffee className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Traditional breakfast</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Users className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Family rooms</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Mountain className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Trail information</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Car className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Parking available</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                  <div className="flex items-center">
                    <Euro className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Price Range</p>
                      <p className="text-sm text-gray-600">Per night including breakfast</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-green-600">€10-15</p>
                </div>

                <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Distance from Librazhd</p>
                      <p className="text-sm text-gray-600">Via mountain roads</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-green-600">25-50km</p>
                </div>
              </div>
            </div>

            {/* Village Locations */}
            <div className="card-feature p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Village Locations</h3>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Rrajca Village</h4>
                  <p className="text-gray-600 text-sm mb-2 font-light">
                    Near UNESCO World Heritage beech forests, approximately 50km from Librazhd.
                    Several guesthouse options with traditional hospitality.
                  </p>
                  <p className="text-xs text-green-600">Best for forest hiking and wildlife viewing</p>
                </div>

                <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Fushë Studë Village</h4>
                  <p className="text-gray-600 text-sm mb-2 font-light">
                    Main visitor center location, 25km from Librazhd. Direct access to popular
                    hiking trails and park information services.
                  </p>
                  <p className="text-xs text-blue-600">Convenient for early morning trail starts</p>
                </div>

                <div className="bg-white p-5 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Stëblevë & Qarrishta</h4>
                  <p className="text-gray-600 text-sm mb-2 font-light">
                    Northern villages (32-34km from Librazhd) with limited but authentic
                    guesthouse options. Quiet locations with access to less-traveled trails.
                  </p>
                  <p className="text-xs text-amber-600">Contact visitor center for current availability</p>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Important Notes</h4>
                <ul className="text-gray-600 text-sm space-y-2 font-light">
                  <li>• Advance booking recommended, especially July-August</li>
                  <li>• Most guesthouses prefer phone contact for reservations</li>
                  <li>• Limited English spoken - basic Albanian phrases helpful</li>
                  <li>• Cash payment typical (Euros or Albanian Lek)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* General Booking Info */}
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <Phone className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Finding Accommodation</h3>
              <p className="text-gray-600 font-light">
                For current guesthouse availability, local recommendations, and assistance with bookings, contact the park visitor center or local tourism offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels in Librazhd */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Building className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Hotels in <span className="font-light text-green-600">Librazhd</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Modern accommodations with full amenities, 30-50km from park entrances via mountain roads.
            </p>
          </div>

          <div className="grid-responsive-2">
            <div className="card-feature group card-padding-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Librazhd?</h3>
              <ul className="space-y-3 text-gray-600 mb-6 font-light">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Modern hotel amenities (WiFi, heating, hot water)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Restaurants and shops nearby</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Reliable transportation connections</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Bank and ATM services available</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Equipment rental and supplies</span>
                </li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Travel Time to Park</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Fushë Studë: 45 minutes (25km)</li>
                  <li>• Stëblevë: 1 hour (34km)</li>
                  <li>• Qarrishta: 50 minutes (32km)</li>
                  <li>• Rrajca: 1 hour 15 minutes (50km)</li>
                </ul>
              </div>
            </div>

            <div className="card-feature group card-padding-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Hotels</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Librazhd offers several hotel options ranging from budget-friendly to mid-range accommodations.
                Most hotels provide standard amenities expected by international travelers.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">Price Range</h4>
                    <Euro className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-sm">€15-35 per night for standard rooms</p>
                  <p className="text-gray-600 text-xs">Prices vary by season and amenities</p>
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
                    <li>• On-site restaurants or breakfast</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                <p className="font-semibold text-yellow-800 mb-1">Booking Recommendation</p>
                <p className="text-yellow-700 text-sm">
                  Book directly with hotels or use standard booking platforms. 
                  Contact Librazhd Forest Directorate (+355 51 423 738) for local hotel recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camping */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Tent className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Wilderness <span className="font-light text-green-600">Camping</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the park's pristine wilderness with designated camping areas and backcountry options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Designated Camping Areas</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Several designated camping sites are available within the park, offering basic facilities
                while maintaining the wilderness experience. These sites provide the perfect base for
                multi-day hiking adventures.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-orange-800 mb-3">Available Facilities</h4>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Basic toilet facilities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Fresh water access (limited)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Fire rings (when permitted)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Level ground for tents
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Waste disposal areas
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Camping Costs</h4>
                <p className="text-green-700 mb-2">Designated camping areas: €3-5 per person per night</p>
                <p className="text-green-600 text-sm">
                  Pay at visitor center or with park rangers. Cash only.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Camping Guidelines</h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 mb-2">Safety Requirements</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Store all food in bear-proof containers</li>
                    <li>• Never leave food unattended</li>
                    <li>• Camp in designated areas only</li>
                    <li>• Inform rangers of your camping plans</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-2">Fire Restrictions</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• No fires during dry seasons (typically July-August)</li>
                    <li>• Use established fire rings only</li>
                    <li>• Completely extinguish fires before sleeping</li>
                    <li>• Bring portable camping stoves as backup</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">Leave No Trace</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Pack out all waste and garbage</li>
                    <li>• Use biodegradable soap for washing</li>
                    <li>• Respect wildlife and vegetation</li>
                    <li>• Keep noise levels low</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-green-50 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning Your Camping Trip</h3>
              <p className="text-gray-600 font-light leading-relaxed">Essential information for a safe and enjoyable wilderness camping experience.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mountain className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Best Locations</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Near glacial lakes and forest clearings. Ask at visitor center for current
                  available sites and trail access.
                </p>
              </div>

              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Group Limits</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Maximum 8 people per campsite to minimize environmental impact.
                  Larger groups should use multiple sites.
                </p>
              </div>

              <div className="text-center">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Reservations</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Contact visitor center (+355 69 6223130) to check availability
                  and make reservations, especially during peak season.
                </p>
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
              Ready to <span className="font-light">Book?</span>
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Contact our recommended accommodations or the visitor center for assistance with bookings and travel planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Booking Tips</h3>
              <ul className="space-y-3 text-green-100">
                <li>• Book village guesthouses 1-2 weeks in advance</li>
                <li>• Summer season (July-August) requires early booking</li>
                <li>• Many accommodations prefer phone contact</li>
                <li>• Confirm meal arrangements when booking</li>
                <li>• Ask about group discounts for larger parties</li>
                <li>• Check cancellation policies before booking</li>
              </ul>
            </div>

            <div className="bg-green-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Payment Information</h3>
              <ul className="space-y-3 text-green-100">
                <li>• Most accommodations accept cash (Euros or Albanian Lek)</li>
                <li>• Credit cards accepted at some hotels in Librazhd</li>
                <li>• ATMs available in Librazhd town center</li>
                <li>• Camping fees paid at visitor center</li>
                <li>• Bring small denominations for easier transactions</li>
                <li>• Consider travel insurance for remote areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}