import { CoursePageTemplate } from "@/components/course-page-template"

const specializations = [
  "BDes",
  "BFA",
  "BVC",
  "BJMC",
  "Graphic Design",
  "Fashion Design",
  "Interior Design",
  "Animation & VFX",
  "Film & Media",
]

const universities = [
  {
    region: "All Partner Universities",
    list: [
      "Sage University",
      "Renaissance University",
      "Vaishnav University",
      "Alliance University Bangalore",
      "GD Goenka University",
      "Avantika University",
      "Bennett University",
      "LNCT University",
    ],
  },
]

export default function DesignPage() {
  return (
    <CoursePageTemplate
      title="Design & Creative Arts"
      description="Unleash your creativity with design, media, and visual arts programs. We help you find the right creative school — completely free."
      specializations={specializations}
      universities={universities}
    />
  )
}
