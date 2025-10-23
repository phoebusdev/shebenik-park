import { Metadata } from "next"
import Image from "next/image"
import { Camera, Mountain, Droplets, TreePine, Eye, MapPin, Landmark } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Photo Gallery - Voskopojë Byzantine Heritage | Church Photography",
  description: "Explore stunning photography of Voskopojë's Byzantine churches, medieval frescoes, village architecture, and cultural heritage. View authentic images of St. Nicholas Church, iconography, and 18th-century Aramonian village life.",
  keywords: "Voskopojë gallery, Byzantine church photos, church frescoes photography, St. Nicholas Church, Aramonian heritage, village architecture, religious art, Albania cultural tourism",
  openGraph: {
    title: "Photo Gallery - Voskopojë Byzantine Heritage",
    description: "Stunning photography of Voskopojë's priceless Byzantine churches, medieval frescoes, village architecture, and Aramonian cultural heritage.",
    url: "https://voskopoje-tourism.vercel.app/gallery",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg",
        width: 1200,
        height: 630,
        alt: "Voskopojë mountain village landscape",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery - Voskopojë Byzantine Churches",
    description: "Authentic photography of Voskopojë's Byzantine heritage, churches, and cultural landscape.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"]
  },
  alternates: {
    canonical: "https://voskopoje-tourism.vercel.app/gallery"
  }
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Photo Gallery" }]} />
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div className="absolute inset-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
            alt="Voskopojë village mountain landscape"
            fill
            className="object-cover opacity-25"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Discover Voskopojë's priceless Byzantine churches, medieval frescoes, and cultural heritage through stunning photography.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Landmark className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Churches</h3>
              <p className="text-sm text-gray-600 font-light">Byzantine architecture</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Frescoes & Art</h3>
              <p className="text-sm text-gray-600 font-light">Medieval iconography</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Village Life</h3>
              <p className="text-sm text-gray-600 font-light">Aramonian heritage</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Landscapes</h3>
              <p className="text-sm text-gray-600 font-light">Mountain views</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <Droplets className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-light text-gray-900">Seasons</h3>
              <p className="text-sm text-gray-600 font-light">Year-round beauty</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 icon-circle icon-circle-md mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900">Heritage Sites</h3>
              <p className="text-sm text-gray-600 font-light">Cultural landmarks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Churches & Architecture Gallery */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Landmark className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Churches & <span className="font-light text-green-600">Architecture</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Discover the priceless Byzantine churches of Voskopojë, featuring remarkable post-Byzantine architecture and sacred art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG"
                alt="St. Nicholas Church and surrounding village architecture in Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Church Architecture</h3>
                  <p className="text-white/80 text-sm">Historic Byzantine structures</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Voskopojë village nestled in mountain landscape with surrounding heritage sites"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Village Panorama</h3>
                  <p className="text-white/80 text-sm">Mountain village setting</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Alpine forests surrounding Voskopojë mountain village"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Alpine Setting</h3>
                  <p className="text-white/80 text-sm">Mountain forest backdrop</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Mountain peaks surrounding Voskopojë heritage village"
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
                  <p className="text-white/80 text-sm">Surrounding peaks and ridges</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
                alt="Village landscape and architectural heritage of Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Heritage Landscape</h3>
                  <p className="text-white/80 text-sm">Cultural village setting</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg"
                alt="Mountain terrain surrounding Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Alpine Terrain</h3>
                  <p className="text-white/80 text-sm">Mountain landscape vista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frescoes & Religious Art Gallery */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Eye className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Frescoes & Religious <span className="font-light text-green-600">Art</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Medieval iconography and post-Byzantine frescoes created by master painters David Selenica and the Zografi Brothers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Byzantine church interiors with religious iconography and frescoes"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Religious Icons</h3>
                  <p className="text-white/80 text-sm">Medieval iconography detail</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Church fresco details by master painter David Selenica"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Master Artist Work</h3>
                  <p className="text-white/80 text-sm">Selenica school frescoes</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG"
                alt="Post-Byzantine fresco paintings in Voskopojë churches"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Religious Artwork</h3>
                  <p className="text-white/80 text-sm">Byzantine painting tradition</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
                alt="Church dome and religious art details in Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Zografi Style</h3>
                  <p className="text-white/80 text-sm">Baroque church paintings</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg"
                alt="Religious iconography and sacred art in church interiors"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Sacred Imagery</h3>
                  <p className="text-white/80 text-sm">Church religious art</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Interior religious frescoes and artistic heritage of Voskopojë churches"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Artistic Heritage</h3>
                  <p className="text-white/80 text-sm">Byzantine tradition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Village & Cultural Heritage Gallery */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Camera className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Village & Cultural <span className="font-light text-green-600">Heritage</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Explore Aramonian village life, traditional architecture, and the living cultural heritage of Voskopojë's historic community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Village homes and traditional Aramonian architecture in Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Village Architecture</h3>
                  <p className="text-white/80 text-sm">Traditional Aramonian homes</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
                alt="Community spaces and traditional village life in Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Community Life</h3>
                  <p className="text-white/80 text-sm">Living Aramonian culture</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Village lanes and traditional architecture of Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Village Streets</h3>
                  <p className="text-white/80 text-sm">Historic pathways</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Guesthouses and accommodation in Voskopojë village"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Local Hospitality</h3>
                  <p className="text-white/80 text-sm">Tourism accommodations</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg"
                alt="Local cultural traditions and community heritage in Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Cultural Heritage</h3>
                  <p className="text-white/80 text-sm">Living traditions</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG"
                alt="Panoramic view of Voskopojë village in mountain setting"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Village Overview</h3>
                  <p className="text-white/80 text-sm">Aramonian community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Landscapes & Seasons Gallery */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Mountain className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Mountain Landscapes & <span className="font-light text-green-600">Seasons</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Voskopojë's stunning natural beauty throughout the year, from spring wildflowers to winter snow-covered peaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Spring season in Voskopojë with mountain greenery and wildflowers"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Spring Season</h3>
                  <p className="text-white/80 text-sm">Alpine wildflowers bloom</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"
                alt="Summer landscape around Voskopojë with lush green forests"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Summer Green</h3>
                  <p className="text-white/80 text-sm">Lush vegetation</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg"
                alt="Autumn colors in mountain landscape surrounding Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Autumn Colors</h3>
                  <p className="text-white/80 text-sm">Mountain foliage</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"
                alt="Winter season in Voskopojë with snow-covered mountains"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Winter Snow</h3>
                  <p className="text-white/80 text-sm">Alpine peaks</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg"
                alt="Mountain terrain and natural landscape of Voskopojë region"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Alpine Terrain</h3>
                  <p className="text-white/80 text-sm">Mountain backdrop</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg"
                alt="Scenic mountain vistas and natural beauty surrounding Voskopojë"
                width={600}
                height={320}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyebhm5xrUViwTIlQ9k5KM4cXmWsQqvKPLgRvqLLXCx6MDi5KhTnG2/A="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Mountain Vistas</h3>
                  <p className="text-white/80 text-sm">Scenic panorama</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Information */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Camera className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
              Photography <span className="font-light">Guidelines</span>
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Capture Voskopojë's Byzantine heritage and cultural beauty while respecting sacred spaces and preserving this historic treasure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-700 p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-green-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Best Locations</h3>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Historic churches and monastery exteriors</li>
                <li>• Village lanes and architecture</li>
                <li>• Sunrise/sunset mountain backdrop views</li>
                <li>• Church interior frescoes (with permission)</li>
                <li>• Panoramic village vistas from heights</li>
              </ul>
            </div>

            <div className="bg-green-700 p-6 rounded-xl">
              <Camera className="h-8 w-8 text-green-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Photography Tips</h3>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Golden hour captures church architecture beautifully</li>
                <li>• Macro lens for fresco detail photography</li>
                <li>• Wide-angle for architectural composition</li>
                <li>• Soft diffusers for interior church lighting</li>
                <li>• Stabilizers helpful for low-light interiors</li>
              </ul>
            </div>

            <div className="bg-green-700 p-6 rounded-xl">
              <Eye className="h-8 w-8 text-green-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Respectful Practices</h3>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Ask permission before photographing interiors</li>
                <li>• Respect active worship times and ceremonies</li>
                <li>• No flash photography inside churches</li>
                <li>• Remove shoes in sacred spaces</li>
                <li>• Share photos to celebrate cultural heritage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}