import { Metadata } from "next"
import { Camera, Mountain, Droplets, TreePine, Eye, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Photo Gallery - Shebenik National Park's Natural Beauty",
  description: "Explore stunning photography showcasing Shebenik National Park's glacial lakes, ancient forests, mountain peaks, and diverse wildlife.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-violet-600 to-purple-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ea/Panoramic_view_of_Shebenik-Jabllanic%C3%AB_National_Park_from_Black_Stone_Peak.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
            Discover the breathtaking beauty of Shebenik National Park through stunning photography.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Glacial Lakes</h3>
              <p className="text-sm text-gray-600">14 pristine lakes</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Mountain Peaks</h3>
              <p className="text-sm text-gray-600">2,253m elevation</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TreePine className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Ancient Forests</h3>
              <p className="text-sm text-gray-600">UNESCO beech forests</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Wildlife</h3>
              <p className="text-sm text-gray-600">Rare species</p>
            </div>
          </div>
        </div>
      </section>

      {/* Glacial Lakes Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Glacial Lakes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crystal-clear waters reflecting pristine mountain landscapes, carved by ancient glaciers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Liqeni_i_Fush%C3%AB_Studn%C3%ABs.jpg"
                alt="Fushë Studë Lake in Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Fushë Studë Lake</h3>
                  <p className="text-white/80 text-sm">Main glacial lake near visitor center</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Liqeni_i_mrekullu%C3%ABsh%C3%ABm_i_Fush%C3%AB-Stud%C3%ABs.jpg"
                alt="The marvelous Fushë-Studë Lake in Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Marvelous Fushë-Studë Lake</h3>
                  <p className="text-white/80 text-sm">Pristine glacial waters</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Water_stream_in_Shebenik_National_Park.jpg"
                alt="Water stream flowing through Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Mountain Stream</h3>
                  <p className="text-white/80 text-sm">Natural water flow</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Liqeni_i_Fush%C3%AB_Studn%C3%ABs.jpg"
                alt="Another view of Fushë Studë Lake in Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Glacial Lake Shore</h3>
                  <p className="text-white/80 text-sm">Fushë Studë pristine waters</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Liqeni_i_mrekullu%C3%ABsh%C3%ABm_i_Fush%C3%AB-Stud%C3%ABs.jpg"
                alt="The marvelous Fushë-Studë Lake reflecting mountain scenery"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Mountain Reflections</h3>
                  <p className="text-white/80 text-sm">Perfect glacial mirror</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Water_stream_in_Shebenik_National_Park.jpg"
                alt="Crystal clear water stream flowing through Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Crystal Stream</h3>
                  <p className="text-white/80 text-sm">Pure mountain water</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Peaks Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mountain Peaks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dramatic peaks and ridges carved by time, offering spectacular views across the Balkans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Mountain views from within Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Shebenik Mountains</h3>
                  <p className="text-white/80 text-sm">2,253m - Highest Peak</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Landscape view from within Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Park Landscape</h3>
                  <p className="text-white/80 text-sm">Scenic mountain vistas</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Panoramic_view_of_Shebenik-Jabllanic%C3%AB_National_Park_from_Black_Stone_Peak.jpg"
                alt="Panoramic view of Shebenik-Jabllanicë National Park from Black Stone Peak"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Black Stone Peak View</h3>
                  <p className="text-white/80 text-sm">Panoramic park vista</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Trees_and_mountain_view_in_Shebenik.jpg"
                alt="Trees and mountain view in Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Valley Vista</h3>
                  <p className="text-white/80 text-sm">Shebenik mountain views</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/View_of_trees_and_hills_in_Shebenik_National_Park.jpg"
                alt="View of trees and hills in Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Hills & Trees</h3>
                  <p className="text-white/80 text-sm">Park landscape</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Forest in Shebenik Mountains - UNESCO World Heritage beech forest"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Mountain Forest</h3>
                  <p className="text-white/80 text-sm">UNESCO beech forest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ancient Forests Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TreePine className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ancient Forests
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              UNESCO World Heritage beech forests that have remained unchanged for millennia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Forest in Shebenik Mountains - UNESCO World Heritage beech forest"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Shebenik Forest</h3>
                  <p className="text-white/80 text-sm">UNESCO beech forest</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Trees_and_mountain_view_in_Shebenik.jpg"
                alt="Trees and mountain view in Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Forest & Mountains</h3>
                  <p className="text-white/80 text-sm">Trees with mountain backdrop</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Landscape view from Shebenik National Park showing forest and mountains"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Forest Landscape</h3>
                  <p className="text-white/80 text-sm">Park mountain views</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Mountains from Shebenik National Park with forest in foreground"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Forest & Peaks</h3>
                  <p className="text-white/80 text-sm">Mountain forest view</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/View_of_trees_and_hills_in_Shebenik_National_Park.jpg"
                alt="View of trees and hills in Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Trees and Hills</h3>
                  <p className="text-white/80 text-sm">Forest landscape</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Panoramic_view_of_Shebenik-Jabllanic%C3%AB_National_Park_from_Black_Stone_Peak.jpg"
                alt="Panoramic view of Shebenik-Jabllanicë National Park from Black Stone Peak"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Panoramic Vista</h3>
                  <p className="text-white/80 text-sm">Black Stone Peak view</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Eye className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wildlife & Nature
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rare and endangered species thriving in Europe's last wilderness sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Dense forest in Shebenik Mountains - natural lynx habitat"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Lynx Habitat</h3>
                  <p className="text-white/80 text-sm">Dense forest sanctuary</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Water_stream_in_Shebenik_National_Park.jpg"
                alt="Mountain stream in Shebenik National Park - wildlife water source"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Wildlife Water Source</h3>
                  <p className="text-white/80 text-sm">Natural mountain stream</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Mountain peaks in Shebenik National Park - golden eagle habitat"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Eagle Territory</h3>
                  <p className="text-white/80 text-sm">High mountain peaks</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Open landscape in Shebenik National Park - natural grazing habitat"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Grazing Meadows</h3>
                  <p className="text-white/80 text-sm">Wildlife habitat</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Trees_and_mountain_view_in_Shebenik.jpg"
                alt="Rocky mountain terrain in Shebenik - natural chamois habitat"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Rocky Habitat</h3>
                  <p className="text-white/80 text-sm">Mountain terrain</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/View_of_trees_and_hills_in_Shebenik_National_Park.jpg"
                alt="Natural vegetation and hills in Shebenik National Park"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Native Flora</h3>
                  <p className="text-white/80 text-sm">Park vegetation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Information */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Camera className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Photography Guidelines
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Capture the park's beauty while respecting wildlife and preserving the pristine environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-700 p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-green-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Best Locations</h3>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Glacial lakes for reflection shots</li>
                <li>• Mountain ridges at sunrise/sunset</li>
                <li>• UNESCO forest clearings</li>
                <li>• Alpine meadows in spring</li>
                <li>• Rock formations and waterfalls</li>
              </ul>
            </div>
            
            <div className="bg-green-700 p-6 rounded-xl">
              <Camera className="h-8 w-8 text-green-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Photography Tips</h3>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Golden hour offers the best lighting</li>
                <li>• Use polarizing filters for lake shots</li>
                <li>• Telephoto lenses for wildlife</li>
                <li>• Tripod essential for long exposures</li>
                <li>• Weather protection for equipment</li>
              </ul>
            </div>
            
            <div className="bg-green-700 p-6 rounded-xl">
              <Eye className="h-8 w-8 text-green-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Ethical Guidelines</h3>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• No flash photography of wildlife</li>
                <li>• Maintain safe distances from animals</li>
                <li>• Stay on designated trails</li>
                <li>• Don't disturb nesting birds</li>
                <li>• Share your work to promote conservation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}