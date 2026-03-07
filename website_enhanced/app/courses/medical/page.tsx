import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'Medical Admission Counselling Indore | MBBS, BDS, BAMS Colleges | Educational Mitra',
  description: 'Free medical admission guidance in Indore. Expert counselling for MBBS, BDS, BAMS, BHMS and medical colleges in Indore, MP and India. 100% free service.',
  keywords: 'MBBS admission Indore, medical colleges Indore, BDS admission MP, BAMS admission Indore, medical counselling Madhya Pradesh',
}

const specializations = [
  "MBBS", "BDS", "BAMS (Ayurveda)", "BHMS (Homeopathy)",
  "BNYS (Naturopathy)", "BPharm", "MD", "MS", "MDS", "MPharm",
]

const universities = [
  { region: "Indore", list: ["Vaishnav University", "Aurobindo College"] },
  { region: "National", list: ["Alliance University Bangalore", "SGT University Gurugram", "Ganpat University Gujarat", "NIMS Jaipur"] },
]

export default function MedicalPage() {
  return (
    <CoursePageTemplate
      title="Medical & Health Sciences Admission Counselling"
      description="Free expert guidance for MBBS, BDS, BAMS and medical admissions in top colleges across Indore, MP and India."
      specializations={specializations}
      universities={universities}
    />
  )
}
