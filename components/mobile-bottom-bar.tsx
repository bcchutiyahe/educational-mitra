"use client"

import { ArrowRight } from "lucide-react"

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-3 shadow-lg md:hidden">
      <a
        href="https://forms.gle/4q3Yhu7FMjzwG6bM8"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#C9A84C] px-6 py-3 font-semibold text-primary transition-colors hover:bg-[#b8963f]"
      >
        Get Free Counselling
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  )
}
