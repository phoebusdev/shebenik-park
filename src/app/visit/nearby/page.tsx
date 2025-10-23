import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Building, Fuel, UtensilsCrossed, Hotel, ChevronRight } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: `Nearby Towns & Services - ${siteConfig.name} Area | ${siteConfig.location.region}`,
  description: `Discover towns and services near ${siteConfig.name}. Find accommodation, restaurants, and facilities in the ${siteConfig.location.region} area.`,
  keywords: `${siteConfig.name} nearby towns, ${siteConfig.location.region}, area services, accommodation near ${siteConfig.name}`,
  openGraph: {
    title: `Nearby Towns & Services - ${siteConfig.name} Area`,
    description: `Complete guide to towns and services surrounding ${siteConfig.name}.`,
  },
}

export default function NearbyTownsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb
        items={[
          { label: "Visit", href: "/visit" },
          { label: "Nearby Towns" }
        ]}
      />

      {/* Hero Section */}
      <section className="gradient-primary relative py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Nearby Towns & Services
            </h1>
            <p className="text-xl text-background-alt leading-relaxed">
              Discover the surrounding area and essential services near {siteConfig.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Template Page</h3>
              <p className="text-blue-800">
                This page is a template placeholder. Update the content below with information about nearby towns,
                services, and facilities for your specific destination.
              </p>
            </div>

            <h2>Nearby Towns</h2>
            <p>
              [Update this section with information about nearby towns and their distance from {siteConfig.name}.]
            </p>

            <h3>Main Town / City</h3>
            <ul>
              <li><strong>Distance:</strong> [XX km]</li>
              <li><strong>Services:</strong> [List available services]</li>
              <li><strong>Access:</strong> [Directions]</li>
            </ul>

            <h2>Essential Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
              <div className="card-base p-6">
                <Hotel className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Accommodation</h3>
                <p className="text-sm text-foreground-muted">
                  [List nearby hotels, guesthouses, or lodging options]
                </p>
              </div>

              <div className="card-base p-6">
                <UtensilsCrossed className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Restaurants</h3>
                <p className="text-sm text-foreground-muted">
                  [List nearby dining options and local cuisine]
                </p>
              </div>

              <div className="card-base p-6">
                <Fuel className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fuel Stations</h3>
                <p className="text-sm text-foreground-muted">
                  [List nearest fuel stations and distances]
                </p>
              </div>

              <div className="card-base p-6">
                <Building className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Shops & Markets</h3>
                <p className="text-sm text-foreground-muted">
                  [List shops, markets, and supplies available]
                </p>
              </div>

              <div className="card-base p-6">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visitor Centers</h3>
                <p className="text-sm text-foreground-muted">
                  [List information centers or tourist offices]
                </p>
              </div>
            </div>

            <h2>How to Update This Page</h2>
            <p>
              To customize this page for your destination:
            </p>
            <ol>
              <li>Replace the placeholder content with actual nearby towns</li>
              <li>Add specific distances, services, and contact information</li>
              <li>Include local recommendations and insider tips</li>
              <li>Add images of nearby towns if desired</li>
              <li>Update metadata in the file header with specific keywords</li>
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-light text-foreground mb-6">
              Ready to plan your visit?
            </h3>
            <Link
              href="/visit"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              View Visitor Information
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
