import { Metadata } from "next"
import { ChevronDown, Phone, MapPin } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Voskopojë Tourism | Visitor FAQ",
  description: "Get answers to common questions about visiting Voskopojë: best time to visit, how to get there, church opening hours, fees, accommodation, and practical travel tips for Albania's Byzantine heritage village.",
  keywords: "Voskopojë FAQ, Voskopoja questions, Albania tourism FAQ, Byzantine church visits, Voskopoje travel tips, visitor information Albania",
  openGraph: {
    title: "FAQ - Voskopojë Tourism Questions Answered",
    description: "Complete answers to visitor questions about Voskopojë, Albania's historic Byzantine village. Plan your visit with expert guidance.",
    url: "https://voskopoje-template.vercel.app/faq",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Voskopojë Tourism",
    description: "Complete visitor guide with answers to common questions about Albania's historic mountain village."
  },
  alternates: {
    canonical: "https://voskopoje-template.vercel.app/faq"
  }
}

const faqData = [
  // Planning Your Visit
  {
    category: "Planning Your Visit",
    questions: [
      {
        question: "What is the best time to visit Voskopojë?",
        answer: "The best time depends on your interests. For churches and hiking: May-September offers pleasant weather and full accessibility. For skiing and winter atmosphere: December-March. Summer (July-August) can be crowded, so book accommodation early. Spring and fall offer fewer tourists and beautiful mountain scenery."
      },
      {
        question: "How many days should I spend in Voskopojë?",
        answer: "We recommend 1-2 nights for a complete experience. Day 1: Visit the main Byzantine churches (St. Nicholas, St. Mary, Baptistery) and explore the village. Day 2: Hike local trails, visit remaining churches, and enjoy the mountain atmosphere. You can also combine with a stay in Korçë for more amenities."
      },
      {
        question: "What are the must-see attractions in Voskopojë?",
        answer: "Don't miss: St. Nicholas Church (stunning 18th-century frescoes), Church of the Dormition of St. Mary (beautiful iconography), Baptistery of St. John (unique architecture), and the village's historic Academy site. Take time to walk between churches through the village for mountain views and authentic atmosphere."
      },
      {
        question: "Can I visit Voskopojë in winter?",
        answer: "Yes! Winter visits offer a unique experience with snow-covered Byzantine churches and access to nearby skiing. However, check weather and road conditions before traveling. Some mountain roads may require winter tires or 4x4 vehicles. Churches remain accessible, though you may need to arrange key-holders in advance."
      }
    ]
  },
  // Access & Transportation
  {
    category: "Access & Transportation",
    questions: [
      {
        question: "How do I get to Voskopojë from Korçë?",
        answer: "Voskopojë is 21km from Korçë, a 30-40 minute drive on a paved mountain road. You can drive yourself (car rental available in Korçë), hire a taxi, or arrange private transport through your accommodation. The scenic road winds through beautiful mountain landscapes."
      },
      {
        question: "How do I get to Voskopojë from Tirana?",
        answer: "From Tirana, it's 160km (3-3.5 hours) via Elbasan. Take the SH3 highway east to Korçë, then follow signs to Voskopojë. Public transport: Take a bus from Tirana to Korçë (3-4 hours), then arrange private transport or taxi for the final 21km to Voskopojë."
      },
      {
        question: "Are the mountain roads safe in winter?",
        answer: "The main road from Korçë to Voskopojë is generally maintained year-round. However, winter conditions can make driving challenging. We recommend: checking weather forecasts, using winter tires or 4x4 vehicle, driving in daylight hours, and confirming road conditions with your accommodation before departure."
      },
      {
        question: "Is there parking in the village?",
        answer: "Yes, there are parking areas in the village, including near the main churches. Most guesthouses also offer parking for guests. Parking is free and generally available, though it can fill up during peak summer weekends and winter ski season."
      }
    ]
  },
  // Churches & Sightseeing
  {
    category: "Churches & Sightseeing",
    questions: [
      {
        question: "Are the churches open to visitors?",
        answer: "Yes, the churches are open to visitors, but most are kept locked to protect the precious frescoes. Local key-holders (usually elderly village residents) will open churches for you. Ask at your guesthouse or inquire in the village. Key-holders are generally available during daylight hours."
      },
      {
        question: "Are there entrance fees for the churches?",
        answer: "There are no official entrance fees for the churches. However, it is customary and appreciated to give a small tip (200-500 Albanian Lek, approximately €2-5) to the key-holder who opens the church for you. This supports the local community and church maintenance."
      },
      {
        question: "Can I take photographs inside the churches?",
        answer: "Natural light photography is generally permitted in most churches, but you MUST NOT use flash as it damages the ancient frescoes. Always ask the key-holder for permission before photographing. Some churches may have restrictions on photography. Respectful photography without flash helps preserve these treasures."
      },
      {
        question: "What should I wear when visiting churches?",
        answer: "Dress modestly when visiting churches: cover shoulders and knees, avoid revealing clothing. Remove hats inside. Both men and women should dress respectfully. This is both a religious requirement and shows appreciation for the sacred spaces and local culture."
      }
    ]
  },
  // Amenities & Facilities
  {
    category: "Amenities & Facilities",
    questions: [
      {
        question: "Are there ATMs in Voskopojë?",
        answer: "NO - there are NO ATMs in Voskopojë! This is crucial: withdraw cash in Korçë before arriving. Most guesthouses, restaurants, and services in Voskopojë only accept cash (Albanian Lek or Euros). Bring enough cash for your entire stay including meals, accommodation, and church tips."
      },
      {
        question: "Are there restaurants in the village?",
        answer: "Voskopojë has a few small restaurants and cafes, but the best dining is usually at your guesthouse. Most bujtina offer excellent home-cooked traditional Albanian meals (breakfast included, dinner optional). Book meals in advance at your accommodation. Selection is limited compared to cities, but the quality and authenticity are outstanding."
      },
      {
        question: "Is there mobile coverage and WiFi?",
        answer: "Mobile coverage is variable but generally available in the village. Most guesthouses offer WiFi, though speeds may be slower than in cities. We recommend downloading maps, directions, and important information before arriving. Save important phone numbers offline."
      },
      {
        question: "Are there shops or supermarkets?",
        answer: "Voskopojë has a few small village shops with basic supplies, but selection is very limited. For shopping, stock up in Korçë before arriving. Bring any special items you need (medications, toiletries, snacks). The village shops are helpful for emergency basics but not for comprehensive shopping."
      }
    ]
  },
  // Practical Tips
  {
    category: "Practical Tips",
    questions: [
      {
        question: "Do people speak English in Voskopojë?",
        answer: "English is limited in the village. Some guesthouse owners speak basic English, but many villagers speak only Albanian. Learning a few Albanian phrases is helpful and appreciated. Translation apps can be useful. Despite language barriers, locals are friendly and will try to help visitors."
      },
      {
        question: "What dress code should I follow?",
        answer: "General village dress: Casual and comfortable. For church visits: Modest clothing covering shoulders and knees (both men and women). For hiking: Appropriate outdoor gear and sturdy shoes. The village is conservative and traditional, so respectful dress is appreciated."
      },
      {
        question: "Is Voskopojë family-friendly?",
        answer: "Yes! Voskopojë is excellent for families interested in history and nature. Children enjoy exploring churches (if interested in history), hiking trails, and in winter, nearby skiing. Guesthouses are family-friendly with traditional home-cooked meals. The village is safe and welcoming. However, extensive church touring may not interest very young children."
      }
    ]
  },
  // Winter & Skiing
  {
    category: "Winter & Skiing",
    questions: [
      {
        question: "What is the skiing like near Voskopojë?",
        answer: "Voskopojë has a small ski resort nearby suitable for beginners and intermediate skiers. It's not a major international ski destination but offers a unique combination of winter sports and cultural tourism. Facilities are basic compared to Alpine resorts but authentic and uncrowded. Perfect for combining skiing with Byzantine church visits."
      },
      {
        question: "Can I rent skiing equipment?",
        answer: "Yes, basic ski equipment rental is available at the ski resort during winter season. However, selection may be limited compared to larger resorts. If you have specific equipment preferences or unusual sizes, consider bringing your own or renting in Korçë before arriving."
      },
      {
        question: "Are the churches accessible in snow?",
        answer: "Yes, the main churches in the village remain accessible during winter, though you may need to walk through snow. The village roads are generally cleared. Wear appropriate winter boots with good traction. Contact key-holders may take longer to arrive in winter, so plan ahead and be patient."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "FAQ" }]} />

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 gradient-primary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Voskopoje_Basilica.jpg/1200px-Voskopoje_Basilica.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
            Frequently Asked <span className="font-light">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to know about visiting Voskopojë, Albania's historic Byzantine mountain village.
          </p>
        </div>
      </section>

      {/* FAQ Content by Category */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-card shadow-lg p-6 hover:bg-primary-50 hover:shadow-xl transition-all duration-300"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                    </summary>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
            Still Have <span className="font-light">Questions?</span>
          </h2>
          <p className="text-lg text-white/90 mb-12 font-light leading-relaxed">
            We're here to help you plan the perfect visit to Voskopojë. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </a>
            <a
              href="/visit"
              className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
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
            "mainEntity": faqData.flatMap(category =>
              category.questions.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />
    </div>
  )
}
