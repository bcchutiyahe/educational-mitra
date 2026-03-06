import { MapPin } from "lucide-react"

const coverage = [
  {
    flag: "IN",
    region: "PAN India",
    description: "All major cities across India",
  },
  {
    flag: "GB",
    region: "United Kingdom",
    description: "London, Manchester, Birmingham",
  },
  {
    flag: "US",
    region: "United States",
    description: "All major university cities",
  },
  {
    flag: "CA",
    region: "Canada",
    description: "Toronto, Vancouver, Montreal",
  },
  {
    flag: "AU",
    region: "Australia",
    description: "Sydney, Melbourne, Brisbane",
  },
  {
    flag: "AE",
    region: "Dubai / UAE",
    description: "Dubai, Abu Dhabi",
  },
]

export function CoverageSection() {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Our Coverage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We help students find the right college in India and abroad
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coverage.map((item) => (
            <div
              key={item.region}
              className="flex items-center gap-4 rounded-xl bg-card p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                {item.flag === "IN" && "🇮🇳"}
                {item.flag === "GB" && "🇬🇧"}
                {item.flag === "US" && "🇺🇸"}
                {item.flag === "CA" && "🇨🇦"}
                {item.flag === "AU" && "🇦🇺"}
                {item.flag === "AE" && "🇦🇪"}
              </div>
              <div>
                <p className="font-semibold text-foreground">{item.region}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 rounded-xl bg-[#C9A84C]/10 p-4 text-center">
          <MapPin className="h-5 w-5 text-[#C9A84C]" />
          <span className="font-medium text-foreground">
            Walk-in Counselling Available at our Indore Office
          </span>
        </div>
      </div>
    </section>
  )
}
