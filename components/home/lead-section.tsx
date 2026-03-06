import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LeadSection() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Start Your Admission Journey — It&apos;s Free
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Fill our quick form or chat with us on WhatsApp. 
            Our expert counsellors are ready to help you.
          </p>

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
                Fill Counselling Form
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full bg-[#25D366] px-8 py-6 text-lg font-semibold text-white hover:bg-[#20bd5a] sm:w-auto"
            >
              <a
                href="https://wa.me/917909500055"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
