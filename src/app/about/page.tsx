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
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight">
            About <span className="font-light">Voskopojë</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-50 max-w-3xl mx-auto font-light leading-relaxed">
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
                  The Legend of <span className="font-light text-primary-600">Moscopole</span>
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
                  The Golden Age: An <span className="font-light text-primary-600">18th-Century Metropolis</span>
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
                  History's Ebb and <span className="font-light text-primary-600">Flow</span>
                </h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-primary-500 pl-8">
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      The city's meteoric rise was met with a tragic fall. A series of attacks, beginning in 1769 and culminating in 1788 by the troops
                      of Ali Pasha, led to the city's plunder and destruction. Its economic and cultural institutions were shattered, and its residents
                      scattered across the Balkans, taking their skills and commercial acumen to other cities.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-500 pl-8">
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
                  Modern Voskopojë: A <span className="font-light text-primary-600">Resilient Spirit</span>
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
                    <div className="bg-primary-100 icon-circle icon-circle-sm flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Altitude</h4>
                      <p className="text-gray-600 font-light">1,160m (3,806 ft)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 icon-circle icon-circle-sm flex-shrink-0">
                      <CalendarDays className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Golden Age</h4>
                      <p className="text-gray-600 font-light">18th Century</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Church className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Historic Churches</h4>
                      <p className="text-gray-600 font-light">7+ Surviving</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Award className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Recognition</h4>
                      <p className="text-gray-600 font-light">World Monuments Fund Listed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Globe className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 tracking-tight">Location</h4>
                      <p className="text-gray-600 font-light">Korçë County, SE Albania</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 icon-circle icon-circle-sm flex-shrink-0">
                      <Landmark className="h-5 w-5 text-primary-600" />
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
            <p className="text-xl lg:text-2xl text-primary-50 max-w-3xl mx-auto font-light leading-relaxed">
              Protecting an intact example of 18th-century post-Byzantine ecclesiastical art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight">Artistic Treasures</h3>
              <p className="text-lg text-primary-50 leading-relaxed mb-6 font-light">
                Voskopojë's collection of churches represents a unique, intact example of 18th-century post-Byzantine ecclesiastical art.
                The quality and sheer volume of the frescoes are unparalleled in the region. In recognition of this, the Voskopojë churches
                have been listed by the World Monuments Fund as one of the 100 most endangered cultural sites in the world, bringing
                international attention to their preservation.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight">International Recognition</h3>
              <p className="text-lg text-primary-50 leading-relaxed font-light">
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

      {/* International Conservation Recognition Section */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="bg-amber-100 icon-circle icon-circle-md mx-auto mb-8">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              International Conservation <span className="font-light text-amber-600">Recognition</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Global organizations recognize Voskopojë's critical heritage value
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card-feature card-padding-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">World Monuments Fund (2002)</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    In 2002, Voskopojë's churches were added to the World Monuments Fund's Watch List of 100 Most Endangered Sites globally.
                    This prestigious designation brings ongoing technical support, international advocacy, and financial assistance to conservation efforts,
                    recognizing the urgent need for preservation of these priceless Byzantine structures.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-feature card-padding-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Europa Nostra "7 Most Endangered" (2018)</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    The post-Byzantine churches of Voskopojë and Vithkuqi were recognized as two of Europe's seven most endangered heritage sites in 2018.
                    This distinction highlights the critical urgency of preservation efforts and brings visibility to conservation needs across
                    the broader Balkan heritage community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-card border-l-4 border-amber-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Conservation Challenges & Current Efforts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-amber-900 mb-4">Critical Threats</h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Water Damage:</strong> Roof deterioration and water infiltration threaten interior frescoes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Structural Issues:</strong> Walls and foundations require stabilization and reinforcement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Fresco Deterioration:</strong> Pigment loss, mold, and environmental damage to medieval artwork</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Limited Funding:</strong> Restoration costs exceed available local and national resources</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-4">Active Restoration</h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-600 font-bold">✓</span>
                    <span><strong>Church of St. Michael (2024):</strong> Structural stabilization and roof repairs underway</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-600 font-bold">✓</span>
                    <span><strong>EU Funding Proposals:</strong> Comprehensive restoration plans under review for European grants</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-600 font-bold">✓</span>
                    <span><strong>International Partnerships:</strong> WMF and Europa Nostra provide technical guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-600 font-bold">✓</span>
                    <span><strong>Community Involvement:</strong> Local residents advocate for heritage preservation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline Section */}
      <section className="py-32 lg:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="bg-blue-100 icon-circle icon-circle-md mx-auto mb-8">
              <CalendarDays className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              A Timeline of <span className="font-light text-blue-600">Rise & Fall</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              From golden age metropolis to mountain village: Four centuries of Voskopojë's dramatic history
            </p>
          </div>

          <div className="space-y-12">
            {/* Golden Age */}
            <div className="border-l-4 border-primary-500 pl-8">
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-3xl font-bold text-primary-900 mb-6">The Golden Age (1700-1769)</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-200 text-primary-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">~1700</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Greek College Established</h4>
                      <p className="text-gray-600 font-light">Formal education begins in Voskopojë, laying groundwork for intellectual hub</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-200 text-primary-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">1720</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">First Printing Press Established</h4>
                      <p className="text-gray-600 font-light">Monk Georgios Konstantinidis founds the first printing press in the Ottoman Balkans outside Constantinople</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-200 text-primary-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">1721</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Church of St. Nicholas Construction Begins</h4>
                      <p className="text-gray-600 font-light">Major architectural and artistic project initiated during peak prosperity period</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-200 text-primary-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">1743</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">New Academy Founded</h4>
                      <p className="text-gray-600 font-light">The only Christian university in the Ottoman Empire established in Voskopojë, attracting scholars from across Orthodox world</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-200 text-primary-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">1750</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">New Academy Building Completed</h4>
                      <p className="text-gray-600 font-light">St. Nicholas northern portico added; city at peak prosperity with 35,000-70,000 residents and 24 active churches</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-200 text-primary-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">Mid-1700s</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Printing Press Peak Activity</h4>
                      <p className="text-gray-600 font-light">Between 1731-1769, the press produces approximately 21 works including religious texts and educational materials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Catastrophic Decline */}
            <div className="border-l-4 border-red-500 pl-8">
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-3xl font-bold text-red-900 mb-6">Catastrophic Decline (1769-1788)</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-200 text-red-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">1769</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">First Major Attack</h4>
                      <p className="text-gray-600 font-light">Muslim Albanian bands attack city in retaliation for pro-Russian sentiment during Orlov Revolt. New Academy destroyed, printing press destroyed ending publication activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-200 text-red-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">1770s</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Series of Escalating Raids</h4>
                      <p className="text-gray-600 font-light">Continued attacks on weakened city, population declines sharply, merchants flee, economic collapse accelerates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-200 text-red-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">1788</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Final Destruction</h4>
                      <p className="text-gray-600 font-light">Ali Pasha of Ioannina's troops raze remaining structures. City "practically destroyed," survivors forced to emigrate across Balkans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diaspora & Legacy */}
            <div className="border-l-4 border-purple-500 pl-8">
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-3xl font-bold text-purple-900 mb-6">Diaspora & Living Legacy (1788-Present)</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-200 text-purple-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">1788+</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Major Emigration Wave</h4>
                      <p className="text-gray-600 font-light">Voskopojë families scatter across Thessaly and Macedonia. Commerce shifts to Korçë and Berat. Voskopojë becomes small mountain village</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-200 text-purple-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">19th Century</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Survival Against Odds</h4>
                      <p className="text-gray-600 font-light">Aramonian heritage and culture preserved by resilient community. Seven churches survive centuries of neglect and damage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-200 text-purple-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">20th Century</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Further Hardship</h4>
                      <p className="text-gray-600 font-light">Damage during World Wars, population decline continues, economic hardship persists. Yet cultural heritage endures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-200 text-purple-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">2002</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">World Monuments Fund Recognition</h4>
                      <p className="text-gray-600 font-light">Churches added to WMF Watch List of 100 Most Endangered Sites, bringing international attention and support</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-200 text-purple-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">2018</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Europa Nostra "7 Most Endangered"</h4>
                      <p className="text-gray-600 font-light">Churches recognized as among Europe's most endangered heritage sites, highlighting urgency of preservation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-200 text-purple-900 font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-sm">2024+</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Active Restoration</h4>
                      <p className="text-gray-600 font-light">Ongoing restoration efforts at St. Michael, EU funding proposals, international partnerships preserving irreplaceable heritage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-primary-50/30 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="bg-primary-100 icon-circle icon-circle-md mx-auto mb-8">
              <MapPin className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Geography & <span className="font-light text-primary-600">Climate</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              A mountain sanctuary with four distinct seasons
            </p>
          </div>

          <div className="grid-responsive-3">
            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-primary-100 icon-circle icon-circle-md mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Alpine Setting</h3>
                <p className="text-gray-600 font-light">
                  Perched at 1,160 meters, surrounded by pine forests and rolling mountain pastures in the Morava Mountains.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-primary-100 icon-circle icon-circle-md mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Four Seasons</h3>
                <p className="text-gray-600 font-light">
                  Mild summers, vibrant autumn foliage, snowy winters, and wildflower-filled springs throughout the year.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer">
                <div className="bg-primary-100 icon-circle icon-circle-md mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
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

      {/* Aramonian Heritage Section */}
      <section className="py-32 lg:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="bg-purple-100 icon-circle icon-circle-md mx-auto mb-8">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Aramonian Heritage: <span className="font-light text-purple-600">Language & Culture</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              An Eastern Romance language preserved in mountain communities for centuries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card-feature card-padding-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What is Aramonian?</h3>
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                Aramonian (also called Vlach) is an Eastern Romance language—a linguistic descendant of Latin preserved in Balkan mountain communities.
                Despite its name suggesting Greek origins, it is more closely related to Romanian than Greek, sharing vocabulary and grammar structures
                with that distant cousin language.
              </p>
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                The language developed in isolation within mountain communities, creating a unique linguistic heritage that bridges the Romance and Balkan worlds.
                It represents a living connection to ancient Roman populations and medieval Balkan history.
              </p>

              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Global Status</h4>
              <ul className="space-y-2 text-gray-600 font-light text-sm">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Global Speakers (2018):</strong> ~210,000 people</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>In Albania:</strong> ~50,000 speakers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Status:</strong> Endangered language in most regions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Threats:</strong> Education policies, urban migration, assimilation pressures</span>
                </li>
              </ul>
            </div>

            <div className="card-feature card-padding-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Voskopojë's Role</h3>
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                Voskopojë stands as the most famous and historically significant Aramonian settlement, known as the "Jerusalem of the Aromanians."
                For centuries, it has been the cultural and spiritual heart of the Aramonian diaspora, preserving language, traditions, and identity
                through periods of empire, conflict, and displacement.
              </p>

              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Cultural Significance</h4>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span><strong>Linguistic Center:</strong> Preserves Aramonian language and traditions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span><strong>Religious Center:</strong> Serves Orthodox Aramonian communities spiritually</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span><strong>Educational Hub:</strong> Aramonian taught in village schools</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span><strong>Intellectual Output:</strong> Center of Aramonian scholarly and artistic activity</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-card border-l-4 border-purple-600 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Living Linguistic Tradition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Historical Achievement</h4>
                <p className="text-gray-700 font-light mb-4">
                  In 1770, scholars in Voskopojë produced the first multilingual dictionary documenting Greek, Albanian, Aramonian, and Bulgarian—
                  a remarkable early linguistic achievement that demonstrates the village's intellectual sophistication and multicultural sophistication.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Modern Preservation</h4>
                <p className="text-gray-700 font-light mb-4">
                  Today, some Voskopojë residents still speak Aramonian, maintaining an unbroken linguistic connection to ancient Roman populations.
                  Language preservation efforts are increasingly important as younger generations adopt dominant regional languages in school and commerce.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-card border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit & Experience Aramonian Culture</h3>
            <p className="text-gray-700 font-light mb-6">
              When visiting Voskopojë, you're entering a living cultural space where Aramonian heritage persists despite historical challenges.
              Local residents are proud custodians of this unique heritage and often welcome visitors interested in learning about their language,
              traditions, and history. Hiring a local guide not only ensures church access but also provides invaluable insights into Aramonian
              perspectives on Voskopojë's past and present.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
