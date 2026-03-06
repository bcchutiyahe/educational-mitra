import { ArrowRight, Building2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadSection } from "@/components/home/lead-section"
import { universityUrls } from "@/lib/university-urls"

interface CoursePageTemplateProps {
  title: string
  description: string
  specializations: string[]
  universities: { region: string; list: string[] }[]
  additionalPrograms?: string[]
}

export function CoursePageTemplate({ title, description, specializations, universities, additionalPrograms }: CoursePageTemplateProps) {
  return (
    <div className="pb-16 md:pb-0">
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-gray-300">{description}</p>
            <Button asChild size="lg" className="mt-8 bg-[#C9A84C] px-8 py-6 text-lg font-semibold text-primary hover:bg-[#b8963f]">
              <a href="https://forms.gle/4q3Yhu7FMjzwG6bM8" target="_blank" rel="noopener noreferrer">
                Get Free Counselling <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            {additionalPrograms ? "Programs & Specializations" : "Specializations Available"}
          </h2>
          <p className="mt-2 text-muted-foreground">Choose from a wide range of specializations based on your career goals</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {specializations.map((spec) => (
              <span key={spec} className="rounded-full border border-[#C9A84C] bg-[#C9A84C]/10 px-4 py-2 text-sm font-medium text-foreground">{spec}</span>
            ))}
          </div>
          {additionalPrograms && additionalPrograms.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">Also Available:</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {additionalPrograms.map((prog) => (
                  <span key={prog} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground">{prog}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Partner Universities</h2>
          <p className="mt-2 text-muted-foreground">We have direct MOUs with these prestigious institutions. Click to visit their official website.</p>
          <div className="mt-8 space-y-8">
            {universities.map((group) => (
              <div key={group.region}>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Building2 className="h-5 w-5 text-[#C9A84C]" />{group.region}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {group.list.map((uni) => {
                    const url = universityUrls[uni]
                    const inner = (
                      <>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                          <span className="text-xs font-bold text-[#C9A84C]">MOU</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium text-foreground group-hover:text-[#C9A84C] transition-colors block">{uni}</span>
                          {url && <span className="text-xs text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mt-0.5"><ExternalLink className="h-3 w-3" />Visit site</span>}
                        </div>
                      </>
                    )
                    return url ? (
                      <a key={uni} href={url} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg border-2 border-[#C9A84C]/30 bg-card p-4 transition-all hover:border-[#C9A84C] hover:-translate-y-0.5 hover:shadow-sm">
                        {inner}
                      </a>
                    ) : (
                      <div key={uni} className="group flex items-center gap-3 rounded-lg border-2 border-[#C9A84C]/30 bg-card p-4 transition-colors hover:border-[#C9A84C]">
                        {inner}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadSection />
    </div>
  )
}
