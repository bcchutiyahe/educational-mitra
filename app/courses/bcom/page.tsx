import { CoursePageTemplate } from "@/components/course-page-template"

const specializations = [
  "BCom Plain",
  "BCom Hons",
  "BCom Computer Applications",
  "BFM",
  "BBM",
  "BCom LLB",
  "Accounting & Taxation",
  "Banking & Finance",
  "Financial Markets",
  "E-Commerce",
  "Business Economics",
]

const universities = [
  {
    region: "Indore",
    list: [
      "Sage University",
      "Vaishnav University",
      "Renaissance University",
      "Chameli Devi Institute",
      "LNCT University",
      "Malwa Institute",
      "Avantika University",
      "Altius College",
      "Astral College",
      "Oxford College",
      "Arihant College",
      "IMI College",
      "Oriental College",
      "Graduate Business School",
      "Aurobindo College",
    ],
  },
  {
    region: "National",
    list: [
      "Alliance University Bangalore",
    ],
  },
]

export default function BComPage() {
  return (
    <CoursePageTemplate
      title="BCom & Commerce"
      description="Build a strong foundation in commerce, accounting, and finance with our partner universities. Get free guidance to find your ideal program."
      specializations={specializations}
      universities={universities}
    />
  )
}
