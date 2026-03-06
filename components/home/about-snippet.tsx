import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutSnippet() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            About Educational Mitra
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Founded in 2012 by Ravi Shukla with one belief — every student deserves 
            honest, expert guidance regardless of background or budget. From a small 
            counselling initiative in Indore to a trusted PAN India and international 
            partner with MOUs at 100+ universities. MSME registered. Free for students. Always.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-medium text-[#C9A84C] hover:text-[#b8963f]"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
