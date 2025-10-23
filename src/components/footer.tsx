import Link from "next/link"
import { Mountain, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="gradient-primary relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <Mountain className="h-9 w-9 text-white group-hover:text-accent-gold transition-colors duration-300" />
              <div className="flex flex-col">
                <span className="font-extralight text-2xl text-white tracking-tight leading-tight">{siteConfig.name}</span>
                <span className="text-xs text-accent-gold uppercase tracking-wider -mt-1">{siteConfig.tagline}</span>
              </div>
            </Link>
            <p className="text-background-alt mb-6 leading-relaxed">
              {siteConfig.longDescription}
            </p>
            <p className="text-sm text-background-alt/80">
              {siteConfig.stats.highlights.join(' • ')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-light text-lg mb-6 text-white tracking-tight">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-background-alt hover:text-accent-gold transition-colors duration-300">
                  About the Park
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-background-alt hover:text-accent-gold transition-colors duration-300">
                  Attractions
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-background-alt hover:text-accent-gold transition-colors duration-300">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-background-alt hover:text-accent-gold transition-colors duration-300">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Site Info */}
          <div>
            <h3 className="font-light text-lg mb-6 text-white tracking-tight">Information</h3>
            <ul className="space-y-4 text-background-alt">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent-gold" />
                <span className="text-sm leading-relaxed">
                  {siteConfig.location.detailedLocation}
                </span>
              </li>
              <li className="text-sm">
                <span className="font-medium text-white">Size:</span> {siteConfig.stats.size}
              </li>
              <li className="text-sm">
                <span className="font-medium text-white">Elevation:</span> {siteConfig.stats.elevation}
              </li>
              <li className="text-sm">
                <span className="font-medium text-white">Established:</span> {siteConfig.stats.established}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-50/80 text-sm">
            © {siteConfig.copyright.year} {siteConfig.copyright.holder}. {siteConfig.copyright.statement}
          </p>
          <p className="text-green-100 text-sm mt-2 md:mt-0 font-light">
            {siteConfig.copyright.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}