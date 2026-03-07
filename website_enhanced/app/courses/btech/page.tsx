import type { Metadata } from 'next'
import { CoursePageTemplate } from "@/components/course-page-template"

export const metadata: Metadata = {
  title: 'B.Tech & Engineering Admission Counselling Indore | Top Engineering Colleges | Educational Mitra',
  description: 'Free B.Tech & engineering admission guidance in Indore. Expert counselling for top engineering colleges in Indore, MP and across India. All branches available.',
  keywords: 'BTech admission Indore, engineering colleges Indore, BTech counselling MP, engineering admission Madhya Pradesh, best engineering colleges Indore',
}

const specializations = [
  "Computer Science Engineering (CSE)", "Mechanical Engineering",
  "Civil Engineering", "Electrical Engineering", "Aerospace Engineering",
  "Robotics & AI", "Data Science", "IoT", "Cybersecurity",
  "Electronics & Communication", "Chemical Engineering", "Biotechnology",
]

const universities = [
  {
    region: "Indore",
    list: [
      "Sage University", "Vaishnav University", "Renaissance University",
      "LNCT University", "Malwa Institute", "IPS Academy",
      "Medicaps University", "Softvision College",
    ],
  },
  {
    region: "MP/Regional",
    list: ["Avantika University Ujjain"],
  },
  {
    region: "National",
    list: [
      "Alliance University Bangalore", "RV University Bangalore",
      "GD Goenka University Gurugram", "SGT University Gurugram",
      "IILM Greater Noida", "Graphic Era University Dehradun",
      "Ganpat University Gujarat", "Karnavati University Gujarat",
      "SPSU Udaipur", "NIMS Jaipur", "Bennett University",
    ],
  },
]

export default function BTechPage() {
  return (
    <CoursePageTemplate
      title="B.Tech & Engineering Admission Counselling"
      description="Free expert guidance for B.Tech & engineering admission in top colleges across Indore, MP and India. All branches available with 100+ partner universities."
      specializations={specializations}
      universities={universities}
    />
  )
}
