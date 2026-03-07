import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'BCom Admission Counselling Indore | Best Commerce Colleges | Educational Mitra',
  description: 'Free BCom admission guidance in Indore. Expert counselling for top BCom and commerce colleges in Indore and MP. 100% free service.',
  keywords: 'BCom admission Indore, commerce colleges Indore, BCom colleges MP, BCom Hons admission Indore, commerce counselling Madhya Pradesh',
}

const specializations = [
  "BCom General", "BCom Hons", "BCom Accounting & Finance",
  "BCom Banking & Insurance", "BFM (Financial Markets)", "BBM",
]

const universities = [
  { region: "Indore", list: ["Oriental College", "Aurobindo College", "Arihant College", "Altius College", "Vaishnav University"] },
]

export default function BComPage() {
  return (
    <CoursePageTemplate
      title="BCom & Commerce Admission Counselling"
      description="Free expert guidance for BCom and commerce program admissions in top colleges across Indore and MP."
      specializations={specializations}
      universities={universities}
    />
  )
}
