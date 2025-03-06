import { Home, Grid3X3, FileText, Heart, User } from "lucide-react"
import { Link } from "react-router-dom"

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center p-3 max-w-md mx-auto">
      <Link to="/" className="flex flex-col items-center">
        <Home size={20} className="text-gray-400" />
      </Link>
      <Link to="/" className="flex flex-col items-center">
        <Grid3X3 size={20} className="text-gray-400" />
      </Link>
      <Link to="/" className="flex flex-col items-center">
        <FileText size={20} className="text-gray-400" />
      </Link>
      <Link to="/" className="flex flex-col items-center">
        <Heart size={20} className="text-gray-400" />
      </Link>
      <Link to="/" className="flex flex-col items-center">
        <User size={20} className="text-primary" />
      </Link>
    </div>
  )
}

