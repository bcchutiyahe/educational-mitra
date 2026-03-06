import { ArrowRight, Building2, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadSection } from "@/components/home/lead-section"

const integratedPrograms = ["BA LLB (5-year)", "BBA LLB (5-year)", "BCom LLB (5-year)"]
const standalonePrograms = ["LLB (3-year)"]
const pgPrograms = ["LLM"]

const universitiesWithPrograms = [
  {
    name: "Avantika University Ujjain",
    programs: ["BA LLB", "BBA LLB", "BCom LLB"],
  },
  {
    name: "Alliance University Bangalore",
    programs: ["BA LLB", "BBA LLB", "LLB", "LLM"],
  },
  {
    name: "Vaishnav University",
    programs: ["BA LLB", "BBA LLB", "BCom LLB", "LLB", "LLM"],
  },
  {
    name: "Renaissance University",
    programs: ["LLB", "LLM"],
  },
  {
    name: "Renaissance College DAVV",
    programs: ["BA LLB", "BBA LLB", "BCom LLB", "LLB"],
  },
  {
    name: "Sage University",
    programs: ["BA LLB", "BBA LLB", "LLB", "LLM"],
  },
]

const otherUniversities = [
  "LNCT University",
  "Oxford College",
  "ISBA College",
  "IMI College",
  "Chameli Devi Institute",
  "Graduate Business School",
  "Bennett University",
]

export default function LawPage() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Scale className="mx-auto h-16 w-16 text-[#C9A84C]" />
            <h1 className="mt-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Law Programs
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Build a career in law with integrated 5-year programs or standalone LLB. 
              We guide you to the right law school — completely free.
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
              <h3 className="font-semibold text-[#C9A84C]">Integrated 5-Year Programs</h3>
              <div className="mt-4 space-y-2">
                {integratedPrograms.map((prog) => (
                  <span
                    key={prog}
                    className="block rounded-lg bg-[#C9A84C]/10 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-[#C9A84C]">Standalone Programs</h3>
              <div className="mt-4 space-y-2">
                {standalonePrograms.map((prog) => (
                  <span
                    key={prog}
                    className="block rounded-lg bg-[#C9A84C]/10 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-[#C9A84C]">Postgraduate</h3>
              <div className="mt-4 space-y-2">
                {pgPrograms.map((prog) => (
                  <span
                    key={prog}
                    className="block rounded-lg bg-[#C9A84C]/10 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities with Programs */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Partner Universities & Programs
          </h2>
          <p className="mt-2 text-muted-foreground">
            Universities with their available law programs
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {universitiesWithPrograms.map((uni) => (
              <div
                key={uni.name}
                className="rounded-xl border-2 border-[#C9A84C]/30 bg-card p-5 transition-colors hover:border-[#C9A84C]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                    <span className="text-xs font-bold text-[#C9A84C]">MOU</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{uni.name}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {uni.programs.map((prog) => (
                    <span
                      key={prog}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {prog}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold text-foreground">Other Partner Institutions</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {otherUniversities.map((uni) => (
              <div
                key={uni}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <Building2 className="h-5 w-5 text-[#C9A84C]" />
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
