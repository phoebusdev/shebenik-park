import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Mountain, Award, ChevronRight, Trees, Droplets, Users } from "lucide-react"
import { siteConfig } from "@/config/site.config"

export default function Home() {
  const { name, tagline, description, branding, stats, features } = siteConfig;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0">
          <Image
            src={branding.heroImage}
            alt={`Panoramic view of ${name}`}
            fill
            className="object-cover opacity-30"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {name.split(' ').slice(0, -2).join(' ')}
            <span className="block" style={{ color: branding.primaryColor }}>
              {name.split(' ').slice(-2).join(' ')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {description.hero}
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
                <MapPin className="h-8 w-8" style={{ color: branding.primaryColor }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stats.area.value} {stats.area.unit}</h3>
              <p className="text-gray-600">{stats.area.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8" style={{ color: branding.primaryColor }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stats.established.value}</h3>
              <p className="text-gray-600">{stats.established.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Mountain className="h-8 w-8" style={{ color: branding.primaryColor }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stats.elevation.value}{stats.elevation.unit}</h3>
              <p className="text-gray-600">{stats.elevation.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8" style={{ color: branding.primaryColor }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stats.recognition.value}</h3>
              <p className="text-gray-600">{stats.recognition.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Visit {name.split(' ').slice(0, -2).join(' ')}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description.short}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon === "Trees" ? Trees : feature.icon === "Droplets" ? Droplets : Users;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer mb-6">
                    <IconComponent className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: branding.primaryColor }} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: branding.primaryColor }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {description.long}
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
