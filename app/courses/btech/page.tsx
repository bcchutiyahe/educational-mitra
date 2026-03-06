import { CoursePageTemplate } from "@/components/course-page-template"

const specializations = [
  "CSE",
  "IT",
  "Mechanical",
  "Civil",
  "Electrical",
  "ECE",
  "Aerospace",
  "Chemical",
  "Biotechnology Engineering",
  "Data Science",
  "AI & ML",
  "Cyber Security",
  "Robotics",
  "Industrial Engineering",
]

const additionalPrograms = ["BArch", "BPharm"]

const universities = [
  {
    region: "Indore & MP",
    list: [
      "Sage University",
      "Vaishnav University",
      "Renaissance University",
      "Avantika University",
      "LNCT University",
      "Malwa Institute",
      "IPS Academy",
      "Medicaps University",
      "Softvision College",
    ],
  },
  {
    region: "National",
    list: [
      "Alliance University Bangalore",
      "GD Goenka University Gurugram",
      "Graphic Era University Dehradun",
      "Ganpat University Gujarat",
      "Karnavati University Gujarat",
      "SGT University Gurugram",
      "IILM Greater Noida",
      "RV University Bangalore",
      "Bennett University",
      "SPSU Udaipur",
      "NIMS Jaipur",
    ],
  },
]

export default function BTechPage() {
  return (
    <CoursePageTemplate
      title="B.Tech & Engineering"
      description="B.Tech and BE open doors to India's fastest-growing industries. We help you find the right branch and college for your engineering career."
      specializations={specializations}
      universities={universities}
      additionalPrograms={additionalPrograms}
    />
  )
}
