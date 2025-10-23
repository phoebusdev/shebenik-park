import Link from "next/link"
import { Mountain, MapPin } from "lucide-react"

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
                <span className="font-extralight text-2xl text-white tracking-tight leading-tight">Voskopojë</span>
                <span className="text-xs text-accent-gold uppercase tracking-wider -mt-1">Byzantine Heritage</span>
              </div>
            </Link>
            <p className="text-background-alt mb-6 leading-relaxed">
              Discover the legendary 18th-century city of Moscopole, now a stunning mountain village.
              Home to priceless Byzantine frescoes and pristine alpine nature.
            </p>
            <p className="text-sm text-background-alt/80">
              World Monuments Fund Listed • 1,160m Altitude • UNESCO Candidate
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

          {/* Park Info */}
          <div>
            <h3 className="font-light text-lg mb-6 text-white tracking-tight">Park Information</h3>
            <ul className="space-y-4 text-background-alt">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent-gold" />
                <span className="text-sm leading-relaxed">
                  Elbasan County<br />
                  Eastern Albania<br />
                  Near North Macedonia border
                </span>
              </li>
              <li className="text-sm">
                <span className="font-medium text-white">Size:</span> 345 km²
              </li>
              <li className="text-sm">
                <span className="font-medium text-white">Elevation:</span> 300-2,253m
              </li>
              <li className="text-sm">
                <span className="font-medium text-white">Status:</span> IUCN Category II
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-50/80 text-sm">
            © 2024 Shebenik National Park Tourism. All rights reserved.
          </p>
          <p className="text-green-100 text-sm mt-2 md:mt-0 font-light">
            Protecting Albania's Natural Heritage
          </p>
        </div>
      </div>
    </footer>
  )
}