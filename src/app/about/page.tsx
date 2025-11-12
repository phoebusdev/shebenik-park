import { Metadata } from "next"
import { CalendarDays, MapPin, TreePine, Award, Globe, Shield, Users, Leaf } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "About Shebenik National Park - History & Conservation",
  description: "Learn about the history, conservation efforts, and UNESCO World Heritage status of Shebenik National Park, Albania's pristine wilderness sanctuary.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "About" }]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight">
            About <span className="font-light">Shebenik</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-green-50 max-w-3xl mx-auto font-light leading-relaxed">
            A sanctuary of ancient forests and pristine wilderness, protecting Albania's natural heritage for future generations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Introduction */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
                  Albania's <span className="font-light text-green-600">Pristine Wilderness</span>
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Shebenik-Jabllanicë National Park stands as one of Albania's most spectacular natural treasures,
                    encompassing 34,507.9 hectares of pristine mountainous landscape along the border with North Macedonia.
                    Located in eastern Albania, north of Lake Ohrid, this remarkable park represents the country's
                    second-largest protected area and youngest national park.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    The park is characterized by its dramatic mountainous terrain, ancient forests, pristine glacial lakes,
                    and rich biodiversity. Named after its two highest peaks—Mount Shebenik (2,253m) and Mount Jabllanicë—
                    the park showcases the raw beauty of the Balkans' untouched wilderness.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    What makes Shebenik truly special is its role as a refuge for some of Europe's most endangered species
                    and its preservation of ancient forest ecosystems that have remained virtually unchanged for millennia.
                  </p>
                </div>
              </div>

              {/* History */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
                  A Brief <span className="font-light text-green-600">History</span>
                </h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-green-500 pl-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">Military Protection Era</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      For over half a century, the area that is now Shebenik National Park was protected as a military zone
                      along Albania's border with Macedonia. This isolation, while initially restrictive, inadvertently
                      preserved the region's pristine natural state, protecting it from development and human interference.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">National Park Designation (2008)</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      In 2008, recognizing the area's exceptional natural value, the Albanian government officially
                      designated Shebenik-Jabllanicë as a national park. This marked the beginning of systematic
                      conservation efforts and the opening of this wilderness to responsible tourism and scientific research.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">Expansion (2022)</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      In January 2022, the national park was expanded from 33,894.25 hectares to 34,507.9 hectares,
                      further strengthening protection for critical habitats and wildlife corridors. This expansion
                      reflects ongoing efforts to enhance conservation of the park's unique ecosystems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Geography & Landscape */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
                  Geography & <span className="font-light text-green-600">Landscape</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  The park's landscape is a testament to the power of ancient glacial activity. Elevations range from
                  300 meters at the lowest valleys to over 2,200 meters at the summit of Mount Shebenik. This dramatic
                  topographical variation creates diverse microclimates and habitats, supporting an extraordinary range
                  of plant and animal species.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  The park features 14 glacial lakes and 3 artificial lakes, remnants of the last ice age that carved
                  the dramatic valleys and peaks visible today. These pristine water bodies, located at altitudes
                  between 1,500 and 1,900 meters, provide critical habitat for aquatic life and serve as stunning
                  focal points for visitors.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Dense coniferous and deciduous forests blanket the mountainsides, with some areas containing ancient
                  beech forests that have remained virtually untouched due to their remote location and difficult accessibility.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card-feature card-padding-md sticky top-24">
                <h3 className="text-3xl font-extralight text-gray-900 mb-8 tracking-tight">Quick <span className="font-light">Facts</span></h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <CalendarDays className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Established</h4>
                      <p className="text-gray-600 font-light">2008 (Expanded 2022)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Size</h4>
                      <p className="text-gray-600 font-light">34,507.9 hectares (345 km²)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <TreePine className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Elevation Range</h4>
                      <p className="text-gray-600 font-light">300m - 2,253m</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">UNESCO Status</h4>
                      <p className="text-gray-600 font-light">World Heritage Site (Partial)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Globe className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Location</h4>
                      <p className="text-gray-600 font-light">Eastern Albania, Elbasan County</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Flora Diversity</h4>
                      <p className="text-gray-600 font-light">32% of Albania's plant species</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNESCO Section */}
      <section className="py-32 lg:py-40 gradient-primary relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/10 icon-circle icon-circle-lg mx-auto mb-8 backdrop-blur-sm">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-8 tracking-tight">
              UNESCO World <span className="font-light">Heritage</span>
            </h2>
            <p className="text-xl lg:text-2xl text-green-50 max-w-3xl mx-auto font-light leading-relaxed">
              Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight">World Heritage Recognition</h3>
              <p className="text-lg text-green-50 leading-relaxed mb-6 font-light">
                Roughly 212,945 hectares of Shebenik National Park's territory are included within the "Ancient and
                Primeval Beech Forests of the Carpathians and Other Regions of Europe" UNESCO World Heritage Site.
                This designation recognizes the park's exceptional universal value and its role in preserving Europe's
                natural heritage.
              </p>
              <p className="text-lg text-green-50 leading-relaxed font-light">
                The Rrajca forests within the park are particularly significant, representing some of the most pristine
                beech forest ecosystems in Europe. These ancient forests have survived ice ages and human interference,
                maintaining their original character for thousands of years.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight">Conservation Significance</h3>
              <p className="text-lg text-green-50 leading-relaxed mb-6 font-light">
                The park's inclusion in this transnational World Heritage property highlights its role in protecting
                genetic diversity and ecosystem processes that are essential for the long-term survival of European
                beech forests. These forests serve as natural laboratories for understanding forest ecology and
                climate adaptation.
              </p>
              <p className="text-lg text-green-50 leading-relaxed font-light">
                As part of the European Green Belt initiative, Shebenik National Park serves as a crucial corridor
                for endangered species and maintains connectivity between protected areas across the Balkans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-8">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Conservation & <span className="font-light text-green-600">Management</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Protecting biodiversity and maintaining ecological integrity for future generations
            </p>
          </div>

          <div className="grid-responsive-3">
            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">IUCN Category II</h3>
                <p className="text-gray-600 font-light">
                  Designated as a Category II protected area by the International Union for Conservation of Nature,
                  ensuring the highest standards of ecosystem protection.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                  <TreePine className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Habitat Protection</h3>
                <p className="text-gray-600 font-light">
                  Safeguarding critical habitats for endangered species including the Balkan lynx, brown bears,
                  and gray wolves through dedicated conservation programs.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Research & Monitoring</h3>
                <p className="text-gray-600 font-light">
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