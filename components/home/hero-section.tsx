import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustStats = [
  { value: "13+", label: "Years Experience" },
  { value: "100+", label: "Partner Universities" },
  { value: "10,000+", label: "Students Guided" },
  { value: "100%", label: "Free Service" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[#C9A84C]" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#C9A84C]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A84C]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="text-balance">Your Dream College.</span>
            <br />
            <span className="text-[#C9A84C]">Our Guidance.</span>
            <br />
            <span className="text-balance">Zero Cost.</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
            Expert admission counselling for 50+ courses across India and the world. 
            Completely free, always.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-[#C9A84C] px-8 py-6 text-lg font-semibold text-primary hover:bg-[#b8963f] sm:w-auto"
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10 sm:w-auto"
            >
              <a href="tel:+917909500055">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 rounded-2xl bg-white/10 p-6 backdrop-blur-sm lg:p-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl font-bold text-[#C9A84C] md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-300 md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
