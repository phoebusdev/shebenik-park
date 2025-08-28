'use client'

import Script from 'next/script'

// Replace with your actual Google Analytics measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_dimension_1': 'park_section'
            }
          });

          // Track specific park-related events
          gtag('event', 'page_view', {
            event_category: 'Shebenik Park',
            event_label: window.location.pathname,
            custom_dimension_1: 'tourism_website'
          });
        `}
      </Script>
    </>
  )
}

// Enhanced event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && 'gtag' in window && typeof (window as {gtag: unknown}).gtag === 'function') {
    const gtag = (window as {gtag: (...args: unknown[]) => void}).gtag;
    gtag('event', eventName, {
      event_category: 'Shebenik Park Interaction',
      ...parameters
    })
  }
}

export const trackParkVisitPlanning = (section: string) => {
  trackEvent('visit_planning', {
    event_label: section,
    value: 1
  })
}

export const trackGalleryView = (imageType: string) => {
  trackEvent('gallery_interaction', {
    event_label: imageType,
    custom_dimension_1: 'photo_engagement'
  })
}

export const trackContactEngagement = (contactType: string) => {
  trackEvent('contact_engagement', {
    event_label: contactType,
    value: 1
  })
}