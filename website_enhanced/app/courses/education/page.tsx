import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'BEd & Education Admission Counselling Indore | Teaching Colleges | Educational Mitra',
  description: 'Free BEd & education admission guidance in Indore. Expert counselling for BEd, MEd, BPEd colleges in Indore, MP and India.',
  keywords: 'BEd admission Indore, education colleges Indore, BEd colleges MP, teacher training admission Indore, MEd admission Madhya Pradesh',
}

const specializations = [
  "BEd (Bachelor of Education)", "MEd (Master of Education)",
  "BPEd (Physical Education)", "MPEd", "BVoc",
]

const universities = [
  { region: "National", list: ["NIMS Jaipur"] },
]

export default function EducationPage() {
  return (
    <CoursePageTemplate
      title="Education & Teaching Admission Counselling"
      description="Free expert guidance for BEd, MEd and education program admissions in top colleges across Indore, MP and India."
      specializations={specializations}
      universities={universities}
    />
  )
}
