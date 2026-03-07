import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'MBA & PGDM Admission Counselling Indore | Best MBA Colleges | Educational Mitra',
  description: 'Get free MBA & PGDM admission guidance in Indore. Expert counselling for top MBA colleges in Indore, MP and across India. 13+ years experience, 100+ partner universities.',
  keywords: 'MBA admission Indore, PGDM admission Indore, best MBA colleges Indore, MBA counselling Madhya Pradesh, free MBA guidance, MBA colleges MP',
}

const specializations = [
  "Marketing Management", "Finance Management", "HRM", "Operations",
  "Business Analytics", "Business Analytics & AI", "International Business",
  "Digital Marketing & E-Commerce", "Hospital Administration", "Event Management",
  "Logistics & Supply Chain", "Retail Management", "Real Estate", "BFSI",
  "Foreign Trade", "Applied Management", "Hospitality Travel & Tourism",
  "Executive MBA", "PGDM 360 Dual Specialization", "MBA+PGB Harvard Certification",
]

const universities = [
  {
    region: "Indore",
    list: [
      "Sage University", "Vaishnav University", "Renaissance University",
      "LNCT University", "Chameli Devi Institute", "Malwa Institute",
      "Oriental College", "Graduate Business School", "Aurobindo College",
      "Astral College", "Oxford College", "Arihant College", "ISBA College",
      "IMI College", "Jain Dewakar College", "Patel College", "BM College",
      "RD Memorial College", "Kewalshree College", "Modern College",
      "Vishishth School of Management", "New Era College Mhow", "Vikrant College",
      "Parijat College", "Gurukul College", "Indore Institute of Law", "Radiant Institute",
    ],
  },
  {
    region: "MP/Regional",
    list: ["Avantika University Ujjain", "PIEMR Indore"],
  },
  {
    region: "National",
    list: [
      "Alliance University Bangalore", "GD Goenka University Gurugram",
      "SGT University Gurugram", "Graphic Era University Dehradun",
      "Ganpat University Gujarat", "Bennett University", "ISMS Pune",
    ],
  },
]

export default function MBAPage() {
  return (
    <CoursePageTemplate
      title="MBA & PGDM Admission Counselling"
      description="Free expert guidance to get admitted to the best MBA & PGDM programs in Indore, MP and across India. 20+ specializations, 100+ partner universities."
      specializations={specializations}
      universities={universities}
    />
  )
}
