import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Educational Mitra | 13+ Years Admission Counselling Indore',
  description: 'Learn about Educational Mitra — Indore's most trusted free admission consultancy. Founded 2012 by Ravi Shukla. 13+ years, 10,000+ students guided across India.',
  keywords: 'about Educational Mitra, Ravi Shukla, admission consultant Indore, education consultancy Indore, trusted counsellor MP',
}

import Image from "next/image"
import { Award, Users, Building2, MapPin, Calendar, Heart, Shield, Star } from "lucide-react"
import { LeadSection } from "@/components/home/lead-section"

const stats = [
  { icon: Calendar, value: "13+", label: "Years Experience" },
  { icon: Building2, value: "100+", label: "Partner Universities" },
  { icon: Users, value: "10,000+", label: "Students Guided" },
  { icon: MapPin, value: "PAN India", label: "Coverage" },
  { icon: Award, value: "MSME", label: "Registered" },
]

const values = [
  {
    icon: Heart,
    title: "Honesty",
    description: "We find the right fit for you, never push a college for our benefit.",
  },
  {
    icon: Star,
    title: "Accessibility",
    description: "Our service is completely free for every student, always.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Built on results, not promises. 13+ years of proven track record.",
  },
]

export default function AboutPage() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              13 Years. 10,000+ Students.
              <br />
              <span className="text-[#C9A84C]">One Mission.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Helping students find the right college with honest, expert guidance — 
              completely free, since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Educational Mitra was founded in 2012 by Ravi Shukla with one belief — 
                  every student deserves honest, expert guidance regardless of background or budget.
                </p>
                <p>
                  What started as a small counselling initiative in Indore has grown into 
                  a trusted PAN India and international partner with MOUs at 100+ universities.
                </p>
                <p>
                  We have guided over 10,000 students to their dream colleges across 50+ courses 
                  in management, engineering, law, medical, and international education.
                </p>
                <p className="font-semibold text-foreground">
                  MSME registered. Free for students. Always.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/banner.jpeg"
                alt="Educational Mitra - Your Trusted Partner in Global Education"
                width={600}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-[#C9A84C]/10">
              <span className="font-serif text-3xl font-bold text-[#C9A84C]">RS</span>
            </div>
            <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">
              Ravi Shukla
            </h2>
            <p className="mt-1 text-[#C9A84C]">CEO & Founder</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="rounded-full bg-card px-4 py-2">B.Tech IT</span>
              <span className="rounded-full bg-card px-4 py-2">Founded 2012</span>
              <span className="rounded-full bg-card px-4 py-2">13+ Years Experience</span>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              With a vision to democratize education counselling, Ravi has built Educational Mitra 
              into one of Central India&apos;s most trusted admission consultancies, helping students 
              from all backgrounds access quality education guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Our Values
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            These principles guide everything we do
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A84C]/10">
                  <value.icon className="h-8 w-8 text-[#C9A84C]" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-bold text-white md:text-3xl">
            Our Impact
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-8 w-8 text-[#C9A84C]" />
                <div className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
