import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'Design Admission Counselling Indore | BDes, BFA Colleges | Educational Mitra',
  description: 'Free design & creative arts admission guidance in Indore. Expert counselling for BDes, BFA, BVC and design colleges in MP and India.',
  keywords: 'design admission Indore, BDes colleges India, BFA admission MP, design colleges Indore, creative arts counselling',
}

const specializations = [
  "BDes (Bachelor of Design)", "BFA (Fine Arts)", "BVC (Visual Communication)",
  "Fashion Design", "Interior Design", "Graphic Design", "Animation",
]

const universities = [
  { region: "National", list: ["GD Goenka University Gurugram", "Karnavati University Gujarat"] },
]

export default function DesignPage() {
  return (
    <CoursePageTemplate
      title="Design & Creative Arts Admission Counselling"
      description="Free expert guidance for BDes, BFA and creative arts admissions in top design colleges across India."
      specializations={specializations}
      universities={universities}
    />
  )
}
