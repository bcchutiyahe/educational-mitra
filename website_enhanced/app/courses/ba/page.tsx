import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'BA & Humanities Admission Counselling Indore | Best Arts Colleges | Educational Mitra',
  description: 'Free BA & humanities admission guidance in Indore. Expert counselling for top arts and humanities colleges in Indore, MP and India.',
  keywords: 'BA admission Indore, arts colleges Indore, BJMC admission Indore, humanities colleges MP, BA counselling Madhya Pradesh',
}

const specializations = [
  "BA English", "BA History", "BA Political Science", "BA Economics",
  "BA Psychology", "BA Sociology", "BA Geography", "BA Sanskrit",
  "BJMC (Journalism & Mass Communication)", "BFA", "BBA",
]

const universities = [
  { region: "Indore", list: ["Sage University", "Vaishnav University", "Renaissance University", "LNCT University"] },
]

export default function BAPage() {
  return (
    <CoursePageTemplate
      title="BA & Humanities Admission Counselling"
      description="Free expert guidance for BA and humanities admissions in top colleges across Indore, MP and India."
      specializations={specializations}
      universities={universities}
    />
  )
}
