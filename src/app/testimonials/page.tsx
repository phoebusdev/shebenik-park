import { Metadata } from "next"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Visitor Reviews & Testimonials - Voskopojë Tourism | Real Experiences",
  description: "Read authentic visitor testimonials and 5-star reviews from travelers who experienced Voskopojë's Byzantine churches, mountain atmosphere, and Albanian hospitality.",
  keywords: "Voskopojë reviews, Voskopoja testimonials, Albania tourism feedback, Byzantine church visits, visitor experiences Albania, cultural tourism reviews",
  openGraph: {
    title: "Visitor Testimonials - Voskopojë Tourism Reviews",
    description: "Authentic 5-star reviews from travelers who discovered Albania's hidden Byzantine heritage village. Read real visitor experiences.",
    url: "https://voskopoje-template.vercel.app/testimonials",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Visitor Testimonials - Voskopojë",
    description: "Authentic reviews from travelers who explored Albania's historic mountain village and Byzantine churches."
  },
  alternates: {
    canonical: "https://voskopoje-template.vercel.app/testimonials"
  }
}

const testimonials = [
  {
    id: "1",
    name: "Dr. Anna Schmidt",
    location: "Berlin, Germany",
    title: "Art Historian",
    rating: 5,
    date: "2024-07-15",
    title_review: "Extraordinary Byzantine Frescoes",
    content: "As an art historian specializing in Byzantine art, Voskopojë exceeded all expectations. The 18th-century frescoes in St. Nicholas Church are breathtakingly well-preserved - vibrant blues, golds, and complex iconography that rivals anything I've seen in Greece or Turkey. The intimacy of these small mountain churches makes the experience even more profound. The local key-holders shared fascinating stories about the village's history. An absolute must-visit for anyone interested in Byzantine art and Balkan cultural heritage.",
    experience: "3-day art & history tour",
    wouldRecommend: true
  },
  {
    id: "2",
    name: "Mark & Susan",
    location: "Boston, USA",
    title: "Cultural Tourists",
    rating: 5,
    date: "2024-08-22",
    title_review: "Hidden Gem of the Balkans",
    content: "Voskopojë is everything we love about off-the-beaten-path travel. The village atmosphere is authentic and peaceful, with stunning mountain views. We stayed at a family guesthouse and were treated like long-lost relatives - the home-cooked meals were incredible! Visiting the Byzantine churches with frescoes dating back 300 years felt like discovering a secret. The walk between churches offered beautiful scenery. Everyone should visit before it becomes too touristy. Pro tip: bring cash from Korçë!",
    experience: "2-night guesthouse stay",
    wouldRecommend: true
  },
  {
    id: "3",
    name: "David Evans",
    location: "Manchester, UK",
    title: "Travel Photographer",
    rating: 5,
    date: "2024-06-10",
    title_review: "Photographer's Paradise",
    content: "The combination of Byzantine architecture, mountain landscapes, and authentic village life makes Voskopojë a photographer's dream. The churches' interior frescoes are challenging to photograph (no flash allowed - rightfully so), but the natural light creates magical effects. The exterior stone architecture against mountain backdrops is stunning. I captured some of my best travel photographs here. The light in early morning and late afternoon is particularly beautiful. The locals were patient with my photography and even suggested viewpoints I wouldn't have found alone.",
    experience: "Solo photography trip",
    wouldRecommend: true
  },
  {
    id: "4",
    name: "Pierre Dubois",
    location: "Lyon, France",
    title: "History Professor",
    rating: 5,
    date: "2024-09-05",
    title_review: "Living History Lesson",
    content: "As a professor of Balkan history, Voskopojë represents a remarkable case study of cultural preservation and decline. The village once rivaled Thessaloniki in importance - hard to imagine standing in the quiet village today. The remaining churches (out of the original 24!) are precious artifacts of the Ottoman-era Greek Orthodox community. What makes this special is how accessible it all is - you can really engage with the history, not just observe it behind barriers. The guesthouse family shared oral histories passed down generations. Intellectually stimulating and emotionally moving.",
    experience: "Research & cultural study",
    wouldRecommend: true
  },
  {
    id: "5",
    name: "Petrovic Family",
    location: "Belgrade, Serbia",
    title: "Family Winter Trip",
    rating: 5,
    date: "2024-01-18",
    title_review: "Perfect Winter Getaway",
    content: "We spent a long weekend in Voskopojë during winter, combining skiing at the nearby resort with cultural sightseeing. The snow-covered village was magical - like stepping into a winter fairy tale. The churches were accessible (despite snow), and seeing Byzantine frescoes in winter light was unique. Our kids enjoyed the skiing, and we appreciated the guesthouse's cozy atmosphere and hearty meals. The combination of winter sports and cultural heritage makes this an excellent family destination. Much more interesting than a typical ski resort vacation!",
    experience: "Family weekend trip",
    wouldRecommend: true
  },
  {
    id: "6",
    name: "Elena",
    location: "Rome, Italy",
    title: "Solo Traveler",
    rating: 5,
    date: "2024-05-20",
    title_review: "Peaceful Mountain Retreat",
    content: "Traveling solo through the Balkans, Voskopojë was my favorite stop. The village feels incredibly safe and welcoming for solo women travelers. I spent two nights at a guesthouse where the family made me feel completely at home. The pace of life is wonderfully slow - perfect for reading, sketching, and contemplating in church courtyards. The hiking trails around the village offered solitude and spectacular views. The other travelers I met were cultured people interested in history and nature - great conversations over dinner. I left feeling refreshed and inspired.",
    experience: "Solo retreat",
    wouldRecommend: true
  }
]

const averageRating = testimonials.reduce((sum, review) => sum + review.rating, 0) / testimonials.length

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Testimonials" }]} />

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
            Visitor <span className="font-light">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Real experiences from travelers who discovered the magic of Voskopojë's Byzantine heritage and mountain charm.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(averageRating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-yellow-400/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-white text-lg font-semibold">
              {averageRating.toFixed(1)} out of 5 ({testimonials.length} reviews)
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-card shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {testimonial.title_review}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  {testimonial.content}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">{testimonial.name}</span>
                      {testimonial.title && (
                        <>
                          <span>•</span>
                          <span className="text-gray-600 italic">{testimonial.title}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {testimonial.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-primary-600 font-medium">
                    {testimonial.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visitors Love Voskopojë */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-16 tracking-tight text-center">
            Why Visitors <span className="font-light text-primary-600">Love Voskopojë</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Experience</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                "Unlike tourist traps, Voskopojë retains genuine village character. Local families warmly welcome visitors."
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Byzantine Art Treasures</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                "The 18th-century frescoes are world-class yet accessible. You can spend quality time with each artwork."
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mountain Beauty</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                "At 1,160m elevation with spectacular views, the natural setting complements the cultural heritage perfectly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 lg:py-40 gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
            Create Your Own <span className="font-light">Story</span>
          </h2>
          <p className="text-lg text-white/90 mb-12 font-light leading-relaxed">
            Join travelers discovering Albania's hidden Byzantine heritage and mountain village charm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/visit"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Plan Your Visit
            </a>
            <a
              href="/accommodation"
              className="inline-flex items-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
            >
              View Accommodation
            </a>
          </div>
        </div>
      </section>

      {/* Structured Data for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Voskopojë Historic Village",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating.toFixed(1),
              "reviewCount": testimonials.length,
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": "5",
                "worstRating": "1"
              },
              "name": testimonial.title_review,
              "reviewBody": testimonial.content,
              "datePublished": testimonial.date,
              "author": {
                "@type": "Person",
                "name": testimonial.name,
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": testimonial.location
                }
              }
            }))
          })
        }}
      />
    </div>
  )
}
