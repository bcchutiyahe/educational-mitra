import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bhopal",
    quote: "Educational Mitra compared every MBA option for me and helped me secure admission at a top university in Indore. Honest, detailed, and completely free.",
    course: "MBA",
    university: "Sage University",
  },
  {
    name: "Rahul Verma",
    location: "Indore",
    quote: "As a first-generation college student I had no idea how admissions worked. They walked me through everything and even had a counsellor physically present at the college on my admission day.",
    course: "BBA",
    university: "Vaishnav University",
  },
  {
    name: "Anjali Patel",
    location: "Ujjain",
    quote: "I wanted to study Law but had no idea where to begin. They gave me a clear comparison and helped me get admitted to my first choice — all for free.",
    course: "BA LLB",
    university: "Avantika University",
  },
  {
    name: "Mohammed Raza",
    location: "Indore",
    quote: "I was planning to study abroad with no clue about the process. Educational Mitra guided me through UK university options and made it completely manageable.",
    course: "Study Abroad",
    university: "UK",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real stories from students we&apos;ve helped achieve their educational goals
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-xl bg-card p-6 shadow-sm lg:p-8"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[#C9A84C]/20" />
              
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#C9A84C] text-[#C9A84C]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#C9A84C]">
                    {testimonial.course}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
