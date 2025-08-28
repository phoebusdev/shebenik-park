import { Metadata } from "next"
import { ChevronDown, MapPin, Phone } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Shebenik National Park | Albania Tourism FAQ",
  description: "Get answers to common questions about visiting Shebenik National Park, Albania. Information about entrance fees, best times to visit, wildlife viewing, hiking trails, and accommodation.",
  keywords: "Shebenik National Park FAQ, Albania national park questions, park entrance fees, hiking trails Albania, wildlife viewing tips, park accommodation, visitor information",
  openGraph: {
    title: "FAQ - Shebenik National Park Questions Answered",
    description: "Complete answers to visitor questions about Albania's second-largest national park. Plan your visit with expert guidance.",
    url: "https://shebenik-park.vercel.app/faq",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg",
        width: 1200,
        height: 630,
        alt: "Shebenik National Park landscape view - visitor information",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Shebenik National Park",
    description: "Complete visitor guide with answers to common questions about Albania's pristine wilderness park.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg"]
  },
  alternates: {
    canonical: "https://shebenik-park.vercel.app/faq"
  }
}

const faqData = [
  {
    question: "What are the entrance fees for Shebenik National Park?",
    answer: "Shebenik National Park is free to enter for all visitors. There are no entrance fees or permits required to access the park's hiking trails, lakes, and natural areas."
  },
  {
    question: "When is the best time to visit Shebenik National Park?",
    answer: "The best time to visit is from May to October when weather conditions are ideal for hiking. Summer (June-August) offers the warmest temperatures and longest days, while spring and fall provide fewer crowds and comfortable temperatures."
  },
  {
    question: "Can I see the endangered Balkan lynx in the park?",
    answer: "While Shebenik National Park is one of the few remaining habitats for the critically endangered Balkan lynx, sightings are extremely rare due to their elusive nature and small population. Your best chance is early morning or late evening in remote forest areas, but wildlife viewing should be done quietly and from a distance."
  },
  {
    question: "Are there guided tours available in the park?",
    answer: "Yes, guided tours can be arranged through the visitor center or local tour operators. Guides are recommended for wildlife spotting, accessing remote areas safely, and learning about the park's unique ecosystem and UNESCO World Heritage beech forests."
  },
  {
    question: "What hiking trails are available in Shebenik National Park?",
    answer: "The park features 4 marked hiking trails of varying difficulty levels, ranging from easy walks around Fushë Studë Lake to challenging mountain ascents. The most popular include the Black Stone Peak trail offering panoramic views and the UNESCO Beech Forest trail."
  },
  {
    question: "Is camping allowed in Shebenik National Park?",
    answer: "Wild camping is generally not permitted to protect the fragile ecosystem. However, designated camping areas are available near the visitor center and some guesthouses offer camping facilities. Always check with park authorities for current camping regulations."
  },
  {
    question: "How do I get to Shebenik National Park from Tirana?",
    answer: "From Tirana, drive approximately 120km southeast via the A3 highway toward Elbasan, then follow regional roads through Librazhd to reach the park entrance. The journey takes about 2.5-3 hours by car. Public transportation options are limited."
  },
  {
    question: "What should I bring for a day hike in the park?",
    answer: "Essential items include sturdy hiking boots, weather-appropriate clothing, plenty of water (at least 2L per person), snacks, map and compass/GPS, first aid kit, and sun protection. Weather can change quickly in the mountains."
  },
  {
    question: "Are there accommodation options inside the park?",
    answer: "Several guesthouses and eco-lodges operate within or near the park boundaries, offering traditional Albanian hospitality. The visitor center can provide contact information and help arrange bookings. Advanced reservation is recommended, especially during peak season."
  },
  {
    question: "What wildlife can I expect to see besides the Balkan lynx?",
    answer: "Common wildlife includes brown bears (rare sightings), gray wolves, red deer, wild boar, golden eagles, and various endemic bird species. The park's diverse ecosystems support over 200 bird species and numerous mammals."
  },
  {
    question: "Is the park accessible for visitors with mobility limitations?",
    answer: "Some areas near the visitor center and Fushë Studë Lake have easier terrain suitable for limited mobility. However, most hiking trails involve challenging mountain terrain. Contact the visitor center to discuss specific accessibility options."
  },
  {
    question: "What makes Shebenik National Park a UNESCO World Heritage site?",
    answer: "The park's ancient beech forests are part of the UNESCO World Heritage 'Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe', recognized for their outstanding universal value and pristine old-growth forest ecosystems."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "FAQ" }]} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Everything you need to know about visiting Shebenik National Park, Albania's pristine wilderness sanctuary.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our park rangers and visitor center staff are here to help plan your perfect visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Visitor Center
            </a>
            <a 
              href="/visit" 
              className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}