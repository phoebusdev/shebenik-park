import Link from "next/link"
import { Mountain, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">Shebenik National Park</span>
            </Link>
            <p className="text-green-200 mb-4">
              Discover the pristine wilderness of Albania's second-largest national park. 
              Home to glacial lakes, ancient forests, and rare wildlife including the endangered Balkan lynx.
            </p>
            <p className="text-sm text-green-300">
              UNESCO World Heritage Site • Established 2008 • 340 km²
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  About the Park
                </Link>
              </li>
              <li>
                <Link href="/wildlife" className="text-green-200 hover:text-white transition-colors">
                  Wildlife
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-green-200 hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-green-200 hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Visit Information</h3>
            <ul className="space-y-3 text-green-200">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Visitor Center<br />
                  Fushë Studë Village<br />
                  Elbasan County, Albania
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+355 69 6223130</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">info@shebenik-park.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm">
            © 2024 Shebenik National Park Tourism. All rights reserved.
          </p>
          <p className="text-green-400 text-sm mt-2 md:mt-0">
            Protecting Albania's Natural Heritage
          </p>
        </div>
      </div>
    </footer>
  )
}