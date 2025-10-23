import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Church, ChevronRight, Landmark, Mountain, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white py-32 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg"
            alt="Panoramic view of Grammos Mountains surrounding Voskopojë village"
            fill
            className="object-cover opacity-20"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extralight text-gray-900 mb-8 tracking-tight">
            Voskopojë
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-light">A Byzantine Treasure</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the "Jerusalem of the Aromanians"—a legendary 18th-century city now a stunning mountain village,
            home to priceless Byzantine frescoes and pristine alpine nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/visit">Explore Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-300 hover:border-gray-400 px-8 py-6 text-lg font-light tracking-wide backdrop-blur-sm bg-white/50">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid-responsive-4 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 icon-circle icon-circle-md mb-4">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-extralight text-gray-900 mb-2 tracking-tight">1,160 <span className="text-lg font-light">m</span></h3>
              <p className="text-gray-500 font-light tracking-wide uppercase text-sm">Mountain Altitude</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 icon-circle icon-circle-md mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-extralight text-gray-900 mb-2 tracking-tight">18th <span className="text-lg font-light">Century</span></h3>
              <p className="text-gray-500 font-light tracking-wide uppercase text-sm">Golden Age</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 icon-circle icon-circle-md mb-4">
                <Church className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-extralight text-gray-900 mb-2 tracking-tight">7+ <span className="text-lg font-light">Churches</span></h3>
              <p className="text-gray-500 font-light tracking-wide uppercase text-sm">Byzantine Treasures</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 icon-circle icon-circle-md mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-extralight text-gray-900 mb-2 tracking-tight">21 <span className="text-lg font-light">km</span></h3>
              <p className="text-gray-500 font-light tracking-wide uppercase text-sm">From Korçë</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Why Visit <span className="font-light text-green-600">Voskopojë?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Experience a legendary mountain village where Byzantine art, history, and pristine alpine nature converge.
            </p>
          </div>

          <div className="grid-responsive-3">
            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer mb-6">
                <Landmark className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">World-Class Frescoes</h3>
                <p className="text-gray-600">
                  See vibrant, story-filled frescoes of masters like David Selenica and the Zografi brothers,
                  preserved for centuries on church walls.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer mb-6">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Hiking & Nature</h3>
                <p className="text-gray-600">
                  Breathe fresh mountain air on trails that wind through pine forests to secluded monasteries
                  and panoramic viewpoints.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer mb-6">
                <Zap className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Year-Round Destination</h3>
                <p className="text-gray-600">
                  Whether seeking a snowy ski adventure or a summer refuge filled with history,
                  Voskopojë is a destination for all seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 gradient-primary relative">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-8 tracking-tight">
            Your Timeless <span className="font-light">Adventure Awaits</span>
          </h2>
          <p className="text-xl lg:text-2xl text-green-50 mb-12 font-light leading-relaxed">
            Step back in time and experience the art, culture, and natural beauty of Voskopojë.
            Plan your visit to this extraordinary mountain sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/activities" className="inline-flex items-center">
                Explore Activities
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link href="/accommodation">Start Planning</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}