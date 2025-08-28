import { Metadata } from "next"
import { MapPin, Phone, Euro, Wifi, Car, Coffee, Mountain, Users, Star, Home, Tent, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Accommodation Near Shebenik National Park - Guesthouses, Hotels & Camping",
  description: "Find accommodation near Shebenik National Park including guesthouses, hotels in Librazhd, and camping options for your wilderness adventure.",
}

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop&crop=center')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Stay Near the Park
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            From cozy guesthouses to wilderness camping, find the perfect accommodation for your Shebenik adventure.
          </p>
        </div>
      </section>

      {/* Accommodation Types Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Home className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Guesthouses</h3>
              <p className="text-gray-600">Authentic Albanian hospitality in traditional village settings</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hotels in Librazhd</h3>
              <p className="text-gray-600">Modern amenities and comfort 30-50km from park entrances</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Tent className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Camping Sites</h3>
              <p className="text-gray-600">Wilderness camping in designated areas within the park</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guesthouses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Local Guesthouses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience authentic Albanian hospitality at family-run guesthouses near the park entrances.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Guesthouse Esat Bogdani */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Guesthouse Esat Bogdani</h3>
                  <p className="text-green-700 font-medium">Rrajca Village</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end mb-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-600">Family-run</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <Euro className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">€10</p>
                  <p className="text-sm text-gray-600">per night (incl. breakfast)</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">50km</p>
                  <p className="text-sm text-gray-600">from Librazhd</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Located in the scenic Rrajca village near the UNESCO World Heritage beech forests. 
                This family-run guesthouse offers traditional Albanian hospitality with home-cooked 
                meals and local knowledge of hiking trails.
              </p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Amenities & Services</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <Coffee className="h-4 w-4 text-green-600 mr-2" />
                    Traditional breakfast included
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Users className="h-4 w-4 text-green-600 mr-2" />
                    Family rooms available
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Mountain className="h-4 w-4 text-green-600 mr-2" />
                    Trail information & guides
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Car className="h-4 w-4 text-green-600 mr-2" />
                    Parking available
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-700 mr-2" />
                  <div>
                    <p className="font-semibold text-green-800">Contact Information</p>
                    <p className="text-green-700">+355 683 367 450</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visitor Centre Accommodation */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Visitor Centre Accommodation</h3>
                  <p className="text-blue-700 font-medium">Fushë Studë Village</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end mb-1">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    {[4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-gray-300" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Basic accommodation</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <Euro className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">€10</p>
                  <p className="text-sm text-gray-600">per night (incl. breakfast)</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">25km</p>
                  <p className="text-sm text-gray-600">from Librazhd</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Simple accommodation at the park's main visitor center, run by Xhek Nezha. 
                Perfect for early starts on hiking trails and closest to park information services. 
                Basic but clean facilities with essential amenities.
              </p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Amenities & Services</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <Coffee className="h-4 w-4 text-blue-600 mr-2" />
                    Basic breakfast included
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Mountain className="h-4 w-4 text-blue-600 mr-2" />
                    Direct access to trails
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                    Visitor center on-site
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Car className="h-4 w-4 text-blue-600 mr-2" />
                    Parking available
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-700 mr-2" />
                  <div>
                    <p className="font-semibold text-blue-800">Contact Information</p>
                    <p className="text-blue-700">+355 696 666 264</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Joen Village Guesthouse */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Joen Village Guesthouse</h3>
                  <p className="text-purple-700 font-medium">Fushë Studën Village</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end mb-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-600">Scenic location</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <Euro className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">€12-15</p>
                  <p className="text-sm text-gray-600">per night</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">25km</p>
                  <p className="text-sm text-gray-600">from Librazhd</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Charming guesthouse in the picturesque Fushë Studën village with beautiful mountain views. 
                Several hiking trails to nearby peaks start directly from the village, making it perfect 
                for hiking enthusiasts.
              </p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-purple-800 mb-3">Amenities & Services</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <Mountain className="h-4 w-4 text-purple-600 mr-2" />
                    Mountain views
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Users className="h-4 w-4 text-purple-600 mr-2" />
                    Group accommodations
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Coffee className="h-4 w-4 text-purple-600 mr-2" />
                    Local cuisine available
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Car className="h-4 w-4 text-purple-600 mr-2" />
                    Vehicle access
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="font-semibold text-purple-800 mb-1">Booking Required</p>
                <p className="text-purple-700 text-sm">Contact visitor center for availability and reservations</p>
              </div>
            </div>

            {/* Additional Village Options */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Village Options</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Stëblevë Village</h4>
                  <p className="text-amber-700 text-sm mb-2">
                    Limited guesthouse options in this northern village, 34km from Librazhd. 
                    Quiet location with access to northern park trails.
                  </p>
                  <p className="text-xs text-amber-600">Contact visitor center for current availability</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Qarrishta Village</h4>
                  <p className="text-amber-700 text-sm mb-2">
                    Central location with some local accommodation options. 32km from Librazhd 
                    with good access to various trail systems.
                  </p>
                  <p className="text-xs text-amber-600">Advance booking recommended</p>
                </div>
              </div>
              
              <div className="bg-amber-100 p-4 rounded-lg mt-6">
                <p className="font-semibold text-amber-800 mb-2">Booking Village Accommodation</p>
                <p className="text-amber-700 text-sm">
                  Village guesthouses typically operate on a personal basis. Contact the visitor center 
                  at +355 69 6223130 for current availability and to arrange bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels in Librazhd */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hotels in Librazhd
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern accommodations with full amenities, 30-50km from park entrances via mountain roads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Librazhd?</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
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

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Hotels</h3>
              <p className="text-gray-700 mb-6">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Tent className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wilderness Camping
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the park's pristine wilderness with designated camping areas and backcountry options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Designated Camping Areas</h3>
              <p className="text-gray-700 mb-6">
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
          
          <div className="mt-16 bg-amber-50 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning Your Camping Trip</h3>
              <p className="text-gray-700">Essential information for a safe and enjoyable wilderness camping experience.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mountain className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Best Locations</h4>
                <p className="text-sm text-gray-700">
                  Near glacial lakes and forest clearings. Ask at visitor center for current 
                  available sites and trail access.
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Group Limits</h4>
                <p className="text-sm text-gray-700">
                  Maximum 8 people per campsite to minimize environmental impact. 
                  Larger groups should use multiple sites.
                </p>
              </div>
              
              <div className="text-center">
                <Phone className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Reservations</h4>
                <p className="text-sm text-gray-700">
                  Contact visitor center (+355 69 6223130) to check availability 
                  and make reservations, especially during peak season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Book?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Contact our recommended accommodations or the visitor center for assistance with bookings and travel planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Booking Tips</h3>
              <ul className="space-y-3 text-indigo-100">
                <li>• Book village guesthouses 1-2 weeks in advance</li>
                <li>• Summer season (July-August) requires early booking</li>
                <li>• Many accommodations prefer phone contact</li>
                <li>• Confirm meal arrangements when booking</li>
                <li>• Ask about group discounts for larger parties</li>
                <li>• Check cancellation policies before booking</li>
              </ul>
            </div>
            
            <div className="bg-indigo-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Payment Information</h3>
              <ul className="space-y-3 text-indigo-100">
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