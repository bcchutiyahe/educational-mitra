import type { Metadata } from 'next'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { LeadSection } from '@/components/home/lead-section'

export const metadata: Metadata = {
  title: 'Free Admission Counselling in Indore 2025 | MBA, BBA, B.Tech | Educational Mitra',
  description: 'Get 100% free admission counselling in Indore for MBA, BBA, B.Tech, Law and Medical. Educational Mitra — Indore\'s trusted counsellor since 2012. No fees, no charges.',
  keywords: 'free admission counselling Indore, free college guidance Indore, free education consultant Indore, free MBA counselling Indore, free BBA admission help Indore',
  alternates: { canonical: 'https://educationalmitra.in/free-admission-counselling-indore' },
}

export default function FreeAdmissionCounsellingPage() {
  return (
    <div className="pb-16 md:pb-0">
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 px-4 py-2 mb-6">
            <span className="text-sm font-medium text-[#C9A84C]">100% Free — No Hidden Charges</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Free Admission Counselling in Indore
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Educational Mitra provides completely free admission counselling in Indore for MBA, BBA, B.Tech, Law, Medical and Study Abroad. We never charge students — ever.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/4q3Yhu7FMjzwG6bM8" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-8 py-4 font-semibold text-primary hover:bg-[#b8963f]">
              Start Free Counselling <ArrowRight className="h-5 w-5" />
            </a>
            <a href="tel:+917909500055"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10">
              <Phone className="h-5 w-5" /> +91 7909500055
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            What's Included in Our Free Counselling?
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Free career counselling based on your interests",
              "Free college shortlisting from 100+ partner colleges",
              "Free application form filling assistance",
              "Free documentation guidance",
              "Free entrance test information",
              "Free follow-up till admission confirmation",
              "Free guidance for study abroad applications",
              "Free visa and documentation help for abroad",
              "Zero charges — no registration, no processing fee",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#C9A84C]/30 bg-card p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-[#C9A84C] mt-0.5" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A3F62] py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
            Why is Educational Mitra's Service Free?
          </h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Educational Mitra is MSME registered and works directly with partner universities under official MOU agreements. The universities support our operations — which means our guidance to students is always 100% free. We believe every student deserves quality admission counselling regardless of their financial background.
          </p>
          <a href="https://forms.gle/4q3Yhu7FMjzwG6bM8" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-8 py-4 font-semibold text-primary hover:bg-[#b8963f]">
            Get Started — It's Free <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
