import { ArrowRight, Building2, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadSection } from "@/components/home/lead-section"

const ugPrograms = [
  "MBBS",
  "BDS",
  "BAMS",
  "BHMS",
  "BNYS",
  "BPharm",
  "BPT",
  "BSc Nursing",
  "BMLT",
]

const pgPrograms = ["MD", "MS", "MDS", "MPharm", "MPT"]

const alliedPrograms = [
  "BSc Radiology",
  "BSc Optometry",
  "BSc Cardiac Technology",
  "BSc Dialysis Technology",
]

const universities = [
  "SGT University Gurugram",
  "NIMS Jaipur",
  "Ganpat University Gujarat",
  "Alliance University Bangalore",
  "Vaishnav University",
  "Sage University",
  "Avantika University",
  "Renaissance University",
  "RV University Bangalore",
]

export default function MedicalPage() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Stethoscope className="mx-auto h-16 w-16 text-[#C9A84C]" />
            <h1 className="mt-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Medical & Health Sciences
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Build a career in healthcare with MBBS, BDS, Nursing, Pharmacy, and Allied Health Sciences. 
              We guide you through the admission process — free.
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

      {/* Programs */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Programs Available
          </h2>
          
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-[#C9A84C]">Undergraduate Programs</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {ugPrograms.map((prog) => (
                  <span
                    key={prog}
                    className="rounded-full border border-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-[#C9A84C]">Postgraduate Programs</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {pgPrograms.map((prog) => (
                  <span
                    key={prog}
                    className="rounded-full border border-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-[#C9A84C]">Allied Health Sciences</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {alliedPrograms.map((prog) => (
                  <span
                    key={prog}
                    className="rounded-full border border-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Partner Universities
          </h2>
          <p className="mt-2 text-muted-foreground">
            We have direct MOUs with these prestigious medical institutions
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {universities.map((uni) => (
              <div
                key={uni}
                className="flex items-center gap-3 rounded-lg border-2 border-[#C9A84C]/30 bg-card p-5 transition-colors hover:border-[#C9A84C]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                  <Building2 className="h-6 w-6 text-[#C9A84C]" />
                </div>
                <span className="font-medium text-foreground">{uni}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
