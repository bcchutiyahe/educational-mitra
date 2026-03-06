import { 
  GraduationCap, 
  Building2, 
  ClipboardList, 
  Handshake, 
  Globe, 
  Clock 
} from "lucide-react"

const reasons = [
  {
    icon: GraduationCap,
    title: "100% Free Service",
    description: "Our guidance is completely free for students. No hidden charges, ever.",
  },
  {
    icon: Building2,
    title: "100+ Partner Universities",
    description: "Direct MOUs with top universities across India and abroad.",
  },
  {
    icon: ClipboardList,
    title: "End-to-End Support",
    description: "From course selection to admission completion — we handle everything.",
  },
  {
    icon: Handshake,
    title: "Physical Presence",
    description: "Our counsellors are physically present at colleges on admission day.",
  },
  {
    icon: Globe,
    title: "PAN India + Global",
    description: "We serve students across India and for international destinations.",
  },
  {
    icon: Clock,
    title: "13+ Years of Trust",
    description: "Trusted by 10,000+ students since 2012. MSME Registered.",
  },
]

export function WhyUs() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We&apos;re not just consultants — we&apos;re your education partners
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-[#C9A84C] hover:shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/10 text-[#C9A84C]">
                <reason.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
