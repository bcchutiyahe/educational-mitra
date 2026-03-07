import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'Postgraduate Admission Counselling Indore | MSc, MA, MTech | Educational Mitra',
  description: 'Free postgraduate admission guidance in Indore. Expert counselling for MSc, MA, MTech, MCA, MSW and PG programs in Indore, MP and India.',
  keywords: 'postgraduate admission Indore, MSc admission Indore, MA admission MP, MTech colleges Indore, PG counselling Madhya Pradesh',
}

const specializations = [
  "MSc", "MTech", "MCA", "MA", "MSW (Social Work)",
  "MPharm", "MEd", "MPEd",
]

const universities = [
  { region: "Indore", list: ["Sage University", "Vaishnav University", "LNCT University", "Medicaps University"] },
  { region: "National", list: ["Alliance University Bangalore", "RV University Bangalore", "Bennett University"] },
]

export default function PostgraduatePage() {
  return (
    <CoursePageTemplate
      title="Postgraduate Admission Counselling"
      description="Free expert guidance for MSc, MA, MTech, MCA and all postgraduate admissions in top colleges across Indore, MP and India."
      specializations={specializations}
      universities={universities}
    />
  )
}
