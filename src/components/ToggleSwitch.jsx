"use client"

import { useState } from "react"

export default function ToggleSwitch({ initialState = false, onChange }) {
  const [isActive, setIsActive] = useState(initialState)

  const handleToggle = () => {
    const newState = !isActive
    setIsActive(newState)
    if (onChange) onChange(newState)
  }

  return (
    <div
      className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ${isActive ? "bg-primary" : "bg-gray-300"}`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isActive ? "translate-x-6" : ""}`}
      />
    </div>
  )
}

