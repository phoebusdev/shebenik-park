# Rebuild Prompt: Shebenik National Park Tourism Website

## What You Are Building

A visually stunning, SEO-optimized informational tourism website for **Shebenik National Park** in Albania. This is a **static informational site** -- it does not need any real backend functionality (no forms that submit, no databases, no authentication). Every "form" or "contact" element is purely decorative/informational. The site exists to rank well in search engines, look beautiful, and provide comprehensive tourist information.

**Use your full frontend design skill to make this site visually exceptional.** Think award-winning nature/tourism sites: dramatic full-bleed imagery, sophisticated typography, smooth scroll animations, parallax effects, cinematic hero sections, elegant card layouts, and a cohesive design system that evokes pristine wilderness. This should look like it was designed by a top-tier agency, not a template.

---

## Critical SEO Strategy: Multi-Domain Tourism Network

This site is one node in a network of tourism-related locale domain names I own. The SEO strategy must account for this:

### Cross-Domain SEO Requirements
1. **Internal linking architecture**: Build the site so it naturally references and links to related Albanian/Balkan tourism topics. Use placeholder links (marked with `data-external-tourism-link` attributes) that I can later point to my other domains.
2. **Topical authority clusters**: Structure content so this site establishes deep topical authority for "Shebenik National Park" and related long-tail queries, while naturally bridging to broader topics like "Albania tourism", "Balkan hiking", "Albanian national parks", "UNESCO sites in Albania", etc.
3. **Schema.org markup**: Implement comprehensive structured data (TouristAttraction, Place, FAQPage, Review, BreadcrumbList) that search engines can use to understand relationships between this site and others in the network.
4. **Canonical/hreflang-ready**: Build the HTML structure so it's trivial to add hreflang tags and canonical URLs pointing across domains later.
5. **Footer/sidebar link blocks**: Include a "Discover More Albanian Tourism" section in the footer with placeholder slots for 8-12 external tourism domain links. These should look natural and editorial, not spammy.
6. **Content silos**: Each page should be a deep, authoritative resource on its topic, internally linked to related pages on the site, creating clear content silos that search engines love.
7. **Blog-ready architecture**: Include a /blog route with 3-4 placeholder article stubs about Albanian tourism topics that can naturally link to other domains in the network.

### On-Page SEO Requirements
- Unique, keyword-rich `<title>` and `<meta description>` for every page
- Proper heading hierarchy (single H1, logical H2/H3 structure)
- Image alt text with natural keyword inclusion
- Schema.org JSON-LD on every page (appropriate type per page)
- XML sitemap and robots.txt
- Open Graph and Twitter Card meta for all pages
- Semantic HTML5 elements throughout
- Fast loading (optimize images, lazy load below fold)
- Mobile-first responsive design
- Breadcrumb navigation with BreadcrumbList schema
- FAQ pages with FAQPage schema
- Review/testimonial pages with Review schema

---

## Tech Stack

- **Next.js 15** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Lucide React** for icons
- **shadcn/ui** components as needed
- **@vercel/analytics** for analytics
- Import alias: `@/*` maps to `src/`

---

## Site Architecture

### Pages to Build

| Route | Purpose | Hero Color Theme |
|-------|---------|-----------------|
| `/` | Homepage - cinematic hero, park overview, CTAs | Green gradient |
| `/about` | History, geography, conservation, UNESCO status | Green-to-green-800 |
| `/wildlife` | Flagship species (lynx, bear, wolf), other fauna | Amber-to-orange |
| `/activities` | 4 hiking trails, 6 other activities | Blue-to-purple |
| `/visit` | Practical visitor info, getting there, seasons, packing | Emerald-to-teal |
| `/accommodation` | Guesthouses, hotels, camping | Indigo-to-purple |
| `/gallery` | Photo gallery with categorized images | Violet-to-purple |
| `/testimonials` | Visitor reviews with structured data | Green-to-emerald |
| `/faq` | Expandable FAQ with FAQPage schema | Green-to-emerald |
| `/contact` | Contact info, hours, location, mini-FAQ | Teal-to-green |
| `/blog` | Blog index with 3-4 stub articles | Green gradient |
| `/not-found` | Custom 404 with internal navigation | Green gradient |

### Shared Components
- **Navigation**: Sticky top nav with all page links, mobile hamburger menu, Mountain icon logo
- **Footer**: 4-column grid -- logo/description, explore links, visit info, "Discover More Albanian Tourism" external link block
- **Breadcrumb**: On all inner pages, with BreadcrumbList schema
- **Analytics**: Vercel Analytics wrapper

---

## Complete Site Data

All factual data below was extracted from the existing site and should be used as the content source for the rebuild.

### Park Facts
- **Full Name**: Shebenik-Jabllanice National Park
- **Alternate Name**: Shebenik-Jabllanice National Park
- **Size**: 34,507.9 hectares (345 km squared)
- **Established**: 2008 (Expanded January 2022 from 33,894.25 to 34,507.9 hectares)
- **Highest Peak**: Mount Shebenik at 2,253m
- **Second Peak**: Mount Jabllanice
- **Elevation Range**: 300m to 2,253m
- **Location**: Eastern Albania, Elbasan County, Librazhd Municipality
- **GPS Coordinates**: 41.2928 N, 20.5619 E (park center); 41.1844 N, 20.3456 E (visitor center)
- **IUCN Category**: II (National Park)
- **UNESCO Status**: Partial -- the Rrajca forests are part of "Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe" World Heritage Site
- **UNESCO Area**: Roughly 212,945 hectares included in UNESCO designation
- **Glacial Lakes**: 14 natural glacial lakes + 3 artificial lakes, at altitudes between 1,500-1,900m
- **Flora**: 32% of Albania's plant species found here
- **Access**: Free entrance, open 24/7/365
- **Country**: Albania (country code: AL)
- **Border**: Along border with North Macedonia, north of Lake Ohrid
- **European Green Belt**: Part of the initiative, crucial wildlife corridor

### History Timeline
1. **Military Protection Era** (decades before 2008): Area was a restricted military zone along the Albanian-Macedonian border. Inadvertently preserved the pristine natural state.
2. **National Park Designation (2008)**: Albanian government officially designated Shebenik-Jabllanice as a national park.
3. **Expansion (January 2022)**: Expanded from 33,894.25 hectares to 34,507.9 hectares.

### Geography & Landscape
- Dramatic mountainous terrain shaped by ancient glacial activity
- Dense coniferous and deciduous forests blanket mountainsides
- Ancient beech forests in remote areas remain virtually untouched
- 14 glacial lakes carved during the last ice age
- Elevations from 300m valley floors to 2,253m summit

### Wildlife Data

#### Flagship Species

**Balkan Lynx (Lynx lynx balcanicus)**
- Conservation Status: Critically Endangered (IUCN)
- Population in Albania: Fewer than 10 individuals
- Characteristics: Distinctive spotted coat, tufted ears, powerful build
- Diet: Deer, small mammals, birds
- Behavior: Solitary hunters
- Best viewing: Dawn and dusk, near rocky outcrops, listen for distinctive calls
- Sightings: Extremely rare but possible

**European Brown Bear (Ursus arctos)**
- Conservation Status: Least Concern
- Population: Stable in the park
- Diet: Omnivore -- berries, roots, fish, small mammals, vegetation
- Behavior: Generally shy, no recorded attacks in the region
- Safety: Keep 100m minimum distance, make noise while hiking, never approach cubs, store food properly

**Gray Wolf (Canis lupus)**
- Conservation Status: Near Threatened
- Pack Size: 4-8 individuals per territorial pack
- Diet: Deer, wild boar, smaller mammals
- Behavior: Highly social, family packs
- Signs: Large paw prints, scat along trails, howling at dawn/dusk, territorial markings on trees

#### Other Mammals
- Wild Boar (Sus scrofa)
- Red Deer (Cervus elaphus)
- Roe Deer (Capreolus capreolus)
- Chamois (Rupicapra rupicapra)
- European Wildcat (Felis silvestris)
- Pine Marten (Martes martes)
- European Otter (Lutra lutra)
- Lesser White-toothed Shrew

#### Birds of Prey
- Golden Eagle (Aquila chrysaetos)
- Peregrine Falcon (Falco peregrinus)
- Eurasian Eagle-Owl (Bubo bubo)
- Northern Goshawk (Accipiter gentilis)
- Common Buzzard (Buteo buteo)
- European Honey Buzzard
- Eurasian Sparrowhawk
- Long-eared Owl (Asio otus)

#### Reptiles & Amphibians
- European Viper (Vipera berus)
- Balkan Green Lizard
- Common Wall Gecko
- Fire Salamander
- Alpine Newt
- Common Frog
- Tree Frog species
- Various snake species

### Hiking Trails

**1. Mount Shebenik Summit**
- Difficulty: Expert (5/5 stars)
- Elevation: 2,253m
- Duration: 8-10 hours
- Best as 2-day trek with camping
- Highlights: Panoramic views from highest peak, alpine meadows, rare mountain flora, challenging rocky terrain and scrambling, possible chamois and bear sightings

**2. Mount Jabllanice Trail**
- Difficulty: Advanced (4/5 stars)
- Elevation: 2,100m
- Duration: 6-8 hours
- Highlights: Diverse forest ecosystems, views of glacial valleys, mountain ridges, excellent wildlife observation

**3. Glacial Lakes Circuit**
- Difficulty: Moderate (3/5 stars)
- Max Elevation: 1,600m
- Duration: 4-6 hours
- Highlights: 6 pristine glacial lakes, crystal-clear swimming spots, perfect for photography, peaceful picnic locations

**4. Rrajca UNESCO Forests**
- Difficulty: Easy (2/5 stars)
- Max Elevation: 1,200m
- Duration: 2-4 hours
- Family-friendly
- Highlights: Ancient UNESCO beech forests, rich biodiversity and rare plants, gentle path, educational interpretation points

### Other Activities
1. **Wildlife Watching** -- Best times: early morning (5-8 AM), late afternoon (4-7 PM), autumn months for bear activity
2. **Photography Tours** -- Guided tours for all skill levels; glacial lake reflections, ancient forest details, mountain sunrise/sunset, wildlife portraits
3. **Glacial Lake Swimming** -- Cold year-round, best June-September, always swim with a buddy
4. **Wilderness Camping** -- Designated areas only, pack out all waste, store food properly (bear safety), no fires during dry seasons
5. **Mountain Biking** -- Rocky and technical terrain, steep climbs and descents, best in dry weather, helmet required
6. **Guided Nature Walks** -- Plant and animal identification, conservation success stories, local cultural traditions, park management practices

### Visitor Practical Information

#### Visitor Center
- Location: Fushe Stude Village, Elbasan County, Albania
- Summer Hours (June-September): Mon-Thu 9AM-5PM, Fri-Sun 9AM-7PM
- Winter Hours (October-May): Daily 9AM-4PM
- Phone: +355 69 6223130
- Email: info@shebenik-park.al
- Services: Trail maps, weather forecasts, safety briefings, guided tour arrangements, equipment rental info, accommodation recommendations, emergency contact coordination

#### Park Administration
- Librazhd Forest Directorate
- Address: Near Train Station, Librazhd, Albania
- Phone: +355 51 423 738
- Mobile: +355 67 207 9658
- Services: Park permits, research permissions, conservation inquiries, official park information

#### Emergency Contacts
- Park Emergency (24/7 Mountain Rescue): +355 67 207 9658
- Police: 129
- Medical: 127
- Fire: 128

#### Getting There
**From Tirana (recommended by car)**:
1. Take SH3 highway east towards Elbasan
2. Continue to Librazhd (about 1.5 hours, 64km)
3. From Librazhd choose destination:
   - Fushe Stude village (north): 25 km, 45 min
   - Steblevë village (north): 34 km, 1 hour
   - Qarrishta village (center): 32 km, 50 min
   - Rrajca village (south): 50 km, 1 hour 15 min

**Vehicle**: 4x4 or SUV strongly recommended, high ground clearance, all-weather tires, full fuel tank

**Public Transport**: Very limited. Daily minibus from Librazhd to Fushe Stude, departs around noon. Return transport not guaranteed.

**Organized Tours**: Available from Tirana, include transportation, professional guides, group/private options, equipment rental

#### Seasonal Guide

| Season | Months | Temp Range | Highlights | Considerations |
|--------|--------|-----------|------------|----------------|
| Spring | May-June | 15-25C (59-77F) | Wildflower blooms, active wildlife, fewer crowds, lush green | Some high trails may have snow, muddy conditions |
| Summer (PEAK) | July-August | 20-30C (68-86F) | All trails accessible, lake swimming, long daylight, ideal camping | More crowded, book accommodation early |
| Autumn (RECOMMENDED) | Sep-Oct | 10-20C (50-68F) | Spectacular fall colors, excellent wildlife viewing, comfortable hiking, clear views | Shorter daylight, layer clothing |
| Winter | Nov-April | -5 to 10C (23-50F) | Snow-capped mountains, winter photography, peaceful solitude, animal tracks in snow | Many trails inaccessible, requires winter gear, challenging roads |

#### What to Bring
**Essential Gear**: Sturdy hiking boots, backpack (30-50L), navigation tools (GPS/map/compass), first aid kit, headlamp with extra batteries, multi-tool, emergency whistle, rope/paracord
**Clothing**: Moisture-wicking base layers, insulating mid-layer (fleece/down), waterproof outer shell, rain pants/poncho, warm hat and sun hat, waterproof gloves, extra socks, gaiters
**Safety & Comfort**: Bear spray, sunscreen SPF 30+, sunglasses, insect repellent, water bottles/hydration system, water purification, high-energy snacks, cash (for fees and local purchases), garbage bags (Leave No Trace)

#### Languages Available
- Albanian: All staff
- English: Visitor center and some guides
- Italian: Limited availability
- German: Some tour guides

#### Currency
- Albanian Lek (ALL) and Euros both accepted
- Cash preferred (very limited card payment options)
- ATMs available in Librazhd town center

### Accommodation Data

**1. Guesthouse Esat Bogdani**
- Location: Rrajca Village
- Rating: 4/5
- Price: 10 EUR/night (includes breakfast)
- Distance: 50km from Librazhd
- Phone: +355 683 367 450
- Features: Traditional breakfast, family rooms, trail information and guides, parking
- Near UNESCO World Heritage beech forests

**2. Visitor Centre Accommodation**
- Location: Fushe Stude Village
- Rating: 3/5
- Price: 10 EUR/night (includes breakfast)
- Distance: 25km from Librazhd
- Phone: +355 696 666 264
- Operated by: Xhek Nezha
- Features: Basic breakfast, direct trail access, visitor center on-site, parking

**3. Joen Village Guesthouse**
- Location: Fushe Studen Village
- Rating: 4/5
- Price: 12-15 EUR/night
- Distance: 25km from Librazhd
- Features: Mountain views, group accommodations, local cuisine, vehicle access
- Booking: Contact visitor center for availability

**4. Other Villages**: Steblevë Village (34km from Librazhd, northern trails), Qarrishta Village (32km from Librazhd, central access)

**Hotels in Librazhd**: Price range 15-35 EUR/night, standard amenities (private bathrooms, hot water, WiFi, heating/AC, on-site restaurants). Bank and ATM services available in town.

**Camping**: Designated areas only, 3-5 EUR/person/night (cash only, pay at visitor center). Basic toilet facilities, limited fresh water access, fire rings (when permitted), level ground, waste disposal areas. Max 8 people per campsite.

### Testimonials Data

```json
[
  {
    "name": "Sarah Mitchell",
    "location": "United Kingdom",
    "rating": 5,
    "date": "2024-08-15",
    "title": "Absolutely Breathtaking Experience",
    "content": "Shebenik National Park exceeded all my expectations. The hike to Black Stone Peak offered panoramic views that were simply spectacular. The UNESCO beech forests are truly pristine - unlike anything I've seen in Western Europe. Our guide was knowledgeable about the local wildlife and we were lucky enough to spot fresh lynx tracks!",
    "experience": "3-day hiking trip"
  },
  {
    "name": "Marco Rossi",
    "location": "Italy",
    "rating": 5,
    "date": "2024-07-22",
    "title": "Hidden Gem of the Balkans",
    "content": "This park is Albania's best-kept secret. Fushe Stude Lake is crystal clear and surrounded by untouched mountains. The accommodation at the local guesthouse was authentic and the food was incredible. Perfect for those seeking wilderness away from crowds. The park rangers were helpful and speak multiple languages.",
    "experience": "Weekend getaway"
  },
  {
    "name": "Emma Johansson",
    "location": "Sweden",
    "rating": 4,
    "date": "2024-09-10",
    "title": "Incredible Wildlife and Nature",
    "content": "The biodiversity in Shebenik is remarkable. We saw golden eagles, heard wolves howling at night, and found evidence of brown bears. The ancient beech forests feel magical - some trees are hundreds of years old. The only challenge was the rough mountain roads, but it's worth every bump for this untouched wilderness.",
    "experience": "Wildlife photography tour"
  },
  {
    "name": "David Thompson",
    "location": "Canada",
    "rating": 5,
    "date": "2024-06-18",
    "title": "Best Hiking in the Balkans",
    "content": "As someone who's hiked across North America and Europe, Shebenik ranks among the best. The trail system is well-marked, the scenery changes dramatically from glacial lakes to alpine meadows to dense forests. The fact that it's so undiscovered means you'll have trails to yourself. Camping under the stars here was unforgettable.",
    "experience": "Solo backpacking adventure"
  },
  {
    "name": "Claire Dubois",
    "location": "France",
    "rating": 4,
    "date": "2024-05-25",
    "title": "Authentic Albanian Experience",
    "content": "Shebenik offers everything you want from a national park - pristine nature, challenging hikes, and authentic cultural experiences. The local guesthouses serve traditional Albanian food that's delicious and hearty. The park staff are passionate about conservation. Minor note: bring good hiking boots as some trails are quite rocky!",
    "experience": "Family vacation"
  },
  {
    "name": "Tom Anderson",
    "location": "Australia",
    "rating": 5,
    "date": "2024-04-12",
    "title": "UNESCO World Heritage Forests Are Incredible",
    "content": "The ancient beech forests here are some of the last primeval forests in Europe. Walking through them feels like stepping back in time. The ecosystem is incredibly intact - old growth trees, diverse wildlife, and pristine streams. It's humbling to experience nature as it existed centuries ago. A must-visit for any nature lover.",
    "experience": "Research expedition"
  }
]
```

### FAQ Data

```json
[
  {
    "question": "What are the entrance fees for Shebenik National Park?",
    "answer": "Shebenik National Park is free to enter for all visitors. There are no entrance fees or permits required to access the park's hiking trails, lakes, and natural areas."
  },
  {
    "question": "When is the best time to visit Shebenik National Park?",
    "answer": "The best time to visit is from May to October when weather conditions are ideal for hiking. Summer (June-August) offers the warmest temperatures and longest days, while spring and fall provide fewer crowds and comfortable temperatures."
  },
  {
    "question": "Can I see the endangered Balkan lynx in the park?",
    "answer": "While Shebenik National Park is one of the few remaining habitats for the critically endangered Balkan lynx, sightings are extremely rare due to their elusive nature and small population. Your best chance is early morning or late evening in remote forest areas, but wildlife viewing should be done quietly and from a distance."
  },
  {
    "question": "Are there guided tours available in the park?",
    "answer": "Yes, guided tours can be arranged through the visitor center or local tour operators. Guides are recommended for wildlife spotting, accessing remote areas safely, and learning about the park's unique ecosystem and UNESCO World Heritage beech forests."
  },
  {
    "question": "What hiking trails are available in Shebenik National Park?",
    "answer": "The park features 4 marked hiking trails of varying difficulty levels, ranging from easy walks around Fushe Stude Lake to challenging mountain ascents. The most popular include the Black Stone Peak trail offering panoramic views and the UNESCO Beech Forest trail."
  },
  {
    "question": "Is camping allowed in Shebenik National Park?",
    "answer": "Wild camping is generally not permitted to protect the fragile ecosystem. However, designated camping areas are available near the visitor center and some guesthouses offer camping facilities. Always check with park authorities for current camping regulations."
  },
  {
    "question": "How do I get to Shebenik National Park from Tirana?",
    "answer": "From Tirana, drive approximately 120km southeast via the A3 highway toward Elbasan, then follow regional roads through Librazhd to reach the park entrance. The journey takes about 2.5-3 hours by car. Public transportation options are limited."
  },
  {
    "question": "What should I bring for a day hike in the park?",
    "answer": "Essential items include sturdy hiking boots, weather-appropriate clothing, plenty of water (at least 2L per person), snacks, map and compass/GPS, first aid kit, and sun protection. Weather can change quickly in the mountains."
  },
  {
    "question": "Are there accommodation options inside the park?",
    "answer": "Several guesthouses and eco-lodges operate within or near the park boundaries, offering traditional Albanian hospitality. The visitor center can provide contact information and help arrange bookings. Advanced reservation is recommended, especially during peak season."
  },
  {
    "question": "What wildlife can I expect to see besides the Balkan lynx?",
    "answer": "Common wildlife includes brown bears (rare sightings), gray wolves, red deer, wild boar, golden eagles, and various endemic bird species. The park's diverse ecosystems support over 200 bird species and numerous mammals."
  },
  {
    "question": "Is the park accessible for visitors with mobility limitations?",
    "answer": "Some areas near the visitor center and Fushe Stude Lake have easier terrain suitable for limited mobility. However, most hiking trails involve challenging mountain terrain. Contact the visitor center to discuss specific accessibility options."
  },
  {
    "question": "What makes Shebenik National Park a UNESCO World Heritage site?",
    "answer": "The park's ancient beech forests are part of the UNESCO World Heritage 'Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe', recognized for their outstanding universal value and pristine old-growth forest ecosystems."
  }
]
```

### Image URLs (Wikipedia Commons -- free to use)

These are the authentic park images currently used. Source additional high-quality images from Wikipedia Commons for the rebuild:

```
https://upload.wikimedia.org/wikipedia/commons/f/f9/Shebenik-Jabllanice_National_Park_Wikivoyage_Banner.JPG
https://upload.wikimedia.org/wikipedia/commons/6/68/Landscape_view_from_Shebenik_National_Park.jpg
https://upload.wikimedia.org/wikipedia/commons/a/a0/Forest_in_Shebenik_Mountains.jpg
https://upload.wikimedia.org/wikipedia/commons/f/fc/Mountains_from_Shebenik_National_Park.jpg
https://upload.wikimedia.org/wikipedia/commons/7/78/Parku_Kombëtar_Shebenik-Jabllanicë_02.jpg
https://upload.wikimedia.org/wikipedia/commons/4/4f/Qafa_e_Kokolit%2C_Parku_Kombëtar_Shebenik-Jabllanicë.jpg
```

Additional images referenced in sitemap but not all used in pages:
```
https://upload.wikimedia.org/wikipedia/commons/e/ea/Panoramic_view_of_Shebenik-Jabllanic%C3%AB_National_Park_from_Black_Stone_Peak.jpg
https://upload.wikimedia.org/wikipedia/commons/6/6b/Alpine_Pasture_Shebenik_Jabllanice.JPG
https://upload.wikimedia.org/wikipedia/commons/d/d5/Fusha_Studen_Shebenik.jpg
https://upload.wikimedia.org/wikipedia/commons/5/5c/Liqeni_i_Fush%C3%AB_Studn%C3%ABs.jpg
https://upload.wikimedia.org/wikipedia/commons/f/f0/Water_stream_in_Shebenik_National_Park.jpg
```

### SEO Keywords to Target

**Primary Keywords:**
- Shebenik National Park
- Albania tourism
- UNESCO beech forest Albania
- Albanian national parks

**Long-Tail Keywords:**
- Visit Shebenik National Park Albania
- Glacial lakes Albania hiking
- Balkan lynx habitat Albania
- Hiking trails Shebenik
- Best time to visit Shebenik National Park
- Albania wilderness camping
- UNESCO World Heritage Albania
- Brown bears Albania
- Wildlife watching Albania

**Local/Geographic:**
- Elbasan County tourism
- Librazhd Municipality
- Diber County tourism (nearby)
- Eastern Albania attractions

**Cross-Domain Bridge Keywords** (for linking to other tourism domains):
- Albania travel guide
- Balkan hiking destinations
- Albania national parks guide
- Albanian Alps hiking
- Lake Ohrid region tourism
- Tirana day trips
- Albania outdoor adventures
- Balkan wildlife tourism
- Albania eco-tourism
- Albanian cultural tourism

### Navigation Structure
```
Home | About | Wildlife | Activities | Visit | Stay | Gallery | Reviews | FAQ | Contact | Blog
```

### Design Theme
- **Primary Color**: Green (#059669 / emerald-600)
- **Background**: White and light gray alternating sections
- **Dark sections**: Green-600/700/800/900 for CTAs and footers
- **Font**: Inter (Google Fonts)
- **Logo**: Mountain icon + "Shebenik Park" text
- **Footer Background**: Green-900
- **Footer Text**: Green-200/300/400

### Structured Data Templates

**TouristAttraction (layout.tsx):**
```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Shebenik National Park",
  "alternateName": "Shebenik-Jabllanice National Park",
  "description": "Albania's second-largest national park featuring glacial lakes, UNESCO World Heritage beech forests, and endangered wildlife including the Balkan lynx.",
  "url": "[YOUR_DOMAIN]",
  "image": ["[image URLs]"],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AL",
    "addressRegion": "Elbasan County",
    "addressLocality": "Librazhd Municipality"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.2928",
    "longitude": "20.5619"
  },
  "touristType": ["Nature lovers", "Hikers", "Wildlife enthusiasts", "Photographers"],
  "availableLanguage": ["English", "Albanian"],
  "openingHours": "Mo-Su 00:00-24:00",
  "isAccessibleForFree": true,
  "publicAccess": true,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "containsPlace": [
    {
      "@type": "Lake",
      "name": "Fushe Stude Lake",
      "description": "Main glacial lake in Shebenik National Park"
    },
    {
      "@type": "Forest",
      "name": "Shebenik Beech Forest",
      "description": "UNESCO World Heritage ancient beech forest"
    }
  ],
  "hasMap": "https://maps.google.com/maps?q=41.2928,20.5619"
}
```

### Blog Stub Articles (for /blog)

Create 3-4 stub blog posts with full SEO markup. These serve as natural cross-linking opportunities to other tourism domains:

1. **"Top 5 National Parks in Albania You Must Visit"** -- Overview article that naturally links to other Albanian park domains
2. **"A Complete Guide to Hiking in the Albanian Mountains"** -- Broader hiking content, links to regional tourism domains
3. **"UNESCO World Heritage Sites in Albania: A Complete Guide"** -- Links to other UNESCO-related tourism sites
4. **"Wildlife Tourism in the Balkans: Where to See Europe's Rarest Animals"** -- Links to other Balkan tourism domains

Each blog post should have 400-600 words of real content, proper headings, relevant images, and placeholder external links marked with `data-external-tourism-link` attributes.

---

## Design Direction

Make this feel like a **premium nature/tourism experience**. Think:
- Cinematic full-viewport hero sections with dramatic park photography
- Smooth scroll-triggered animations (fade in, parallax, scale)
- Elegant typography with strong visual hierarchy
- Card-based layouts with subtle hover effects and shadows
- Color photography with green accent overlays
- Generous whitespace between sections
- Modern, clean aesthetic -- not cluttered or template-looking
- Consider a subtle topographic/contour map pattern as a background texture element
- Interactive elements: expandable FAQ cards, hover-reveal image captions in gallery, animated stat counters in the facts section
- The gallery should feel like an immersive photography experience, not just a grid of thumbnails

This is an informational showcase -- every element should invite the user to explore deeper and ultimately plan a visit.
