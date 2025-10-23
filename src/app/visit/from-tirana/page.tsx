import { Metadata } from "next"
import Link from "next/link"
import { Car, Bus, MapPin, Clock, Info, ChevronRight } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: `How to Get to ${siteConfig.name} from Tirana | Directions & Travel Guide`,
  description: `Complete travel guide from Tirana to ${siteConfig.name}. Driving directions, public transport options, travel times, and route tips.`,
  keywords: `Tirana to ${siteConfig.name}, driving directions Albania, how to reach ${siteConfig.name}, Albania road trip`,
  openGraph: {
    title: `How to Get to ${siteConfig.name} from Tirana`,
    description: `Travel guide from Albania's capital to ${siteConfig.name}. Routes, times, and transportation options.`,
  },
}

export default function FromTiranaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb
        items={[
          { label: "Visit", href: "/visit" },
          { label: "From Tirana" }
        ]}
      />

      {/* Hero Section */}
      <section className="gradient-primary relative py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Getting Here from Tirana
            </h1>
            <p className="text-xl text-background-alt leading-relaxed">
              Your complete guide to traveling from Albania's capital to {siteConfig.name}.
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
                This page is a template placeholder. Update the content below with specific directions and
                transportation information from Tirana to your destination.
              </p>
            </div>

            <h2>Travel Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="card-base p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-semibold text-foreground">[X] hours</div>
                <div className="text-sm text-foreground-muted">Estimated Travel Time</div>
              </div>

              <div className="card-base p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-semibold text-foreground">[XXX] km</div>
                <div className="text-sm text-foreground-muted">Total Distance</div>
              </div>

              <div className="card-base p-6 text-center">
                <Info className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-semibold text-foreground">[Road Type]</div>
                <div className="text-sm text-foreground-muted">Road Condition</div>
              </div>
            </div>

            <h2>Transportation Options</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="card-interactive p-8">
                <Car className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">By Car</h3>
                <p className="text-foreground-muted mb-4">
                  [Add driving directions, route description, and tips]
                </p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Route:</strong> [Describe main route]</li>
                  <li><strong>Duration:</strong> [X hours]</li>
                  <li><strong>Road Quality:</strong> [Description]</li>
                  <li><strong>GPS Coordinates:</strong> {siteConfig.location.coordinates.lat}, {siteConfig.location.coordinates.lng}</li>
                </ul>
              </div>

              <div className="card-interactive p-8">
                <Bus className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">By Public Transport</h3>
                <p className="text-foreground-muted mb-4">
                  [Add bus/train information if available]
                </p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Departure Point:</strong> [Location in Tirana]</li>
                  <li><strong>Schedule:</strong> [Times and frequency]</li>
                  <li><strong>Duration:</strong> [X hours]</li>
                  <li><strong>Price:</strong> [Approximate cost]</li>
                </ul>
              </div>
            </div>

            <h2>Driving Directions</h2>
            <ol className="space-y-4">
              <li>
                <strong>Step 1:</strong> [Add detailed turn-by-turn directions]
              </li>
              <li>
                <strong>Step 2:</strong> [Continue with route steps]
              </li>
              <li>
                <strong>Step 3:</strong> [Add landmarks, towns along the way]
              </li>
            </ol>

            <h2>Important Travel Tips</h2>
            <ul>
              <li>Best time to travel: [Morning/afternoon recommendations]</li>
              <li>Road conditions: [Seasonal information]</li>
              <li>Fuel stations: [Where to refuel]</li>
              <li>Rest stops: [Recommended stops along the way]</li>
              <li>Weather considerations: [Seasonal advice]</li>
            </ul>

            <h2>How to Update This Page</h2>
            <p>
              To customize this page for your destination:
            </p>
            <ol>
              <li>Update travel times and distances with actual measurements</li>
              <li>Add specific route names (highways, roads)</li>
              <li>Include real public transport schedules and prices</li>
              <li>Add turn-by-turn driving directions</li>
              <li>Insert local tips and recommendations</li>
              <li>Consider adding a map embed or route visualization</li>
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-light text-foreground mb-6">
              Need more visitor information?
            </h3>
            <Link
              href="/visit"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              View Complete Visitor Guide
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
