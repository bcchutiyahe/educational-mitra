import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'BBA Admission Counselling Indore | Best BBA Colleges | Educational Mitra',
  description: 'Free BBA admission guidance in Indore. Get counselling for top BBA colleges in Indore, MP and across India. 13+ years experience. 100% free service.',
  keywords: 'BBA admission Indore, best BBA colleges Indore, BBA counselling MP, BBA colleges Madhya Pradesh, free BBA guidance Indore',
}

const specializations = [
  "General Management", "Marketing", "Finance", "HRM",
  "International Business", "Entrepreneurship", "Digital Marketing",
  "Banking & Insurance", "Retail Management", "Operations",
]

const universities = [
  {
    region: "Indore",
    list: [
      "Sage University", "Vaishnav University", "Renaissance University",
      "LNCT University", "Chameli Devi Institute", "Malwa Institute",
      "IPS Academy", "Medicaps University", "Prestige University",
      "Jaipuria Institute", "Amity Business School", "Oriental College",
      "Graduate Business School", "Softvision College", "Aurobindo College",
      "Astral College", "Oxford College", "Arihant College", "Altius College",
      "IMI College", "Jain Dewakar College", "BM College", "New Era College Mhow",
      "Vikrant College", "Parijat College", "Radiant Institute",
    ],
  },
  {
    region: "MP/Regional",
    list: ["Avantika University Ujjain"],
  },
  {
    region: "National",
    list: [
      "Alliance University Bangalore", "GD Goenka University Gurugram",
      "Graphic Era University Dehradun", "Ganpat University Gujarat", "Bennett University",
    ],
  },
]

export default function BBAPage() {
  return (
    <CoursePageTemplate
      title="BBA Admission Counselling"
      description="Free expert guidance for BBA admission in top colleges across Indore, MP and India. Choose from multiple specializations and find your perfect college."
      specializations={specializations}
      universities={universities}
    />
  )
}
