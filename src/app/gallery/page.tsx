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
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop&crop=center"
                alt="Dawn light on glacial lake with mist"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Dawn Serenity</h3>
                  <p className="text-white/80 text-sm">Early morning mist</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop&crop=center"
                alt="Alpine lake with rocky shoreline"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Alpine Shores</h3>
                  <p className="text-white/80 text-sm">Rocky glacial formations</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1464822759844-d150baec0494?w=600&h=400&fit=crop&crop=center"
                alt="Deep blue mountain lake with clouds reflection"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Cloud Mirror</h3>
                  <p className="text-white/80 text-sm">Perfect reflections</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center&sat=0.3"
                alt="Secluded glacial lake surrounded by peaks"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Hidden Gem</h3>
                  <p className="text-white/80 text-sm">Remote mountain sanctuary</p>
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
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop&crop=center"
                alt="Rocky mountain ridges at sunrise"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Mountain Ridges</h3>
                  <p className="text-white/80 text-sm">Golden hour lighting</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center"
                alt="Alpine valley view from mountain peak"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Valley Vista</h3>
                  <p className="text-white/80 text-sm">Panoramic alpine views</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1464822759844-d150baec0494?w=600&h=400&fit=crop&crop=center&hue=30"
                alt="Sunset over mountain peaks"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Sunset Peaks</h3>
                  <p className="text-white/80 text-sm">Evening alpenglow</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop&crop=center&hue=120"
                alt="Snow-capped peaks in winter"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Winter Majesty</h3>
                  <p className="text-white/80 text-sm">Snow-capped summits</p>
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
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop&crop=center"
                alt="Autumn colors in ancient beech forest"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Autumn Gold</h3>
                  <p className="text-white/80 text-sm">Fall foliage spectacular</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center&sat=0.7"
                alt="Mossy forest floor with ancient tree trunks"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Forest Floor</h3>
                  <p className="text-white/80 text-sm">Mossy undergrowth</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center&hue=150"
                alt="Dense canopy of ancient beech trees"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Canopy Density</h3>
                  <p className="text-white/80 text-sm">Primeval forest</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=600&h=400&fit=crop&crop=center&hue=200"
                alt="Mist through ancient forest trees"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Misty Morning</h3>
                  <p className="text-white/80 text-sm">Forest atmosphere</p>
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
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&crop=center"
                alt="Lynx in natural habitat - artistic representation"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Balkan Lynx Habitat</h3>
                  <p className="text-white/80 text-sm">Critically endangered</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center"
                alt="Bear tracks in muddy forest floor"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Wildlife Signs</h3>
                  <p className="text-white/80 text-sm">Brown bear tracks</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551916058-3d588ac871de?w=600&h=400&fit=crop&crop=center"
                alt="Golden eagle soaring over mountain peaks"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Golden Eagle</h3>
                  <p className="text-white/80 text-sm">Apex predator</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1574149237073-2546b8bd90f2?w=600&h=400&fit=crop&crop=center"
                alt="Red deer in mountain meadow"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Red Deer</h3>
                  <p className="text-white/80 text-sm">Mountain meadows</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516642898291-8d504cd91a78?w=600&h=400&fit=crop&crop=center"
                alt="Chamois on rocky mountain ledge"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Mountain Chamois</h3>
                  <p className="text-white/80 text-sm">Alpine specialist</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1582537831871-d0ac1606a75c?w=600&h=400&fit=crop&crop=center"
                alt="Rare mountain flowers and plants"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Alpine Flora</h3>
                  <p className="text-white/80 text-sm">Rare mountain species</p>
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