import { ArrowRight, Building2, Code, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadSection } from "@/components/home/lead-section"

const bcaSpecializations = [
  "BCA Plain",
  "Cloud Computing",
  "Data Science",
  "Cybersecurity",
  "AI & ML",
]

const bscSubjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Biotechnology",
  "Computer Science",
  "Environmental Science",
  "Agriculture",
  "Microbiology",
  "Nursing",
  "Forensic Science",
]

const universities = [
  "Sage University",
  "Vaishnav University",
  "Renaissance University",
  "LNCT University",
  "Avantika University",
  "Malwa Institute",
  "IPS Academy",
  "Medicaps University",
  "Alliance University Bangalore",
  "RV University Bangalore",
  "Ganpat University Gujarat",
  "Karnavati University Gujarat",
  "NIMS Jaipur",
  "SGT University Gurugram",
  "GD Goenka University",
  "Graphic Era University",
  "Bennett University",
  "SPSU Udaipur",
]

export default function BCABScPage() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              BCA & BSc Programs
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Pursue your passion in Computer Applications or Science with specializations 
              in emerging technologies and traditional sciences.
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

      {/* BCA Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Code className="h-8 w-8 text-[#C9A84C]" />
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              BCA Specializations
            </h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            Bachelor of Computer Applications with industry-relevant specializations
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {bcaSpecializations.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-[#C9A84C] bg-[#C9A84C]/10 px-4 py-2 text-sm font-medium text-foreground"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BSc Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <FlaskConical className="h-8 w-8 text-[#C9A84C]" />
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              BSc Subjects
            </h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            Bachelor of Science in various disciplines
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {bscSubjects.map((subject) => (
              <span
                key={subject}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Partner Universities
          </h2>
          <p className="mt-2 text-muted-foreground">
            We have direct MOUs with these prestigious institutions
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {universities.map((uni) => (
              <div
                key={uni}
                className="flex items-center gap-3 rounded-lg border-2 border-[#C9A84C]/30 bg-card p-4 transition-colors hover:border-[#C9A84C]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                  <Building2 className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <span className="text-sm font-medium text-foreground">{uni}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
