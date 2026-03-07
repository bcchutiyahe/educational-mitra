import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Courses | MBA, BBA, B.Tech, Law, Medical Admission Indore | Educational Mitra',
  description: 'Browse all courses offered by Educational Mitra. Free admission counselling for MBA, BBA, B.Tech, Law, Medical, Design and more in Indore and across India.',
  keywords: 'courses admission Indore, MBA BBA BTech admission, all courses counselling, education consultant Indore courses',
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { 
  Briefcase, 
  Building2, 
  Cpu, 
  Code, 
  Calculator, 
  BookOpen, 
  Scale, 
  Stethoscope, 
  Palette, 
  GraduationCap, 
  Award 
} from "lucide-react"
import { LeadSection } from "@/components/home/lead-section"

const courses = [
  {
    name: "MBA & PGDM",
    description: "Master of Business Administration and Post Graduate Diploma in Management. India's most sought-after management qualifications with 20+ specializations.",
    icon: Briefcase,
    href: "/courses/mba",
  },
  {
    name: "BBA",
    description: "Bachelor of Business Administration — the ideal launchpad for a management career with specializations in HR, Finance, Marketing, and more.",
    icon: Building2,
    href: "/courses/bba",
  },
  {
    name: "B.Tech & Engineering",
    description: "Bachelor of Technology and Engineering programs in CSE, Mechanical, Civil, AI/ML, Data Science, and emerging technologies.",
    icon: Cpu,
    href: "/courses/btech",
  },
  {
    name: "BCA & BSc",
    description: "Computer Applications and Science degrees with specializations in Cloud Computing, Data Science, Cybersecurity, and AI/ML.",
    icon: Code,
    href: "/courses/bca-bsc",
  },
  {
    name: "BCom & Commerce",
    description: "Commerce and Accounting programs including BCom Honours, BFM, BBM with specializations in Taxation, Banking, and Finance.",
    icon: Calculator,
    href: "/courses/bcom",
  },
  {
    name: "BA & Humanities",
    description: "Arts and Humanities degrees including BJMC, BFA, and subjects like Psychology, Economics, Political Science, and Journalism.",
    icon: BookOpen,
    href: "/courses/ba",
  },
  {
    name: "Law",
    description: "Integrated 5-year LLB programs (BA LLB, BBA LLB, BCom LLB), standalone LLB, and LLM for legal career aspirants.",
    icon: Scale,
    href: "/courses/law",
  },
  {
    name: "Medical & Health Sciences",
    description: "MBBS, BDS, BAMS, BHMS, Nursing, Pharmacy, Physiotherapy, and Allied Health Sciences programs.",
    icon: Stethoscope,
    href: "/courses/medical",
  },
  {
    name: "Design & Creative",
    description: "BDes, BFA, BJMC, Graphic Design, Fashion Design, Interior Design, Animation & VFX, Film & Media programs.",
    icon: Palette,
    href: "/courses/design",
  },
  {
    name: "Education",
    description: "Teaching and Education programs including BEd, BPEd, MEd, MPEd, DElEd, NTT for aspiring educators.",
    icon: GraduationCap,
    href: "/courses/education",
  },
  {
    name: "Postgraduate Programs",
    description: "MA, MSc, MCom, MTech, MCA, LLM, and other postgraduate programs across management, science, arts, and technology.",
    icon: Award,
    href: "/courses/postgraduate",
  },
]

export default function CoursesPage() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Explore Our Courses
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              We guide students across 50+ courses in management, engineering, law, 
              medical, and more. Find your perfect fit with our free expert counselling.
            </p>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.name}
                href={course.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[#C9A84C] group-hover:text-primary">
                  <course.icon className="h-7 w-7" />
                </div>
                
                <h2 className="mt-5 font-serif text-xl font-bold text-foreground">
                  {course.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                
                <div className="mt-5 flex items-center text-sm font-medium text-[#C9A84C]">
                  Explore Programs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
