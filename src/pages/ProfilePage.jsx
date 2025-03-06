"use client"

import { useState } from "react"
import {
  MapPin,
  CreditCard,
  Lock,
  Bell,
  Globe,
  Trash2,
  Shield,
  HelpCircle,
  Moon,
  Edit,
  Home,
  Grid3X3,
  FileText,
  Heart,
  User,
  ChevronRight,
} from "lucide-react"

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="flex items-center p-6 gap-4">
        <div className="relative">
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="Profile"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold">Andy Lexsian</h1>
          <div className="flex items-center text-neutral-500 text-sm mt-0.5">
            <MapPin size={14} className="mr-1" />
            <span>Uttar Pradesh, India</span>
          </div>
        </div>
        <button className="p-2">
          <Edit size={20} className="text-neutral-400" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="px-6">
        {/* Personal Info */}
        <div className="text-sm text-neutral-500 mt-6 mb-2">Personal Info</div>
        <div className="space-y-4">
          <MenuItem icon={<MapPin size={20} />} title="My Address" />
          <MenuItem icon={<CreditCard size={20} />} title="Payment Method" />
        </div>

        {/* Security */}
        <div className="text-sm text-neutral-500 mt-6 mb-2">Security</div>
        <div className="space-y-4">
          <MenuItem icon={<Lock size={20} />} title="Change Password" />
          <MenuItem icon={<Lock size={20} />} title="Forgot Password" />
          <MenuItem icon={<Shield size={20} />} title="Security" />
          <MenuItem icon={<Bell size={20} />} title="Notifications" />
        </div>

        {/* General */}
        <div className="text-sm text-neutral-500 mt-6 mb-2">General</div>
        <div className="space-y-4">
          <MenuItem icon={<Globe size={20} />} title="Language" />
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Trash2 size={20} className="text-neutral-400" />
              <span>Clear Cache</span>
            </div>
            <span className="text-neutral-400 text-sm">88 MB</span>
          </div>
        </div>

        {/* About */}
        <div className="text-sm text-neutral-500 mt-6 mb-2">About</div>
        <div className="space-y-4">
          <MenuItem icon={<Shield size={20} />} title="Legal and Policies" />
          <MenuItem icon={<HelpCircle size={20} />} title="Help & Support" />
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Moon size={20} className="text-neutral-400" />
              <span>Dark Mode</span>
            </div>
            <Switch checked={darkMode} onChange={setDarkMode} />
          </div>
        </div>

        {/* Log Out Button */}
        <button className="w-full mt-8 py-3.5 px-4 border border-blue-500 text-blue-500 rounded-full text-center">
          Log Out
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between items-center px-12 py-4">
        <NavIcon icon={<Home size={24} />} />
        <NavIcon icon={<Grid3X3 size={24} />} />
        <NavIcon icon={<FileText size={24} />} />
        <NavIcon icon={<Heart size={24} />} />
        <NavIcon icon={<User size={24} />} active />
      </div>
    </div>
  )
}

function MenuItem({ icon, title }) {
  return (
    <div className="flex items-center justify-between py-2 cursor-pointer">
      <div className="flex items-center gap-3">
        <span className="text-neutral-400">{icon}</span>
        <span>{title}</span>
      </div>
      <ChevronRight size={20} className="text-neutral-300" />
    </div>
  )
}

function Switch({ checked, onChange }) {
  return (
    <button
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? "bg-blue-500" : "bg-neutral-200"
      }`}
      onClick={() => onChange(!checked)}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

function NavIcon({ icon, active }) {
  return <button className={`p-1 ${active ? "text-blue-500" : "text-neutral-400"}`}>{icon}</button>
}



