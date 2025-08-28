import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Park News & Blog - Shebenik National Park | Albania Tourism Updates",
  description: "Stay updated with the latest news from Shebenik National Park: wildlife conservation, trail updates, seasonal guides, and visitor stories from Albania's pristine wilderness.",
  keywords: "Shebenik National Park blog, Albania park news, wildlife conservation updates, hiking trail news, park events Albania, conservation stories",
  openGraph: {
    title: "Park News & Blog - Shebenik National Park Updates",
    description: "Latest news, conservation updates, and visitor guides from Albania's second-largest national park.",
    url: "https://shebenik-park.vercel.app/blog",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Panoramic_view_of_Shebenik-Jabllanic%C3%AB_National_Park_from_Black_Stone_Peak.jpg",
        width: 1200,
        height: 630,
        alt: "Shebenik National Park panoramic view - blog and news",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Park News & Blog - Shebenik National Park",
    description: "Latest updates and stories from Albania's pristine wilderness sanctuary.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/e/ea/Panoramic_view_of_Shebenik-Jabllanic%C3%AB_National_Park_from_Black_Stone_Peak.jpg"]
  },
  alternates: {
    canonical: "https://shebenik-park.vercel.app/blog"
  }
}

const blogPosts = [
  {
    id: "balkan-lynx-conservation-2024",
    title: "Critical Conservation Success: Balkan Lynx Population Shows Signs of Recovery",
    excerpt: "Recent wildlife surveys in Shebenik National Park reveal encouraging signs for the critically endangered Balkan lynx, with camera traps capturing evidence of breeding pairs.",
    publishDate: "2024-11-15",
    readTime: "6 min read",
    author: "Dr. Elena Marku",
    category: "Conservation",
    tags: ["Balkan Lynx", "Wildlife Conservation", "Research"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg",
    featured: true
  },
  {
    id: "winter-hiking-guide-2024",
    title: "Winter Hiking in Shebenik: A Complete Guide to Albania's Snowy Wilderness",
    excerpt: "Discover the magic of Shebenik National Park in winter. From snow-covered trails to frozen lakes, learn how to safely explore Albania's winter wonderland.",
    publishDate: "2024-12-01", 
    readTime: "8 min read",
    author: "Arben Hoxha",
    category: "Hiking Guides",
    tags: ["Winter Hiking", "Safety", "Trail Guides"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg",
    featured: false
  },
  {
    id: "unesco-beech-forests-study",
    title: "New Research Reveals Ancient Secrets of Shebenik's UNESCO Beech Forests",
    excerpt: "International researchers publish groundbreaking study on the genetic diversity and climate resilience of Shebenik's ancient beech forests.",
    publishDate: "2024-10-22",
    readTime: "5 min read", 
    author: "Prof. Michael Schmidt",
    category: "Research",
    tags: ["UNESCO", "Forest Science", "Climate Change"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Trees_and_mountain_view_in_Shebenik.jpg",
    featured: false
  },
  {
    id: "spring-wildflower-blooms",
    title: "Spring Awakening: Wildflower Blooms Transform Shebenik's Alpine Meadows",
    excerpt: "Join us on a photographic journey through Shebenik's spectacular spring wildflower season, featuring rare endemic species found nowhere else on Earth.",
    publishDate: "2024-05-12",
    readTime: "4 min read",
    author: "Fatmir Sulaj",
    category: "Seasonal Guides",
    tags: ["Spring", "Wildflowers", "Photography"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg",
    featured: false
  },
  {
    id: "new-visitor-center-opening",
    title: "Grand Opening of Expanded Shebenik National Park Visitor Center",
    excerpt: "The newly renovated visitor center opens with interactive exhibits, enhanced facilities, and multilingual guides to welcome international visitors.",
    publishDate: "2024-04-08",
    readTime: "3 min read",
    author: "Park Administration",
    category: "Park News", 
    tags: ["Visitor Center", "Facilities", "Tourism"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/View_of_trees_and_hills_in_Shebenik_National_Park.jpg",
    featured: false
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Park News & Blog" }]} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ea/Panoramic_view_of_Shebenik-Jabllanic%C3%AB_National_Park_from_Black_Stone_Peak.jpg')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Park News & Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with conservation efforts, visitor guides, and stories from Albania's pristine wilderness.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Story</h2>
            </div>
            
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div 
                  className="lg:h-96 h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${featuredPost.image}')` }}
                />
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Updates</h2>
            <p className="text-lg text-gray-600">
              Latest news and guides from Shebenik National Park
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-green-600 text-sm font-semibold hover:text-green-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Connected with Park Updates
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get the latest conservation news and visitor information delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 flex-1"
            />
            <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Shebenik National Park News & Blog",
            "description": "Official blog featuring conservation updates, visitor guides, and stories from Albania's Shebenik National Park",
            "url": "https://shebenik-park.vercel.app/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Shebenik National Park",
              "url": "https://shebenik-park.vercel.app"
            },
            "blogPost": blogPosts.slice(0, 3).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.publishDate,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "image": post.image,
              "url": `https://shebenik-park.vercel.app/blog/${post.id}`
            }))
          })
        }}
      />
    </div>
  )
}