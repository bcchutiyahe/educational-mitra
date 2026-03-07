import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'Law Admission Counselling Indore | Best Law Colleges Indore | Educational Mitra',
  description: 'Free law admission guidance in Indore. Expert counselling for BA LLB, BBA LLB, LLB and LLM admissions in top law colleges in Indore and MP.',
  keywords: 'law admission Indore, BA LLB admission Indore, LLB colleges Indore, law colleges MP, law counselling Madhya Pradesh, best law colleges Indore',
}

const specializations = [
  "BA LLB (5 Year)", "BBA LLB (5 Year)", "BCom LLB (5 Year)",
  "LLB (3 Year)", "LLM",
]

const universities = [
  {
    region: "Indore",
    list: [
      "Sage University", "Vaishnav University", "Renaissance University",
      "LNCT University", "Chameli Devi Institute", "IPS Academy",
      "Oxford College", "Graduate Business School", "ISBA College",
      "IMI College", "Indore Institute of Law",
    ],
  },
  { region: "MP/Regional", list: ["Avantika University Ujjain", "Renaissance College DAVV"] },
  { region: "National", list: ["Alliance University Bangalore", "SGT University Gurugram", "Bennett University"] },
]

export default function LawPage() {
  return (
    <CoursePageTemplate
      title="Law Admission Counselling"
      description="Free expert guidance for law admissions in top law colleges across Indore, MP and India. BA LLB, BBA LLB, LLB and LLM programs available."
      specializations={specializations}
      universities={universities}
    />
  )
}
