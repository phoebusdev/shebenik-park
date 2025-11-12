import { Metadata } from "next"
import { MapPin, Info, AlertTriangle, Users, Calendar, Car } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "About Shebenik National Park - Park Information",
  description: "Learn about Shebenik National Park - Albania's pristine wilderness featuring glacial lakes, ancient forests, and protected wildlife.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Park Info" }]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight">
            Park <span className="font-light">Information</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-green-50 max-w-3xl mx-auto font-light leading-relaxed">
            Essential facts and information about Shebenik National Park.
          </p>
        </div>
      </section>

      {/* Park Information Cards */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid-responsive-3">
            <div className="card-interactive group card-padding-sm text-center">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Park Location</h3>
              <p className="text-green-600 font-semibold text-lg">Elbasan County</p>
              <p className="text-gray-600 text-sm">Eastern Albania</p>
            </div>
            <div className="card-interactive group card-padding-sm text-center">
              <Info className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Park Size</h3>
              <p className="text-green-600 font-semibold text-lg">345 km²</p>
              <p className="text-gray-600 text-sm">Protected wilderness area</p>
            </div>
            <div className="card-interactive group card-padding-sm text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Management</h3>
              <p className="text-green-600 font-semibold text-lg">IUCN Category II</p>
              <p className="text-gray-600 text-sm">National Park Status</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Park Information */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Park Details */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-12 tracking-tight">
                About the <span className="font-light text-green-600">Park</span>
              </h2>

              <div className="space-y-8">
                {/* Key Facts */}
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Info className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Key Facts</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-green-600 mr-2" />
                          <span>Located in Elbasan County, Eastern Albania</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-green-600 mr-2" />
                          <span>Established in 2008</span>
                        </div>
                        <div className="flex items-center">
                          <Info className="h-4 w-4 text-green-600 mr-2" />
                          <span>345 km² protected area</span>
                        </div>
                      </div>
                      <div className="mt-4 bg-white p-3 rounded">
                        <h4 className="font-semibold text-green-800 mb-2">Park Features:</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• 14 glacial lakes</li>
                          <li>• Mount Shebenik peak (2,253m)</li>
                          <li>• UNESCO World Heritage beech forests (Rrajca forests)</li>
                          <li>• 32% of Albania's flora species</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conservation Status */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Conservation Status</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <Info className="h-4 w-4 text-blue-600 mr-2" />
                          <span>IUCN Category II National Park</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Part of the Balkan Green Belt</span>
                        </div>
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Protected habitat for endangered species</span>
                        </div>
                      </div>
                      <div className="mt-4 bg-white p-3 rounded">
                        <h4 className="font-semibold text-blue-800 mb-2">Protected Species:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Balkan lynx (less than 10 in Albania)</li>
                          <li>• Brown bears</li>
                          <li>• Gray wolves</li>
                          <li>• Golden eagles</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Geographical Features */}
                <div className="bg-amber-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Car className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Geography & Access</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-amber-600 mr-2" />
                          <span>Near Albanian-North Macedonian border</span>
                        </div>
                        <div className="flex items-center">
                          <Info className="h-4 w-4 text-amber-600 mr-2" />
                          <span>Part of the Korab-Koritnik Nature Park complex</span>
                        </div>
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-amber-600 mr-2" />
                          <span>Rugged mountain terrain, elevation 300-2,253m</span>
                        </div>
                      </div>
                      <div className="mt-4 bg-white p-3 rounded">
                        <h4 className="font-semibold text-amber-800 mb-2">Climate:</h4>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Mediterranean mountain climate</li>
                          <li>• Snow cover November-April at higher elevations</li>
                          <li>• Best visiting months: June-September</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Natural Features */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-12 tracking-tight">
                Natural <span className="font-light text-green-600">Features</span>
              </h2>

              <div className="space-y-8">
                {/* Flora */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Flora</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>The park hosts approximately 32% of Albania's plant species, including:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Ancient beech forests (UNESCO protected)</li>
                      <li>• Black pine forests</li>
                      <li>• Alpine meadows</li>
                      <li>• Over 1,300 plant species documented</li>
                      <li>• Several endemic Balkan species</li>
                    </ul>
                  </div>
                </div>

                {/* Fauna */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Fauna</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Home to diverse wildlife including:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Large mammals: Brown bear, gray wolf, wild boar</li>
                      <li>• Critically endangered Balkan lynx</li>
                      <li>• Over 200 bird species</li>
                      <li>• Reptiles and amphibians unique to the Balkans</li>
                      <li>• Rich butterfly diversity</li>
                    </ul>
                  </div>
                </div>

                {/* Hydrology */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Water Features</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Notable aquatic features:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• 14 pristine glacial lakes</li>
                      <li>• Numerous mountain springs</li>
                      <li>• Seasonal waterfalls</li>
                      <li>• Clear mountain streams</li>
                      <li>• Important watershed for the region</li>
                    </ul>
                  </div>
                </div>

                {/* Research & Education */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Scientific Importance</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>The park serves as:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Living laboratory for ecological research</li>
                      <li>• Important site for biodiversity conservation</li>
                      <li>• Climate change monitoring location</li>
                      <li>• Example of pristine Balkan ecosystems</li>
                      <li>• Educational resource for environmental studies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}