import { Metadata } from "next"
import Image from "next/image"
import { Camera, Mountain, Droplets, TreePine, Eye, MapPin } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Photo Gallery - Shebenik National Park's Natural Beauty | Albania Tourism",
  description: "Explore stunning photography showcasing Shebenik National Park's glacial lakes, ancient forests, mountain peaks, and diverse wildlife. View authentic park images from Fushë Studë Lake, UNESCO beech forests, and Balkan lynx habitat.",
  keywords: "Shebenik National Park photos, Albania nature photography, glacial lakes images, UNESCO beech forest, Balkan lynx habitat, mountain photography, Fushë Studë Lake, park gallery",
  openGraph: {
    title: "Photo Gallery - Shebenik National Park's Natural Beauty",
    description: "Explore stunning authentic photography from Albania's second-largest national park. Glacial lakes, ancient forests, mountain peaks, and wildlife habitat.",
    url: "https://shebenik-park.vercel.app/gallery",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG",
        width: 1200,
        height: 630,
        alt: "Shebenik National Park panoramic view from Wikivoyage banner",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery - Shebenik National Park",
    description: "Stunning authentic photography from Albania's pristine wilderness. Glacial lakes, UNESCO forests, and wildlife habitat.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG"]
  },
  alternates: {
    canonical: "https://shebenik-park.vercel.app/gallery"
  }
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Photo Gallery" }]} />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="absolute inset-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
            alt="Shebenik Peak view across the national park"
            fill
            className="object-cover opacity-25"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
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
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG"
                alt="View from Shebenik Mountain looking towards Lake Ohrid - official Wikivoyage banner"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Park Overview Vista</h3>
                  <p className="text-white/80 text-sm">View from Shebenik Mountain</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Sweeping landscape view showcasing the park's diverse terrain and vegetation"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Park Landscape Overview</h3>
                  <p className="text-white/80 text-sm">Diverse terrain and vegetation</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Dense forest in the Shebenik Mountains - UNESCO World Heritage beech forest"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">UNESCO Beech Forest</h3>
                  <p className="text-white/80 text-sm">Ancient primeval forest</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Mountain views from within Shebenik National Park"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Mountain Views</h3>
                  <p className="text-white/80 text-sm">Shebenik mountain range</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
                alt="Shebenik National Park natural landscape with mountain scenery"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Park Landscape</h3>
                  <p className="text-white/80 text-sm">Natural mountain scenery</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg"
                alt="Qafa e Kokolit pass in Shebenik National Park with mountain views"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Mountain Pass</h3>
                  <p className="text-white/80 text-sm">Qafa e Kokolit scenic view</p>
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
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Mountain views from within Shebenik National Park"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Shebenik Mountains</h3>
                  <p className="text-white/80 text-sm">2,253m - Highest Peak</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Landscape view from within Shebenik National Park"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Park Landscape</h3>
                  <p className="text-white/80 text-sm">Scenic mountain vistas</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG"
                alt="Panoramic view of Shebenik National Park - official Wikivoyage banner"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Forest Panorama</h3>
                  <p className="text-white/80 text-sm">Landscape overview</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
                alt="Trees and mountain view in Shebenik National Park"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Valley Vista</h3>
                  <p className="text-white/80 text-sm">Shebenik mountain views</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg"
                alt="View of trees and hills in Shebenik National Park"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Hills & Trees</h3>
                  <p className="text-white/80 text-sm">Park landscape</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Forest in Shebenik Mountains - UNESCO World Heritage beech forest"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
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
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Forest in Shebenik Mountains - UNESCO World Heritage beech forest"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Shebenik Forest</h3>
                  <p className="text-white/80 text-sm">UNESCO beech forest</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
                alt="Trees and mountain view in Shebenik National Park"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Forest & Mountains</h3>
                  <p className="text-white/80 text-sm">Trees with mountain backdrop</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Landscape view from Shebenik National Park showing forest and mountains"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Forest Landscape</h3>
                  <p className="text-white/80 text-sm">Park mountain views</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Mountains from Shebenik National Park with forest in foreground"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Forest & Peaks</h3>
                  <p className="text-white/80 text-sm">Mountain forest view</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg"
                alt="View of trees and hills in Shebenik National Park"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Trees and Hills</h3>
                  <p className="text-white/80 text-sm">Forest landscape</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG"
                alt="Panoramic view of Shebenik National Park - official Wikivoyage banner"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
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
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Dense forest in Shebenik Mountains - natural lynx habitat"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Lynx Habitat</h3>
                  <p className="text-white/80 text-sm">Dense forest sanctuary</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Dense forest in Shebenik Mountains - natural wildlife habitat"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Wildlife Habitat</h3>
                  <p className="text-white/80 text-sm">Dense mountain forest</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Mountain peaks in Shebenik National Park - golden eagle habitat"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Eagle Territory</h3>
                  <p className="text-white/80 text-sm">High mountain peaks</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Open landscape in Shebenik National Park - natural grazing habitat"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Grazing Meadows</h3>
                  <p className="text-white/80 text-sm">Wildlife habitat</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
                alt="Rocky mountain terrain in Shebenik - natural chamois habitat"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Rocky Habitat</h3>
                  <p className="text-white/80 text-sm">Mountain terrain</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg"
                alt="Natural vegetation and hills in Shebenik National Park"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
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