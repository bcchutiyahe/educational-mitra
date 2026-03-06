import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Universities", href: "/universities" },
  { name: "Study Abroad", href: "/study-abroad" },
  { name: "Contact", href: "/contact" },
]

const courseLinks = [
  { name: "MBA & PGDM", href: "/courses/mba" },
  { name: "BBA", href: "/courses/bba" },
  { name: "B.Tech & Engineering", href: "/courses/btech" },
  { name: "BCA & BSc", href: "/courses/bca-bsc" },
  { name: "Law", href: "/courses/law" },
  { name: "Medical", href: "/courses/medical" },
  { name: "All Courses", href: "/courses" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="rounded-full ring-2 ring-[#C9A84C]/40 group-hover:ring-[#C9A84C] transition-all overflow-hidden bg-white">
                <Image
                  src="/images/logo.jpeg"
                  alt="Educational Mitra"
                  width={52}
                  height={52}
                  className="h-13 w-13 object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl font-bold text-white">Educational Mitra</span>
                <span className="text-[10px] text-[#C9A84C] tracking-wider font-medium">MSME Registered</span>
              </div>
            </Link>
            <p className="text-sm text-[#C9A84C] font-medium italic">Find Opportunities, Build Futures.</p>
            <p className="text-sm text-gray-300">
              India&apos;s trusted admission consultancy since 2012. 
              Expert guidance for 50+ courses across 100+ partner universities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-[#C9A84C]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#C9A84C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-[#C9A84C]">
              Popular Courses
            </h3>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#C9A84C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-[#C9A84C]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
                <span className="text-sm text-gray-300">
                  402, 4th Floor, Silver Sanchora Castle, RNT Marg, 
                  South Tukoganj, Indore 452001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#C9A84C]" />
                <a
                  href="tel:+917909500055"
                  className="text-sm text-gray-300 transition-colors hover:text-[#C9A84C]"
                >
                  +91 7909500055
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#C9A84C]" />
                <a
                  href="mailto:info@educationalmitra.com"
                  className="text-sm text-gray-300 transition-colors hover:text-[#C9A84C]"
                >
                  info@educationalmitra.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-600 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Educational Mitra. All rights reserved. MSME Registered.
            </p>
            <div className="flex gap-6">
              <Link
                href="/about"
                className="text-sm text-gray-400 transition-colors hover:text-[#C9A84C]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-400 transition-colors hover:text-[#C9A84C]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
