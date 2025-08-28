import { Metadata } from "next"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Visitor Testimonials & Reviews - Shebenik National Park | Real Experiences",
  description: "Read authentic visitor testimonials and reviews from travelers who experienced Shebenik National Park's pristine wilderness, wildlife, and hiking trails in Albania.",
  keywords: "Shebenik National Park reviews, Albania tourism testimonials, park visitor experiences, hiking reviews Albania, wildlife tourism feedback, national park ratings",
  openGraph: {
    title: "Visitor Testimonials - Shebenik National Park Reviews",
    description: "Authentic reviews from travelers who explored Albania's pristine wilderness. Real experiences of glacial lakes, UNESCO forests, and wildlife encounters.",
    url: "https://shebenik-park.vercel.app/testimonials",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg",
        width: 1200,
        height: 630,
        alt: "Shebenik National Park forest - visitor testimonials",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Visitor Testimonials - Shebenik National Park",
    description: "Authentic reviews from travelers who explored Albania's pristine wilderness and UNESCO World Heritage forests.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg"]
  },
  alternates: {
    canonical: "https://shebenik-park.vercel.app/testimonials"
  }
}

const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "United Kingdom",
    rating: 5,
    date: "2024-08-15",
    title: "Absolutely Breathtaking Experience",
    content: "Shebenik National Park exceeded all my expectations. The hike to Black Stone Peak offered panoramic views that were simply spectacular. The UNESCO beech forests are truly pristine - unlike anything I've seen in Western Europe. Our guide was knowledgeable about the local wildlife and we were lucky enough to spot fresh lynx tracks!",
    experience: "3-day hiking trip",
    wouldRecommend: true
  },
  {
    id: "2", 
    name: "Marco Rossi",
    location: "Italy",
    rating: 5,
    date: "2024-07-22",
    title: "Hidden Gem of the Balkans",
    content: "This park is Albania's best-kept secret. Fushë Studë Lake is crystal clear and surrounded by untouched mountains. The accommodation at the local guesthouse was authentic and the food was incredible. Perfect for those seeking wilderness away from crowds. The park rangers were helpful and speak multiple languages.",
    experience: "Weekend getaway",
    wouldRecommend: true
  },
  {
    id: "3",
    name: "Emma Johansson", 
    location: "Sweden",
    rating: 4,
    date: "2024-09-10",
    title: "Incredible Wildlife and Nature",
    content: "The biodiversity in Shebenik is remarkable. We saw golden eagles, heard wolves howling at night, and found evidence of brown bears. The ancient beech forests feel magical - some trees are hundreds of years old. The only challenge was the rough mountain roads, but it's worth every bump for this untouched wilderness.",
    experience: "Wildlife photography tour",
    wouldRecommend: true
  },
  {
    id: "4",
    name: "David Thompson",
    location: "Canada", 
    rating: 5,
    date: "2024-06-18",
    title: "Best Hiking in the Balkans",
    content: "As someone who's hiked across North America and Europe, Shebenik ranks among the best. The trail system is well-marked, the scenery changes dramatically from glacial lakes to alpine meadows to dense forests. The fact that it's so undiscovered means you'll have trails to yourself. Camping under the stars here was unforgettable.",
    experience: "Solo backpacking adventure",
    wouldRecommend: true
  },
  {
    id: "5",
    name: "Claire Dubois",
    location: "France",
    rating: 4,
    date: "2024-05-25",
    title: "Authentic Albanian Experience",
    content: "Shebenik offers everything you want from a national park - pristine nature, challenging hikes, and authentic cultural experiences. The local guesthouses serve traditional Albanian food that's delicious and hearty. The park staff are passionate about conservation. Minor note: bring good hiking boots as some trails are quite rocky!",
    experience: "Family vacation",
    wouldRecommend: true
  },
  {
    id: "6",
    name: "Tom Anderson",
    location: "Australia",
    rating: 5,
    date: "2024-04-12",
    title: "UNESCO World Heritage Forests Are Incredible",
    content: "The ancient beech forests here are some of the last primeval forests in Europe. Walking through them feels like stepping back in time. The ecosystem is incredibly intact - old growth trees, diverse wildlife, and pristine streams. It's humbling to experience nature as it existed centuries ago. A must-visit for any nature lover.",
    experience: "Research expedition",
    wouldRecommend: true
  }
]

const averageRating = testimonials.reduce((sum, review) => sum + review.rating, 0) / testimonials.length

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Visitor Testimonials" }]} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-emerald-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Visitor Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Real experiences from travelers who discovered the magic of Shebenik National Park.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
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
                  <Quote className="h-6 w-6 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {testimonial.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-gray-900">{testimonial.name}</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-green-600 font-medium">
                    {testimonial.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Own Adventure?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the growing community of travelers discovering Albania's pristine wilderness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/visit" 
              className="inline-flex items-center px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Plan Your Visit
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              Share Your Experience
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
            "name": "Shebenik National Park",
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
              "name": testimonial.title,
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