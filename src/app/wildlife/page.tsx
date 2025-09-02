import { Metadata } from "next"
import { Eye, AlertTriangle, Camera, Binoculars, Shield, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Wildlife of Shebenik National Park - Rare Species & Conservation",
  description: "Discover the incredible wildlife of Shebenik National Park including the endangered Balkan lynx, brown bears, gray wolves, and diverse bird species.",
}

export default function WildlifePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-amber-600 to-orange-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Wildlife of Shebenik
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Home to Europe's most endangered species, where ancient forests shelter bears, lynx, and wolves.
          </p>
        </div>
      </section>

      {/* Featured Species */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flagship Species
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shebenik National Park protects some of Europe's most endangered and elusive wildlife species.
            </p>
          </div>

          {/* Balkan Lynx */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                  <Heart className="h-4 w-4 mr-2" />
                  Critically Endangered
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Balkan Lynx</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Balkan lynx (Lynx lynx balcanicus) is one of Europe's most endangered wild cats, with fewer than 
                  10 individuals remaining in Albania specifically. Shebenik National Park provides crucial habitat for this 
                  magnificent predator, offering the dense forests and rocky terrain it needs to hunt and raise its young.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Distinguished by its distinctive spotted coat, tufted ears, and powerful build, the Balkan lynx plays 
                  a vital role in maintaining the ecological balance of the park's ecosystems. These solitary hunters 
                  primarily feed on deer, small mammals, and birds.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Conservation Status</h4>
                  <p className="text-amber-700 text-sm">
                    Listed as Critically Endangered by IUCN. Active conservation programs are working to protect 
                    remaining populations and their habitats.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl">
                <div className="text-center">
                  <Eye className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Spotting Tips</h4>
                  <ul className="text-left text-gray-700 space-y-2">
                    <li>• Most active during dawn and dusk</li>
                    <li>• Look for tracks near rocky outcrops</li>
                    <li>• Listen for distinctive calls in dense forest</li>
                    <li>• Sightings extremely rare but possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Brown Bears */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Safety Guidelines</h4>
                    <ul className="text-left text-gray-700 space-y-2">
                      <li>• Keep a safe distance (minimum 100m)</li>
                      <li>• Make noise while hiking</li>
                      <li>• Never approach cubs or feeding bears</li>
                      <li>• Store food properly when camping</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <Shield className="h-4 w-4 mr-2" />
                  Least Concern
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">European Brown Bear</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Shebenik National Park is home to a healthy population of European brown bears (Ursus arctos), 
                  one of Europe's largest predators. These magnificent animals find refuge in the park's dense 
                  forests and remote valleys, where they can forage undisturbed.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Brown bears are omnivores with a diet consisting of berries, roots, fish, small mammals, and 
                  vegetation. They are generally shy animals and encounters with humans are extremely rare, 
                  with no recorded attacks in the region.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Population Status</h4>
                  <p className="text-green-700 text-sm">
                    The park supports a stable brown bear population, contributing to the broader Balkan 
                    brown bear conservation efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gray Wolves */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  <Eye className="h-4 w-4 mr-2" />
                  Near Threatened
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Gray Wolf</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The gray wolf (Canis lupus) represents one of the park's most elusive and intelligent predators. 
                  These highly social animals live in family groups called packs and play a crucial role in 
                  maintaining the ecological balance by controlling prey populations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Wolves in Shebenik primarily hunt deer, wild boar, and smaller mammals. Their presence indicates 
                  a healthy ecosystem, as they require large territories and abundant prey to survive.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Pack Behavior</h4>
                  <p className="text-blue-700 text-sm">
                    Wolves live in territorial packs of 4-8 individuals. Listen for their distinctive howling, 
                    especially during dawn and dusk hours.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
                <div className="text-center">
                  <Binoculars className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Tracking Signs</h4>
                  <ul className="text-left text-gray-700 space-y-2">
                    <li>• Large paw prints in mud or snow</li>
                    <li>• Scat along trails and clearings</li>
                    <li>• Howling heard at dawn/dusk</li>
                    <li>• Territorial markings on trees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Wildlife */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Other Notable Species
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The park's diverse habitats support a rich variety of mammals, birds, and other wildlife.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mammals */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mammals</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Wild Boar (Sus scrofa)</li>
                <li>• Red Deer (Cervus elaphus)</li>
                <li>• Roe Deer (Capreolus capreolus)</li>
                <li>• Chamois (Rupicapra rupicapra)</li>
                <li>• European Wildcat (Felis silvestris)</li>
                <li>• Pine Marten (Martes martes)</li>
                <li>• European Otter (Lutra lutra)</li>
                <li>• Lesser White-toothed Shrew</li>
              </ul>
            </div>

            {/* Birds */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Birds of Prey</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Golden Eagle (Aquila chrysaetos)</li>
                <li>• Peregrine Falcon (Falco peregrinus)</li>
                <li>• Eurasian Eagle-Owl (Bubo bubo)</li>
                <li>• Northern Goshawk (Accipiter gentilis)</li>
                <li>• Common Buzzard (Buteo buteo)</li>
                <li>• European Honey Buzzard</li>
                <li>• Eurasian Sparrowhawk</li>
                <li>• Long-eared Owl (Asio otus)</li>
              </ul>
            </div>

            {/* Other Species */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reptiles & Amphibians</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• European Viper (Vipera berus)</li>
                <li>• Balkan Green Lizard</li>
                <li>• Common Wall Gecko</li>
                <li>• Fire Salamander</li>
                <li>• Alpine Newt</li>
                <li>• Common Frog</li>
                <li>• Tree Frog species</li>
                <li>• Various snake species</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Watching Guidelines */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AlertTriangle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wildlife Watching Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Responsible wildlife viewing ensures both visitor safety and animal welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                Safety First
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Maintain safe distances: 100m from bears, 50m from wolves and lynx</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Never approach or feed wild animals</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Make noise while hiking to avoid surprising animals</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Carry bear spray as a precautionary measure</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Travel in groups when possible</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Camera className="h-6 w-6 text-blue-600 mr-3" />
                Best Practices
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Early morning and late afternoon offer the best viewing opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Use binoculars and telephoto lenses for close-up views</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Move slowly and quietly to avoid disturbing wildlife</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Look for tracks, scat, and other signs of animal presence</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Consider hiring a local guide for the best experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Message */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Heart className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Conservation Through Tourism
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Your visit helps fund critical conservation efforts protecting these magnificent species. 
            By choosing responsible wildlife tourism, you directly contribute to the preservation 
            of Europe's last wilderness areas.
          </p>
          <p className="text-lg text-green-200">
            Together, we can ensure future generations will witness the majesty of the Balkan lynx, 
            the power of brown bears, and the intelligence of wolves in their natural habitat.
          </p>
        </div>
      </section>
    </div>
  )
}