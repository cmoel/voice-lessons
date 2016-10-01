import React from "react"

import Sidebar from "../components/Sidebar"
import Student from "../components/Student"

const MainContent = () => {
  return (
    <div className="window-content">
      <Sidebar />
      <Student />
    </div>
  )
}

export default MainContent
