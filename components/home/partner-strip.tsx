import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { universityUrls } from "@/lib/university-urls"

const partners = [
  "Sage University",
  "Vaishnav University",
  "Renaissance University",
  "Avantika University",
  "LNCT University",
  "Alliance University",
  "IPS Academy",
  "Medicaps University",
  "Chameli Devi Institute",
  "Malwa Institute",
  "Bennett University",
  "SGT University",
]

export function PartnerStrip() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">Our Partner Universities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">We have direct MOUs with 100+ prestigious universities. Click to visit their official website.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner) => {
            const url = universityUrls[partner]
            return url ? (
              <a key={partner} href={url} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-[#C9A84C]/40 bg-white/5 px-4 py-4 text-center transition-all hover:border-[#C9A84C] hover:bg-white/10 hover:-translate-y-0.5">
                <span className="text-sm font-medium text-white group-hover:text-[#C9A84C] transition-colors">{partner}</span>
                <ExternalLink className="h-3 w-3 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : (
              <div key={partner} className="flex items-center justify-center rounded-lg border-2 border-[#C9A84C]/40 bg-white/5 px-4 py-4 text-center">
                <span className="text-sm font-medium text-white">{partner}</span>
              </div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Link href="/universities" className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3 font-medium text-primary transition-colors hover:bg-[#b8963f]">
            View All Universities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
