import { FileText, PhoneCall, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Fill the Form",
    description: "Takes just 30 seconds. Share your basic details and course preference.",
    step: "01",
  },
  {
    icon: PhoneCall,
    title: "Free Call Within 24hrs",
    description: "Our expert counsellor will call you to understand your needs better.",
    step: "02",
  },
  {
    icon: GraduationCap,
    title: "Get Admitted",
    description: "We guide you through the entire admission process until you're enrolled.",
    step: "03",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Your journey to the right college starts with just 3 simple steps
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              {/* Step Number */}
              <div className="absolute -top-4 right-6 rounded-full bg-[#C9A84C] px-4 py-1 font-serif text-sm font-bold text-primary">
                Step {item.step}
              </div>

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[#C9A84C] group-hover:text-primary">
                <item.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {item.description}
              </p>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
