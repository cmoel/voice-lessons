import React from "react"

import Sidebar from "../components/Sidebar"
import Student from "../components/Student"

const MainContent = () => (
  <div className="window-content">
    <Sidebar />
    <div className="pane padded-more">
      <Student />
    </div>
  </div>
)

export default MainContent
