import { MapPin, Phone, MessageCircle, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Ready to start your admission journey? Contact us today for free expert counselling.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Contact Information
              </h2>
              <p className="mt-2 text-muted-foreground">
                Visit us at our office or reach out through any of these channels
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                    <MapPin className="h-6 w-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Address</h3>
                    <p className="mt-1 text-muted-foreground">
                      402, 4th Floor, Silver Sanchora Castle,
                      <br />
                      RNT Marg, South Tukoganj,
                      <br />
                      Indore 452001, Madhya Pradesh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                    <Phone className="h-6 w-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+917909500055"
                      className="mt-1 block text-lg font-medium text-primary hover:text-[#C9A84C]"
                    >
                      +91 7909500055
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <a
                      href="https://wa.me/917909500055"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-lg font-medium text-[#25D366] hover:underline"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                    <Clock className="h-6 w-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                    <div className="mt-1 space-y-1 text-muted-foreground">
                      <p>Monday – Saturday: 10:00 AM – 7:30 PM</p>
                      <p>Sunday: 11:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div>
              <div className="rounded-2xl bg-primary p-8 text-center lg:p-12">
                <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
                  Start Your Journey Today
                </h2>
                <p className="mt-4 text-gray-300">
                  Fill our quick counselling form and our expert will contact you within 24 hours.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-full bg-[#C9A84C] px-8 py-6 text-lg font-semibold text-primary hover:bg-[#b8963f]"
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

                <div className="mt-6 flex items-center justify-center gap-2 text-gray-300">
                  <span>or chat with us on</span>
                  <a
                    href="https://wa.me/917909500055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#25D366] hover:underline"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2759651456997!2d75.8659!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnNTcuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                  title="Educational Mitra Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="tel:+917909500055"
              className="flex items-center gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <p className="text-sm text-muted-foreground">+91 7909500055</p>
              </div>
            </a>

            <a
              href="https://wa.me/917909500055"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10">
                <MessageCircle className="h-7 w-7 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat instantly</p>
              </div>
            </a>

            <a
              href="https://forms.gle/4q3Yhu7FMjzwG6bM8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/10">
                <ArrowRight className="h-7 w-7 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Fill Form</h3>
                <p className="text-sm text-muted-foreground">Get free counselling</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
