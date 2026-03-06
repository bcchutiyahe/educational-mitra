import { CoursePageTemplate } from "@/components/course-page-template"

const specializations = [
  "English",
  "History",
  "Political Science",
  "Economics",
  "Sociology",
  "Psychology",
  "Philosophy",
  "Geography",
  "Sanskrit",
  "Hindi",
  "Journalism",
  "Public Administration",
]

const additionalPrograms = ["BJMC", "BVC", "BFA"]

const universities = [
  {
    region: "Indore & MP",
    list: [
      "Sage University",
      "Vaishnav University",
      "Renaissance University",
      "LNCT University",
      "Avantika University",
      "Malwa Institute",
      "IPS Academy",
      "Medicaps University",
      "Oriental College",
    ],
  },
  {
    region: "National",
    list: [
      "Alliance University Bangalore",
      "GD Goenka University",
      "Ganpat University Gujarat",
      "NIMS Jaipur",
      "SGT University Gurugram",
      "Bennett University",
    ],
  },
]

export default function BAPage() {
  return (
    <CoursePageTemplate
      title="BA & Humanities"
      description="Explore arts and humanities programs across various disciplines. We help you find the right college for your passion — completely free."
      specializations={specializations}
      universities={universities}
      additionalPrograms={additionalPrograms}
    />
  )
}
