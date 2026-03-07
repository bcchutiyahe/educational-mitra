import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Educational Mitra | Free Admission Counselling Indore | MBA, BBA, B.Tech, Law',
  description: 'Educational Mitra — Indore\'s most trusted free admission consultancy. 13+ years experience, 100+ partner universities. Expert guidance for MBA, BBA, B.Tech, Law, Medical & Study Abroad.',
  keywords: 'Educational Mitra, admission counselling Indore, free admission guidance, MBA admission Indore, BBA colleges Indore, education consultant Indore, best colleges Madhya Pradesh',
  metadataBase: new URL('https://educationalmitra.in'),
  openGraph: {
    title: 'Educational Mitra | Free Admission Counselling Indore',
    description: 'Indore\'s most trusted free admission consultancy. 13+ years, 100+ partner universities, 10,000+ students guided.',
    url: 'https://educationalmitra.in',
    siteName: 'Educational Mitra',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner.jpeg', width: 1200, height: 630, alt: 'Educational Mitra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educational Mitra | Free Admission Counselling Indore',
    description: 'Indore\'s most trusted free admission consultancy.',
    images: ['/images/banner.jpeg'],
  },
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
  alternates: {
    canonical: 'https://educationalmitra.in',
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Educational Mitra",
  "description": "Free admission counselling for MBA, BBA, B.Tech, Law, Medical and Study Abroad. 13+ years experience, 100+ partner universities across India.",
  "url": "https://educationalmitra.in",
  "telephone": "+917909500055",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.7196",
    "longitude": "75.8577"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "Free",
  "image": "https://educationalmitra.in/images/logo.jpeg",
  "sameAs": [
    "https://www.instagram.com/educationalmitra"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "22.7196",
      "longitude": "75.8577"
    },
    "geoRadius": "500000"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
        <Analytics />
      </body>
    </html>
  )
}
