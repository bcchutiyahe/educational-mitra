import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study Abroad Guidance Indore | UK, USA, Canada, Australia | Educational Mitra',
  description: 'Free study abroad counselling in Indore. Expert guidance for UK, USA, Canada, Australia, Dubai universities. 100% free service, visa & documentation help.',
  keywords: 'study abroad Indore, UK university admission, USA college admission Indore, Canada study visa, Australia university Indore, study abroad counselling MP',
}

import { ArrowRight, Globe, FileText, Plane, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadSection } from "@/components/home/lead-section"

const countries = [
  {
    flag: "GB",
    name: "United Kingdom",
    courses: ["MBA", "MSc", "Engineering", "Law", "Medical"],
    cities: "London, Manchester, Birmingham, Edinburgh",
    intake: "September & January",
  },
  {
    flag: "US",
    name: "United States",
    courses: ["CS", "Business", "Engineering", "Arts"],
    cities: "SAT/ACT/GRE/GMAT guidance",
    intake: "Fall & Spring",
  },
  {
    flag: "CA",
    name: "Canada",
    courses: ["Business", "IT", "Healthcare", "Engineering"],
    cities: "PR-friendly pathways available",
    intake: "September, January, May",
  },
  {
    flag: "AU",
    name: "Australia",
    courses: ["MBA", "Engineering", "Nursing", "Hospitality"],
    cities: "Sydney, Melbourne, Brisbane, Perth",
    intake: "February & July",
  },
  {
    flag: "AE",
    name: "Dubai / UAE",
    courses: ["MBA", "Business", "Hospitality"],
    cities: "No IELTS options available",
    intake: "September & February",
  },
  {
    flag: "OTHER",
    name: "Other Destinations",
    courses: ["Malaysia", "Singapore", "Germany", "New Zealand"],
    cities: "Multiple intake options",
    intake: "Varies by country",
  },
]

const howWeHelp = [
  {
    step: "01",
    title: "Country & University Selection",
    description: "We help you choose the right country and university based on your budget, career goals, and preferences.",
    icon: Globe,
  },
  {
    step: "02",
    title: "Application & Documentation",
    description: "Complete support for SOP writing, LOR preparation, visa documentation, and application submission.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Pre-Departure Support",
    description: "Guidance on accommodation, travel, forex, and everything you need before you fly.",
    icon: Plane,
  },
]

export default function StudyAbroadPage() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Globe className="mx-auto h-16 w-16 text-[#C9A84C]" />
            <h1 className="mt-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Study Abroad
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              We help students with international admissions — country selection, 
              documentation, visa guidance. All completely free.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-[#C9A84C] px-8 py-6 text-lg font-semibold text-primary hover:bg-[#b8963f]"
            >
              <a
                href="https://forms.gle/4q3Yhu7FMjzwG6bM8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Counselling
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Popular Destinations
          </h2>
          <p className="mt-2 text-muted-foreground">
            We assist students in applying to universities across these countries
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <div
                key={country.name}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-[#C9A84C] hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-3xl">
                    {country.flag === "GB" && "🇬🇧"}
                    {country.flag === "US" && "🇺🇸"}
                    {country.flag === "CA" && "🇨🇦"}
                    {country.flag === "AU" && "🇦🇺"}
                    {country.flag === "AE" && "🇦🇪"}
                    {country.flag === "OTHER" && "🌍"}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {country.name}
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  <div>
                    <p className="text-sm font-medium text-[#C9A84C]">Popular Courses</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {country.courses.map((course) => (
                        <span
                          key={course}
                          className="rounded-full bg-secondary px-2 py-0.5 text-xs text-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#C9A84C]">Highlights</p>
                    <p className="mt-1 text-sm text-muted-foreground">{country.cities}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#C9A84C]">Intake</p>
                    <p className="mt-1 text-sm text-muted-foreground">{country.intake}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            How We Help You Study Abroad
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Our comprehensive support covers every step of your international education journey
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howWeHelp.map((item) => (
              <div
                key={item.title}
                className="relative rounded-xl bg-card p-8 shadow-sm"
              >
                <div className="absolute -top-4 left-6 rounded-full bg-[#C9A84C] px-4 py-1 font-serif text-sm font-bold text-primary">
                  Step {item.step}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Our Services Include
          </h2>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Country & Course Selection",
                "University Shortlisting",
                "Application Support",
                "SOP & Essay Writing Help",
                "LOR Guidance",
                "Visa Documentation",
                "Interview Preparation",
                "Pre-Departure Briefing",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#C9A84C]" />
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
