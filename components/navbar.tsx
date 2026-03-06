"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const courses = [
  { name: "MBA & PGDM", href: "/courses/mba" },
  { name: "BBA", href: "/courses/bba" },
  { name: "B.Tech & Engineering", href: "/courses/btech" },
  { name: "BCA & BSc", href: "/courses/bca-bsc" },
  { name: "BCom & Commerce", href: "/courses/bcom" },
  { name: "BA & Humanities", href: "/courses/ba" },
  { name: "Law", href: "/courses/law" },
  { name: "Medical & Health Sciences", href: "/courses/medical" },
  { name: "Design & Creative", href: "/courses/design" },
  { name: "Education", href: "/courses/education" },
  { name: "Postgraduate", href: "/courses/postgraduate" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Universities", href: "/universities" },
  { name: "Study Abroad", href: "/study-abroad" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo — prominent brand identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full ring-2 ring-[#C9A84C]/30 group-hover:ring-[#C9A84C] transition-all">
            <Image
              src="/images/logo.jpeg"
              alt="Educational Mitra"
              width={52}
              height={52}
              className="h-13 w-13 object-cover"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold text-primary leading-none">Educational Mitra</span>
            <span className="text-[10px] text-[#C9A84C] tracking-wider font-medium">Find Opportunities, Build Futures.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-[#C9A84C]">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-[#C9A84C]">
              Courses <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/courses" className="font-medium">All Courses</Link>
              </DropdownMenuItem>
              {courses.map((course) => (
                <DropdownMenuItem key={course.href} asChild>
                  <Link href={course.href}>{course.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground transition-colors hover:text-[#C9A84C]">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild className="bg-[#C9A84C] text-primary hover:bg-[#b8963f]">
            <a href="https://forms.gle/4q3Yhu7FMjzwG6bM8" target="_blank" rel="noopener noreferrer">Get Free Counselling</a>
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link href="/" className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <div>
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary" onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}>
                Courses <ChevronDown className={`h-4 w-4 transition-transform ${isMobileCoursesOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileCoursesOpen && (
                <div className="ml-4 space-y-1 border-l-2 border-border pl-4">
                  <Link href="/courses" className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary" onClick={() => setIsMobileMenuOpen(false)}>All Courses</Link>
                  {courses.map((course) => (
                    <Link key={course.href} href={course.href} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>{course.name}</Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-[#C9A84C] text-primary hover:bg-[#b8963f]">
                <a href="https://forms.gle/4q3Yhu7FMjzwG6bM8" target="_blank" rel="noopener noreferrer">Get Free Counselling</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
