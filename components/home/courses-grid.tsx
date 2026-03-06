import Link from "next/link"
import { 
  Briefcase, 
  Building2, 
  Cpu, 
  Code, 
  Calculator, 
  BookOpen, 
  Scale, 
  Stethoscope, 
  Palette, 
  GraduationCap, 
  Award,
  Globe
} from "lucide-react"
import { ArrowRight } from "lucide-react"

const courses = [
  {
    name: "MBA & PGDM",
    description: "Master of Business Administration and Post Graduate Diploma",
    icon: Briefcase,
    href: "/courses/mba",
  },
  {
    name: "BBA",
    description: "Bachelor of Business Administration",
    icon: Building2,
    href: "/courses/bba",
  },
  {
    name: "B.Tech & Engineering",
    description: "Bachelor of Technology and Engineering programs",
    icon: Cpu,
    href: "/courses/btech",
  },
  {
    name: "BCA & BSc",
    description: "Computer Applications and Science degrees",
    icon: Code,
    href: "/courses/bca-bsc",
  },
  {
    name: "BCom & Commerce",
    description: "Commerce and Accounting programs",
    icon: Calculator,
    href: "/courses/bcom",
  },
  {
    name: "BA & Humanities",
    description: "Arts and Humanities degrees",
    icon: BookOpen,
    href: "/courses/ba",
  },
  {
    name: "Law",
    description: "LLB, BA LLB, BBA LLB and LLM programs",
    icon: Scale,
    href: "/courses/law",
  },
  {
    name: "Medical & Health Sciences",
    description: "MBBS, BDS, Nursing and Allied Health",
    icon: Stethoscope,
    href: "/courses/medical",
  },
  {
    name: "Design & Creative",
    description: "BDes, BFA, Animation and Media",
    icon: Palette,
    href: "/courses/design",
  },
  {
    name: "Education",
    description: "B.Ed, M.Ed and Teaching programs",
    icon: GraduationCap,
    href: "/courses/education",
  },
  {
    name: "Postgraduate",
    description: "MA, MSc, MCom and other PG programs",
    icon: Award,
    href: "/courses/postgraduate",
  },
  {
    name: "Study Abroad",
    description: "UK, USA, Canada, Australia and more",
    icon: Globe,
    href: "/study-abroad",
  },
]

export function CoursesGrid() {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Explore Courses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We guide students across 50+ courses in management, engineering, law, medical, 
            and more. Find your perfect fit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <Link
              key={course.name}
              href={course.href}
              className="group flex flex-col rounded-xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-[#C9A84C] group-hover:text-primary">
                <course.icon className="h-6 w-6" />
              </div>
              
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                {course.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {course.description}
              </p>
              
              <div className="mt-4 flex items-center text-sm font-medium text-[#C9A84C]">
                Explore
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 font-medium text-primary hover:text-[#C9A84C]"
          >
            View All Courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
