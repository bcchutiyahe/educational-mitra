import { CoursePageTemplate } from "@/components/course-page-template"

const specializations = [
  "BBA Plain",
  "BBA Hons",
  "HR",
  "Marketing Management",
  "Finance",
  "Event Management",
  "Aviation",
  "Digital Branding",
  "Investment Banking",
  "Human Behavior & Psychology",
  "Business Analytics & AI with HCL",
  "BFSI",
  "Retail",
  "Digital Marketing & E-Commerce",
  "Hotel Management",
  "Foreign Trade",
  "IBM Collaboration",
]

const universities = [
  {
    region: "Indore",
    list: [
      "Sage University",
      "Renaissance University",
      "Vaishnav University",
      "Avantika University Ujjain",
      "Chameli Devi Institute",
      "Malwa Institute",
      "IPS Academy",
      "Medicaps University",
      "Prestige University",
      "Jaipuria Institute",
      "Amity Business School",
      "Oriental College",
      "Graduate Business School",
      "Softvision College",
      "Aurobindo College",
      "Altius College",
      "Astral College",
      "Oxford College",
      "ISBA College",
      "Arihant College",
      "IMI College",
      "Jain Dewakar College",
      "Radiant Institute",
      "BM College",
      "New Era College",
      "Vikrant College",
      "Parijat College",
    ],
  },
  {
    region: "National",
    list: [
      "Alliance University Bangalore",
      "Bennett University",
    ],
  },
]

export default function BBAPage() {
  return (
    <CoursePageTemplate
      title="BBA"
      description="BBA is the ideal launchpad for a management career. We help you choose the right specialization and college — completely free."
      specializations={specializations}
      universities={universities}
    />
  )
}
