import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, Star } from 'lucide-react'
import { LeadSection } from '@/components/home/lead-section'

export const metadata: Metadata = {
  title: 'Best Education Consultant in Indore | Free Admission Guidance | Educational Mitra',
  description: 'Educational Mitra is Indore\'s best education consultant. Free admission guidance for MBA, BBA, B.Tech, Law, Medical. 13+ years, 10,000+ students guided. Call +91 7909500055.',
  keywords: 'education consultant Indore, best education consultant Indore, admission consultant Indore, education counsellor Indore, college admission help Indore, free education consultant Indore',
  alternates: { canonical: 'https://educationalmitra.in/education-consultant-indore' },
}

const services = [
  { title: "MBA & PGDM Admission", href: "/courses/mba", desc: "20+ specializations, 30+ partner colleges in Indore" },
  { title: "BBA Admission", href: "/courses/bba", desc: "Top BBA colleges in Indore with campus placement" },
  { title: "B.Tech & Engineering", href: "/courses/btech", desc: "All branches — CSE, Mechanical, Civil and more" },
  { title: "Law Admission", href: "/courses/law", desc: "BA LLB, BBA LLB, LLB 3-year programs" },
  { title: "Medical Admission", href: "/courses/medical", desc: "MBBS, BDS, BAMS, BHMS guidance" },
  { title: "Study Abroad", href: "/study-abroad", desc: "UK, USA, Canada, Australia, Dubai and more" },
]

export default function EducationConsultantIndorePage() {
  return (
    <div className="pb-16 md:pb-0">
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-[#C9A84C]" />
            <span className="text-sm font-medium text-[#C9A84C]">Indore's Most Trusted — Since 2012</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Best Education Consultant in Indore
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Educational Mitra — your trusted education consultant in Indore for 13+ years. Free expert guidance for college admissions across India. 100% free service, always.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/4q3Yhu7FMjzwG6bM8" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-8 py-4 font-semibold text-primary hover:bg-[#b8963f] transition-colors">
              Get Free Counselling <ArrowRight className="h-5 w-5" />
            </a>
            <a href="tel:+917909500055"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" /> +91 7909500055
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            Our Admission Counselling Services in Indore
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} href={s.href}
                className="group rounded-xl border-2 border-[#C9A84C]/30 bg-card p-6 hover:border-[#C9A84C] hover:-translate-y-1 transition-all">
                <h3 className="font-semibold text-foreground group-hover:text-[#C9A84C] transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-[#C9A84C] font-medium">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            Why Students in Indore Trust Educational Mitra
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "13+ Years in Indore", desc: "We've been serving students in Indore since 2012. Local expertise, deep college connections." },
              { title: "100% Free Service", desc: "We never charge students. Our service is completely free — no registration fee, no hidden charges." },
              { title: "100+ Partner Colleges", desc: "Direct MOUs with 100+ colleges across Indore, MP and India. We know every college inside out." },
              { title: "Physical Presence", desc: "Unlike online consultants, we have a physical office in Indore and visit partner colleges regularly." },
              { title: "10,000+ Students Guided", desc: "We've helped over 10,000 students get admission to their dream colleges." },
              { title: "PAN India Reach", desc: "From Indore to Bangalore, Delhi to Gujarat — we guide students to colleges across India." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#C9A84C]/30 bg-card p-6">
                <CheckCircle className="h-6 w-6 text-[#C9A84C] mb-3" />
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
