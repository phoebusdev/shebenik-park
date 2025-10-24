/**
 * CONTENT & ASSET CONFIGURATION
 * ==============================
 * This file centralizes all images and content.
 *
 * TO UPDATE IMAGES:
 * 1. Add/update entries in the assets object with semantic keys
 * 2. Reference by key in components: getAssetProps('hero.home')
 * 3. All image URLs in one place for easy AI updates
 */

import { ContentConfig } from './types';

export const content: ContentConfig = {
  // ============================================================================
  // ASSET MANIFEST
  // All images organized by semantic keys for easy reference
  // ============================================================================
  assets: {
    // Hero/Background Images
    'hero.home': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg',
      alt: 'Grammos Mountains panorama surrounding Voskopojë village',
      width: 1920,
      height: 1080,
      priority: true,
    },
    'hero.about': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg',
      alt: 'Grammos Mountains surrounding Voskopojë',
      width: 1920,
      height: 1080,
    },
    'hero.gallery': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg',
      alt: 'Grammos Mountains panorama',
      width: 1920,
      height: 1080,
      priority: true,
    },

    // Church Images
    'churches.stNicholas': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Saint_Nicolas_%2853104204322%29.jpg',
      alt: 'St. Nicholas Church exterior - main Byzantine church in Voskopojë built 1721',
      width: 600,
      height: 320,
    },
    'churches.stMichael': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Moscopole%2C_St._Michael%27s_Church.JPG',
      alt: "St. Michael's Church in Voskopojë - Byzantine heritage site",
      width: 600,
      height: 320,
    },
    'churches.stMary': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Voskopoje_St_Mary2.JPG',
      alt: "St. Mary's Church in Voskopojë with Byzantine architecture",
      width: 600,
      height: 320,
    },
    'churches.stAthanasius': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Voskopoje_St_Athanasius.JPG',
      alt: 'St. Athanasius Church with Byzantine frescoes and interior art',
      width: 600,
      height: 320,
    },

    // Landscape Images
    'landscapes.mountGrammos': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Mount_Grammos_Oros.jpg',
      alt: 'Mount Grammos mountain peak overlooking Voskopojë',
      width: 600,
      height: 320,
    },
    'landscapes.alpineLake': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Gramos_dragonlake.jpg',
      alt: 'Alpine lake surrounded by Grammos Mountains near Voskopojë',
      width: 600,
      height: 320,
    },
    'landscapes.winterPeaks': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Grammos_and_the_melting_snow.jpg',
      alt: 'Grammos Mountains with seasonal snow coverage near Voskopojë',
      width: 600,
      height: 320,
    },
    'landscapes.panorama': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Grammos_Panorama.jpg',
      alt: 'Panoramic mountain landscape surrounding Voskopojë in all seasons',
      width: 600,
      height: 320,
    },

    // Frescoes & Art
    'art.fresco1': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Voskopoja_fresco.jpg',
      alt: 'Voskopojë church fresco detail showing religious iconography',
      width: 600,
      height: 320,
    },
    'art.stAthanInterior': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Voskopoje_St_Athanasius.JPG',
      alt: 'St. Athanasius Church interior with Byzantine frescoes',
      width: 600,
      height: 320,
    },
    'art.stMaryFrescoes': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Voskopoje_St_Mary2.JPG',
      alt: "St. Mary's Church with preserved medieval religious frescoes",
      width: 600,
      height: 320,
    },
    'art.stNicholasFrescoes': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Voskopoje_St_Nicholas.JPG',
      alt: 'St. Nicholas Church with detailed fresco paintings and iconography',
      width: 600,
      height: 320,
    },

    // Village & Heritage
    'village.house': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Voskopojë_-_Haus.jpg',
      alt: 'Traditional Aromanian house in Voskopojë showing vernacular architecture',
      width: 600,
      height: 320,
    },
    'village.lane': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Voskopojë_-_Gasse.jpg',
      alt: 'Street scene in Voskopojë showing village lanes and traditional structures',
      width: 600,
      height: 320,
    },
    'village.center': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Voskopoje_St_Nicholas.JPG',
      alt: 'St. Nicholas Church in village center of Voskopojë',
      width: 600,
      height: 320,
    },
    'village.bridge': {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Ura_e_Voskopojes.JPG',
      alt: 'Ottoman-era bridge (Ura e Voskopojes) - cultural monument',
      width: 600,
      height: 320,
    },
  },

  // ============================================================================
  // PAGE CONTENT
  // Content structure for each page
  // ============================================================================
  pages: {
    home: {
      hero: {
        title: 'Voskopojë',
        subtitle: 'A Byzantine Treasure',
        description: 'Discover the "Jerusalem of the Aromanians"—a legendary 18th-century city now a stunning mountain village, home to priceless Byzantine frescoes and pristine alpine nature.',
        image: 'hero.home',
        cta: {
          text: 'Explore Your Journey',
          href: '/visit',
        },
      },
      stats: [
        { label: 'Mountain Altitude', value: '1,160m' },
        { label: 'Golden Age', value: '18th Century' },
        { label: 'Churches', value: '7+' },
        { label: 'From Korçë', value: '21 km' },
      ],
    },

    about: {
      hero: {
        title: 'About Voskopojë',
        subtitle: 'UNESCO Candidate Heritage Site',
        description: 'A legendary mountain village with Byzantine churches and cultural heritage',
        image: 'hero.about',
      },
    },

    gallery: {
      title: 'Photo Gallery',
      description: "Discover Voskopojë's priceless Byzantine churches, medieval frescoes, and cultural heritage through stunning photography.",
      categories: [
        {
          id: 'churches',
          title: 'Churches & Architecture',
          description: 'Discover the priceless Byzantine churches of Voskopojë',
          images: [
            'churches.stNicholas',
            'churches.stMichael',
            'churches.stMary',
            'churches.stAthanasius',
          ],
        },
        {
          id: 'frescoes',
          title: 'Frescoes & Religious Art',
          description: 'Medieval iconography and post-Byzantine frescoes',
          images: [
            'art.fresco1',
            'art.stAthanInterior',
            'art.stMaryFrescoes',
            'art.stNicholasFrescoes',
          ],
        },
        {
          id: 'village',
          title: 'Village & Cultural Heritage',
          description: 'Explore Aramonian village life and architecture',
          images: [
            'village.house',
            'village.lane',
            'village.center',
            'village.bridge',
          ],
        },
        {
          id: 'landscapes',
          title: 'Mountain Landscapes & Seasons',
          description: "Voskopojë's stunning natural beauty throughout the year",
          images: [
            'landscapes.alpineLake',
            'landscapes.mountGrammos',
            'landscapes.winterPeaks',
            'landscapes.panorama',
          ],
        },
      ],
    },
  },

  // ============================================================================
  // REUSABLE CONTENT
  // Testimonials, FAQs, etc.
  // ============================================================================
  testimonials: [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'United Kingdom',
      text: 'The most breathtaking heritage site I\'ve ever visited. The Byzantine frescoes are absolutely magical.',
      rating: 5,
      date: '2024-09-15',
    },
    {
      id: '2',
      name: 'Marco Rossi',
      location: 'Italy',
      text: 'An unforgettable experience! The churches are remarkable and the mountain scenery is stunning.',
      rating: 5,
      date: '2024-08-22',
    },
  ],

  faqs: [
    {
      question: 'What is the best time to visit Voskopojë?',
      answer: 'The village is beautiful year-round, but the best time for visiting churches and hiking is from May to October when weather conditions are favorable.',
      category: 'visiting',
    },
    {
      question: 'How do I get to Voskopojë?',
      answer: 'Voskopojë is 21km from Korçë. You can reach it by car or arrange transportation from Korçë city.',
      category: 'visiting',
    },
  ],
};
