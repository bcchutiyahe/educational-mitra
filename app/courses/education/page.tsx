import { CoursePageTemplate } from "@/components/course-page-template"

const specializations = [
  "BEd",
  "BPEd",
  "BVoc",
  "MEd",
  "MPEd",
  "DElEd",
  "NTT",
]

const universities = [
  {
    region: "All Partner Universities",
    list: [
      "Sage University",
      "Vaishnav University",
      "Renaissance University",
      "LNCT University",
      "Avantika University",
      "Malwa Institute",
      "SGT University Gurugram",
      "NIMS Jaipur",
      "Ganpat University Gujarat",
    ],
  },
]

export default function EducationPage() {
  return (
    <CoursePageTemplate
      title="Education Programs"
      description="Shape the future as an educator with BEd, MEd, and teaching programs. We guide you to the right institution — completely free."
      specializations={specializations}
      universities={universities}
    />
  )
}
