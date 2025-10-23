import { Metadata } from "next"
import { CalendarDays, MapPin, Church, Award, Globe, Building2, Users, Landmark } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "About Voskopojë - History of Moscopole & Aromanian Culture",
  description: "Learn about Voskopojë's legendary 18th-century golden age as Moscopole, the cultural capital of the Aromanians, and its remarkable Byzantine heritage.",
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
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/8f/Albania_location_map.svg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight">
            About <span className="font-light">Voskopojë</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-green-50 max-w-3xl mx-auto font-light leading-relaxed">
            A village where history is not just remembered—it is lived, and the spirit of Moscopole endures.
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
                  The Legend of <span className="font-light text-green-600">Moscopole</span>
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Voskopojë, known historically as Moscopole, is more than just a village; it is the living remnant of a legendary city.
                    Nestled high in the Morava Mountains of southeastern Albania, this Aromanian settlement sits at an altitude of 1,160 meters (3,806 ft),
                    offering a cool climate and breathtaking scenery. Once a sprawling metropolis and a cradle of Aromanian culture, it is now a peaceful,
                    resilient village that serves as one of Albania's most important cultural and historical sites.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Visitors today come to marvel at its priceless artistic heritage. The village is home to a collection of Orthodox churches and monasteries
                    filled with stunning 17th and 18th-century frescoes, painted by masters of the era. This unique combination of high-altitude nature and
                    world-class Byzantine art makes Voskopojë a captivating destination for travelers, historians, and art lovers alike.
                  </p>
                </div>
              </div>

              {/* Golden Age */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
                  The Golden Age: An <span className="font-light text-green-600">18th-Century Metropolis</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    During the 18th century, Voskopojë was one of the largest and most prosperous cities in the Balkans, with a population estimated
                    by some to be over 50,000. It was a vital center of Aromanian (Vlach) culture, language, and commerce, maintaining trade routes
                    that stretched from Venice to Constantinople. This wealth and influence fueled an incredible cultural and intellectual boom.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    The city was home to the "New Academy" (Hellenic Academy), a renowned center of learning that attracted scholars from across the Orthodox
                    world. In 1720, monk Georgios Konstantinidis established the first printing press in the Ottoman Balkans outside Constantinople—and only
                    the second printing press in all of Ottoman Europe. Between 1731 and 1769, the press produced approximately 21 works including religious texts,
                    grammar books, and scholarly works in Greek before being destroyed during the 1769 attack on the city.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    This "Jerusalem of the Aromanians" was also a major religious center. In its golden age, the city was said to have over 20 churches,
                    each a masterpiece of post-Byzantine architecture and adorned with art by the era's greatest painters.
                  </p>
                </div>
              </div>

              {/* History's Ebb and Flow */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
                  History's Ebb and <span className="font-light text-green-600">Flow</span>
                </h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-green-500 pl-8">
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      The city's meteoric rise was met with a tragic fall. A series of attacks, beginning in 1769 and culminating in 1788 by the troops
                      of Ali Pasha, led to the city's plunder and destruction. Its economic and cultural institutions were shattered, and its residents
                      scattered across the Balkans, taking their skills and commercial acumen to other cities.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-8">
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      Voskopojë never regained its former glory and shrank from a metropolis to a small mountain village. It endured further hardship
                      during the 20th century, including damage in both World Wars. Yet, through this turmoil, a core of its cultural and religious
                      heritage survived, hidden in the mountain air.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modern Voskopojë */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
                  Modern Voskopojë: A <span className="font-light text-green-600">Resilient Spirit</span>
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Today, Voskopojë is a small, welcoming village with approximately 1,000 permanent residents, based on 2011 census data showing 1,058 inhabitants. Tourism has become its lifeblood, as visitors—both
                    local and international—come to explore its historic legacy. The primary economy is based on guesthouses, local restaurants serving
                    traditional cuisine, and guiding services.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    There is a palpable sense of resilience here. The community, proud of its unique Aromanian heritage, is central to the preservation
                    of its treasures. Efforts are ongoing to protect the fragile frescoes and structures, ensuring that the story of Voskopojë can be
                    told to future generations.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card-feature card-padding-md sticky top-24">
                <h3 className="text-3xl font-extralight text-gray-900 mb-8 tracking-tight">Quick <span className="font-light">Facts</span></h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Altitude</h4>
                      <p className="text-gray-600 font-light">1,160m (3,806 ft)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <CalendarDays className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Golden Age</h4>
                      <p className="text-gray-600 font-light">18th Century</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Church className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Historic Churches</h4>
                      <p className="text-gray-600 font-light">7+ Surviving</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Recognition</h4>
                      <p className="text-gray-600 font-light">World Monuments Fund Listed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Globe className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Location</h4>
                      <p className="text-gray-600 font-light">Korçë County, SE Albania</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Landmark className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Heritage</h4>
                      <p className="text-gray-600 font-light">Aromanian Culture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preservation Section */}
      <section className="py-32 lg:py-40 gradient-primary relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/10 icon-circle icon-circle-lg mx-auto mb-8 backdrop-blur-sm">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-8 tracking-tight">
              Cultural Significance & <span className="font-light">Preservation</span>
            </h2>
            <p className="text-xl lg:text-2xl text-green-50 max-w-3xl mx-auto font-light leading-relaxed">
              Protecting an intact example of 18th-century post-Byzantine ecclesiastical art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight">Artistic Treasures</h3>
              <p className="text-lg text-green-50 leading-relaxed mb-6 font-light">
                Voskopojë's collection of churches represents a unique, intact example of 18th-century post-Byzantine ecclesiastical art.
                The quality and sheer volume of the frescoes are unparalleled in the region. In recognition of this, the Voskopojë churches
                have been listed by the World Monuments Fund as one of the 100 most endangered cultural sites in the world, bringing
                international attention to their preservation.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight">International Recognition</h3>
              <p className="text-lg text-green-50 leading-relaxed font-light">
                Although not currently a UNESCO World Heritage Site, Voskopojë's churches hold significant international heritage designations.
                In 2002, the churches were added to the World Monuments Fund's Watch List of 100 Most Endangered Sites globally. In 2018,
                they were recognized as two of Europe's seven most endangered heritage sites by Europa Nostra. It remains a powerful symbol of
                Aromanian culture and Orthodox heritage in the Balkans. The community continues efforts to protect the fragile frescoes and
                structures, ensuring that the story of Voskopojë can be told to future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-8">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Geography & <span className="font-light text-green-600">Climate</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              A mountain sanctuary with four distinct seasons
            </p>
          </div>

          <div className="grid-responsive-3">
            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Alpine Setting</h3>
                <p className="text-gray-600 font-light">
                  Perched at 1,160 meters, surrounded by pine forests and rolling mountain pastures in the Morava Mountains.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Four Seasons</h3>
                <p className="text-gray-600 font-light">
                  Mild summers, vibrant autumn foliage, snowy winters, and wildflower-filled springs throughout the year.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                  <Globe className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pure Mountain Air</h3>
                <p className="text-gray-600 font-light">
                  Clean, invigorating high-altitude air with pristine water sources and untouched natural landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
