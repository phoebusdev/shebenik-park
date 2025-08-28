import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, MapPin, Camera, TreePine, ChevronRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found - Shebenik National Park",
  description: "The page you're looking for doesn't exist. Explore Shebenik National Park through our main navigation or search for park information.",
  robots: "noindex, follow",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lost in the Wilderness?
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist, but the beauty of Shebenik National Park is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-green-700 hover:bg-green-50">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/gallery">
                <Camera className="mr-2 h-5 w-5" />
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Shebenik National Park
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't let this detour stop your adventure. Discover what makes our park special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link 
              href="/about" 
              className="group p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300"
            >
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <TreePine className="h-8 w-8 text-green-600 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About the Park</h3>
                <p className="text-sm text-gray-600 mb-3">Learn about our 340 km² of protected wilderness</p>
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link 
              href="/wildlife" 
              className="group p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300"
            >
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🐾</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wildlife</h3>
                <p className="text-sm text-gray-600 mb-3">Discover the endangered Balkan lynx and more</p>
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  Explore Wildlife <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link 
              href="/activities" 
              className="group p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300"
            >
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🥾</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Activities</h3>
                <p className="text-sm text-gray-600 mb-3">Hiking trails and outdoor adventures await</p>
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  Plan Activities <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link 
              href="/visit" 
              className="group p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300"
            >
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Plan Your Visit</h3>
                <p className="text-sm text-gray-600 mb-3">Essential information for your trip</p>
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  Visit Info <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Alternative */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still can't find what you're looking for?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Contact our park information center for personalized assistance with your visit.
          </p>
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}