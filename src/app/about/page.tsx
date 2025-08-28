import { Metadata } from "next"
import { CalendarDays, MapPin, TreePine, Award, Globe, Shield, Users, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "About Shebenik National Park - History & Conservation",
  description: "Learn about the history, conservation efforts, and UNESCO World Heritage status of Shebenik National Park, Albania's pristine wilderness sanctuary.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-green-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&crop=center')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Shebenik National Park
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            A sanctuary of ancient forests and pristine wilderness, protecting Albania's natural heritage for future generations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Albania's Pristine Wilderness
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Shebenik-Jabllanicë National Park stands as one of Albania's most spectacular natural treasures, 
                    encompassing 34,507.9 hectares of pristine mountainous landscape along the border with North Macedonia. 
                    Located in eastern Albania, north of Lake Ohrid, this remarkable park represents the country's 
                    second-largest protected area and youngest national park.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The park is characterized by its dramatic mountainous terrain, ancient forests, pristine glacial lakes, 
                    and rich biodiversity. Named after its two highest peaks—Mount Shebenik (2,253m) and Mount Jabllanicë—
                    the park showcases the raw beauty of the Balkans' untouched wilderness.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    What makes Shebenik truly special is its role as a refuge for some of Europe's most endangered species 
                    and its preservation of ancient forest ecosystems that have remained virtually unchanged for millennia.
                  </p>
                </div>
              </div>

              {/* History */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  A Brief History
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Military Protection Era</h3>
                    <p className="text-gray-700">
                      For over half a century, the area that is now Shebenik National Park was protected as a military zone 
                      along Albania's border with Macedonia. This isolation, while initially restrictive, inadvertently 
                      preserved the region's pristine natural state, protecting it from development and human interference.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">National Park Designation (2008)</h3>
                    <p className="text-gray-700">
                      In 2008, recognizing the area's exceptional natural value, the Albanian government officially 
                      designated Shebenik-Jabllanicë as a national park. This marked the beginning of systematic 
                      conservation efforts and the opening of this wilderness to responsible tourism and scientific research.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion (2022)</h3>
                    <p className="text-gray-700">
                      In January 2022, the national park was expanded from 33,894.25 hectares to 34,507.9 hectares, 
                      further strengthening protection for critical habitats and wildlife corridors. This expansion 
                      reflects ongoing efforts to enhance conservation of the park's unique ecosystems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Geography & Landscape */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Geography & Landscape
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The park's landscape is a testament to the power of ancient glacial activity. Elevations range from 
                  300 meters at the lowest valleys to over 2,200 meters at the summit of Mount Shebenik. This dramatic 
                  topographical variation creates diverse microclimates and habitats, supporting an extraordinary range 
                  of plant and animal species.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The park features 14 glacial lakes and 3 artificial lakes, remnants of the last ice age that carved 
                  the dramatic valleys and peaks visible today. These pristine water bodies, located at altitudes 
                  between 1,500 and 1,900 meters, provide critical habitat for aquatic life and serve as stunning 
                  focal points for visitors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dense coniferous and deciduous forests blanket the mountainsides, with some areas containing ancient 
                  beech forests that have remained virtually untouched due to their remote location and difficult accessibility.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-green-50 p-8 rounded-2xl sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <CalendarDays className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Established</h4>
                      <p className="text-gray-700">2008 (Expanded 2022)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Size</h4>
                      <p className="text-gray-700">34,507.9 hectares (345 km²)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <TreePine className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Elevation Range</h4>
                      <p className="text-gray-700">300m - 2,253m</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">UNESCO Status</h4>
                      <p className="text-gray-700">World Heritage Site (Partial)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Globe className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-700">Eastern Albania, Elbasan County</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Leaf className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Flora Diversity</h4>
                      <p className="text-gray-700">32% of Albania's plant species</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNESCO Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              UNESCO World Heritage Site
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">World Heritage Recognition</h3>
              <p className="text-green-100 leading-relaxed mb-6">
                Roughly 212,945 hectares of Shebenik National Park's territory are included within the "Ancient and 
                Primeval Beech Forests of the Carpathians and Other Regions of Europe" UNESCO World Heritage Site. 
                This designation recognizes the park's exceptional universal value and its role in preserving Europe's 
                natural heritage.
              </p>
              <p className="text-green-100 leading-relaxed">
                The Rrajca forests within the park are particularly significant, representing some of the most pristine 
                beech forest ecosystems in Europe. These ancient forests have survived ice ages and human interference, 
                maintaining their original character for thousands of years.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Conservation Significance</h3>
              <p className="text-green-100 leading-relaxed mb-6">
                The park's inclusion in this transnational World Heritage property highlights its role in protecting 
                genetic diversity and ecosystem processes that are essential for the long-term survival of European 
                beech forests. These forests serve as natural laboratories for understanding forest ecology and 
                climate adaptation.
              </p>
              <p className="text-green-100 leading-relaxed">
                As part of the European Green Belt initiative, Shebenik National Park serves as a crucial corridor 
                for endangered species and maintains connectivity between protected areas across the Balkans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conservation & Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protecting biodiversity and maintaining ecological integrity for future generations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Users className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IUCN Category II</h3>
                <p className="text-gray-600">
                  Designated as a Category II protected area by the International Union for Conservation of Nature, 
                  ensuring the highest standards of ecosystem protection.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <TreePine className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Habitat Protection</h3>
                <p className="text-gray-600">
                  Safeguarding critical habitats for endangered species including the Balkan lynx, brown bears, 
                  and gray wolves through dedicated conservation programs.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Leaf className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Monitoring</h3>
                <p className="text-gray-600">
                  Ongoing scientific research and monitoring programs track ecosystem health and inform 
                  adaptive management strategies for long-term conservation success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}