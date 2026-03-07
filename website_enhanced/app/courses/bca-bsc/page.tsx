import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'BCA & BSc Admission Counselling Indore | Top Science Colleges | Educational Mitra',
  description: 'Free BCA & BSc admission guidance in Indore. Expert counselling for top BCA and BSc colleges in Indore, MP and India. 100% free service, 13+ years experience.',
  keywords: 'BCA admission Indore, BSc admission Indore, BCA colleges Indore, BSc colleges MP, science admission counselling Indore',
}

const specializations = [
  "BCA", "BSc Mathematics", "BSc Physics", "BSc Chemistry", "BSc Biology",
  "BSc Biotechnology", "BSc Computer Science", "BSc IT", "BSc Electronics",
  "BSc Agriculture", "BSc Forensic Science", "BSc Microbiology",
]

const universities = [
  { region: "Indore", list: ["Sage University", "Vaishnav University", "LNCT University", "Medicaps University", "Softvision College"] },
  { region: "National", list: ["RV University Bangalore", "Karnavati University Gujarat"] },
]

export default function BCABScPage() {
  return (
    <CoursePageTemplate
      title="BCA & BSc Admission Counselling"
      description="Free expert guidance for BCA & BSc admission in top colleges across Indore, MP and India. Choose from science, IT, and technology programs."
      specializations={specializations}
      universities={universities}
    />
  )
}
