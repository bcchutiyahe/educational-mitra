import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { LeadSection } from '@/components/home/lead-section'

export const metadata: Metadata = {
  title: 'MBA Admission Counselling Indore 2025 | Top MBA Colleges Indore | Educational Mitra',
  description: 'Looking for MBA admission in Indore? Educational Mitra offers free expert counselling for top MBA colleges in Indore. 13+ years experience, 30+ MBA partner colleges. Call +91 7909500055.',
  keywords: 'MBA admission Indore 2025, MBA colleges Indore, best MBA colleges Indore, MBA counsellor Indore, MBA admission guidance Indore, free MBA counselling Indore',
  alternates: { canonical: 'https://educationalmitra.in/mba-admission-indore' },
}

const colleges = [
  "Sage University Indore", "Vaishnav University Indore", "Renaissance University Indore",
  "LNCT University Indore", "Chameli Devi Institute Indore", "IPS Academy Indore",
  "Oriental College Indore", "Graduate Business School Indore", "Jaipuria Institute Indore",
  "Prestige University Indore", "IMI College Indore", "Oxford College Indore",
]

const steps = [
  { step: "1", title: "Free Consultation", desc: "Talk to our counsellor about your goals, budget and preferences" },
  { step: "2", title: "College Shortlisting", desc: "We shortlist the best MBA colleges in Indore matching your profile" },
  { step: "3", title: "Application Support", desc: "We help you with forms, documents and entrance test guidance" },
  { step: "4", title: "Final Admission", desc: "We follow up until your admission is confirmed — at zero cost" },
]

export default function MBAAdmissionIndorePage() {
  return (
    <div className="pb-16 md:pb-0">
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            MBA Admission Counselling in Indore
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Free expert guidance to get admitted to the best MBA colleges in Indore. 13+ years experience, 30+ MBA partner colleges, 100% free service.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/4q3Yhu7FMjzwG6bM8" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-8 py-4 font-semibold text-primary hover:bg-[#b8963f] transition-colors">
              Get Free MBA Counselling <ArrowRight className="h-5 w-5" />
            </a>
            <a href="tel:+917909500055"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" /> Call +91 7909500055
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            Why Choose Educational Mitra for MBA Admission in Indore?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["13+ Years of MBA Counselling Experience", "30+ MBA Partner Colleges in Indore", "100% Free Service — No Hidden Charges", "Physical Presence at Partner Colleges", "End-to-End Support Till Admission", "10,000+ Students Successfully Guided"].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl border border-[#C9A84C]/30 bg-card p-5">
                <CheckCircle className="h-6 w-6 shrink-0 text-[#C9A84C] mt-0.5" />
                <span className="font-medium text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Top MBA Colleges in Indore — Our Partners
          </h2>
          <p className="mt-2 text-muted-foreground">We have direct MOUs with these MBA colleges in Indore</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {colleges.map((college) => (
              <div key={college} className="rounded-lg border-2 border-[#C9A84C]/30 bg-card p-4 text-sm font-medium text-foreground hover:border-[#C9A84C] transition-colors">
                {college}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/courses/mba" className="inline-flex items-center gap-2 text-[#C9A84C] font-medium hover:underline">
              View all MBA colleges and specializations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            How We Help You Get MBA Admission in Indore
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="rounded-xl border-2 border-[#C9A84C]/30 bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C] text-primary font-bold text-xl">
                  {s.step}
                </div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
