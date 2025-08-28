import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Award, ChevronRight, Trees, Mountain, Droplets } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ea/Panoramic_view_of_Shebenik-Jabllanic%C3%AB_National_Park_from_Black_Stone_Peak.jpg')"
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Shebenik
            <span className="block text-green-600">National Park</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover Albania's pristine wilderness. Ancient forests, glacial lakes, and rare wildlife 
            await in this UNESCO World Heritage sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/visit">Plan Your Visit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">340 km²</h3>
              <p className="text-gray-600">Protected Wilderness</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2008</h3>
              <p className="text-gray-600">Established</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2,253m</h3>
              <p className="text-gray-600">Highest Peak</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">UNESCO</h3>
              <p className="text-gray-600">World Heritage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Visit Shebenik?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience one of Europe's last untouched wilderness areas, where ancient forests 
              meet pristine glacial lakes and rare wildlife roams freely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                <Trees className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ancient Forests</h3>
                <p className="text-gray-600">
                  Explore UNESCO-protected beech forests that have remained unchanged for millennia. 
                  32% of Albania's flora species call this park home.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Glacial Lakes</h3>
                <p className="text-gray-600">
                  Discover 14 pristine glacial lakes carved by ancient ice, offering crystal-clear waters 
                  perfect for swimming and reflection.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Rare Wildlife</h3>
                <p className="text-gray-600">
                  Spot the endangered Balkan lynx, brown bears, and gray wolves in their natural habitat. 
                  A photographer's paradise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Plan your adventure to one of Albania's most spectacular natural treasures. 
            From hiking trails to wildlife watching, your wilderness experience awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/activities" className="inline-flex items-center">
                Explore Activities
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link href="/accommodation">Find Accommodation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}