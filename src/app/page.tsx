import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Church, ChevronRight, Landmark, Mountain, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background-alt to-background py-32 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tirana_from_Dajti.jpg/1280px-Tirana_from_Dajti.jpg"
            alt="Panoramic mountain view near Shëngjergj village, Albania"
            fill
            className="object-cover opacity-20"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extralight text-foreground mb-8 tracking-tight">
            Shëngjergj
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark font-light">Nature's Mountain Sanctuary</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the hidden gem of Albania's mountains—breathtaking waterfalls, turquoise alpine lakes,
            and the legendary village where Skanderbeg made his stand. Just 40km from Tirana.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-6 text-lg font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/visit">Explore Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-border hover:border-primary px-8 py-6 text-lg font-light tracking-wide backdrop-blur-sm bg-white/50">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid-responsive-4 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-accent icon-circle icon-circle-md mb-4">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-extralight text-foreground mb-2 tracking-tight">520 <span className="text-lg font-light">m</span></h3>
              <p className="text-foreground-muted font-light tracking-wide uppercase text-sm">Elevation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-accent icon-circle icon-circle-md mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-extralight text-foreground mb-2 tracking-tight">30 <span className="text-lg font-light">Meters</span></h3>
              <p className="text-foreground-muted font-light tracking-wide uppercase text-sm">Waterfall Height</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-accent icon-circle icon-circle-md mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-extralight text-foreground mb-2 tracking-tight">~2,200 <span className="text-lg font-light">People</span></h3>
              <p className="text-foreground-muted font-light tracking-wide uppercase text-sm">Population</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-accent icon-circle icon-circle-md mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-extralight text-foreground mb-2 tracking-tight">40 <span className="text-lg font-light">km</span></h3>
              <p className="text-foreground-muted font-light tracking-wide uppercase text-sm">From Tirana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-background via-background-subtle/30 to-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-foreground mb-6 tracking-tight">
              Why Visit <span className="font-light text-primary">Shëngjergj?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto font-light leading-relaxed">
              Experience a hidden mountain paradise where natural wonders, Albanian heritage, and adventure converge.
            </p>
          </div>

          <div className="grid-responsive-3">
            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer mb-6">
                <Landmark className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Spectacular Waterfall</h3>
                <p className="text-foreground-muted">
                  Marvel at the 30-meter Shëngjergj Waterfall cascading over colorful rocks,
                  creating a mesmerizing natural spectacle in the heart of the mountains.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer mb-6">
                <Mountain className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Alpine Lake Paradise</h3>
                <p className="text-foreground-muted">
                  Hike to the stunning Rabbit Lake (Liqeni i Lepurit), a turquoise jewel nestled
                  in the mountains—perfect for swimming, picnicking, and photography.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="card-feature card-padding-md group cursor-pointer mb-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Easy Day Trip from Tirana</h3>
                <p className="text-foreground-muted">
                  Just 40km from Albania's capital, Shëngjergj offers a quick escape to nature
                  with authentic mountain cuisine and traditional handicrafts.
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
            Your Mountain <span className="font-light">Adventure Awaits</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-12 font-light leading-relaxed">
            Escape the city and immerse yourself in the natural beauty and heritage of Shëngjergj.
            Plan your visit to this hidden mountain paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/activities" className="inline-flex items-center">
                Explore Activities
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/accommodation">Start Planning</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}