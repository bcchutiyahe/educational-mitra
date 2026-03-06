import { ArrowRight, Building2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadSection } from "@/components/home/lead-section"

const categories = [
  {
    title: "Management",
    programs: ["MBA/PGDM (all specializations)", "MCom", "MSW"],
  },
  {
    title: "Science & Technology",
    programs: [
      "MSc Physics",
      "MSc Chemistry",
      "MSc Mathematics",
      "MSc Environmental Science",
      "MSc Biotechnology",
      "MSc Computer Science",
      "MTech (all branches)",
      "MCA",
    ],
  },
  {
    title: "Arts & Humanities",
    programs: [
      "MA English",
      "MA History",
      "MA Political Science",
      "MA Economics",
      "MA Sociology",
      "MA Psychology",
      "MA Sanskrit",
    ],
  },
  {
    title: "Law",
    programs: ["LLM"],
  },
  {
    title: "Medical",
    programs: ["MD", "MS", "MDS", "MPharm", "MPT"],
  },
  {
    title: "Education",
    programs: ["MEd", "MPEd"],
  },
]

export default function PostgraduatePage() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Award className="mx-auto h-16 w-16 text-[#C9A84C]" />
            <h1 className="mt-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Postgraduate Programs
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Advance your career with postgraduate programs across management, science, 
              arts, law, medical, and education. Free guidance for all PG admissions.
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

      {/* Programs by Category */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Programs by Category
          </h2>
          <p className="mt-2 text-muted-foreground">
            Choose from a wide range of postgraduate programs
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-[#C9A84C]">
                  <Building2 className="h-5 w-5" />
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.programs.map((prog) => (
                    <span
                      key={prog}
                      className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground"
                    >
                      {prog}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Not Sure Which PG Program is Right for You?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our expert counsellors can help you choose the right postgraduate program 
            based on your career goals and academic background.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://forms.gle/4q3Yhu7FMjzwG6bM8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to a Counsellor
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <LeadSection />
    </div>
  )
}
