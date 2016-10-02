import React from "react"

import Sidebar from "../Sidebar"
import Student from "../../Student"

const MainContent = () => (
  <div className="window-content">
    <Sidebar />
    <div className="pane padded-more">
      <Student />
    </div>
  </div>
)

export default MainContent
