import { Metadata } from "next"
import { Phone, MapPin, Clock, Info, MessageCircle, Globe, Instagram, Facebook } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Contact Us - Voskopojë Tourism Information | Get Help Planning Your Visit",
  description: "Contact Voskopojë tourism for accommodation booking assistance, travel information, guided tours, and answers to your questions about visiting Albania's Byzantine heritage village.",
  keywords: "contact Voskopojë, Voskopoja tourism information, Albania travel help, booking assistance, guided tours Voskopoje, visitor information",
  openGraph: {
    title: "Contact Voskopojë Tourism - Get Help Planning Your Visit",
    description: "Get personalized assistance for your Voskopojë visit. Help with accommodation, travel planning, and visitor information.",
    url: "https://voskopoje-template.vercel.app/contact",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Voskopojë Tourism",
    description: "Get help planning your visit to Albania's historic Byzantine mountain village."
  },
  alternates: {
    canonical: "https://voskopoje-template.vercel.app/contact"
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Contact" }]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Voskopoje_Basilica.jpg/1200px-Voskopoje_Basilica.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight">
            Get in <span className="font-light">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-50 max-w-3xl mx-auto font-light leading-relaxed">
            We're here to help you plan your perfect visit to Voskopojë.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-primary-50/30 to-white relative">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Info className="h-12 w-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-4 tracking-tight">
              How We Can <span className="font-light text-primary-600">Help</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Whether you need booking assistance, travel advice, or have questions about Voskopojë, we're here to help make your visit unforgettable.
            </p>
          </div>

          <div className="grid-responsive-2 mb-12">
            <div className="card-interactive group card-padding-md text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Inquiries</h3>
              <p className="text-gray-600 font-light mb-4">
                Questions about visiting Voskopojë, church access, activities, and general tourist information
              </p>
            </div>

            <div className="card-interactive group card-padding-md text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accommodation Booking</h3>
              <p className="text-gray-600 font-light mb-4">
                Help finding and booking traditional guesthouses (bujtina), checking availability, and making arrangements
              </p>
            </div>

            <div className="card-interactive group card-padding-md text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Travel Conditions</h3>
              <p className="text-gray-600 font-light mb-4">
                Current road conditions, weather updates, seasonal accessibility, and transportation advice
              </p>
            </div>

            <div className="card-interactive group card-padding-md text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Tours & Guides</h3>
              <p className="text-gray-600 font-light mb-4">
                Arranging guided church tours, group bookings, cultural tours, and hiking guides
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time & What to Expect */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Response Time */}
            <div>
              <Clock className="h-12 w-12 text-primary-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Response Time</h2>
              <div className="space-y-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-primary-800 mb-3">Expected Response</h3>
                  <p className="text-primary-700 mb-2">
                    We typically respond to inquiries within <strong>2-3 business days</strong>.
                  </p>
                  <p className="text-primary-600 text-sm">
                    Please note: Voskopojë is a small village with limited internet connectivity.
                    Response times may vary, especially during peak season or winter months.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Urgent Requests</h3>
                  <p className="text-blue-700 text-sm">
                    For urgent matters (road closures, emergency changes), please call directly.
                    Email is not suitable for time-sensitive or emergency communications.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-3">Best Times to Contact</h3>
                  <p className="text-amber-700 text-sm mb-2">
                    For quickest response, contact us:
                  </p>
                  <ul className="text-amber-600 text-sm space-y-1">
                    <li>• April-October: Higher response rate</li>
                    <li>• Weekdays preferred over weekends</li>
                    <li>• At least 2 weeks before your visit</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Alternative Resources */}
            <div>
              <Info className="h-12 w-12 text-primary-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Resources</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                    Korçë Tourism Office
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    For comprehensive regional information, the Korçë city tourism office (30 min from Voskopojë)
                    can provide assistance.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Korçë has ATMs, accommodation alternatives, and English-speaking staff.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Globe className="h-5 w-5 text-blue-600 mr-2" />
                    Albania Tourism Portal
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Official Albania tourism website provides:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• National tourism information</li>
                    <li>• Transportation to Korçë region</li>
                    <li>• Cultural heritage resources</li>
                    <li>• General travel safety tips</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Online Travel Forums</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Connect with recent visitors:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Albania travel forums</li>
                    <li>• Balkan travel communities</li>
                    <li>• Byzantine heritage groups</li>
                    <li>• Recent visitor blogs and reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Online Presence */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6 tracking-tight">
              Connect with <span className="font-light text-primary-600">Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Follow our updates, share your experiences, and connect with the Voskopojë community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-card shadow-lg">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instagram</h3>
              <p className="text-gray-600 font-light text-sm mb-4">
                Share your Voskopojë photos and tag us
              </p>
              <p className="text-primary-600 font-semibold">@VisitVoskopoje</p>
            </div>

            <div className="text-center bg-white p-8 rounded-card shadow-lg">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Facebook</h3>
              <p className="text-gray-600 font-light text-sm mb-4">
                Latest news, events, and community updates
              </p>
              <p className="text-primary-600 font-semibold">Visit Voskopojë</p>
            </div>

            <div className="text-center bg-white p-8 rounded-card shadow-lg">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trip Advisor</h3>
              <p className="text-gray-600 font-light text-sm mb-4">
                Read reviews and share your experience
              </p>
              <p className="text-primary-600 font-semibold">Voskopojë Reviews</p>
            </div>
          </div>

          <div className="mt-12 bg-amber-50 p-8 rounded-card">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Share Your Story</h3>
            <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
              Visited Voskopojë? We'd love to hear about your experience! Share your photos, stories, and tips
              to help future visitors discover Albania's Byzantine heritage gem. Tag your posts with
              <strong> #VisitVoskopoje #ByzantineAlbania</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Important Reminders */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
              Before You <span className="font-light">Contact</span>
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Important information to know before reaching out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Check the FAQ First</h3>
              <p className="text-primary-100 mb-4">
                Many common questions are answered in our comprehensive FAQ section.
                This includes information about:
              </p>
              <ul className="space-y-2 text-primary-100 text-sm">
                <li>• Best times to visit</li>
                <li>• How to get there</li>
                <li>• Church visiting hours</li>
                <li>• What to bring</li>
                <li>• ATM and cash information</li>
              </ul>
              <a
                href="/faq"
                className="inline-block mt-4 px-4 py-2 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Visit FAQ
              </a>
            </div>

            <div className="bg-primary-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Plan Ahead</h3>
              <p className="text-primary-100 mb-4">
                Voskopojë is a small mountain village with limited services.
                For best experience:
              </p>
              <ul className="space-y-2 text-primary-100 text-sm">
                <li>• Contact us at least 2 weeks before visit</li>
                <li>• Book accommodation in peak season</li>
                <li>• Withdraw cash in Korçë (NO ATMs here!)</li>
                <li>• Check weather for mountain travel</li>
                <li>• Download offline maps</li>
              </ul>
            </div>

            <div className="bg-primary-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Communication Note</h3>
              <p className="text-primary-100 mb-4">
                Please understand:
              </p>
              <ul className="space-y-2 text-primary-100 text-sm">
                <li>• English may be limited</li>
                <li>• Internet connectivity varies</li>
                <li>• Response time: 2-3 business days</li>
                <li>• Phone calls preferred for urgent matters</li>
                <li>• Peak season may have delays</li>
                <li>• Be patient with small village services</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Visit?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Start planning your journey to Albania's hidden Byzantine heritage village
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/visit"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Plan Your Visit
              </a>
              <a
                href="/accommodation"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                View Accommodation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
