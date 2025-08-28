import { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, Info, AlertTriangle, Users, Calendar, Car } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Shebenik National Park - Visitor Information & Emergency Contacts",
  description: "Get in touch with Shebenik National Park visitor center, emergency services, and park administration for assistance planning your visit.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 to-green-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop&crop=center')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            Get in touch with our team for assistance, information, and emergency support.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visitor Center</h3>
              <p className="text-green-600 font-semibold text-lg">+355 69 6223130</p>
              <p className="text-gray-600 text-sm">Information & Bookings</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency</h3>
              <p className="text-red-600 font-semibold text-lg">+355 67 207 9658</p>
              <p className="text-gray-600 text-sm">24/7 Emergency Support</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Park Administration</h3>
              <p className="text-blue-600 font-semibold text-lg">+355 51 423 738</p>
              <p className="text-gray-600 text-sm">Forest Directorate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                {/* Visitor Center */}
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Info className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Visitor Center</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-green-600 mr-2" />
                          <span>Fushë Studë Village, Elbasan County, Albania</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-green-600 mr-2" />
                          <span>+355 69 6223130</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-green-600 mr-2" />
                          <span>info@shebenik-park.al</span>
                        </div>
                      </div>
                      <div className="mt-4 bg-white p-3 rounded">
                        <h4 className="font-semibold text-green-800 mb-2">Services Provided:</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Trail maps and conditions</li>
                          <li>• Accommodation bookings</li>
                          <li>• Guided tour arrangements</li>
                          <li>• Weather and safety briefings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Forest Directorate */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Librazhd Forest Directorate</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Near Train Station, Librazhd, Albania</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-blue-600 mr-2" />
                          <span>+355 51 423 738</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-blue-600 mr-2" />
                          <span>+355 67 207 9658 (Mobile)</span>
                        </div>
                      </div>
                      <div className="mt-4 bg-white p-3 rounded">
                        <h4 className="font-semibold text-blue-800 mb-2">Administrative Services:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Park permits and regulations</li>
                          <li>• Research permissions</li>
                          <li>• Conservation inquiries</li>
                          <li>• Official park information</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contacts */}
                <div className="bg-red-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Contacts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-red-800 mb-2">Park Emergency</h4>
                          <p className="text-red-700">+355 67 207 9658</p>
                          <p className="text-red-600 text-sm">24/7 Mountain Rescue</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-800 mb-2">National Emergency</h4>
                          <p className="text-red-700">Police: 129</p>
                          <p className="text-red-700">Medical: 127</p>
                          <p className="text-red-700">Fire: 128</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Visitor Information
              </h2>
              
              <div className="space-y-8">
                {/* Operating Hours */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-gray-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Operating Hours</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Summer Season (June - September)</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                          <p className="font-medium">Monday - Thursday</p>
                          <p>9:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                          <p className="font-medium">Friday - Sunday</p>
                          <p>9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Winter Season (October - May)</h4>
                      <div className="text-sm text-gray-700">
                        <p className="font-medium">Daily</p>
                        <p>9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-amber-100 p-3 rounded">
                    <p className="text-amber-800 text-sm">
                      <strong>Note:</strong> Hours may vary during holidays or extreme weather conditions. 
                      Call ahead to confirm.
                    </p>
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-gray-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Languages</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-700"><strong>Albanian:</strong> All staff</p>
                    <p className="text-gray-700"><strong>English:</strong> Visitor center and some guides</p>
                    <p className="text-gray-700"><strong>Italian:</strong> Limited availability</p>
                    <p className="text-gray-700"><strong>German:</strong> Some tour guides</p>
                  </div>
                  
                  <div className="mt-4 bg-blue-100 p-3 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Tip:</strong> Consider bringing a translation app or phrasebook for better communication 
                      with local villagers and some staff members.
                    </p>
                  </div>
                </div>

                {/* Special Services */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-gray-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Special Services</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Group Visits</h4>
                      <p className="text-sm text-gray-700">
                        Advanced booking required for groups of 8 or more. Special rates available.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Research Permits</h4>
                      <p className="text-sm text-gray-700">
                        Scientific research requires permits from Forest Directorate. Apply 30 days in advance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Educational Programs</h4>
                      <p className="text-sm text-gray-700">
                        School and university programs available. Contact visitor center for details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Location & Access
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed information about reaching Shebenik National Park and its facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Park Entrances</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-3">Main Entrance - Fushë Studë</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <Car className="h-4 w-4 text-green-600 mr-2" />
                      <span>25 km from Librazhd (45 minutes)</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="h-4 w-4 text-green-600 mr-2" />
                      <span>Visitor Center located here</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-green-600 mr-2" />
                      <span>Accommodation available</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-3">Northern Entrance - Stëblevë</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <Car className="h-4 w-4 text-blue-600 mr-2" />
                      <span>34 km from Librazhd (1 hour)</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="h-4 w-4 text-blue-600 mr-2" />
                      <span>Access to northern trails</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      <span>Limited accommodation</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-purple-800 mb-3">Southern Entrance - Rrajca</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <Car className="h-4 w-4 text-purple-600 mr-2" />
                      <span>50 km from Librazhd (1 hour 15 minutes)</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="h-4 w-4 text-purple-600 mr-2" />
                      <span>UNESCO forest access</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-purple-600 mr-2" />
                      <span>Guesthouse Esat Bogdani</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transportation Tips</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-3">Recommended Vehicle</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 4×4 or high-clearance SUV strongly recommended</li>
                    <li>• Mountain roads can be challenging</li>
                    <li>• Weather conditions affect road quality</li>
                    <li>• Full fuel tank essential</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-3">Public Transport</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Daily minibus from Librazhd to Fushë Studë</li>
                    <li>• Departs around noon</li>
                    <li>• Return transport not guaranteed</li>
                    <li>• Contact visitor center for current schedule</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-purple-800 mb-3">GPS Coordinates</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Visitor Center:</strong></p>
                    <p className="font-mono text-sm">41.1844° N, 20.3456° E</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Note: GPS may be unreliable in remote areas. Always carry paper maps as backup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about visiting Shebenik National Park.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Is park entrance free?</h3>
                <p className="text-gray-700 text-sm">
                  Yes, entrance to Shebenik National Park is free. However, camping fees (€3-5 per person) 
                  and some guided services may have costs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Do I need permits for hiking?</h3>
                <p className="text-gray-700 text-sm">
                  No special permits are required for hiking on designated trails. Register at the visitor 
                  center for safety and trail information.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Are guided tours available?</h3>
                <p className="text-gray-700 text-sm">
                  Yes, local guides can be arranged through the visitor center. Recommended for wildlife 
                  watching and challenging trails.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Is cell phone coverage available?</h3>
                <p className="text-gray-700 text-sm">
                  Coverage is limited in remote areas. The visitor center area has basic coverage, 
                  but don't rely on phones for emergency communication in the backcountry.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Can I visit in winter?</h3>
                <p className="text-gray-700 text-sm">
                  The park is open year-round, but many high-elevation trails become inaccessible due to snow. 
                  Winter visits require proper equipment and experience.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">What currency is accepted?</h3>
                <p className="text-gray-700 text-sm">
                  Both Albanian Lek (ALL) and Euros are accepted. Cash is preferred as card payment 
                  options are very limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Plan Your Visit Today
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Contact our visitor center for personalized assistance with your Shebenik National Park adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+355696223130" 
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Visitor Center
            </a>
            <a 
              href="mailto:info@shebenik-park.al" 
              className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors inline-flex items-center justify-center border border-teal-500"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}