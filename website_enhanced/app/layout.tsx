import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  description: 'Educational Mitra — India\'s trusted free admission consultancy based in Indore. 13+ years experience, 100+ partner universities across India. Expert guidance for MBA, BBA, B.Tech, Law, Medical & Study Abroad.',
  keywords: 'Educational Mitra, admission counselling Indore, free admission guidance, MBA admission Indore, BBA colleges Indore, education consultant Indore, best colleges Madhya Pradesh',
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
