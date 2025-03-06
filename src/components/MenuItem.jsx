"use client"

import { ChevronRight } from "lucide-react"

export default function MenuItem({ icon, title, onClick }) {
  return (
    <div className="flex items-center justify-between py-4 cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-3">
        {icon}
        <span>{title}</span>
      </div>
      <ChevronRight size={20} className="text-gray-400" />
    </div>
  )
}

