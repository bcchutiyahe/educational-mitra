import { CoursePageTemplate } from "@/components/course-page-template"

const specializations = [
  "Marketing Management",
  "Finance Management",
  "HRM",
  "Operations",
  "Business Analytics",
  "Business Analytics & AI",
  "International Business",
  "Digital Marketing & E-Commerce",
  "Hospital Administration",
  "Event Management",
  "Logistics & Supply Chain",
  "Retail Management",
  "Real Estate",
  "BFSI",
  "Foreign Trade",
  "Applied Management",
  "Hospitality Travel & Tourism",
  "Executive MBA",
  "PGDM 360 Dual Specialization",
  "MBA+PGB Harvard Certification",
]

const universities = [
  {
    region: "Indore",
    list: [
      "Sage University",
      "Renaissance University (Harvard Cert MBA)",
      "Vaishnav University (IBM Collaboration)",
      "Avantika University Ujjain (HCL Super Specialization)",
      "Chameli Devi Institute",
      "Malwa Institute",
      "LNCT University",
      "Astral College",
      "Gurukul College",
      "IMI College",
      "Arihant College",
      "ISBA College",
      "Oxford College",
      "Kewalshree College",
      "Modern College",
      "Vishishth School of Management",
      "Jain Dewakar College",
      "Patel College",
      "BM College",
      "RD Memorial College",
      "Radiant Institute",
      "New Era College Mhow",
      "Vikrant College",
      "Parijat College",
      "Aurobindo College",
      "Oriental College",
      "Indore Institute of Law",
    ],
  },
  {
    region: "National",
    list: [
      "Alliance University Bangalore",
      "ISMS Pune (PGDM with International Tour)",
      "Bennett University",
    ],
  },
]

export default function MBAPage() {
  return (
    <CoursePageTemplate
      title="MBA & PGDM"
      description="MBA and PGDM are India's most sought-after management qualifications. We help you find the right specialization and university — free."
      specializations={specializations}
      universities={universities}
    />
  )
}
