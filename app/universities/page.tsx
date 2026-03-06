"use client"

import { useState } from "react"
import { Building2, MapPin, ExternalLink } from "lucide-react"
import { LeadSection } from "@/components/home/lead-section"
import { universityUrls } from "@/lib/university-urls"

const filters = ["All", "Indore", "MP/Regional", "National"]

const universities = {
  indore: [
    { name: "Sage University", courses: ["MBA", "BBA", "B.Tech", "Law"] },
    { name: "Vaishnav University", courses: ["MBA", "BBA", "B.Tech", "Law", "Medical"] },
    { name: "Renaissance University", courses: ["MBA", "BBA", "B.Tech", "Law"] },
    { name: "LNCT University", courses: ["MBA", "BBA", "B.Tech", "Law"] },
    { name: "Chameli Devi Institute", courses: ["MBA", "BBA", "Law"] },
    { name: "Malwa Institute", courses: ["MBA", "BBA", "B.Tech"] },
    { name: "IPS Academy", courses: ["BBA", "B.Tech", "Law"] },
    { name: "Medicaps University", courses: ["BBA", "B.Tech"] },
    { name: "Prestige University", courses: ["BBA"] },
    { name: "Jaipuria Institute", courses: ["BBA"] },
    { name: "Amity Business School", courses: ["BBA"] },
    { name: "Oriental College", courses: ["MBA", "BBA", "BCom"] },
    { name: "Graduate Business School", courses: ["MBA", "BBA", "Law"] },
    { name: "Softvision College", courses: ["BBA", "B.Tech"] },
    { name: "Aurobindo College", courses: ["MBA", "BBA", "BCom"] },
    { name: "Astral College", courses: ["MBA", "BBA"] },
    { name: "Oxford College", courses: ["MBA", "BBA", "Law"] },
    { name: "Arihant College", courses: ["MBA", "BBA", "BCom"] },
    { name: "Altius College", courses: ["BBA", "BCom"] },
    { name: "ISBA College", courses: ["MBA", "Law"] },
    { name: "IMI College", courses: ["MBA", "BBA", "Law"] },
    { name: "Jain Dewakar College", courses: ["MBA", "BBA"] },
    { name: "Patel College", courses: ["MBA"] },
    { name: "BM College", courses: ["MBA", "BBA"] },
    { name: "RD Memorial College", courses: ["MBA"] },
    { name: "Kewalshree College", courses: ["MBA"] },
    { name: "Modern College", courses: ["MBA"] },
    { name: "Vishishth School of Management", courses: ["MBA"] },
    { name: "New Era College Mhow", courses: ["MBA", "BBA"] },
    { name: "Vikrant College", courses: ["MBA", "BBA"] },
    { name: "Parijat College", courses: ["MBA", "BBA"] },
    { name: "Gurukul College", courses: ["MBA"] },
    { name: "Indore Institute of Law", courses: ["MBA", "Law"] },
    { name: "Radiant Institute", courses: ["MBA", "BBA"] },
  ],
  regional: [
    { name: "Avantika University Ujjain", courses: ["MBA", "BBA", "B.Tech", "Law"] },
    { name: "PIEMR Indore", courses: ["MBA"] },
    { name: "Renaissance College DAVV", courses: ["Law"] },
  ],
  national: [
    { name: "Alliance University Bangalore", courses: ["MBA", "BBA", "B.Tech", "Law", "Medical"] },
    { name: "RV University Bangalore", courses: ["B.Tech", "BCA", "BSc"] },
    { name: "GD Goenka University Gurugram", courses: ["B.Tech", "BBA", "Design"] },
    { name: "SGT University Gurugram", courses: ["Medical", "B.Tech", "Law"] },
    { name: "IILM Greater Noida", courses: ["B.Tech"] },
    { name: "Graphic Era University Dehradun", courses: ["B.Tech", "BBA"] },
    { name: "Ganpat University Gujarat", courses: ["B.Tech", "Medical", "BBA"] },
    { name: "Karnavati University Gujarat", courses: ["B.Tech", "BCA"] },
    { name: "SPSU Udaipur", courses: ["B.Tech"] },
    { name: "NIMS Jaipur", courses: ["Medical", "B.Tech", "Education"] },
    { name: "Bennett University", courses: ["B.Tech", "BBA", "Law"] },
    { name: "ISMS Pune", courses: ["PGDM"] },
  ],
}

export default function UniversitiesPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const getFiltered = () => {
    switch (activeFilter) {
      case "Indore": return [{ region: "Indore", list: universities.indore }]
      case "MP/Regional": return [{ region: "MP/Regional", list: universities.regional }]
      case "National": return [{ region: "National", list: universities.national }]
      default: return [
        { region: "Indore", list: universities.indore },
        { region: "MP/Regional", list: universities.regional },
        { region: "National", list: universities.national },
      ]
    }
  }

  return (
    <div className="pb-16 md:pb-0">
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Building2 className="mx-auto h-16 w-16 text-[#C9A84C]" />
            <h1 className="mt-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Our Partner Universities
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Official MOUs with 100+ institutions across India. Click any card to visit their official website.
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-b border-border bg-card shadow-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`shrink-0 rounded-full px-6 py-2 text-sm font-medium transition-colors ${activeFilter === f ? "bg-[#C9A84C] text-primary" : "bg-secondary text-foreground hover:bg-[#C9A84C]/20"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {getFiltered().map((group) => (
            <div key={group.region} className="mb-12 last:mb-0">
              <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
                <MapPin className="h-6 w-6 text-[#C9A84C]" />{group.region}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.list.map((uni) => {
                  const url = universityUrls[uni.name]
                  const inner = (
                    <>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-foreground group-hover:text-[#C9A84C] transition-colors">{uni.name}</h3>
                        <div className="flex items-center gap-1 shrink-0">
                          {url && <ExternalLink className="h-3.5 w-3.5 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />}
                          <span className="rounded-full bg-[#C9A84C]/10 px-2 py-1 text-xs font-bold text-[#C9A84C]">MOU</span>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-1">
                        {uni.courses.map((c) => (
                          <span key={c} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{c}</span>
                        ))}
                      </div>
                      {url && <p className="mt-3 text-xs text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">Visit official website →</p>}
                    </>
                  )
                  return url ? (
                    <a key={uni.name} href={url} target="_blank" rel="noopener noreferrer"
                      className="group block rounded-xl border-2 border-[#C9A84C]/30 bg-card p-5 transition-all hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-md">
                      {inner}
                    </a>
                  ) : (
                    <div key={uni.name} className="group rounded-xl border-2 border-[#C9A84C]/30 bg-card p-5 transition-all hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-md">
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <LeadSection />
    </div>
  )
}
