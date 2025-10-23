import { Metadata } from "next"
import { Church, MapPin, Mountain, Users, Shield, Camera, Landmark } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Attractions in Voskopojë - Byzantine Churches & Historic Sites",
  description: "Explore the surviving treasures of Voskopojë: magnificent 18th-century Byzantine churches with priceless frescoes, historic monasteries, and the living legacy of Moscopole.",
}

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Attractions" }]} />

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
            The Surviving <span className="font-light">Treasures</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-green-50 max-w-3xl mx-auto font-light leading-relaxed">
            Voskopojë's greatest legacy is its art. Priceless frescoes and masterpieces of post-Byzantine architecture await.
          </p>
        </div>
      </section>

      {/* Featured Churches */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              The Byzantine <span className="font-light text-green-600">Churches</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Living museums where thousands of square meters of breathtaking post-Byzantine frescoes cover the walls.
            </p>
          </div>

          {/* St. Nicholas Church */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
                  <Landmark className="h-4 w-4 mr-2" />
                  Crown Jewel
                </div>
                <h3 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6 tracking-tight">St. Nicholas <span className="font-light">Church</span></h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  Considered by many to be the crown jewel of Voskopojë, St. Nicholas Church (built in 1721) is a monumental basilica that showcases the peak of the village's artistic achievement. Located conveniently in the center of the village, the church is famous for its magnificent, brightly-colored frescoes painted by the renowned master David Selenica.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  His work is celebrated for its realism, emotional depth, and intricate detail, particularly the vivid depictions of saints and the compelling portrait of the church's donor. The exterior is just as impressive, featuring an open arcade (narthex) with columns, where the famous Zografi brothers painted vivid frescoes depicting scenes from the Last Judgment with dramatic flair.
                </p>
                <div className="card-base p-6">
                  <h4 className="font-medium text-green-800 mb-2 tracking-tight">Essential Visit</h4>
                  <p className="text-green-700 text-sm font-light">
                    A visit to St. Nicholas is an essential Voskopojë experience. Don't miss the intricate details of David Selenica's masterwork.
                  </p>
                </div>
              </div>
              <div className="card-feature p-8">
                <div className="text-center">
                  <div className="bg-green-100 icon-circle icon-circle-lg mx-auto mb-6">
                    <Church className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">Key Features</h4>
                  <ul className="text-left text-gray-600 space-y-3 font-light">
                    <li>• Built in 1721</li>
                    <li>• Central village location</li>
                    <li>• Frescoes by David Selenica</li>
                    <li>• Zografi brothers' Last Judgment scene</li>
                    <li>• Ornate open arcade portico</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Virgin Mary Cathedral */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="card-feature p-8">
                  <div className="text-center">
                    <div className="bg-green-100 icon-circle icon-circle-lg mx-auto mb-6">
                      <MapPin className="h-10 w-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">Visiting Info</h4>
                    <ul className="text-left text-gray-600 space-y-3 font-light">
                      <li>• Hilltop location overlooks village</li>
                      <li>• Largest surviving church</li>
                      <li>• Vast interior gallery</li>
                      <li>• Originally held 1,000 worshippers</li>
                      <li>• Brings sense of city's former scale</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
                  <Landmark className="h-4 w-4 mr-2" />
                  Monumental
                </div>
                <h3 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6 tracking-tight">Virgin Mary <span className="font-light">Cathedral</span></h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  Once the main cathedral of the bustling city of Moscopole, the Virgin Mary Church (built ~1699, decorated 1712) is the largest surviving church in the village. Its grand, basilica-style structure was designed to hold over 1,000 worshippers, giving you a sense of the city's former scale.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Located on a hill overlooking the village, its interior is a vast gallery of 18th-century art. The iconostasis was once one of the most elaborate in the Balkans. Though it has suffered damage over the centuries, the sheer expanse of the frescoes and the building's imposing architecture make it a powerful and moving site to explore.
                </p>
              </div>
            </div>
          </div>

          {/* St. John the Baptist Monastery */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
                  <Mountain className="h-4 w-4 mr-2" />
                  Forest Sanctuary
                </div>
                <h3 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6 tracking-tight">St. John the Baptist <span className="font-light">Monastery</span></h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  A visit to this monastery (built 1632, painted 1659) is as much about the journey as the destination. Located on a forested hill a few kilometers outside the main village, reaching it requires a scenic hike or a drive on a rural road. This relative isolation has helped preserve its tranquil, spiritual atmosphere.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  The monastery complex includes a stunning cross-shaped Byzantine church, its interior walls entirely covered in 17th-century frescoes that predate the village's golden age. The paintings are rich in theological narrative and color, offering a profound sense of peace and spectacular views of the surrounding valley.
                </p>
              </div>
              <div className="card-feature p-8">
                <div className="text-center">
                  <div className="bg-green-100 icon-circle icon-circle-lg mx-auto mb-6">
                    <Mountain className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">Access & Hiking</h4>
                  <ul className="text-left text-gray-600 space-y-3 font-light">
                    <li>• 45-60 minute hike one way</li>
                    <li>• Scenic forest trail</li>
                    <li>• Cross-shaped Byzantine church</li>
                    <li>• 17th-century frescoes</li>
                    <li>• Panoramic valley views</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other Churches */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-12 tracking-tight">Other Notable <span className="font-light text-green-600">Churches</span></h3>
            <div className="grid-responsive-2">
              <div className="card-feature card-padding-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">St. Athanasius Church</h4>
                <p className="text-gray-600 font-light mb-4">
                  Set on a prominent hill to the north of the village, St. Athanasius Church (built 1724) stands as a lonely, beautiful sentinel. Serves as the village's cemetery church and is surrounded by old stone graves. The walk up the hill is rewarded with one of the best panoramic views of Voskopojë and the plains below, making it a favorite for photographers.
                </p>
                <p className="text-sm text-green-600 font-medium">Built: 1724 • Artists: Zografi brothers</p>
              </div>

              <div className="card-feature card-padding-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">St. Michael Church</h4>
                <p className="text-gray-600 font-light mb-4">
                  Built in 1722, St. Michael's Church stands in a pastoral meadow, often surrounded by grazing sheep. This beautiful setting, slightly removed from the village center, gives it unique charm. Another large basilica testament to the wealth of the neighborhood that once surrounded it, containing a wealth of frescoes including a notable depiction of the Archangel Michael.
                </p>
                <p className="text-sm text-green-600 font-medium">Built: 1722 • Setting: Alpine meadow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Artists Section */}
      <section className="py-32 lg:py-40 bg-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              The Master <span className="font-light text-green-600">Artists</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Behind every fresco is an artist. Meet the post-Byzantine masters who created Voskopojë's priceless treasures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* David Selenica */}
            <div className="card-feature card-padding-md">
              <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
                David <span className="font-bold">Selenica</span>
              </h3>
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                <strong>Late 17th - Mid-18th Century</strong>
              </p>
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                Born in Selenicë, Kolonjë, David Selenica stands as one of the three most prominent figures in medieval Albanian art. He pioneered a revolutionary approach to post-Byzantine painting that fused traditional Byzantine Paleologan style with vibrant Venetian artistic traditions.
              </p>

              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Artistic Innovation</h4>
              <ul className="space-y-2 text-gray-600 font-light text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Pioneered bright, vibrant colors in post-Byzantine painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Created distinctive portraiture featuring villagers' faces on saint bodies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Produced nearly 1,000 documented frescoes across the Balkans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>Founder of the distinctive Korçë School of painting</span>
                </li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Major Works at Voskopojë</h4>
              <ul className="space-y-2 text-gray-600 font-light text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Church of St. Nicholas</strong> (1722-1726) with assistants Constantine and Christos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Extensive work on Mount Athos, Thessaloniki, and Kastoria</span>
                </li>
              </ul>
            </div>

            {/* Zografi Brothers */}
            <div className="card-feature card-padding-md">
              <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
                The <span className="font-bold">Zografi</span> Brothers
              </h3>
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                <strong>Kostandin & Athanas Zografi (Active 1736-1783)</strong>
              </p>
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                From Dardhë in Korçë municipality, Kostandin and Athanas Zografi stand as the most prominent post-Byzantine painters of the 18th century. Their distinctive style combined Baroque sensibility with linear religious figures and bold primary colors.
              </p>

              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Distinctive Style</h4>
              <ul className="space-y-2 text-gray-600 font-light text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Baroque sensibility with linear religious figures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Bold primary colors: brilliant white, bright blue, deep red</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Ornamental richness and sophisticated light/shadow use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Professional signature: "By the hands of Konstantinos and Athanasios from Korytsa"</span>
                </li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Major Works at Voskopojë</h4>
              <ul className="space-y-2 text-gray-600 font-light text-sm">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span><strong>Church of St. Athanasius</strong> (1721-24) - complete interior decoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span><strong>St. Nicholas Church</strong> - outer narthex arcades (~1750)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Notable "Towers of Babylon" lunette in St. Athanasius</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Artistic Legacy</h3>
            <p className="text-gray-700 font-light mb-4 leading-relaxed">
              Together, David Selenica and the Zografi Brothers revolutionized post-Byzantine art, establishing the distinctive "Korçë School" of painting
              recognized throughout Orthodox Christian communities. Their influence extends across Mount Athos, the Balkans, and beyond, with works still
              inspiring restoration efforts and scholarly study today. At Voskopojë, their masterpieces represent an irreplaceable heritage of technical mastery,
              emotional depth, and cultural significance that makes the village an essential pilgrimage site for art historians and heritage enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Church Directory & Reference Table */}
      <section className="py-32 lg:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Complete Church <span className="font-light text-green-600">Directory</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Reference guide to all surviving and historic churches of Voskopojë
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Church Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Built</th>
                  <th className="px-6 py-4 text-left font-semibold">Notable Features</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">St. Nicholas Church</td>
                  <td className="px-6 py-4 text-gray-600">1721</td>
                  <td className="px-6 py-4 text-gray-600">Three-aisled basilica; David Selenica frescoes; open arcade narthex</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Standing</span></td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Virgin Mary Cathedral</td>
                  <td className="px-6 py-4 text-gray-600">~1699</td>
                  <td className="px-6 py-4 text-gray-600">Largest surviving church; 1,000+ capacity; panoramic hilltop location</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Standing</span></td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Church of St. Michael</td>
                  <td className="px-6 py-4 text-gray-600">1722</td>
                  <td className="px-6 py-4 text-gray-600">33m length; pastoral meadow setting; Archangel Michael depictions</td>
                  <td className="px-6 py-4"><span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">Restoration 2024</span></td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">St. Athanasius Church</td>
                  <td className="px-6 py-4 text-gray-600">1721-24</td>
                  <td className="px-6 py-4 text-gray-600">Zografi Brothers frescoes; Baroque style; "Towers of Babylon" lunette</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Standing</span></td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">St. John Baptist Monastery</td>
                  <td className="px-6 py-4 text-gray-600">1632</td>
                  <td className="px-6 py-4 text-gray-600">Oldest church; forested hilltop; cross-shaped Byzantine design; 17th-century frescoes</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Standing</span></td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">Church of St. Elijah</td>
                  <td className="px-6 py-4 text-gray-600">Unknown (18th c.)</td>
                  <td className="px-6 py-4 text-gray-600">West hilltop location; panoramic views; cemetery church</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Standing</span></td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">St. Archangels Michael & Gabriel</td>
                  <td className="px-6 py-4 text-gray-600">Unknown (18th c.)</td>
                  <td className="px-6 py-4 text-gray-600">Twin dedication; village edge location</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Standing</span></td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">St. George (Shipcka)</td>
                  <td className="px-6 py-4 text-gray-600">Unknown (18th c.)</td>
                  <td className="px-6 py-4 text-gray-600">Europa Nostra Award recipient (2011); notable restoration</td>
                  <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Restored</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-green-900 mb-3">Golden Age Peak</h4>
              <p className="text-gray-700 font-light text-sm mb-2">
                <strong>24 churches</strong> in the 18th century (1700-1769)
              </p>
              <p className="text-gray-600 text-xs">A testament to the city's prosperity and religious devotion during Voskopojë's peak population of 35,000-70,000</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-amber-900 mb-3">Survivors Today</h4>
              <p className="text-gray-700 font-light text-sm mb-2">
                <strong>7+ churches</strong> still stand in modern Voskopojë
              </p>
              <p className="text-gray-600 text-xs">These survivors represent extraordinary preservation of post-Byzantine ecclesiastical art and architecture</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-red-900 mb-3">Lost to History</h4>
              <p className="text-gray-700 font-light text-sm mb-2">
                <strong>17 churches</strong> destroyed or disappeared
              </p>
              <p className="text-gray-600 text-xs">Casualties of attacks (1769-1788), time, weathering, and neglect over centuries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Village Center & Nature */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Beyond the <span className="font-light text-green-600">Churches</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Explore the village center, historic sites, and surrounding natural landscapes
            </p>
          </div>

          <div className="grid-responsive-3">
            <div className="card-feature card-padding-md group cursor-pointer">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                <Landmark className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Historic Village Center</h3>
              <p className="text-gray-600 font-light">
                While the grand mansions of the 18th century are gone, the historic heart of Voskopojë is a delight to explore. Traditional stone houses with slate roofs, separated by cobblestone lanes, give a feel for Moscopole's past. Guided tours can point out foundations of major historic buildings.
              </p>
            </div>

            <div className="card-feature card-padding-md group cursor-pointer">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                <Mountain className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Natural Surroundings</h3>
              <p className="text-gray-600 font-light">
                The landscape is an attraction in itself. Voskopojë is surrounded by dense pine forests and high meadows of the Morava Mountains. Clean air, pure water, and endless views make the natural beauty a perfect counterpoint to the artistic experience of the churches.
              </p>
            </div>

            <div className="card-feature card-padding-md group cursor-pointer">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-6">
                <Camera className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Photography Paradise</h3>
              <p className="text-gray-600 font-light">
                For photographers, Voskopojë is a paradise of texture, light, and history. Stone exteriors, arched porticos, bell towers, and mountain landscapes offer incredible subjects. Golden hour light illuminating the village creates stunning photographic opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Guidelines */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-8">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Visitor <span className="font-light text-green-600">Guidelines</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Respectful visiting ensures preservation of these sacred and priceless sites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-8 flex items-center tracking-tight">
                <Church className="h-7 w-7 text-green-600 mr-3" />
                Church Etiquette
              </h3>
              <ul className="space-y-4 text-gray-600 font-light text-lg">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Dress modestly—cover shoulders and knees</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Speak softly and respectfully</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Do not touch the frescoes—oils from skin cause damage</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Photography often prohibited inside churches</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Always ask permission before photographing</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-8 flex items-center tracking-tight">
                <Users className="h-7 w-7 text-green-600 mr-3" />
                Recommended Practices
              </h3>
              <ul className="space-y-4 text-gray-600 font-light text-lg">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Hire a local guide for deeper understanding</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Guides have access to locked churches</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Pay a small fee or tip to key-holders</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Bring cash—no ATMs in village</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Allow at least 1-2 days to explore fully</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
