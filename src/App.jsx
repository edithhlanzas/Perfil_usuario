import { Routes, Route } from "react-router-dom"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App

